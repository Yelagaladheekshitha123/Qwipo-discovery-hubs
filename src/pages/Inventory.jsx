import React, { useState } from 'react';

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [stockFilter, setStockFilter] = useState('All');

  // Mock inventory data
  const inventoryItems = [
    { id: 1, name: 'Ibuprofen 200mg', sku: 'IBU-200-100', category: 'Pain Relief', currentStock: 150, minStock: 50, maxStock: 300, status: 'Good', lastRestocked: '2024-01-15', supplier: 'PharmaCorp', cost: 6.50, sellPrice: 8.99 },
    { id: 2, name: 'Digital BP Monitor', sku: 'BP-DIG-001', category: 'Medical Devices', currentStock: 25, minStock: 20, maxStock: 100, status: 'Low', lastRestocked: '2024-01-10', supplier: 'MedTech', cost: 65.00, sellPrice: 89.99 },
    { id: 3, name: 'Vitamin D3 2000 IU', sku: 'VIT-D3-2000', category: 'Vitamins', currentStock: 8, minStock: 30, maxStock: 200, status: 'Critical', lastRestocked: '2024-01-05', supplier: 'NutriHealth', cost: 11.25, sellPrice: 15.49 },
    { id: 4, name: 'First Aid Kit Complete', sku: 'FAK-COMP-001', category: 'First Aid', currentStock: 75, minStock: 25, maxStock: 150, status: 'Good', lastRestocked: '2024-01-12', supplier: 'SafeCare', cost: 18.50, sellPrice: 24.99 },
    { id: 5, name: 'Infrared Thermometer', sku: 'THERM-IR-001', category: 'Medical Devices', currentStock: 12, minStock: 15, maxStock: 80, status: 'Low', lastRestocked: '2024-01-08', supplier: 'TempTech', cost: 24.99, sellPrice: 34.99 },
    { id: 6, name: 'Omega-3 Fish Oil', sku: 'OMG-3-1000', category: 'Vitamins', currentStock: 95, minStock: 40, maxStock: 200, status: 'Good', lastRestocked: '2024-01-14', supplier: 'OceanHealth', cost: 14.50, sellPrice: 19.99 },
    { id: 7, name: 'Acetaminophen 500mg', sku: 'ACE-500-100', category: 'Pain Relief', currentStock: 0, minStock: 60, maxStock: 250, status: 'Out of Stock', lastRestocked: '2024-01-02', supplier: 'PharmaCorp', cost: 5.25, sellPrice: 7.49 },
    { id: 8, name: 'Pulse Oximeter', sku: 'PO-FTG-001', category: 'Medical Devices', currentStock: 35, minStock: 20, maxStock: 100, status: 'Good', lastRestocked: '2024-01-11', supplier: 'MedTech', cost: 21.50, sellPrice: 29.99 }
  ];

  const categories = ['All', 'Pain Relief', 'Medical Devices', 'Vitamins', 'First Aid'];
  const stockStatuses = ['All', 'Good', 'Low', 'Critical', 'Out of Stock'];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Good': return 'hsl(var(--success))';
      case 'Low': return 'hsl(var(--trending))';
      case 'Critical': return 'hsl(var(--error))';
      case 'Out of Stock': return 'hsl(var(--text-muted))';
      default: return 'hsl(var(--text-secondary))';
    }
  };

  const getStockPercentage = (current, max) => {
    return Math.round((current / max) * 100);
  };

  // Filter inventory
  const filteredInventory = inventoryItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesStock = stockFilter === 'All' || item.status === stockFilter;
    return matchesSearch && matchesCategory && matchesStock;
  });

  const handleRestock = (item) => {
    alert(`Restock order initiated for ${item.name}`);
  };

  const handleQuickAdjust = (item) => {
    const newStock = prompt(`Enter new stock quantity for ${item.name}:`, item.currentStock);
    if (newStock && !isNaN(newStock)) {
      alert(`Stock updated to ${newStock} units for ${item.name}`);
    }
  };

  // Calculate summary stats
  const totalItems = inventoryItems.length;
  const lowStockItems = inventoryItems.filter(item => item.status === 'Low' || item.status === 'Critical').length;
  const outOfStockItems = inventoryItems.filter(item => item.status === 'Out of Stock').length;
  const totalValue = inventoryItems.reduce((sum, item) => sum + (item.currentStock * item.cost), 0);

  return (
    <div style={{ minHeight: '100vh', paddingTop: 'var(--space-xl)' }}>
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex items-center justify-between mb-2xl">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-sm">
              Inventory Management
            </h1>
            <p className="text-muted">
              Monitor stock levels, track inventory, and manage reorders
            </p>
          </div>
          
          <div className="flex gap-sm">
            <button className="btn btn-primary">
              Add New Item
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <button className="btn btn-secondary">
              Bulk Import
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg mb-xl">
          <div className="card p-lg">
            <div className="flex items-center justify-between mb-md">
              <div className="text-sm text-muted">Total Items</div>
              <div className="text-2xl">📦</div>
            </div>
            <div className="text-2xl font-bold" style={{ color: 'hsl(var(--primary))' }}>
              {totalItems}
            </div>
          </div>

          <div className="card p-lg">
            <div className="flex items-center justify-between mb-md">
              <div className="text-sm text-muted">Low Stock Alerts</div>
              <div className="text-2xl">⚠️</div>
            </div>
            <div className="text-2xl font-bold" style={{ color: 'hsl(var(--trending))' }}>
              {lowStockItems}
            </div>
          </div>

          <div className="card p-lg">
            <div className="flex items-center justify-between mb-md">
              <div className="text-sm text-muted">Out of Stock</div>
              <div className="text-2xl">❌</div>
            </div>
            <div className="text-2xl font-bold" style={{ color: 'hsl(var(--error))' }}>
              {outOfStockItems}
            </div>
          </div>

          <div className="card p-lg">
            <div className="flex items-center justify-between mb-md">
              <div className="text-sm text-muted">Total Value</div>
              <div className="text-2xl">💰</div>
            </div>
            <div className="text-2xl font-bold" style={{ color: 'hsl(var(--success))' }}>
              ₹{totalValue.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-md mb-lg">
          <div className="md:col-span-2">
            <div className="search-container" style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Search inventory..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input"
                style={{ paddingLeft: '40px' }}
              />
              <svg 
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '16px',
                  height: '16px',
                  color: 'hsl(var(--text-muted))'
                }}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div>
            <select
              value={stockFilter}
              onChange={(e) => setStockFilter(e.target.value)}
              className="input"
            >
              {stockStatuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="card p-lg mb-xl">
          <div className="overflow-x-auto">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid hsl(var(--border))' }}>
                  <th style={{ textAlign: 'left', padding: 'var(--space-md)', fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'hsl(var(--text-muted))' }}>Product</th>
                  <th style={{ textAlign: 'left', padding: 'var(--space-md)', fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'hsl(var(--text-muted))' }}>SKU</th>
                  <th style={{ textAlign: 'left', padding: 'var(--space-md)', fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'hsl(var(--text-muted))' }}>Stock Level</th>
                  <th style={{ textAlign: 'left', padding: 'var(--space-md)', fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'hsl(var(--text-muted))' }}>Status</th>
                  <th style={{ textAlign: 'left', padding: 'var(--space-md)', fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'hsl(var(--text-muted))' }}>Value</th>
                  <th style={{ textAlign: 'center', padding: 'var(--space-md)', fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'hsl(var(--text-muted))' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInventory.map((item, index) => (
                  <tr key={item.id} style={{ 
                    borderBottom: '1px solid hsl(var(--border))',
                    backgroundColor: index % 2 === 0 ? 'transparent' : 'hsl(var(--surface) / 0.5)'
                  }}>
                    <td style={{ padding: 'var(--space-md)' }}>
                      <div>
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-xs text-muted">{item.category}</div>
                      </div>
                    </td>
                    <td style={{ padding: 'var(--space-md)' }}>
                      <span className="text-sm font-mono">{item.sku}</span>
                    </td>
                    <td style={{ padding: 'var(--space-md)' }}>
                      <div>
                        <div className="flex items-center gap-sm mb-xs">
                          <span className="font-semibold">{item.currentStock}</span>
                          <span className="text-xs text-muted">/ {item.maxStock}</span>
                        </div>
                        <div style={{
                          width: '80px',
                          height: '6px',
                          background: 'hsl(var(--surface-2))',
                          borderRadius: 'var(--radius-full)',
                          overflow: 'hidden'
                        }}>
                          <div style={{
                            width: `${getStockPercentage(item.currentStock, item.maxStock)}%`,
                            height: '100%',
                            background: getStatusColor(item.status),
                            transition: 'width var(--transition-fast)'
                          }} />
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: 'var(--space-md)' }}>
                      <span className="badge" style={{
                        background: `${getStatusColor(item.status)}20`,
                        color: getStatusColor(item.status),
                        border: `1px solid ${getStatusColor(item.status)}30`
                      }}>
                        {item.status}
                      </span>
                    </td>
                    <td style={{ padding: 'var(--space-md)' }}>
                      <div className="font-semibold">
                        ₹{(item.currentStock * item.cost).toLocaleString()}
                      </div>
                    </td>
                    <td style={{ padding: 'var(--space-md)', textAlign: 'center' }}>
                      <div className="flex gap-sm justify-center">
                        <button 
                          onClick={() => handleRestock(item)}
                          className="btn"
                          style={{
                            background: 'hsl(var(--primary))',
                            color: 'hsl(var(--text-inverse))',
                            padding: 'var(--space-xs) var(--space-sm)',
                            fontSize: 'var(--font-size-xs)'
                          }}
                        >
                          Restock
                        </button>
                        <button 
                          onClick={() => handleQuickAdjust(item)}
                          className="btn"
                          style={{
                            background: 'hsl(var(--surface))',
                            color: 'hsl(var(--text-primary))',
                            border: '1px solid hsl(var(--border))',
                            padding: 'var(--space-xs) var(--space-sm)',
                            fontSize: 'var(--font-size-xs)'
                          }}
                        >
                          Adjust
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <div className="card p-lg text-center">
            <div className="text-3xl mb-md">📊</div>
            <h3 className="font-bold mb-sm">Generate Report</h3>
            <p className="text-sm text-muted mb-md">Export inventory data and analytics</p>
            <button className="btn btn-primary">
              Generate
            </button>
          </div>

          <div className="card p-lg text-center">
            <div className="text-3xl mb-md">🔄</div>
            <h3 className="font-bold mb-sm">Auto Reorder</h3>
            <p className="text-sm text-muted mb-md">Set up automatic reordering rules</p>
            <button className="btn btn-secondary">
              Configure
            </button>
          </div>

          <div className="card p-lg text-center">
            <div className="text-3xl mb-md">📈</div>
            <h3 className="font-bold mb-sm">Stock Forecast</h3>
            <p className="text-sm text-muted mb-md">AI-powered demand predictions</p>
            <button className="btn" style={{
              background: 'hsl(var(--surface))',
              color: 'hsl(var(--text-primary))',
              border: '1px solid hsl(var(--border))'
            }}>
              View Forecast
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Inventory;