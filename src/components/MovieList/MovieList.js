import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import { getPosterPath } from '../../utils/getPosterPath';

// styles
import s from './styles/MovieList.module.scss';

// images
import ImageMovie from './images/movie.png';

class MovieList extends Component {
  getListMovie = () => {
    const { movies } = this.props;

    return movies.map((item) => {
      const imageSrc = item.poster_path ? getPosterPath(item.poster_path, 200) : ImageMovie;

      return (
        <Link to={`/details/${item.id}`} key={item.id} className={s.movie_item}>
          <div className={s.movie_detail}>
            <span className={s.movie_title}>{item.title}</span>
          </div>
          <img src={imageSrc} alt="poster" />
        </Link>
      );
    });
  };

  render() {
    return (
      <div>
        <ul className={s.movies_list}>
          {this.getListMovie()}
        </ul>
      </div>
    );
  }
}

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieList;
