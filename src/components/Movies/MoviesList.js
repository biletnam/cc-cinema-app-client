import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../styles/MoviesCarousel.scss';
import { Carousel } from 'react-responsive-carousel';
import MovieCard from './MovieCard';

class MoviesList extends React.Component {
  render() {
    return (
      <div className="carousel-container">
        <Carousel
          showThumbs={false}
          showStatus={false}
          useKeyboardArrows
          className="presentation-mode"
        >
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </Carousel>
      </div>
    );
  }
}

export default MoviesList;
