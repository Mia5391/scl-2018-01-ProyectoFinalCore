window.onload=()=>{
    showAllVisitors()
};
/* showAllVisitors = ()=>{
      table.innerHTML =''
      getAllVisitors().on('child_added', (visitor) => {
        console.log(visitor);

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
    }; */
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