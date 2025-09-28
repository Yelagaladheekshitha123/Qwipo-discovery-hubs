import React from 'react';

const Stats = () => {
  const stats = [
    {
      number: '10,000+',
      label: 'Active Retailers',
      description: 'Trust Qwipo for their daily operations',
      icon: '🏪'
    },
    {
      number: '85%',
      label: 'Conversion Increase',
      description: 'Average improvement in sales',
      icon: '📈'
    },
    {
      number: '60%',
      label: 'Time Saved',
      description: 'Reduction in product discovery time',
      icon: '⚡'
    },
    {
      number: '95%',
      label: 'Accuracy Rate',
      description: 'AI recommendation precision',
      icon: '🎯'
    }
  ];

  return (
    <section className="py-2xl">
      <div className="container">
        {/* Background Pattern */}
        <div style={{ 
          position: 'relative',
          background: 'var(--gradient-hero)',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--space-2xl)',
          color: 'hsl(var(--text-inverse))',
          overflow: 'hidden'
        }}>
          {/* Decorative Elements */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            background: 'hsl(var(--text-inverse) / 0.1)',
            borderRadius: '50%',
            opacity: 0.3
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-30px',
            left: '-30px',
            width: '150px',
            height: '150px',
            background: 'hsl(var(--accent) / 0.2)',
            borderRadius: '50%',
            opacity: 0.4
          }} />

          <div style={{ position: 'relative', zIndex: 2 }}>
            {/* Section Header */}
            <div className="text-center mb-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-lg">
                Trusted by Retailers Worldwide
              </h2>
              <p className="text-lg" style={{ 
                color: 'hsl(var(--text-inverse) / 0.9)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Join thousands of retailers who have transformed their business 
                with our AI-powered recommendation platform.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-lg">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    fontSize: 'var(--font-size-3xl)',
                    marginBottom: 'var(--space-md)'
                  }}>
                    {stat.icon}
                  </div>

                  {/* Number */}
                  <div className="font-bold mb-sm" style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    lineHeight: '1',
                    color: 'hsl(var(--text-inverse))'
                  }}>
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="font-semibold mb-xs text-lg">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <div className="text-sm" style={{ 
                    color: 'hsl(var(--text-inverse) / 0.8)'
                  }}>
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Customer Testimonial */}
            <div className="text-center mt-2xl">
              <div style={{
                background: 'hsl(var(--text-inverse) / 0.1)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-xl)',
                backdropFilter: 'blur(8px)',
                border: '1px solid hsl(var(--text-inverse) / 0.2)'
              }}>
                <blockquote className="text-lg mb-md" style={{
                  fontStyle: 'italic',
                  color: 'hsl(var(--text-inverse) / 0.9)'
                }}>
                  "Qwipo has revolutionized how we source products. The AI recommendations 
                  are incredibly accurate, and we've seen a 40% increase in customer satisfaction 
                  since implementing the platform."
                </blockquote>
                <div className="flex items-center justify-center gap-md">
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'hsl(var(--text-inverse) / 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: 'var(--font-size-lg)'
                  }}>
                    SM
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Sarah Mitchell</div>
                    <div className="text-sm" style={{ 
                      color: 'hsl(var(--text-inverse) / 0.7)' 
                    }}>
                      Owner, Mitchell's Market
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;