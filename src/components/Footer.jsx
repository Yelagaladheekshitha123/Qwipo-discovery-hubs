import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'AI Recommendations', href: '#' },
      { name: 'Analytics', href: '#' },
      { name: 'Mobile App', href: '#' },
      { name: 'API Integration', href: '#' }
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Partners', href: '#' },
      { name: 'Contact', href: '#' }
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Webinars', href: '#' },
      { name: 'Case Studies', href: '#' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
      { name: 'Security', href: '#' }
    ]
  };

  const socialLinks = [
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="py-2xl" style={{ 
      background: 'hsl(var(--text-primary))',
      color: 'hsl(var(--text-inverse))'
    }}>
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-lg mb-xl">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-lg">
              <div className="font-bold text-2xl mb-md" style={{ color: 'hsl(var(--primary))' }}>
                Qwipo
              </div>
              <p className="text-sm leading-relaxed" style={{ 
                color: 'hsl(var(--text-inverse) / 0.8)',
                maxWidth: '280px'
              }}>
                Empowering retailers with AI-driven product recommendations to optimize 
                inventory, boost sales, and deliver exceptional customer experiences.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="font-semibold mb-md">Stay Updated</h4>
              <div className="flex gap-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input"
                  style={{
                    background: 'hsl(var(--text-inverse) / 0.1)',
                    border: '1px solid hsl(var(--text-inverse) / 0.2)',
                    color: 'hsl(var(--text-inverse))',
                    flex: 1
                  }}
                />
                <button className="btn btn-primary">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-md">{category}</h4>
              <ul className="flex flex-col gap-sm">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm hover-link"
                      style={{ 
                        color: 'hsl(var(--text-inverse) / 0.8)',
                        textDecoration: 'none',
                        transition: 'color var(--transition-fast)'
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div style={{
          borderTop: '1px solid hsl(var(--text-inverse) / 0.2)',
          paddingTop: 'var(--space-xl)'
        }}>
          <div className="flex flex-col md:flex items-center justify-between gap-lg">
            {/* Copyright */}
            <div className="text-sm" style={{ color: 'hsl(var(--text-inverse) / 0.6)' }}>
              © {currentYear} Qwipo Technologies. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-md">
              <span className="text-sm" style={{ color: 'hsl(var(--text-inverse) / 0.6)' }}>
                Follow us:
              </span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="hover-social"
                  style={{
                    color: 'hsl(var(--text-inverse) / 0.6)',
                    transition: 'all var(--transition-fast)',
                    padding: 'var(--space-sm)',
                    borderRadius: 'var(--radius-md)'
                  }}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-md">
              <div className="badge" style={{
                background: 'hsl(var(--success) / 0.2)',
                color: 'hsl(var(--success))',
                border: '1px solid hsl(var(--success) / 0.3)'
              }}>
                🔒 SOC 2 Certified
              </div>
              <div className="badge" style={{
                background: 'hsl(var(--primary) / 0.2)',
                color: 'hsl(var(--primary))',
                border: '1px solid hsl(var(--primary) / 0.3)'
              }}>
                🛡️ GDPR Compliant
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-link:hover {
          color: hsl(var(--primary)) !important;
        }
        .hover-social:hover {
          color: hsl(var(--primary)) !important;
          background: hsl(var(--primary) / 0.1);
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;