import path from 'path';
import express from 'express';
import { createServer as createViteServer, ViteDevServer } from 'vite';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = 3000;
const isProd = process.env.NODE_ENV === 'production';

let viteServer: ViteDevServer;

const createServer = async () => {
  const app = express();

  if (!isProd) {
    viteServer = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(viteServer.middlewares);
  } else {
    app.use('./dist/client', express.static('./dist/client'));
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let renderAppFunc;
      if (!isProd) {
        const { renderApp } = await viteServer.ssrLoadModule('/src/serverApp.tsx');
        renderAppFunc = renderApp;
      } else {
        const { renderApp } = await import(path.resolve('./dist/server/serverApp.js'));
        renderAppFunc = renderApp;
      }
      await renderAppFunc(url, res);
    } catch (error: unknown) {
      if (!isProd) {
        viteServer.ssrFixStacktrace(error as Error);
        next(error);
      } else {
        console.log(error);
        res.status(500).end(error);
      }
    }
  });

  app.listen(PORT, () => console.log(`App is listening on the http://localhost:${PORT}/`));
};

createServer();
