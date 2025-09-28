import React from 'react';
import { useCart } from './Cart';

const ProductCard = ({ 
  product, 
  reason = "AI Recommended", 
  confidence = 95,
  onQuickAdd,
  className = ""
}) => {
  const { addToCart } = useCart();
  const {
    image,
    title,
    sku,
    price,
    unit,
    rating = 4.5,
    category,
    supplier,
    inStock = true,
    trending = false,
    bestseller = false
  } = product;

  const getBadgeClass = () => {
    if (bestseller) return 'badge-bestseller';
    if (trending) return 'badge-trending';
    return 'badge-recommendation';
  };

  const getBadgeText = () => {
    if (bestseller) return '🏆 Bestseller';
    if (trending) return '📈 Trending';
    return '🤖 AI Pick';
  };

  return (
    <div className={`card p-md ${className}`} style={{ height: '100%' }}>
      {/* Product Image */}
      <div style={{ 
        position: 'relative',
        marginBottom: 'var(--space-md)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        aspectRatio: '1',
        background: 'hsl(var(--surface))'
      }}>
        <img 
          src={image} 
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform var(--transition-normal)'
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        />
        
        {/* Badge */}
        <div style={{ position: 'absolute', top: 'var(--space-sm)', left: 'var(--space-sm)' }}>
          <span className={`badge ${getBadgeClass()}`}>
            {getBadgeText()}
          </span>
        </div>

        {/* Stock Status */}
        {!inStock && (
          <div style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'hsl(var(--background) / 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'hsl(var(--error))',
            fontWeight: '600'
          }}>
            Out of Stock
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-sm" style={{ flex: 1 }}>
        {/* Title & SKU */}
        <div>
          <h3 className="font-semibold mb-xs" style={{ 
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-tight)',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {title}
          </h3>
          <p className="text-muted text-xs">SKU: {sku}</p>
        </div>

        {/* Category & Supplier */}
        <div className="flex items-center justify-between text-xs text-secondary">
          <span>{category}</span>
          <span>{supplier}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-xs">
          <div className="flex items-center gap-xs">
            {'★'.repeat(Math.floor(rating))}
            {'☆'.repeat(5 - Math.floor(rating))}
          </div>
          <span className="text-xs text-muted">({rating})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold text-lg" style={{ color: 'hsl(var(--primary))' }}>
              ₹{price}
            </span>
            <span className="text-xs text-muted">/{unit}</span>
          </div>
        </div>

        {/* Recommendation Info */}
        <div className="p-sm" style={{ 
          background: 'hsl(var(--recommendation) / 0.05)',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid hsl(var(--recommendation) / 0.1)',
          height: '55px'
        }}>
          <div className="flex items-center justify-between text-xs">
            <span style={{ color: 'hsl(var(--recommendation))' }}>
              {reason}
            </span>
            <span className="font-medium" style={{ color: 'hsl(var(--recommendation))' }}>
              {confidence}% match
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-sm" style={{ marginTop: 'auto', paddingTop: 'var(--space-md)' }}>
          <button 
            className="btn btn-primary" 
            style={{ flex: 1 }}
            onClick={() => {
              addToCart(product);
              onQuickAdd?.(product);
            }}
            disabled={!inStock}
          >
            Quick Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;