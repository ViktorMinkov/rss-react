import React, { FC } from 'react';
import { NavLink, matchPath, useLocation } from 'react-router-dom';
import { Routes } from 'types';
import './Header.scss';

const links = [
  { path: Routes.HOME, text: 'Home', title: 'Home Page' },
  { path: Routes.ABOUT, text: 'About us', title: 'About Page' },
  { path: Routes.FORMS, text: 'Form', title: 'Form Page' },
];

const Header: FC = () => {
  const location = useLocation();

  const currentLink = links.find((link) => matchPath(location.pathname, link.path));

  return (
    <header className="header">
      <div className="header__container container">
        <h2 className="header__logo">{currentLink?.title}</h2>
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
