import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import MainMembers from '../../components/MainMembers';
const router = express.Router();

router.get('/', (req, res) => {
  const content = renderToString(
    <StaticRouter>
      <MainMembers />
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
                     ${content}
            </div>
      </body>
  </html>`
  )
});

export default router;
