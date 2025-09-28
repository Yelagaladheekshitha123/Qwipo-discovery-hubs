import React from 'react';
import aiImage from '../assets/ai-recommendations.jpg';
import mobileImage from '../assets/mobile-app.jpg';
import { Link } from 'react-router-dom';

export const features = [
  {
    icon: '🤖',
    title: 'AI-Powered Recommendations',
    description: 'Advanced machine learning algorithms analyze purchasing patterns, market trends, and inventory data to suggest the most relevant products for your store.',
    image: aiImage,
    stats: ['95% accuracy rate', '3x faster product discovery', '40% increase in sales']
  },
  {
    icon: '📱',
    title: 'Mobile-First Experience',
    description: 'Optimized for on-the-go retailers with quick-add functionality, voice search, and offline capabilities for seamless ordering anywhere.',
    image: mobileImage,
    stats: ['Works offline', 'One-tap reordering', 'Voice search enabled']
  },
  {
    icon: '📊',
    title: 'Smart Analytics Dashboard',
    description: 'Comprehensive insights into your purchasing patterns, recommendation performance, and market opportunities to optimize your business.',
    image: aiImage,
    stats: ['Real-time insights', 'Predictive analytics', 'Custom reports']
  },
  {
    icon: '📦',
    title: 'Intelligent Inventory Management',
    description: 'Automated stock tracking, low-stock alerts, and predictive ordering suggestions to ensure you never run out of popular products.',
    image: aiImage,
    stats: ['Auto-reordering', 'Stock optimization', 'Demand forecasting']
  },
  {
    icon: '🌐',
    title: 'Supplier Network Integration',
    description: 'Connect with verified suppliers worldwide, compare prices, and manage multiple vendor relationships from a single dashboard.',
    image: mobileImage,
    stats: ['500+ suppliers', 'Price comparison', 'Bulk ordering']
  },
  {
    icon: '🔔',
    title: 'Real-Time Notifications',
    description: 'Stay informed with instant alerts for price changes, new product launches, regulatory updates, and market opportunities.',
    image: aiImage,
    stats: ['Instant alerts', 'Custom notifications', 'Regulatory updates']
  },
  {
    icon: '🔒',
    title: 'Secure Payment Processing',
    description: 'Bank-grade security with multiple payment options, fraud protection, and secure data encryption for all transactions.',
    image: mobileImage,
    stats: ['256-bit encryption', 'Fraud protection', 'Multiple payment methods']
  },
  {
    icon: '📈',
    title: 'Performance Tracking',
    description: 'Monitor your business growth with detailed analytics on sales performance, customer trends, and ROI from AI recommendations.',
    image: aiImage,
    stats: ['ROI tracking', 'Sales analytics', 'Customer insights']
  },
  {
    icon: '🤝',
    title: 'Community Insights',
    description: 'Learn from other retailers through shared insights, success stories, and collaborative purchasing opportunities.',
    image: mobileImage,
    stats: ['Peer learning', 'Success stories', 'Collaborative buying']
  }
];

const Features = () => {
   const params = new URLSearchParams(location.search);
  const userEmail = params.get("email");

  return (
    <section id="features" className="py-2xl bg-surface">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-2xl">
          <div className="badge badge-recommendation mb-md" style={{ margin: '0 auto' }}>
            ✨ Core Features
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-lg">
            Everything You Need to
            <br />
            <span style={{ color: 'hsl(var(--primary))' }}>
              Revolutionize Your Retail
            </span>
          </h2>
          <p className="text-lg text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Our comprehensive platform combines cutting-edge AI with intuitive design
            to deliver personalized shopping experiences that drive growth.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-gradient p-xl animate-fade-in"
              style={{
                animationDelay: `${index * 0.2}s`,
                height: '100%'
              }}
            >
              {/* Feature Image */}
              <div style={{
                width: '100%',
                height: '200px',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                marginBottom: 'var(--space-lg)',
                position: 'relative'
              }}>
                <img
                  src={feature.image}
                  alt={feature.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 'var(--space-md)',
                  left: 'var(--space-md)',
                  background: 'hsl(var(--background))',
                  borderRadius: '50%',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'var(--font-size-2xl)',
                  boxShadow: 'var(--shadow-md)'
                }}>
                  {feature.icon}
                </div>
              </div>

              {/* Feature Content */}
              <div>
                <h3 className="text-xl font-bold mb-md">
                  {feature.title}
                </h3>
                <p className="text-muted mb-lg leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature Stats */}
                <div className="flex flex-col gap-sm">
                  {feature.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="flex items-center gap-sm"
                    >
                      <div style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'hsl(var(--primary))'
                      }} />
                      <span className="text-sm font-medium">
                        {stat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  to={`/features/${feature.title.replace(/\s+/g, '-').toLowerCase()}?email=${encodeURIComponent(userEmail)}`}
                  className="btn btn-primary"
                  style={{
                    marginTop: 'var(--space-lg)',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="mt-4xl">
          <div className="text-center mb-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-lg">
              How Qwipo Works
            </h3>
            <p className="text-muted" style={{ maxWidth: '500px', margin: '0 auto' }}>
              Get started in minutes with our simple three-step process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {[
              {
                step: '01',
                title: 'Connect Your Data',
                description: 'Integrate your existing inventory and sales data through our secure API or CSV upload.'
              },
              {
                step: '02',
                title: 'AI Analysis',
                description: 'Our machine learning algorithms analyze patterns and generate personalized recommendations.'
              },
              {
                step: '03',
                title: 'Start Ordering',
                description: 'Browse recommendations, add to cart with one click, and track performance in real-time.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'var(--gradient-hero)',
                  color: 'hsl(var(--text-inverse))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'var(--font-size-2xl)',
                  fontWeight: 'bold',
                  margin: '0 auto var(--space-lg) auto',
                  boxShadow: 'var(--shadow-lg)'
                }}>
                  {step.step}
                </div>
                <h4 className="font-bold mb-sm text-lg">
                  {step.title}
                </h4>
                <p className="text-muted text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;