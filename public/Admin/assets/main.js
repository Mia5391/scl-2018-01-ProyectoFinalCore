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
                    <p>${visitor.name}</p>
                    <p>${visitor.email}</p>
                     <p>${visitor.rut}</p>
                  </div>
                  <div class="col s3">
                    <p>${visitor.destination}</p>
                     <p>${visitor.subject}</p>
                  </div>

                  <div class="col s3">
                    <p><span>${visitor.checkingTime}<span></p>
                    <p><span>${visitor.checkoutTime}<span></p>
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
                    <p>${visitor.name}</p>
                    <p>${visitor.email}</p>
                     <p>${visitor.rut}</p>
                  </div>
                  <div class="col s3">
                    <p>${visitor.destination}</p>
                     <p>${visitor.subject}</p>
                  </div>

                  <div class="col s3">
                    <p><span>${visitor.checkingTime}<span></p>
                    <p><span>${visitor.checkoutTime}<span></p>
                  </div>
                </div>`

      });
        
    })
}