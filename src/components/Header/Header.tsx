import React, { FC } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: '/about', text: 'About us' },
  { path: '/forms', text: 'Form' },
];

type HeaderProps = {
  title: string;
};

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className="header">
      <div className="header__container container">
        <h2 className="header__logo">{title}</h2>
        <nav className="header__nav nav">
          <ul className="nav__list">
            {links.map((link, index) => (
              <li className="nav__item" key={index}>
                <NavLink to={link.path} className="nav__link">
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
