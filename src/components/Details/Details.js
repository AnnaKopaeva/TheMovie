import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Layout from '../Layout/Layout';
import Spinner from '../Spinner/Spinner';
import { getPosterPath } from '../../utils/getPosterPath';
import { getDetails } from '../../actions';

// styles
import s from './styles/Details.module.scss';

// images
import ImageMovie from './images/movie.png';

class Details extends Component {
  componentDidMount() {
    const { getInfoDetails, match: { params: { id } } } = this.props;
    getInfoDetails(id);
  }

  render() {
    const { detailsInfo, showPreloader } = this.props;
    const imageSrc = detailsInfo.poster_path
      ? getPosterPath(detailsInfo.poster_path, 400)
      : ImageMovie;
    const date = detailsInfo.release_date
      ? ` (${detailsInfo.release_date.split('-')[0]})`
      : '';
    let genres = '';

    if (detailsInfo.genres) {
      detailsInfo.genres.map((item, key) => {
        if (key !== 0) {
          genres += `, ${item.name}`;
        } else {
          genres += item.name;
        }
        return genres;
      });
    }

    return (
      <Layout>
        <div className={s.root}>
          { !showPreloader ? (
            <>
              <img
                src={imageSrc}
                alt="poster"
                className={s.poster}
              />
              <div className={s.info}>
                <h2 className={s.title}>
                  {detailsInfo.title}
                  { date }
                </h2>
                <p>
                  <span className={s.caption}>Overview</span>
                  <span className={s.desc}>{detailsInfo.overview}</span>
                </p>
                <p>
                  <span className={s.caption}>Genres</span>
                  {genres}
                </p>
              </div>
            </>
          ) : <Spinner /> }
        </div>
      </Layout>
    );
  }
}

// props

Details.defaultProps = {
  detailsInfo: {
    title: '',
    release_date: '',
    poster_path: '',
    overview: '',
  },
  match: {
    params: {
      id: 1,
    },
  },
  showPreloader: false,
  getInfoDetails: () => {},
};


Details.propTypes = {
  detailsInfo: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  showPreloader: PropTypes.bool,
  getInfoDetails: PropTypes.func,
};

const mapStateToProps = state => ({
  detailsInfo: state.data.detailsInfo,
  showPreloader: state.data.showPreloader,
});

export default withRouter(connect(mapStateToProps, { getInfoDetails: getDetails })(Details));
