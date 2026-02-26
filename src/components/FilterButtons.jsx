import React from 'react';

const FilterButtons = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="filter-buttons-container">
      <button
        className={`filter-button ${currentFilter === 'All Products' ? 'active' : ''}`}
        onClick={() => onFilterChange('All Products')}
      >
        All Products
      </button>
      <button
        className={`filter-button ${currentFilter === 'Available Now' ? 'active' : ''}`}
        onClick={() => onFilterChange('Available Now')}
      >
        Available Now
      </button>
    </div>
  );
};

export default FilterButtons;