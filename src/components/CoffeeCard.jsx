import React from 'react';
import Coffe1 from '../assets/images/Coffe1.jpg';
import Coffe2 from '../assets/images/Coffe2.jpg';
import Coffe3 from '../assets/images/Coffe3.jpg';
import Coffe4 from '../assets/images/Coffe4.jpg';
import Coffe5 from '../assets/images/Coffe5.jpg';
import Coffe6 from '../assets/images/Coffe6.jpg';

import StarFill from '../assets/svg/Star_fill.svg';

const imageMap = {
  'Coffe1.jpg': Coffe1,
  'Coffe2.jpg': Coffe2,
  'Coffe3.jpg': Coffe3,
  'Coffe4.jpg': Coffe4,
  'Coffe5.jpg': Coffe5,
  'Coffe6.jpg': Coffe6,
};


const CoffeeCard = ({ coffee }) => {
  const { name, price, rating, votes, popular, available, image } = coffee;

  const renderRating = () => {
    
    if (rating === null) {
      return (
        <span className="no-ratings-text">No ratings</span>
      );
    }
    
    return (
      <>

        <img 
          src={StarFill} 
          alt="Star rating" 
          className="star-icon" 
        />
        <span className="rating-value">{rating}</span>
        <span className="votes-count">({votes} votes)</span>
      </>
    );
  };
 
  const soldOutText = !available ? <span className="sold-out-text">Sold out</span> : null;

  // Handle both local images and API image URLs
  const getImageSrc = () => {
    if (image && image.startsWith('http')) {
      // It's a URL from API
      return image;
    }
    // It's a local filename
    return imageMap[image] || Coffe1;
  };

  return (
    <div className="coffee-card">
      <div className="image-wrapper">
        <img 
          src={getImageSrc()} 
          alt={name} 
          className="coffee-image" 
        />

        {popular && <span className="tag popular-tag">Popular</span>}
      </div>

      <div className="info-row">
        <h3 className="coffee-name">{name}</h3>
        <span className="coffee-price">{price}</span>
      </div>

      <div className="rating-row">
        <div className="rating-info">
          {renderRating()}
        </div>
        

        {soldOutText}
      </div>
    </div>
  );
};

export default CoffeeCard;