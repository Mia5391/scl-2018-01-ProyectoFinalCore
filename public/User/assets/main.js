$(document).ready(function () {
    $('select').formSelect();
});

validation = () => {
    let name = document.getElementById('name').value
    let rut = document.getElementById('rut').value
    let email = document.getElementById('email').value
    let destination = document.getElementById('destination').value
    let anfitrion = document.getElementById('anfitrion').value
    let credencial = document.getElementById('credencial').value
    let patente = document.getElementById('patente').value
    let subject = document.getElementById('subject').value
    let status = document.getElementById('status')
    let time = new Date().toLocaleString()
    let photoFile = file.files[0];
    let photoFileName = photoFile.name
    let urlPhoto 
    if (name === '' || rut == '' || destination == '') {
        console.log('complete')
        status.style.backgroundColor = '#f9dae3';
        status.innerHTML = `<span class="status">Complete los cambios requeridos</span>`
    }
   
    else {
        status.style.backgroundColor = '#c3e1c3';
        status.innerHTML = `<span class="status">Agregado</span>`
        const task = firebase.storage().ref('images')
            .child(photoFileName)
            .put(photoFile);
        task.then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                urlPhoto = url
                addVisitor(name, rut, email, destination, subject, time, anfitrion, patente, credencial, urlPhoto).then(response => {
                    sendEmail()
                    register.style.display = "none"
                    sucesfull.style.display = 'block';
                    timeout()
                    document.getElementById('name').value =''
                    document.getElementById('rut').value =''
                    document.getElementById('email').value =''
                    document.getElementById('credencial').value = ''
                    document.getElementById('patente').value =''
                    document.getElementById('subject').value = ''
                    document.getElementById('destination').value = 'Destino'
                   document.getElementById('anfitrion').value = ''

                });
            }); 
    }
};
sendEmail = () => {
    fetch('https://us-central1-visitor-reception.cloudfunctions.net/enviarEmail2', {
        method: 'POST',
        body: 'maitilydevidasi@gmail.com',
    }).then(response => {
    })
    .catch((error) => {
            console.log(error)
        });
}

function timeout() {
    window.setTimeout("redirect()", 4000)
}

function redirect() {
    register.style.display = "block"
    sucesfull.style.display = 'none';
    return
}