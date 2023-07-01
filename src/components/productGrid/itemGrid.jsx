/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React from 'react';
import './itemGrid.css';
import ItemCard from './itemCard';

function ItemGrid({ items }) {
  return (
    <body className="newBody">
      <div className="item-grid">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            title={item.name}
            imageSrc={item.imgUrl}
            date={item.start_date}
            price={item.credits}
          />
        ))}
      </div>
    </body>
  );
}

export default ItemGrid;
