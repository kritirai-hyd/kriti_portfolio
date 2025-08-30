const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;

      // ✅ Handle all `.txt` requests without needing actual files
      if (pathname.endsWith('.txt')) {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 200;
        res.end('Handled by server - no actual file needed');
        return;
      }

      // Handle custom routes
      if (pathname === '/a') {
        await app.render(req, res, '/a', parsedUrl.query);
      } else if (pathname === '/b') {
        await app.render(req, res, '/b', parsedUrl.query);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  })
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
