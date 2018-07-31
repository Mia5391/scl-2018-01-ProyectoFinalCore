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
<<<<<<< HEAD
});
}
=======
};
>>>>>>> d10bd3f0f0a8c16658f49217cd10eb21d0cea62b
