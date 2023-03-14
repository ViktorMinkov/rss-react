import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: '/about', text: 'About us' },
];

type HeaderProps = {
  title: string;
};

class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <header className="header">
        <div className="header__container container">
          <div className="header__logo">{this.props.title}</div>
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
  }
}

export default Header;
