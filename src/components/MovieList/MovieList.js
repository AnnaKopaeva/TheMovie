import React from 'react';
import PropTypes from 'prop-types';

// styles
import s from './styles/MovieList.module.scss';

const MovieList = ({ movies }) => {
  const listMovie = movies.map(item => (
    <li key={item.id} className={s.movie_item}>
      <span className={s.movie_title}>{item.title}</span>
      <img src={item.poster_path} alt="poster" />
    </li>
  ));
  return (
    <div>
      <ul className={s.movies_list}>
        {listMovie}
      </ul>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieList;
