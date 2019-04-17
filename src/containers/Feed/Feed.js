import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Layout from '../../components/Layout';
import MovieList from '../../components/MovieList';
import Pagination from '../../components/Pagination';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { getMovies } from '../../actions';

export class Feed extends React.Component {
  state = {
    activePage: 1,
    sort: '/popular',
  };

  componentDidMount() {
    const { activePage, sort } = this.state;
    this.props.getListMovies(activePage, sort);
  }

  changePage = (item) => {
    const { sort } = this.state;
    this.props.history.push(`?page=${item}&sort=${sort}`);
    this.setState({ activePage: item });
    this.props.getListMovies(item, sort);
    document.body.scrollTop = 0;
  };

  changeSort = (sort) => {
    this.props.history.push(`?sort=${sort}`);
    this.setState({ sort: sort });
    this.props.getListMovies(1, sort);
  };

  render() {
    const { activePage } = this.state;
    const { data: { results, total_pages }} = this.props;
    return (
      <Layout>
        <NavigationBar changeSort={this.changeSort} />
        <MovieList movies={results} />
        {
          results.length
          && <Pagination page={activePage} totalPages={total_pages} changePage={this.changePage} />
        }
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data.data,
});

export default withRouter(connect(mapStateToProps, { getListMovies: getMovies })(Feed));


// props

Feed.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.number,
    results: PropTypes.arrayOf(PropTypes.object),
    total_pages: PropTypes.number,
    total_results: PropTypes.number,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};
