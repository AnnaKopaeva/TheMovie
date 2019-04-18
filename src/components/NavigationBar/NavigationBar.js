import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { SORTED_OPTIONS, YEARS_OPTIONS } from './constants';
import { getGenres } from '../../actions/index';

// styles
import s from './styles/NavigationBar.module.scss';

export class NavigationBar extends Component {
  componentDidMount() {
    const { getListGenres } = this.props;
    getListGenres();
  }

  render() {
    const {
      year,
      sort,
      changeSort,
      genres,
      changeYear,
      selectedGenres,
      changeListOfGenres,
    } = this.props;
    const selectedType = SORTED_OPTIONS.filter((obj) => {
      return obj.value === sort;
    });

    const selectedYear = YEARS_OPTIONS.filter(item => (
      item.value === year
    ));

    return (
      <div className={s.wrapper}>
        <div className={s.sortItem}>
          <span>Sort By</span>
          <Select
            onChange={e => changeSort(e.value)}
            options={SORTED_OPTIONS}
            value={selectedType[0]}
          />
        </div>
        <div className={s.sortItem}>
          <span>Year</span>
          <Select
            onChange={e => changeYear(e.value)}
            options={YEARS_OPTIONS}
            value={selectedYear}
          />
        </div>
        <div className={s.sortItem}>
          <span>Genres</span>
          <Select
            onChange={e => changeListOfGenres(e)}
            options={genres}
            value={selectedGenres}
          />
        </div>
      </div>
    );
  }
}

// props

NavigationBar.defaultProps = {
  sort: 'popularity.desc',
  year: 'none',
  selectedGenres: 'none',
  genres: [],
  getListGenres: () => null,
  changeSort: () => null,
  changeYear: () => null,
  changeListOfGenres: () => null,
};


NavigationBar.propTypes = {
  sort: PropTypes.string,
  year: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  selectedGenres: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  genres: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  })),
  getListGenres: PropTypes.func,
  changeSort: PropTypes.func,
  changeYear: PropTypes.func,
  changeListOfGenres: PropTypes.func,
};

const mapStateToProps = state => ({
  genres: state.data.genres,
  selectedGenres: state.data.selectedGenres,
  year: state.data.year,
});

export default connect(mapStateToProps, {
  getListGenres: getGenres,
})(NavigationBar);
