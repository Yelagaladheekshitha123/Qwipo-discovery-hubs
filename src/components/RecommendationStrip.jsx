import React, { useState } from 'react';
import ProductCard from './ProductCard';
import productsImage from '../assets/products-grid.jpg';
import allergyImage from "../assets/Antihistamine-Allergy-Relief.jpeg";
import digitalBloodPressure from "../assets/digital-blood-pressure.jpg";
import firstAidKit from "../assets/first-aid-kit.jpg";
import infraredThermometer from "../assets/infrared-thermometer.jpg";
import ibuprofin from "../assets/ibuprofin.jpeg"; 
import { useNavigate } from 'react-router-dom';
import { useCart } from './Cart';

const RecommendationStrip = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const { addToCart } = useCart();
   const params = new URLSearchParams(location.search);
  const userEmail = params.get("email");
  
  // Mock data for demonstration
  const recommendations = [
    {
      id: 1,
      image: productsImage,
      title: "Digital Blood Pressure Monitor",
      sku: "COF-001",
      price: 24.99,
      unit: "bag",
      rating: 4.8,
      category: "Beverages",
      supplier: "Global Coffee Co.",
      inStock: true,
      bestseller: true,
      image: digitalBloodPressure
    },
    {
      id: 2,
      image: productsImage,
      title: "Infrared Thermometer",
      sku: "GRA-024",
      price: 12.50,
      unit: "box",
      rating: 4.6,
      category: "Food",
      supplier: "Healthy Foods Inc.",
      inStock: true,
      trending: true,
      image: infraredThermometer
    },
    {
      id: 3,
      image: productsImage,
      title: "Antihistamine Allergy Relief",
      sku: "SEC-105",
      price: 89.99,
      unit: "unit",
      rating: 4.7,
      category: "Electronics",
      supplier: "TechSecure Ltd.",
      inStock: true,
      image: allergyImage
    },
    {
      id: 4,
      image: productsImage,
      title: "Ibuprofen 200mg Tablets",
      sku: "CLN-089",
      price: 8.75,
      unit: "bottle",
      rating: 4.4,
      category: "Household",
      supplier: "GreenClean Co.",
      inStock: false,
      image: ibuprofin
    },
    {
      id: 5,
      image: productsImage,
      title: "First Aid Kit - Comprehensive",
      sku: "AUD-201",
      price: 129.99,
      unit: "pair",
      rating: 4.9,
      category: "Electronics",
      supplier: "AudioMax",
      inStock: true,
      trending: true,
      image: firstAidKit
    }
  ];

  const reasons = [
    "Often bought with your previous orders",
    "Trending in your region",
    "Predicted restock needed in 5 days", 
    "Similar stores are buying this",
    "High customer satisfaction rate"
  ];

  const scrollLeft = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const scrollRight = () => {
    setCurrentIndex(Math.min(recommendations.length - 1, currentIndex + 1));
  };

  const handleQuickAdd = (product) => {
    console.log('Quick adding product:', product.title);
    // Here you would typically dispatch to cart or make API call
  };

  const handleAddAllToCart = () => {
     try {
      const inStockProducts = recommendations.filter(product => product.inStock);
            for (const product of inStockProducts) {
        addToCart(product);
        
      }
      
      // Show success message
      alert(`Successfully added ${inStockProducts.length} products to cart!`);
      
      
      // navigate('/cart');
      
    } catch (error) {
      console.error('Error adding products to cart:', error);
      alert('Failed to add products to cart. Please try again.');
    }
  }

  return (
    <section className="py-xl">
      <div className="container">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-lg">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-sm">
              Recommended for You
            </h2>
            <p className="text-muted">
              AI-curated products based on your buying patterns and trends
            </p>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex gap-sm">
            <button 
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className="btn"
              style={{
                background: 'hsl(var(--surface))',
                color: 'hsl(var(--text-primary))',
                border: '1px solid hsl(var(--border))',
                padding: 'var(--space-sm)',
                opacity: currentIndex === 0 ? 0.5 : 1
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={scrollRight}
              disabled={currentIndex >= recommendations.length - 1}
              className="btn"
              style={{
                background: 'hsl(var(--surface))',
                color: 'hsl(var(--text-primary))',
                border: '1px solid hsl(var(--border))',
                padding: 'var(--space-sm)',
                opacity: currentIndex >= recommendations.length - 1 ? 0.5 : 1
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Recommendation Cards - Horizontal Scroll */}
        <div style={{ 
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div 
            className="flex gap-md animate-slide-in my-2"
            style={{
              transform: `translateX(-${currentIndex * 280}px)`,
              transition: 'transform var(--transition-normal)',
              width: 'fit-content'
            }}
          >
            {recommendations.map((product, index) => (
              <div 
                key={product.id}
                style={{ 
                  minWidth: '260px',
                  width: '260px'
                }}
              >
                <ProductCard 
                  product={product}
                  reason={reasons[index % reasons.length]}
                  confidence={Math.floor(Math.random() * 20) + 80}
                  onQuickAdd={handleQuickAdd}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex items-center justify-between gap-md my-2 p-lg" 
             style={{ 
               background: 'var(--gradient-card)',
               borderRadius: 'var(--radius-lg)',
               border: '1px solid hsl(var(--border))',
               margin: '10px 0px'
             }}>
          <div className="flex items-center gap-md">
            <div className="badge badge-recommendation">
              🎯 {recommendations.length} personalized recommendations
            </div>
            <span className="text-sm text-muted">
              Based on your purchase history and market trends
            </span>
          </div>
          
          <div className="flex gap-sm ">
            <button className="btn btn-primary" onClick={handleAddAllToCart}>
              Add All to Cart
            </button>
            <button 
              className="btn"
              style={{
                background: 'hsl(var(--surface))',
                color: 'hsl(var(--text-primary))',
                border: '1px solid hsl(var(--border))'
              }}
              onClick={() => {
                console.log('View All button clicked');
                navigate(`/home?email=${encodeURIComponent(userEmail)}`);
              }}
            >
              View All
            </button>
          </div>
        </div>

        {/* Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md mt-lg">
          <div className="card p-md text-center">
            <div className="text-3xl mb-sm">🎯</div>
            <h4 className="font-semibold mb-sm">Precision Matching</h4>
            <p className="text-sm text-muted">
              Our AI analyzes 50+ factors to recommend the perfect products for your store
            </p>
          </div>
          
          <div className="card p-md text-center">
            <div className="text-3xl mb-sm">⚡</div>
            <h4 className="font-semibold mb-sm">Real-time Updates</h4>
            <p className="text-sm text-muted">
              Recommendations update based on current inventory and market trends
            </p>
          </div>
          
          <div className="card p-md text-center">
            <div className="text-3xl mb-sm">📊</div>
            <h4 className="font-semibold mb-sm">Performance Tracking</h4>
            <p className="text-sm text-muted">
              Monitor recommendation effectiveness and optimize your purchasing strategy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationStrip;