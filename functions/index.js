'use strict';
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

let url = "smtps://ifvisitors@gmail.com:" + encodeURIComponent('laboratoria108') + "@smtp.gmail.com:465";
let transporter = nodemailer.createTransport(url);

exports.enviarEmail2 = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        console.log(req);
        console.log(res);

        let remetente = '"IF Reception" <ifsclreception@gmail.com>';

        let assunto = 'Nueva visita';
        let destinatarios = req.body; // lista de e-mails destinatarios separados por ,
        let corpo = req;
        let corpoHtml = 'nueva visita';

        let email = {
            from: remetente,
            to: destinatarios,
            subject: assunto,
            text: corpo,
            html: corpoHtml
        };

        transporter.sendMail(email, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Mensagem %s enviada: %s', info.messageId, info.response);
        });
    });
});
