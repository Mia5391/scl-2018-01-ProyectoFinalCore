
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

    if (name === '' || rut == '' || destination == '') {
        console.log('complete')
        status.style.backgroundColor = '#f9dae3';
        status.innerHTML = `<span class="status">Complete los cambios requeridos</span>`
    }
    else {
        status.style.backgroundColor = '#c3e1c3';
        status.innerHTML = `<span class="status">Agregado</span>`
        addVisitor(name, rut, email, destination, subject, time, anfitrion, patente, credencial).then(response => {
        });
    }
};
