import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { SORTED_OPTIONS } from './constants';
import { getListOfYear } from '../../utils/getListOfYear';

// styles
import s from './styles/NavigationBar.module.scss';

export const NavigationBar = ({
  year,
  sort,
  changeSort,
  genres,
  changeYear,
  selectedGenres,
  changeListOfGenres,
}) => {
  const selectedType = SORTED_OPTIONS.filter((obj) => {
    return obj.value === sort;
  });

  const YEARS_OPTIONS = [{ value: 'none', label: 'none' }, ...getListOfYear(1900)];

  const selectedYear = YEARS_OPTIONS.filter(item => (
    item.value === +year
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
};

// props

NavigationBar.defaultProps = {
  sort: 'popularity.desc',
  year: 'none',
  selectedGenres: {
    id: 0,
  },
  genres: [],
  changeSort: () => null,
  changeYear: () => null,
  changeListOfGenres: () => null,
};


NavigationBar.propTypes = {
  sort: PropTypes.string,
  year: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  selectedGenres: PropTypes.shape({
    value: PropTypes.string,
    id: PropTypes.number,
  }),
  genres: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  })),
  changeSort: PropTypes.func,
  changeYear: PropTypes.func,
  changeListOfGenres: PropTypes.func,
};

const mapStateToProps = state => ({
  genres: state.data.genres,
  selectedGenres: state.data.selectedGenres,
  year: state.data.year,
});

export default connect(mapStateToProps, {})(NavigationBar);
