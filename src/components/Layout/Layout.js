import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

// styles
import s from './styles/Layout.module.scss';


export const Layout = ({ children }) => (
  <div className={s.root}>
    <Header />
    <div className={s.main}>
      { children }
    </div>
    <Footer />
  </div>
);


export default Layout;
