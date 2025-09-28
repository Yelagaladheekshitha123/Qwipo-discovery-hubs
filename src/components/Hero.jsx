import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-retail.jpg';

const Hero = () => {
   const params = new URLSearchParams(location.search);
  const userEmail = params.get("email");
  
  return (
    <section className="py-2xl md:py-4xl" style={{ 
      background: 'var(--gradient-hero)',
      color: 'hsl(var(--text-inverse))',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.1,
        zIndex: 1
      }} />
      
      {/* Gradient Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'var(--gradient-hero)',
        opacity: 0.9,
        zIndex: 2
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div className="flex flex-col lg:flex items-center text-center">
          <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Badge */}
            <div className="mb-lg">
              <span className="badge" style={{
                background: 'hsl(var(--text-inverse) / 0.2)',
                color: 'hsl(var(--text-inverse))',
                fontSize: 'var(--font-size-sm)',
                padding: 'var(--space-sm) var(--space-lg)',
                backdropFilter: 'blur(8px)'
              }}>
                🚀 AI-Powered Product Recommendations
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-lg leading-tight">
              Transform Your Retail Experience with 
              <br />
              <span style={{ 
                background: 'linear-gradient(135deg, hsl(var(--text-inverse)), hsl(var(--accent)))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Smart Recommendations
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl mb-xl leading-relaxed" style={{ 
              color: 'hsl(var(--text-inverse) / 0.9)',
              maxWidth: '600px',
              margin: '0 auto var(--space-xl) auto'
            }}>
              Discover personalized product recommendations, reduce repetitive buying, 
              and boost conversions with our AI-powered platform designed for modern retailers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex items-center justify-center gap-md mb-xl">
              <Link to={`/pharmacy?email=${encodeURIComponent(userEmail)}`} className="btn btn-hero animate-bounce">
                Explore Pharmacy Products
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link to={`/dashboard?email=${encodeURIComponent(userEmail)}`} className="btn" style={{
                background: 'hsl(var(--text-inverse) / 0.1)',
                color: 'hsl(var(--text-inverse))',
                border: '1px solid hsl(var(--text-inverse) / 0.3)',
                backdropFilter: 'blur(8px)',
                textDecoration: 'none'
              }}>
                View Dashboard
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-lg animate-slide-in" style={{ 
              maxWidth: '600px', 
              margin: '0 auto' 
            }}>
              <div className="text-center">
                <div className="text-3xl font-bold mb-sm">85%</div>
                <div className="text-sm" style={{ color: 'hsl(var(--text-inverse) / 0.8)' }}>
                  Conversion Increase
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-sm">60%</div>
                <div className="text-sm" style={{ color: 'hsl(var(--text-inverse) / 0.8)' }}>
                  Time Saved
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-sm">10K+</div>
                <div className="text-sm" style={{ color: 'hsl(var(--text-inverse) / 0.8)' }}>
                  Happy Retailers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '100px',
        height: '100px',
        background: 'hsl(var(--text-inverse) / 0.1)',
        borderRadius: '50%',
        animation: 'pulse 3s infinite',
        zIndex: 2
      }} className="hidden lg:block" />
      
      <div style={{
        position: 'absolute',
        bottom: '30%',
        left: '5%',
        width: '80px',
        height: '80px',
        background: 'hsl(var(--accent) / 0.3)',
        borderRadius: '50%',
        animation: 'bounce 2s infinite',
        zIndex: 2
      }} className="hidden lg:block" />
    </section>
  );
};

export default Hero;