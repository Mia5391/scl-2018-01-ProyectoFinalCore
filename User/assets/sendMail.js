function sendMail() {
    document.getElementById('send').addEventListener('onclick', function(event) {
    event.preventDefault();
    this.contact_number.value = Math.random() * 100000 | 0;
    emailjs.send('gmail', 'new_visitor', this);
    });



emailjs.send('gmail', 'new_visitor', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
};
