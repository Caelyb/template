/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './itemGrid.css';

function ItemCard({
  title, imageSrc, date, price,
}) {
  const [isPurchased, setIsPurchased] = useState(false);

  const handleButtonClick = () => {
    setIsPurchased(!isPurchased);
  };

  return (
    <div className="item-card">
      <div className="image-container">
        <img src={imageSrc} alt={title} className="item-image" />
      </div>
      <div className="item-content">
        <div className="item-details">
          <h3 className="item-title">{title}</h3>
          <p className="item-date">
            Available from:
            {date}
          </p>
          <p className="item-price">
            Credits:
            {price}
          </p>
        </div>
        <button className="button1" onClick={handleButtonClick}>
          {isPurchased ? 'Purchased' : 'Purchase'}
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
