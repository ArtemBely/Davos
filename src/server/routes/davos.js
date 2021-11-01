import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import Davos from '../../components/Davos';
const router = express.Router();

router.get('/', (req, res) => {
  const content = renderToString(
    <StaticRouter>
      <Davos />
    </StaticRouter>
  );
  res.send(
    `<!DOCTYPE html>
        <html>
            <head>
              <title>Database</title>
                   <link rel="stylesheet" type="text/css" href="../main.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                  <script src='/bundle.js' defer></script>
            </head>
            <body>
                 <div id="app">
                    <div className='main_wrap'>
                       ${content}
                  </div>
            </div>
      </body>
  </html>`
  )
});

export default router;