// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

function sendMail(){
  const recipientEmail = 'ifsclreception@gmail.com';
  const visitorName = 'Maya';

  const sender = 'reception@if.com';
  const emailSubject = 'You have a visitor';
  const emailBody = visitorName + ' is coming to visit you.';


var templateParams = {
    name: 'James',
    notes: 'Check this out!'
};

emailjs.send('<YOUR SERVICE ID>', '<YOUR TEMPLATE ID>', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
});
}
