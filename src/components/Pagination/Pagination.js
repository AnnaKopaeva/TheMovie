import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';

import { getListPages } from '../../utils/getListPages';

// styles
import s from './styles/Pagination.module.scss';
import { getTopMovies } from '../../actions';

const Pagination = ({ page, totalPages, getTopMovies }) => {
  const listPages = getListPages(page, totalPages);
  const listOfNavigation = listPages.map((item, key) => {
    const navigationItem = classNames(s.navigationItem, {
      [s.navigationActiveItem]: item === page,
    });
    return (
      <li
        key={key}
        className={navigationItem}
        onClick={() => getTopMovies(item)}
      >
        {item}
      </li>
    );
  });

  return (
    <div className={s.pagination}>
      <ul>
        {listOfNavigation}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  getTopMovies: PropTypes.func,
};

export default connect(null, { getTopMovies })(Pagination);
