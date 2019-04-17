import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getPosterPath } from '../../utils/getPosterPath';

// styles
import s from './styles/MovieList.module.scss';

class MovieList extends Component {
  getListMovie = () => {
    const { movies } = this.props;

    return movies.map(item => (
      <li key={item.id} className={s.movie_item}>
        <span className={s.movie_title}>{item.title}</span>
        <img src={getPosterPath(item.poster_path)} alt="poster" />
      </li>
    ));
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
