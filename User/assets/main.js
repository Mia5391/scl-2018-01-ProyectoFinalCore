window.onload = () => {
   showVisitors()
}
validation = () => {
    let name = document.getElementById('name').value
    let rut = document.getElementById('rut').value
    let email = document.getElementById('email').value
    let destination = document.getElementById('destination').value
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
        addVisitor(name, rut, email, destination, subject, time).then(response => {
            showVisitors() 
        });
    }
};
showVisitors = () => {
    getVisitorsInside().then(VisitorsIdList => {

            let visitors = Object.values(VisitorsIdList.val())

            table.innerHTML = ''
            visitors.forEach(visitorInsideId => {

                getVisitorData(visitorInsideId.id).then(visitor=>{
                    visitor = visitor.val()
                    table.innerHTML += `
                <tr>
                    <td>${visitor.name}</td>
                    <td>${visitor.rut}</td>
                    <td>${visitor.destination}</td>
                    <td>${visitor.subject}</td>
                    <td>${visitor.checkingTime}</td>
                    <td>${visitor.email}</td>
                    <td>  <i class="material-icons right" onclick="checkout('${visitor.id}')">keyboard_arrow_right
                    </i></td>
                </tr>`
                })
                
            });
        })
}
checkout = (id) =>
{
    let time = new Date().toLocaleString()
    checkoutVisitor(id,time).then(response => {
     showVisitors()
    });
}