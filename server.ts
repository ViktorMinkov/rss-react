import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

async function createServer() {
  const app = express();
  const viteServer = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(viteServer.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await viteServer.transformIndexHtml(url, template);
      const html = template.split(`<!--ssr-->`);
      const { renderApp } = await viteServer.ssrLoadModule('/src/serverApp.tsx');
      const { pipe } = await renderApp(url, {
        onShellReady() {
          res.write(html[0]);
          pipe(res);
        },
        onAllReady() {
          res.write(html[0] + html[1]);
          res.end();
        },
      });
    } catch (error: unknown) {
      viteServer.ssrFixStacktrace(error as Error);
      next(error);
    }
  });

  app.listen(PORT, () => console.log(`App is listening on the http://localhost:${PORT}/`));
}

createServer();
