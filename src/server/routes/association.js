import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import nodemailer from 'nodemailer';
import { renderToString } from 'react-dom/server';
import MainAssociation from '../../components/MainAssociation';
const router = express.Router();

router.get('/', (req, res) => {
  const content = renderToString(
    <StaticRouter>
      <MainAssociation />
    </StaticRouter>
  );
  res.send(
    `<!DOCTYPE html>
        <html>
            <head>
              <title>International EmTech Investment Association</title>
                   <link rel="stylesheet" type="text/css" href="../main.css">
                     <link rel="shortcut icon" href="/images/Vector.ico" type="image/x-icon">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                     <meta name="yandex-verification" content="389e86ea6444fd90" />
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
     <p> Данные о посетителе </p>
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
         rejectUnauthorized:false  // только для localhost
       }
     });

     // send mail with defined transport object
     let info = await transporter.sendMail({
       from: '"Order from site" <emtechaccount@acorn.ws>', // sender address
       to: "belysevartem9@gmail.com", // list of receivers vn@goweb.com
       subject: "New partner ✔", // Subject line
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
     <p> Данные о посетителе </p>
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
         rejectUnauthorized:false  // только для localhost
       }
     });

     // send mail with defined transport object
     let info = await transporter.sendMail({
       from: '"Order from site" <emtechaccount@acorn.ws>', // sender address
       to: "belysevartem9@gmail.com", // list of receivers vn@goweb.com
       subject: "New partner ✔", // Subject line
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
