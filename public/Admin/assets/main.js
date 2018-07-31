window.onload=()=>{
    showAllVisitors()
};
$(document).ready(function () {
  $('select').formSelect();
});
showAllVisitors = () => {
    visitorList.innerHTML = ''
    getAllVisitors().on('child_added', (visitor) => {
            visitor = visitor.val()
            visitorList.innerHTML += `
               <div class="row visitor">
                   <div class="col s2">
                    <img src="${visitor.photo}">
                  </div>
                  <div class="col s4">
                    <p><strong>${visitor.name}</strong></p>
                    <p>${visitor.email}</p>
                     <p>${visitor.rut}</p>
                  </div>
                  <div class="col s3">
                    <p><strong>Destino</strong></p>
                    <p class="visitor-destino">${visitor.destination}</p>
                     <p>${visitor.subject}</p>
                  </div>

                  <div class="col s3">
                   <p><strong>Hora</strong></p>
                    <p>In <span class="visitor-time">${visitor.checkingTime}<span></p>
                    <p>Out <span class="visitor-time">${visitor.checkoutTime}<span></p>
                  </div>
                </div>`
                
        })
}
filterOrganization.addEventListener("change", function () {
  let organizacion = filterOrganization.value
  searchVisitorOrganizacion(organizacion)
  if (organizacion === 'todos') {
    showAllVisitors()
  }
});
searchVisitorOrganizacion = (organizacion) => {
  visitorList.innerHTML = ''
  window.searchByDestino(organizacion).then(
    (visitors) => {
      visitors.forEach(visitor => {
        visitor = visitor[1]
        visitorList.innerHTML += `
              <div class="row visitor">
                   <div class="col s2">
                    <img src="${visitor.photo}">
                  </div>
                  <div class="col s4">
                    <p><strong>${visitor.name}</strong></p>
                    <p>${visitor.email}</p>
                     <p>${visitor.rut}</p>
                  </div>
                  <div class="col s3">
                    <p><strong>Destino</strong></p>
                    <p class="visitor-destino">${visitor.destination}</p>
                     <p>${visitor.subject}</p>
                  </div>

                  <div class="col s3">
                   <p><strong>Hora</strong></p>
                    <p>In <span class="visitor-time">${visitor.checkingTime}<span></p>
                    <p>Out <span class="visitor-time">${visitor.checkoutTime}<span></p>
                  </div>
                </div>`
      });
        
    })
}