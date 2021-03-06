import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import nodemailer from 'nodemailer';
import { renderToString } from 'react-dom/server';
import MainAssociation from '../../components/MainAssociation';
const router = express.Router();

router.get('/', (req, res) => {
  if (req.headers.host.slice(0, 4) === "www.") {
    var newHost = req.headers.host.slice(4);
    return res.redirect(301, req.protocol + "://" + newHost + req.originalUrl);
  }
  const content = renderToString(
    <StaticRouter>
      <MainAssociation />
    </StaticRouter>
  );
  res.send(
    `<!DOCTYPE html>
        <html>
            <head>
              <title>International EmTech Investment Association focuses on uniting people to build a better future</title>
              <meta name="description" content="IEIA participants open up new opportunities to expand business and deepen understanding and implementation of the latest technologies" />
                   <link rel="stylesheet" type="text/css" href="../main.css">
                     <link rel="shortcut icon" href="/images/Vector.ico" type="image/x-icon">
                     <link rel="canonical" href="https://emtechassociation.com/association/">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                     <meta name="yandex-verification" content="389e86ea6444fd90" />
                     <!-- HTML Meta Tags -->

                      <!-- Facebook Meta Tags -->
                      <meta property="og:url" content="https://emtechassociation.com/association/">
                      <meta property="og:type" content="website">
                      <meta property="og:title" content="International EmTech Investment Association focuses on uniting people to build a better future">
                      <meta property="og:description" content="IEIA participants open up new opportunities to expand business and deepen understanding and implementation of the latest technologies">
                      <meta property="og:image" content="">

                      <!-- Twitter Meta Tags -->
                      <meta name="twitter:card" content="summary_large_image">
                      <meta property="twitter:domain" content="emtechassociation.com">
                      <meta property="twitter:url" content="https://emtechassociation.com/association/">
                      <meta name="twitter:title" content="International EmTech Investment Association focuses on uniting people to build a better future">
                      <meta name="twitter:description" content="IEIA participants open up new opportunities to expand business and deepen understanding and implementation of the latest technologies">
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
  var { name, tech, stage, jurisdiction, phone, email } = req.body;

  const output = `
     <p> ???????????? ?? ???????????????????? </p>
     <ul>
       <li> Name: ${name} </li>
       <li> Technologies: ${tech} </li>
       <li> Investment Stage: ${stage} </li>
       <li> Jurisdiction: ${jurisdiction} </li>
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
     return res.redirect('/association');
});

router.post('/attachment', (req, res, next) => {
  var { name, address, tech, contact, attachments } = req.body;

  const output = `
     <p> ???????????? ?? ???????????????????? </p>
     <ul>
       <li> Name: ${name} </li>
       <li> Address: ${address} </li>
       <li> Technologies: ${tech} </li>
       <li> Contact: ${contact} </li>
       <li> Attachments: ${attachments} </li>
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
     return res.redirect('/association');
});

export default router;
