import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import * as mongoose from 'mongoose';
import { UserRoute } from './routes/user';
import { AnnouncementRoute } from './routes/announcement';
const userRoute: UserRoute = new UserRoute();
const announcementRoute: AnnouncementRoute = new AnnouncementRoute();

export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/angular10-example/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // MongoDB database settings
  mongoose.connect('mongodb://admin:password@localhost:27017/mean?authSource=admin', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
    .then(() => console.log('Database connected successfully!'))
    .catch((err) => console.error(err));

  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  userRoute.userRoute(server);
  announcementRoute.announcementRoute(server);

  server.get('*', (req, res) => {
    console.log('req ' , req.baseUrl);
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4201;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
