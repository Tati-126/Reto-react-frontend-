import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import FilterButtons from './FilterButtons.jsx';
import CoffeeCard from './CoffeeCard.jsx';
import SkeletonCard from './SkeletonCard.jsx';
import EmptyState from './EmptyState.jsx';

// Fallback data in case API fails
const fallbackCoffeeData = [
  {
    id: 1,
    name: "Cappuccino",
    image: "Coffe1.jpg",
    price: "$5.20",
    rating: 4.7,
    votes: 65,
    popular: true,
    available: true
  },
  {
    id: 2,
    name: "House Coffee",
    image: "Coffe2.jpg",
    price: "$3.50",
    rating: 4.85,
    votes: 14,
    popular: true,
    available: true
  },
  {
    id: 3,
    name: "Espresso",
    image: "Coffe3.jpg",
    price: "$2.50",
    rating: 4.9,
    votes: 55,
    popular: false,
    available: true
  },
  {
    id: 4,
    name: "Coffee Latte",
    image: "Coffe4.jpg",
    price: "$4.50",
    rating: 5.0,
    votes: 23,
    popular: false,
    available: true
  },
  {
    id: 5,
    name: "Chocolate Coffee",
    image: "Coffe5.jpg",
    price: "$4.00",
    rating: 4.65,
    votes: 122,
    popular: false,
    available: false
  },
  {
    id: 6,
    name: "Valentine Special",
    image: "Coffe6.jpg",
    price: "$5.50",
    rating: null,
    votes: 0,
    popular: false,
    available: true
  }
];

const CoffeeListing = () => {
  const [coffees, setCoffees] = useState([]);
  const [filter, setFilter] = useState('All Products');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from GitHub API
  useEffect(() => {
    const fetchCoffeeData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // API endpoint from GitHub (public JSON file)
        const response = await fetch(
          'https://raw.githubusercontent.com/devchallenges-io/web-development-challenges/main/data/simple-coffee-listing.json'
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch coffee data');
        }
        
        const data = await response.json();
        setCoffees(data);
      } catch (err) {
        console.error('Error fetching coffee data:', err);
        // Use fallback data if API fails
        console.log('Using fallback coffee data');
        setCoffees(fallbackCoffeeData);
        setError(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCoffeeData();
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Filter coffees based on selected filter
  const filteredCoffees = filter === 'Available Now' 
    ? coffees.filter(c => c.available === true)
    : coffees;

  // Render skeleton cards while loading
  const renderContent = () => {
    if (isLoading) {
      return Array(6).fill(null).map((_, index) => (
        <SkeletonCard key={`skeleton-${index}`} />
      ));
    }

    if (error) {
      return (
        <div className="error-state">
          <p className="error-message">Failed to load coffee data. Please try again later.</p>
        </div>
      );
    }

    if (filteredCoffees.length === 0) {
      return <EmptyState />;
    }

    return filteredCoffees.map(coffee => (
      <CoffeeCard key={coffee.id} coffee={coffee} />
    ));
  };

  return (
    <div className="coffee-listing-container">
      <Header />
      
      <FilterButtons 
        currentFilter={filter} 
        onFilterChange={handleFilterChange} 
      />

      <div className="coffee-grid">
        {renderContent()}
      </div>
    </div>
  );
};

export default CoffeeListing;