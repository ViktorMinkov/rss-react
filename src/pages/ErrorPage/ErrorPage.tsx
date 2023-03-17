import React from 'react';
import './ErrorPage.scss';

class ErrorPage extends React.Component {
  render() {
    return (
      <div className="error">
        <h1 className="error__code">404</h1>
        <div className="error__text">Ooops,page not found...</div>
      </div>
    );
  }
}

export default ErrorPage;
