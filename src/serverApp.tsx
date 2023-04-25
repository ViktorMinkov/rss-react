import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import configureAppStore, { RootState } from './store/store';
import { Response } from 'express';
import { getCharacters } from './api';
import { ICharacter } from 'types';
import { PreloadedState } from '@reduxjs/toolkit';
import App from './App';

const preloadCardsApi = async (callback: (preloadResult: ICharacter[]) => void) => {
  const characters = await getCharacters();
  callback(characters);
};

const isProd = process.env.NODE_ENV === 'production';

export const renderApp = async (url: string, res: Response) => {
  preloadCardsApi((result) => {
    const preloadedState: PreloadedState<RootState> = {
      homePageSlice: {
        searchString: '',
        characters: result || [],
        isLoading: false,
        errorMsg: '',
        character: {},
      },
    };

    const store = configureAppStore(preloadedState);
    const app = (
      <StaticRouter location={url}>
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>
    );

    const finalState = store.getState();

    const { pipe } = renderToPipeableStream(
      <RenderFullPage app={app} preloadedState={finalState} />,
      {
        onShellReady: () => {
          pipe(res);
        },
        onAllReady: () => {
          res.end();
        },
      }
    );
  });
};

type RenderFullPageType = {
  app: React.ReactElement;
  preloadedState: RootState;
};

const RenderFullPage: FC<RenderFullPageType> = (props) => {
  const { app, preloadedState } = props;

  return (
    <html lang="en">
      <head>
        <title>RSS React</title>
      </head>
      <body>
        <div id="root">{app}</div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
              /</g,
              '\\u003c'
            )}`,
          }}
        ></script>
        <script
          type="module"
          src={isProd ? './assets/clientApp.js' : './src/clientApp.tsx'}
        ></script>
      </body>
    </html>
  );
};
