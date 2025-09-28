import React, { useState, createContext, useContext } from 'react';

// Create Cart Context
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    isCartOpen,
    setIsCartOpen
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Cart component
const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getTotalPrice, 
    isCartOpen, 
    setIsCartOpen 
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here!');
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      right: 0,
      width: '100%',
      height: '100%',
      background: 'hsl(var(--background) / 0.8)',
      backdropFilter: 'blur(4px)',
      zIndex: 1040,
      display: 'flex',
      justifyContent: 'flex-end'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        height: '100%',
        background: 'hsl(var(--background))',
        boxShadow: 'var(--shadow-xl)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Cart Header */}
        <div className="flex items-center justify-between p-lg" style={{
          borderBottom: '1px solid hsl(var(--border))'
        }}>
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: 'var(--font-size-lg)',
              cursor: 'pointer',
              padding: 'var(--space-sm)'
            }}
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div style={{ 
          flex: 1, 
          overflow: 'auto',
          padding: 'var(--space-lg)'
        }}>
          {cartItems.length === 0 ? (
            <div className="text-center py-2xl">
              <div className="text-4xl mb-md">🛒</div>
              <h3 className="font-bold mb-sm">Your cart is empty</h3>
              <p className="text-muted text-sm">
                Add some pharmacy products to get started!
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-md">
              {cartItems.map(item => (
                <div key={item.id} className="card p-md">
                  <div className="flex gap-md">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      style={{
                        width: '60px',
                        height: '60px',
                        objectFit: 'cover',
                        borderRadius: 'var(--radius-md)'
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <h4 className="font-semibold text-sm mb-xs">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted mb-sm">
                        ₹{item.price} / {item.unit}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-sm">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="btn"
                            style={{
                              background: 'hsl(var(--surface))',
                              border: '1px solid hsl(var(--border))',
                              padding: 'var(--space-xs)',
                              minWidth: '32px',
                              height: '32px'
                            }}
                          >
                            -
                          </button>
                          <span className="font-semibold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="btn"
                            style={{
                              background: 'hsl(var(--surface))',
                              border: '1px solid hsl(var(--border))',
                              padding: 'var(--space-xs)',
                              minWidth: '32px',
                              height: '32px'
                            }}
                          >
                            +
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'hsl(var(--error))',
                            cursor: 'pointer',
                            padding: 'var(--space-xs)'
                          }}
                        >
                          🗑️
                        </button>
                      </div>
                      
                      <div className="text-right mt-sm">
                        <span className="font-bold">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="p-lg" style={{
            borderTop: '1px solid hsl(var(--border))'
          }}>
            <div className="flex items-center justify-between mb-lg">
              <span className="font-bold text-lg">Total:</span>
              <span className="font-bold text-lg" style={{ color: 'hsl(var(--primary))' }}>
                ₹{getTotalPrice().toFixed(2)}
              </span>
            </div>
            
            <div className="flex flex-col gap-sm">
              <button 
                onClick={handleCheckout}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Proceed to Checkout
              </button>
              <button 
                onClick={clearCart}
                className="btn"
                style={{
                  background: 'hsl(var(--surface))',
                  color: 'hsl(var(--text-primary))',
                  border: '1px solid hsl(var(--border))',
                  width: '100%'
                }}
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Cart Icon Component
export const CartIcon = () => {
  const { getTotalItems, setIsCartOpen } = useCart();
  const itemCount = getTotalItems();

  return (
    <button 
      onClick={() => setIsCartOpen(true)}
      style={{
        position: 'relative',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 'var(--space-sm)',
        fontSize: 'var(--font-size-xl)'
      }}
    >
      🛒
      {itemCount > 0 && (
        <span style={{
          position: 'absolute',
          top: '-2px',
          right: '-2px',
          background: 'hsl(var(--error))',
          color: 'hsl(var(--text-inverse))',
          borderRadius: '50%',
          width: '20px',
          height: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 'var(--font-size-xs)',
          fontWeight: 'bold'
        }}>
          {itemCount}
        </span>
      )}
    </button>
  );
};

export default Cart;