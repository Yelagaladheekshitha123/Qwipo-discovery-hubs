import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
   const params = new URLSearchParams(location.search);
  const userEmail = params.get("email");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
    }
  };

  return (
    <section id="demo" className="py-2xl bg-surface">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="badge badge-recommendation mb-lg">
              🚀 Ready to Get Started?
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-lg">
              Transform Your Retail Business 
              <span style={{ color: 'hsl(var(--primary))' }}>Today</span>
            </h2>
            
            <p className="text-lg text-muted mb-xl leading-relaxed">
              Join thousands of retailers who trust Qwipo to optimize their product 
              sourcing and boost sales. Start your free trial and see results in days, not months.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-md mb-xl">
              {[
                '✅ 14-day free trial',
                '✅ No setup fees',
                '✅ 24/7 support',
                '✅ Cancel anytime'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-sm">
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Email Form */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="mb-lg">
                <div className="flex flex-col sm:flex gap-sm">
                  <input
                    type="email"
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                    style={{ flex: 1 }}
                    required
                  />
                  <button type="submit" className="btn btn-hero">
                    Start Free Trial
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
                <p className="text-xs text-muted mt-sm">
                  No credit card required. Start building smarter recommendations in minutes.
                </p>
              </form>
            ) : (
              <div className="p-lg mb-lg" style={{
                background: 'hsl(var(--success) / 0.1)',
                border: '1px solid hsl(var(--success) / 0.3)',
                borderRadius: 'var(--radius-lg)',
                color: 'hsl(var(--success))'
              }}>
                <div className="flex items-center gap-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">Thanks! We'll be in touch soon.</span>
                </div>
              </div>
            )}

            {/* Secondary CTA */}
            <div className="flex flex-col sm:flex gap-sm">
              <Link to={`/home?email=${encodeURIComponent(userEmail)}`} className="btn" style={{
                background: 'hsl(var(--background))',
                color: 'hsl(var(--text-primary))',
                border: '1px solid hsl(var(--border))',
                textDecoration: 'none'
              }}>
                View Dashboard
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                </svg>
              </Link>
              <Link to={`/pharmacy?email=${encodeURIComponent(userEmail)}`} className="btn" style={{
                background: 'transparent',
                color: 'hsl(var(--text-primary))',
                border: 'none',
                textDecoration: 'underline'
              }}>
                Browse Pharmacy
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="animate-slide-in" style={{ animationDelay: '0.3s' }}>
            {/* Mock Dashboard Preview */}
            <div className="card p-lg" style={{
              background: 'var(--gradient-card)',
              transform: 'perspective(1000px) rotateY(-5deg)',
              boxShadow: 'var(--shadow-xl)'
            }}>
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-lg">
                <h4 className="font-bold">Qwipo Dashboard</h4>
                <div className="badge badge-recommendation">Live Demo</div>
              </div>

              {/* Mock Metrics */}
              <div className="grid grid-cols-2 gap-md mb-lg">
                <div className="p-md bg-surface" style={{ borderRadius: 'var(--radius-md)' }}>
                  <div className="text-xs text-muted mb-xs">Today's Sales</div>
                  <div className="font-bold text-lg" style={{ color: 'hsl(var(--success))' }}>
                    +24.5%
                  </div>
                </div>
                <div className="p-md bg-surface" style={{ borderRadius: 'var(--radius-md)' }}>
                  <div className="text-xs text-muted mb-xs">AI Accuracy</div>
                  <div className="font-bold text-lg" style={{ color: 'hsl(var(--primary))' }}>
                    94.8%
                  </div>
                </div>
              </div>

              {/* Mock Product Cards */}
              <div className="grid grid-cols-2 gap-sm mb-lg">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="p-sm bg-surface" style={{ 
                    borderRadius: 'var(--radius-sm)',
                    minHeight: '80px'
                  }}>
                    <div style={{
                      width: '100%',
                      height: '40px',
                      background: `hsl(${200 + i * 30} 60% 90%)`,
                      borderRadius: 'var(--radius-sm)',
                      marginBottom: 'var(--space-xs)'
                    }} />
                    <div className="text-xs text-muted">Product {i}</div>
                    <div className="text-xs font-medium" style={{ color: 'hsl(var(--primary))' }}>
                      {85 + i * 3}% match
                    </div>
                  </div>
                ))}
              </div>

              {/* Mock Action Button */}
              <button className="btn btn-primary" style={{ width: '100%' }}>
                Explore Recommendations
              </button>
            </div>

            {/* Floating Elements */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '-20px',
              background: 'hsl(var(--secondary))',
              color: 'hsl(var(--text-inverse))',
              padding: 'var(--space-sm) var(--space-md)',
              borderRadius: 'var(--radius-lg)',
              fontSize: 'var(--font-size-sm)',
              fontWeight: '600',
              boxShadow: 'var(--shadow-lg)',
              animation: 'bounce 2s infinite'
            }}>
              +40% Sales ↗
            </div>

            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '-20px',
              background: 'hsl(var(--recommendation))',
              color: 'hsl(var(--text-inverse))',
              padding: 'var(--space-sm) var(--space-md)',
              borderRadius: 'var(--radius-lg)',
              fontSize: 'var(--font-size-sm)',
              fontWeight: '600',
              boxShadow: 'var(--shadow-lg)',
              animation: 'pulse 3s infinite'
            }}>
              AI Learning 🤖
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;