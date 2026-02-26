import React from 'react';
import '../styles/SkeletonCard.css';

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-name"></div>
      <div className="skeleton-price"></div>
      <div className="skeleton-rating"></div>
    </div>
  );
};

export default SkeletonCard;
