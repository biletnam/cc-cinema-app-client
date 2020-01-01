import React from 'react';
import '../../styles/MovieCard.scss';

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <h3 className="movie-card__title">Movie title</h3>
        <div className="movie-card__content">
          <div className="movie-card__image">
            <img src="https://picsum.photos/200/300"></img>
          </div>
          <div className="movie-card__overview">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            delectus quae quis quos explicabo aut, quibusdam inventore commodi
            ea! Aut cupiditate alias laudantium placeat dolor voluptatum?
            Recusandae aperiam incidunt et voluptatem, laboriosam omnis esse
            totam dolor distinctio, repellat labore maxime.
          </div>
          <div className="movie-card__details">
            <ul className="movie-card__details-list">
              <li className="movie-card__list-element">
                Director: Lorem Ipsum
              </li>
              <li className="movie-card__list-element">Cast: </li>
              <li className="movie-card__list-element">Release Date: </li>
              <li className="movie-card__list-element">Runtime: </li>
              <li className="movie-card__list-element">Screening List: </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
