import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getLatestMovies, getTopMovies } from '../../actions';

const Header = ({ getLatestMovies, getTopMovies }) => {
  return (
    <div className="header">
      Header
      <button onClick={() => getLatestMovies(1)}>Latest</button>
      <button onClick={() => getTopMovies(1)}>Top rated</button>
    </div>
  );
};

// const mapStateToProps = state => ({
//   data: state.data.data,
// });

Header.propTypes = {
  getLatestMovies: PropTypes.func,
  getTopMovies: PropTypes.func,
};

export default connect(null, { getLatestMovies, getTopMovies })(Header);
