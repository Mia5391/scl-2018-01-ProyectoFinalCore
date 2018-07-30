  window.onload=()=>{
      showVisitors()
}
showVisitors = ()=>{ 
      table.innerHTML =''
      getVisitorsInside().on('child_added', (visitorId) => {
          getVisitorData(visitorId.val().id).then(visitor => {
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
    }
checkout = (id) => {
    let time = new Date().toLocaleString()
    checkoutVisitor(id, time).then(response => {
showVisitors()
    });
}