// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
window.sendMail=()=>{
  try {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey('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');
    const msg = {
      to: 'mjormy.ec@gmail.com',
      from: 'test@example.com',
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg);
  }
  catch(error) {
      alert(error);
  }
};
