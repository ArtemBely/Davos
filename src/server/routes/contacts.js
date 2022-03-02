import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import Contacts from '../../components/Contacts';
const router = express.Router();

router.get('/', (req, res) => {
  if (req.headers.host.slice(0, 4) === "www.") {
    var newHost = req.headers.host.slice(4);
    return res.redirect(301, req.protocol + "://" + newHost + req.originalUrl);
  }
  const content = renderToString(
    <StaticRouter>
      <Contacts />
    </StaticRouter>
  );
  res.send(
    `<!DOCTYPE html>
        <html>
            <head>
              <title>Our contacts</title>
              <meta name="description" content="Contacts of International Investment Association EmTech" />
                   <link rel="stylesheet" type="text/css" href="../main.css">
                     <link rel="shortcut icon" href="/images/Vector.ico" type="image/x-icon">
                     <link rel="canonical" href="https://emtechassociation.com/contacts/">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                     <meta name="yandex-verification" content="389e86ea6444fd90" />
                     <!-- HTML Meta Tags -->

                      <!-- Facebook Meta Tags -->
                      <meta property="og:url" content="https://emtechassociation.com/contacts/">
                      <meta property="og:type" content="website">
                      <meta property="og:title" content="Our contacts">
                      <meta property="og:description" content="Contacts of International Investment Association EmTech">
                      <meta property="og:image" content="">

                      <!-- Twitter Meta Tags -->
                      <meta name="twitter:card" content="summary_large_image">
                      <meta property="twitter:domain" content="emtechassociation.com">
                      <meta property="twitter:url" content="https://emtechassociation.com/contacts/">
                      <meta name="twitter:title" content="Our contacts">
                      <meta name="twitter:description" content="Contacts of International Investment Association EmTech">
                      <meta name="twitter:image" content="">
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
