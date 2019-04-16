import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMoviesList } from './utils/updateMovieUrl';
import MovieList from './components/MovieList';
import Header from './components/Header';
import Footer from './components/Footer';
import Pagination from './components/Pagination';
import { getTopMovies } from './actions';

// styles
import './styles/reset.css';
import './styles/normalize.css';

class App extends Component {
  componentDidMount() {
    this.props.getTopMovies(1);
  }

  render() {
    const { data } = this.props;
    if (data && data.results && Array.isArray(data.results))  {
      const movies = getMoviesList(data);
      return (
        <div>
          <Header />
          {movies
            ? <MovieList movies={movies} />
            : null}
          {movies
            ? <Pagination page={data.page} totalPages={data.total_pages} />
            : null}
          <Footer />
        </div>
      );
    } else {
      return null;
    }
  }
};

const mapStateToProps = state => {
  return ({
    data: state.data.data[state.data.activeSortType],
  });
};

App.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.number,
    results: PropTypes.arrayOf(PropTypes.object),
    total_pages: PropTypes.number,
    total_results: PropTypes.number,
  }),
  getTopMovies: PropTypes.func,
};

export default connect(mapStateToProps, { getTopMovies })(App);
