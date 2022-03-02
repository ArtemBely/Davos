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
              <title>International EmTech Investment Association</title>
              <meta name="description" content="International EmTech Investment Association is purpose to unite like-minded people to build a better future leveraging emerging technologies" />
                   <link rel="stylesheet" type="text/css" href="../main.css">
                     <link rel="shortcut icon" href="/images/Vector.ico" type="image/x-icon">
                     <link rel="canonical" href="https://emtechassociation.com/davos/">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                     <meta name="yandex-verification" content="389e86ea6444fd90" />
                     <!-- HTML Meta Tags -->

                      <!-- Facebook Meta Tags -->
                      <meta property="og:url" content="https://emtechassociation.com/davos/">
                      <meta property="og:type" content="website">
                      <meta property="og:title" content="International EmTech Investment Association">
                      <meta property="og:description" content="International EmTech Investment Association is purpose to unite like-minded people to build a better future leveraging emerging technologies">
                      <meta property="og:image" content="">

                      <!-- Twitter Meta Tags -->
                      <meta name="twitter:card" content="summary_large_image">
                      <meta property="twitter:domain" content="emtechassociation.com">
                      <meta property="twitter:url" content="https://emtechassociation.com/davos/">
                      <meta name="twitter:title" content="International EmTech Investment Association">
                      <meta name="twitter:description" content="International EmTech Investment Association is purpose to unite like-minded people to build a better future leveraging emerging technologies">
                      <meta name="twitter:image" content="">
                  <script src='/bundle.js' defer></script>
            </head>
            <body>
                 <div id="app">
                    <div className='main_wrap'>
                      <div className='wrap_davos'>
                       ${content}
                       </div>
                  </div>
            </div>
      </body>
  </html>`
  )
});

router.post('/events', (req, res, next) => {
  var { name, phone, email } = req.body;

  const output = `
     <p> Данные о посетителе </p>
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
     return res.redirect('/');
});

export default router;
