import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import nodemailer from 'nodemailer';
import { renderToString } from 'react-dom/server';
import MainEvents from '../../components/MainEvents';
const router = express.Router();

router.get('/', (req, res) => {
  if (req.headers.host.slice(0, 4) === "www.") {
    var newHost = req.headers.host.slice(4);
    return res.redirect(301, req.protocol + "://" + newHost + req.originalUrl);
  }
  const content = renderToString(
    <StaticRouter>
      <MainEvents />
    </StaticRouter>
  );
  res.send(
    `<!DOCTYPE html>
        <html>
            <head>
              <title>Events of the International Investment Association EmTech</title>
              <meta name="description" content="International Investment Association EmTech holds events online and offline. The schedule can be found in the calendar" />
                   <link rel="stylesheet" type="text/css" href="../main.css">
                     <link rel="shortcut icon" href="/images/Vector.ico" type="image/x-icon">
                     <link rel="canonical" href="https://emtechassociation.com/events/">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                     <meta name="yandex-verification" content="389e86ea6444fd90" />
                     <!-- HTML Meta Tags -->

                      <!-- Facebook Meta Tags -->
                      <meta property="og:url" content="https://emtechassociation.com/events/">
                      <meta property="og:type" content="website">
                      <meta property="og:title" content="Events of the International Investment Association EmTech">
                      <meta property="og:description" content="International Investment Association EmTech holds events online and offline. The schedule can be found in the calendar">
                      <meta property="og:image" content="">

                      <!-- Twitter Meta Tags -->
                      <meta name="twitter:card" content="summary_large_image">
                      <meta property="twitter:domain" content="emtechassociation.com">
                      <meta property="twitter:url" content="https://emtechassociation.com/events/">
                      <meta name="twitter:title" content="Events of the International Investment Association EmTech">
                      <meta name="twitter:description" content="International Investment Association EmTech holds events online and offline. The schedule can be found in the calendar">
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

router.post('/send', (req, res, next) => {
  var { name, phone, email } = req.body;

  const output = `
     <p> ???????????? ?? ???????????????????? </p>
     <ul>
       <li> Name: ${name} </li>
       <li> Phone: ${phone} </li>
       <li> Email: ${email} </li>
     </ul>
     `;
     async function main() {
     let transporter = nodemailer.createTransport({
       host: "smtp.yandex.ru",
       port: 465,
       secure: true, // true for 465, false for other ports
       auth: {
         user: 'emtechaccount@acorn.ws', // generated ethereal user
         pass: 'qwertyuiop987654321' // generated ethereal password
       },
       tls:{
         rejectUnauthorized:false  // ???????????? ?????? localhost
       }
     });

     // send mail with defined transport object
     let info = await transporter.sendMail({
       from: '"Order from site" <emtechaccount@acorn.ws>', // sender address
       to: "a.yudina@qlstrategy.ch", // list of receivers vn@goweb.com
       subject: "New partner ???", // Subject line
       text: "Hello world?", // plain text body
       html: output // html body
     });

     console.log("Message sent: %s", info.messageId);
     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
     }

     main().catch(console.error);
     return res.redirect('/');
});

export default router;
