const express = require('express');
const app = express();
const ejs = require("ejs");
const QRCode = require('qrcode-generator');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/generate-qr', (req, res) => {
    const text = req.query.text ;

    const qr = QRCode(0, 'M');
    qr.addData(text);
    qr.make();

    const qrDataURL = qr.createDataURL();


    res.render("dw", {imgURL: qrDataURL,
        
      });
//     res.send(`
//         <html>
//         <head>
//             <title>QR Code Generator</title>
//         </head>
//         <body>
//         <div class="main">
//             <img src="${qrDataURL}" alt="QR Code">

//             <a id="download-link" download="${qrDataURL}">Download QR Code</a>

// </div>
//         </body>
//         </html>
//     `);


});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
