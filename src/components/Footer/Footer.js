import React from 'react';

// styles
import s from './styles/Footer.module.scss';

// images
import GithubIcon from './images/github.png';
import LinkedinIcon from './images/linkedin.png';

const Footer = () => {
  return (
    <div className={s.root}>
      <div className={s.content}>
        <div className={s.listInfo}>
          <h3 className={s.title}>Anna Kopaieva</h3>
          <ul>
            <li className={s.listItem}>
              <span>Email:</span>
              ann.kopaieva@gmail.com
            </li>
            <li className={s.listItem}>
              <span>Phone:</span>
              +38 (093) 227 22 47
            </li>
            <li className={s.listItem}>
              <span>Skype:</span>
              Annet8816
            </li>
          </ul>
        </div>
        <ul className={s.listInfo}>
          <li className={s.listItem}>
            <a href="https://github.com/AnnaKopaeva" className={s.link}>
              <img src={GithubIcon} alt="github" className={s.icon} />
            </a>
          </li>
          <li className={s.listItem}>
            <a href="https://www.linkedin.com/in/anna-kopaieva/" className={s.link}>
              <img src={LinkedinIcon} alt="Linkedin" className={s.icon} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
