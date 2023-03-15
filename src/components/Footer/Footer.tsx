import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container container">
          <a
            className="footer__github"
            href="https://github.com/ViktorMinkov"
            target="_blank"
            rel="noreferrer"
          ></a>
          <div className="footer__year">© 2022</div>
          <a
            className="footer__rs-logo"
            href="https://rs.school/react/"
            target="_blank"
            rel="noreferrer"
          ></a>
        </div>
      </footer>
    );
  }
}

export default Footer;
