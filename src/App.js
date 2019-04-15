import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';

class App extends Component {
  render() {
    const { data } = this.props;
    const listMovie = data.map(item => <div key={item}>{item}</div>);
    return (
      <div className="App">
        The movie
        {listMovie}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data.films,
});

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};

export default connect(mapStateToProps, {})(App);
