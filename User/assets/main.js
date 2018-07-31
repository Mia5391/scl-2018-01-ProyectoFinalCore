
// document.addEventListener('DOMContentLoaded', function () {
//     var elems = document.querySelectorAll('select');
//     var instances = M.FormSelect.init(elems, options);
// });

// Or with jQuery

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
                    let data = new FormData()
                    console.log(data)
                     sendEmail('destinatario', name)
                    //location.href= "sucesfull.html"
                });
                
            }); 
       
    }
};
sendEmail = (destinatario, name) => {
       fetch('https://us-central1-recepcion-de-visitantes.cloudfunctions.net/enviarEmail2', {
        method: 'POST',
        body: 'maitilydevidasi@gmail.com',
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log(error)
        });
}
