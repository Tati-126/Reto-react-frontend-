import React from 'react';
import Vector from '../assets/svg/vector.svg'; 

const Header = () => {
  return (
    <header className="header-container">
      
      <h1 className="header-title">
        Our Collection
        <img src={Vector} alt="Decorative vector line" className="header-vector" />
      </h1>
      <p>
        Introducing our Coffee Collection, a selection of unique coffees 
        from different roast types and origins, expertly roasted in small 
        batches and shipped fresh weekly.
      </p>
    </header>
  );
};

export default Header;