import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';

class App extends Component {
  render() {
    const { data } = this.props;
    let listMovie;
    if (data) {
      listMovie = data.results.map(item => <div key={item.id}>{item.original_title}</div>);
    }
    return (
      <div className="App">
        The movie
        {listMovie}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data.data,
});

App.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.number,
    results: PropTypes.arrayOf(PropTypes.object),
    total_pages: PropTypes.number,
    total_results: PropTypes.number,
  }),
};

export default connect(mapStateToProps, {})(App);
