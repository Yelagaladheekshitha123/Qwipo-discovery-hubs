// FeatureDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { features } from './Features'; // Export your features array from Features.jsx

const FeatureDetail = () => {
  const { featureTitle } = useParams();
   const params = new URLSearchParams(location.search);
  const userEmail = params.get("email");

  // Find feature by URL-friendly title
  const feature = features.find(
    f => f.title.replace(/\s+/g, '-').toLowerCase() === featureTitle
  );

  if (!feature) return <h2>Feature Not Found</h2>;

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <Link to={`/features?email=${encodeURIComponent(userEmail)}`} style={{ marginBottom: '1rem', display: 'inline-block' }}>
        ← Back to Features
      </Link>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        {feature.icon} {feature.title}
      </h1>
      <img 
        src={feature.image} 
        alt={feature.title} 
        style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem' }} 
      />
      <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>{feature.description}</p>
      <h3>Key Stats:</h3>
      <ul>
        {feature.stats.map((stat, index) => (
          <li key={index} style={{ marginBottom: '0.5rem' }}>{stat}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureDetail;
