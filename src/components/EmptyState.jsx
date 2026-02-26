import React from 'react';
import '../styles/EmptyState.css';

const EmptyState = () => {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">☕</div>
      <h2 className="empty-state-title">No available coffees</h2>
      <p className="empty-state-message">
        Sorry, there are no coffees available right now. Try selecting "All Products" to see all options.
      </p>
    </div>
  );
};

export default EmptyState;
