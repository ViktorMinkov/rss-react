import express from 'express';
import serveStatic from 'serve-static';
import { createServer as createViteServer, ViteDevServer } from 'vite';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = 3001;
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
    app.use(
      serveStatic('./dist/client', {
        index: false,
      })
    );
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let renderApp;
      const serverPath = './server/serverApp.js';
      if (!isProd) {
        renderApp = (await viteServer.ssrLoadModule('./src/serverApp.tsx')).renderApp;
      } else {
        renderApp = (await import(serverPath)).renderApp;
      }
      await renderApp(url, res);
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

  return { app };
};

createServer().then(({ app }) =>
  app.listen(PORT, () => console.log(`Application is listening on the http://localhost:${PORT}/`))
);
