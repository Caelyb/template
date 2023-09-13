/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import './styles.css';
import CardCarousel from './index';
import { CarouselContainer } from './styles.js';

export default function App() {
  return (
    <CarouselContainer>
      <h1> Carousel </h1>

      <CardCarousel />
    </CarouselContainer>
  );
}
