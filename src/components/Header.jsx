import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { CartIcon } from './Cart';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  // ✅ get query params
  const params = new URLSearchParams(location.search);
  const userEmail = params.get("email"); // null if not present

  return (
    <header className="bg-background py-md px-md" style={{ 
      borderBottom: '1px solid hsl(var(--border))',
      position: 'sticky',
      top: 0,
      zIndex: 1020,
      backdropFilter: 'blur(8px)',
      backgroundColor: 'hsl(var(--background) / 0.95)'
    }}>
      <div className="container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-md">
            <Link to={`/?email=${encodeURIComponent(userEmail)}`} className="font-bold text-2xl" style={{ 
              color: 'hsl(var(--primary))',
              textDecoration: 'none'
            }}>
              Qwipo
            </Link>
            <div className="hidden md:block badge badge-recommendation">
              AI-Powered
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-lg">
            <Link
              to={`/home?email=${encodeURIComponent(userEmail)}`}
              className={`text-secondary hover-link ${isActive('/home') ? 'active-link' : ''}`}
            >
              Home
            </Link>
            <Link
              to={`/pharmacy?email=${encodeURIComponent(userEmail)}`}
              className={`text-secondary hover-link ${isActive('/pharmacy') ? 'active-link' : ''}`}
            >
              Pharmacy
            </Link>
            <Link
              to={`/dashboard?email=${encodeURIComponent(userEmail)}`}
              className={`text-secondary hover-link ${isActive('/dashboard') ? 'active-link' : ''}`}
            >
              Dashboard
            </Link>
            <Link
              to={`/inventory?email=${encodeURIComponent(userEmail)}`}
              className={`text-secondary hover-link ${isActive('/inventory') ? 'active-link' : ''}`}
            >
              Inventory
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-sm">
            <CartIcon />
            {userEmail ? (
              <>
                <span style={{ marginRight: "1rem", fontWeight: "500", color: "hsl(var(--text))" }}>
                  {userEmail}
                </span>
                <button onClick={() => {navigate('/')}} className="btn btn-secondary">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/signin">
                  <button className="btn btn-primary">
                    Sign In
                  </button>
                </Link>
                <Link to="/register">
                  <button className="btn btn-secondary">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              padding: 'var(--space-sm)',
              border: 'none',
              background: 'none',
              cursor: 'pointer'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden animate-fade-in" style={{ 
            marginTop: 'var(--space-md)',
            padding: 'var(--space-lg)',
            background: 'hsl(var(--surface))',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid hsl(var(--border))'
          }}>
            <div className="flex flex-col gap-md">
              <Link
                to={`/home?email=${encodeURIComponent(userEmail)}`}
                className={`text-secondary ${isActive('/home') ? 'active-link' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to={`/pharmacy?email=${encodeURIComponent(userEmail)}`}
                className={`text-secondary ${isActive('/pharmacy') ? 'active-link' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Pharmacy
              </Link>
              <Link
                to={`/dashboard?email=${encodeURIComponent(userEmail)}`}
                className={`text-secondary ${isActive('/dashboard') ? 'active-link' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to={`/inventory?email=${encodeURIComponent(userEmail)}`}
                className={`text-secondary ${isActive('/inventory') ? 'active-link' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Inventory
              </Link>

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col gap-sm" style={{ marginTop: 'var(--space-md)' }}>
                {userEmail ? (
                  <>
                    <span style={{ marginBottom: "0.5rem", fontWeight: "500", color: "hsl(var(--text))" }}>
                      {userEmail}
                    </span>
                    <button onClick={() => {navigate('/')}} className="btn btn-secondary">
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/signin">
                      <button className="btn btn-primary">
                        Sign In
                      </button>
                    </Link>
                    <Link to="/register">
                      <button className="btn btn-secondary">
                        Register
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .hover-link {
          transition: all var(--transition-fast);
          text-decoration: none;
        }
        .hover-link:hover {
          color: hsl(var(--primary));
          transform: translateY(-1px);
        }
        .active-link {
          color: hsl(var(--primary)) !important;
          font-weight: 600;
        }
      `}</style>
    </header>
  );
};

export default Header;
