import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getListPages } from '../../utils/getListPages';

// styles
import s from './styles/Pagination.module.scss';


class Pagination extends Component {
  get getListPages() {
    const {
      page, totalPages, changePage,
    } = this.props;
    const listPages = getListPages(page, totalPages);
    return listPages.map((item, key) => {
      const navigationItem = classNames(s.navigationItem, {
        [s.navigationActiveItem]: item === page,
      });
      return (
        <li
          key={key}
          className={navigationItem}
        >
          <button
            onClick={() => changePage(item)}
          >
            {item}
          </button>
        </li>
      );
    });
  };

  render() {
    return (
      <div className={s.pagination}>
        <ul>
          {this.getListPages}
        </ul>
      </div>
    );
  }
}

Pagination.defaultProps = {
  page: 1,
  totalPages: 1,
};

Pagination.propTypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  changePage: PropTypes.func,
};

export default Pagination;
