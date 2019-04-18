import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import Layout from '../../components/Layout';
import MovieList from '../../components/MovieList';
import Pagination from '../../components/Pagination';
import NavigationBar from '../../components/NavigationBar';
import Spinner from '../../components/Spinner/Spinner';
import {
  getMovies,
  changeActivePage,
  changeSortType,
  changeSelectedYear,
  changeActiveGenres,
} from '../../actions';

// styles
import s from './styles/Feed.module.scss';


export class Feed extends React.Component {

  componentDidMount() {
    const { location: { search } } = this.props;
    this.checkCurrentUrl(search);
  }

  componentWillReceiveProps(nextProps) {
    const {
      location: { pathname, search },
    } = this.props;
    const current = `${pathname}${search}`;
    const next = `${nextProps.location.pathname}${nextProps.location.search}`;
    if (current === next) {
      return;
    }
    this.checkCurrentUrl(nextProps.location.search);
  }

  checkCurrentUrl = (search) => {
    const { getListMovies, changeActivePageAction } = this.props;
    const parsed = queryString.parse(search);
    const page = +parsed.page ? +parsed.page : 1;
    const year = parsed.year ? parsed.year : 'none';
    const sort = parsed.sort ? parsed.sort : 'popularity.desc';
    const genre = parsed.genre ? parsed.genre : null;

    changeActivePageAction(page);
    getListMovies(page, sort, year, genre);
    document.body.scrollTop = 0;
  };

  changePage = (item) => {
    const { sort, history, changeActivePageAction } = this.props;

    history.push(`?page=${item}&sort=${sort}`);
    changeActivePageAction(item);
  };

  changeSort = (sort) => {
    const { history, changeSortTypeAction } = this.props;

    history.push(`?sort=${sort}`);
    changeSortTypeAction(sort);
  };

  changeYear = (year) => {
    const { history, sort, selectedGenres, changeValueYear } = this.props;

    history.push(`?page=1&year=${year}&genre=${selectedGenres}&sort=${sort}`);
    changeValueYear(year);
  };

  changeListOfGenres = (value) => {
    const {
      year, sort, history, changeSelectedGenres,
    } = this.props;

    history.push(`?page=1&year=${year}&genre=${value.id}&sort=${sort}`);
    changeSelectedGenres(value);
  };

  render() {
    const {
      data: { results, total_pages },
      activePage,
      sort,
      showPreloader,
      showError,
    } = this.props;

    return (
      <Layout>
        <NavigationBar
          sort={sort}
          changeSort={this.changeSort}
          changeYear={this.changeYear}
          changeListOfGenres={this.changeListOfGenres}
        />
        { !showError ? (
          <div className={s.content}>
            { !showPreloader ? (
              <>
                <MovieList movies={results} />
                { results.length ? (
                  <Pagination
                    page={activePage}
                    totalPages={total_pages}
                    changePage={this.changePage}
                  />
                ) : null }
              </>
            ) : <Spinner /> }
          </div>
        ) : (
          <div className={s.content}>
            <h2 className={s.error}>Something went wrong. Please restart the page</h2>
          </div>
        )}
      </Layout>
    );
  }
}

// props

Feed.defaultProps = {
  data: {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 1,
  },
  activePage: 1,
  sort: 'popularity.desc',
  location: {
    pathname: '/',
    search: '/',
  },
  year: 'none',
  showPreloader: false,
  showError: false,
  history: {
    push: () => null,
  },
  changeActivePageAction: () => null,
  changeSortTypeAction: () => null,
  getListMovies: () => null,
  changeValueYear: () => null,
  changeSelectedGenres: () => null,
};


Feed.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.number,
    results: PropTypes.arrayOf(PropTypes.object),
    total_pages: PropTypes.number,
    total_results: PropTypes.number,
  }),
  activePage: PropTypes.number,
  sort: PropTypes.string,
  changeActivePageAction: PropTypes.func,
  changeSortTypeAction: PropTypes.func,
  getListMovies: PropTypes.func,
  changeValueYear: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
  }),
  year: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  selectedGenres: PropTypes.string,
  showPreloader: PropTypes.bool,
  showError: PropTypes.bool,
  changeSelectedGenres: PropTypes.func,
};

const mapStateToProps = state => ({
  data: state.data.data,
  activePage: state.data.activePage,
  year: state.data.year,
  sort: state.data.sort,
  selectedGenres: state.data.selectedGenres,
  showPreloader: state.data.showPreloader,
  showError: state.data.showError,
});

export default withRouter(connect(mapStateToProps, {
  getListMovies: getMovies,
  changeActivePageAction: changeActivePage,
  changeSortTypeAction: changeSortType,
  changeValueYear: changeSelectedYear,
  changeSelectedGenres: changeActiveGenres,
})(Feed));
