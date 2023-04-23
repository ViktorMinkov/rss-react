import React, { FC } from 'react';
import './Header.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { Routes } from 'types';

const links = [
  { path: Routes.HOME, text: 'Home', title: 'Home Page' },
  { path: Routes.ABOUT, text: 'About us', title: 'About Page' },
  { path: Routes.FORMS, text: 'Form', title: 'Form Page' },
];

const Header: FC = () => {
  const location = useLocation();

  const getCurrentPageTitle = () => {
    const route = location.pathname;
    const currLink = links.filter((link) => link.path === route);
    const title = currLink[0].title;
    return title;
  };

  return (
    <header className="header">
      <div className="header__container container">
        <h2 className="header__logo">{getCurrentPageTitle()}</h2>
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
