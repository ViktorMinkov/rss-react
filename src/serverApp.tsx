import React from 'react';
import { Provider } from 'react-redux';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { store } from 'store/store';
import App from 'components/App';

export const renderApp = (url: string, options?: object) => {
  return renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  );
};
