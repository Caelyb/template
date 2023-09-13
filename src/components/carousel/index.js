/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { CarouselProvider } from 'pure-react-carousel';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  Card,
  ButtonContainer,
  StyledSlide,
  StyledSlider,
  BackButton,
  NextButton,
  CardText,
  CardImage,
  CardButton,
  CardButtonBlue,
} from './styles';

const Ocean = 'https://tse3.mm.bing.net/th?id=OIP.ix_ENG_zQTTdhplnQCIWbQHaEo&pid=Api';

const data = [
  {
    title: 'Card 1',
    cardText: 'here is some random text',
    src: Ocean,
  },
  {
    title: 'Card 2',
    cardText: 'here is some random text',
  },
  {
    title: 'Card 3',
    cardText: 'here is some random text',
    src: Ocean,
  },
  {
    title: 'Card 4',
    cardText: 'here is some random text',
  },
  {
    title: 'Card 5',
    cardText: 'here is some random text',
    src: Ocean,
  },
  {
    title: 'Card 6',
    cardText: 'here is some random text',
  },
  {
    title: 'Card 7',
    cardText: 'here is some random text',
    src: Ocean,
  },
  {
    title: 'Card 8',
    cardText: 'here is some random text',
  },
  {
    title: 'Card 9',
    cardText: 'here is some random text',
    src: Ocean,
  },
  {
    title: 'Card 10',
    cardText: 'here is some random text',
  },
];

function CardCarousel() {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={data.length}
      visibleSlides={3}
      step={3}
    >
      <ButtonContainer>
        <BackButton>
          <FiChevronLeft size="1.5em" />
        </BackButton>
        <NextButton>
          <FiChevronRight size="1.5em" />
        </NextButton>
      </ButtonContainer>
      <StyledSlider classNameAnimation="animating">
        {data.map((item, index) => (
          <StyledSlide
            index={index}
            classNameHidden="hidden"
            classNameVisible="visible"
          >
            <Card>
              <CardImage backgroundImage={item.src} />
              <CardText>
                <h2>{item.title}</h2>
                <h3>{item.cardText}</h3>
              </CardText>
              <CardButton />
              <CardButtonBlue />
            </Card>
          </StyledSlide>
        ))}
      </StyledSlider>
    </CarouselProvider>
  );
}

export default CardCarousel;
