import React from 'react';
import './ErrorPage.scss';

class ErrorPage extends React.Component {
  render() {
    return (
      <div className="error">
        <div className="error__code">404</div>
        <div className="error__text">Ooops,page not found...</div>
      </div>
    );
  }
}

export default ErrorPage;
