import React from 'react';

// styles
import s from './styles/Header.module.scss';

// images
import Logo from './images/logo.png';

const Header = () => (
  <div className={s.root}>
    <img src={Logo} alt="logo" className={s.logo} />
  </div>
);

export default Header;
