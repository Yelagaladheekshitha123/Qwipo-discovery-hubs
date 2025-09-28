import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');
  const [isExporting, setIsExporting] = useState(false);
  const dashboardRef = useRef(null);
  
  // Mock analytics data
  const analyticsData = {
    totalSales: 84250,
    totalOrders: 342,
    avgOrderValue: 246.35,
    conversionRate: 3.2,
    topCategories: [
      { name: 'Medical Devices', sales: 28500, growth: '+15%' },
      { name: 'Prescription Drugs', sales: 22100, growth: '+8%' },
      { name: 'Vitamins', sales: 18700, growth: '+22%' },
      { name: 'First Aid', sales: 14950, growth: '+12%' }
    ],
    recentOrders: [
      { id: 'ORD-001', customer: 'City Pharmacy', items: 15, total: 342.50, status: 'Delivered' },
      { id: 'ORD-002', customer: 'Health Plus', items: 8, total: 189.25, status: 'Processing' },
      { id: 'ORD-003', customer: 'MedCare Store', items: 23, total: 567.80, status: 'Shipped' },
      { id: 'ORD-004', customer: 'Wellness Hub', items: 12, total: 298.45, status: 'Pending' }
    ],
    aiInsights: [
      { type: 'recommendation', text: 'Vitamin D demand is 40% higher this month. Consider increasing inventory.' },
      { type: 'alert', text: 'Blood pressure monitors are low in stock. Reorder recommended.' },
      { type: 'trend', text: 'Allergy medications show seasonal spike. Peak demand expected in 2 weeks.' },
      { type: 'opportunity', text: 'Probiotic sales increased 25%. Consider expanding product line.' }
    ]
  };

  // PDF Export function
  const exportToPDF = async () => {
    if (!dashboardRef.current) return;
    
    setIsExporting(true);
    
    try {
      // Dynamically import the required libraries
      const html2canvas = (await import('html2canvas')).default;
      const jsPDF = (await import('jspdf')).default;
      
      // Configure html2canvas options for better quality
      const canvas = await html2canvas(dashboardRef.current, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: dashboardRef.current.scrollWidth,
        height: dashboardRef.current.scrollHeight,
        scrollX: 0,
        scrollY: 0
      });

      // Calculate dimensions
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      // Create PDF
      const pdf = new jsPDF('portrait', 'mm', 'a4');
      let position = 0;

      // Add title page
      pdf.setFontSize(20);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Analytics Dashboard Report', 20, 30);
      
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      pdf.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 40);
      pdf.text(`Time Period: ${selectedTimeframe === 'week' ? 'Last 7 Days' : 
                selectedTimeframe === 'month' ? 'Last 30 Days' : 
                selectedTimeframe === 'quarter' ? 'Last 3 Months' : 'Last 24 Hours'}`, 20, 50);

      // Add summary
      pdf.text('Executive Summary:', 20, 70);
      pdf.text(`• Total Sales: ₹${analyticsData.totalSales.toLocaleString()}`, 25, 80);
      pdf.text(`• Total Orders: ${analyticsData.totalOrders}`, 25, 90);
      pdf.text(`• Average Order Value: ₹${analyticsData.avgOrderValue.toFixed(2)}`, 25, 100);
      pdf.text(`• Conversion Rate: ${analyticsData.conversionRate}%`, 25, 110);

      // Start new page for dashboard screenshot
      pdf.addPage();

      // Convert canvas to image and add to PDF
      const imgData = canvas.toDataURL('image/png');
      
      // Add the image to PDF, handling multiple pages if needed
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add more pages if content is longer than one page
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Save the PDF
      const fileName = `dashboard-report-${selectedTimeframe}-${new Date().toISOString().split('T')[0]}.pdf`;
      pdf.save(fileName);
      
      // Show success message
      alert('Dashboard exported to PDF successfully!');
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to export PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const getInsightIcon = (type) => {
    switch (type) {
      case 'recommendation': return '🎯';
      case 'alert': return '⚠️';
      case 'trend': return '📈';
      case 'opportunity': return '💡';
      default: return '📊';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'hsl(var(--success))';
      case 'Shipped': return 'hsl(var(--primary))';
      case 'Processing': return 'hsl(var(--trending))';
      case 'Pending': return 'hsl(var(--text-muted))';
      default: return 'hsl(var(--text-secondary))';
    }
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: 'var(--space-xl)' }}>
      <div className="container" ref={dashboardRef}>
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex items-center justify-between mb-2xl">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-sm">
              Analytics Dashboard
            </h1>
            <p className="text-muted">
              Real-time insights and performance metrics for your pharmacy business
            </p>
          </div>
          
          <div className="flex items-center gap-md">
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="input"
            >
              <option value="day">Last 24 Hours</option>
              <option value="week">Last 7 Days</option>
              <option value="month">Last 30 Days</option>
              <option value="quarter">Last 3 Months</option>
            </select>
            <button 
              className="btn btn-primary"
              onClick={exportToPDF}
              disabled={isExporting}
              style={{
                opacity: isExporting ? 0.6 : 1,
                cursor: isExporting ? 'not-allowed' : 'pointer'
              }}
            >
              {isExporting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating PDF...
                </>
              ) : (
                <>
                  Export Report
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg mb-xl">
          <div className="card p-lg">
            <div className="flex items-center justify-between mb-md">
              <div className="text-sm text-muted">Total Sales</div>
              <div className="text-2xl">💰</div>
            </div>
            <div className="text-2xl font-bold mb-xs" style={{ color: 'hsl(var(--success))' }}>
              ₹{analyticsData.totalSales.toLocaleString()}
            </div>
            <div className="text-xs text-muted">+12% from last period</div>
          </div>

          <div className="card p-lg">
            <div className="flex items-center justify-between mb-md">
              <div className="text-sm text-muted">Total Orders</div>
              <div className="text-2xl">📦</div>
            </div>
            <div className="text-2xl font-bold mb-xs" style={{ color: 'hsl(var(--primary))' }}>
              {analyticsData.totalOrders}
            </div>
            <div className="text-xs text-muted">+8% from last period</div>
          </div>

          <div className="card p-lg">
            <div className="flex items-center justify-between mb-md">
              <div className="text-sm text-muted">Avg Order Value</div>
              <div className="text-2xl">💳</div>
            </div>
            <div className="text-2xl font-bold mb-xs" style={{ color: 'hsl(var(--secondary))' }}>
              ₹{analyticsData.avgOrderValue.toFixed(2)}
            </div>
            <div className="text-xs text-muted">+5% from last period</div>
          </div>

          <div className="card p-lg">
            <div className="flex items-center justify-between mb-md">
              <div className="text-sm text-muted">Conversion Rate</div>
              <div className="text-2xl">📈</div>
            </div>
            <div className="text-2xl font-bold mb-xs" style={{ color: 'hsl(var(--recommendation))' }}>
              {analyticsData.conversionRate}%
            </div>
            <div className="text-xs text-muted">+0.4% from last period</div>
          </div>
        </div>

        {/* Charts and Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl mb-xl">
          {/* Top Categories */}
          <div className="card p-lg">
            <h3 className="text-xl font-bold mb-lg">Top Categories</h3>
            <div className="flex flex-col gap-md">
              {analyticsData.topCategories.map((category, index) => (
                <div key={index} className="flex items-center justify-between p-md" style={{
                  background: 'hsl(var(--surface))',
                  borderRadius: 'var(--radius-md)'
                }}>
                  <div>
                    <div className="font-semibold">{category.name}</div>
                    <div className="text-sm text-muted">₹{category.sales.toLocaleString()}</div>
                  </div>
                  <div className="badge badge-trending">
                    {category.growth}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div className="card p-lg">
            <h3 className="text-xl font-bold mb-lg">AI Insights</h3>
            <div className="flex flex-col gap-md">
              {analyticsData.aiInsights.map((insight, index) => (
                <div key={index} className="flex gap-md p-md" style={{
                  background: 'hsl(var(--surface))',
                  borderRadius: 'var(--radius-md)'
                }}>
                  <div className="text-lg">{getInsightIcon(insight.type)}</div>
                  <div className="text-sm">{insight.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="card p-lg mb-xl">
          <div className="flex items-center justify-between mb-lg">
            <h3 className="text-xl font-bold">Recent Orders</h3>
          </div>
          
          <div className="grid grid-cols-1 gap-md">
            {analyticsData.recentOrders.map((order, index) => (
              <div key={index} className="flex items-center justify-between p-md" style={{
                background: 'hsl(var(--surface))',
                borderRadius: 'var(--radius-md)',
                border: '1px solid hsl(var(--border))'
              }}>
                <div className="flex items-center gap-md" style={{width: "20rem"}}>
                  <div>
                    <div className="font-semibold">{order.id}</div>
                    <div className="text-sm text-muted">{order.customer}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-lg">
                  <div className="text-center" style={{width: "5rem"}}>
                    <div className="text-sm text-muted">Items</div>
                    <div className="font-semibold">{order.items}</div>
                  </div>
                  
                  <div className="text-center" style={{width: "5rem"}}>
                    <div className="text-sm text-muted">Total</div>
                    <div className="font-semibold">₹{order.total}</div>
                  </div>
                  
                  <div className="badge" style={{
                    background: `${getStatusColor(order.status)}20`,
                    color: getStatusColor(order.status),
                    border: `1px solid ${getStatusColor(order.status)}30`,
                    width:"5rem"
                  }}>
                    {order.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-card {
          transition: all var(--transition-fast);
          text-decoration: none;
          color: inherit;
        }
        .hover-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }
        
        @media print {
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;