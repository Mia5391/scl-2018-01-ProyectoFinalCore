window.onload=()=>{
    showAllVisitors()
};
showAllVisitors = ()=>{
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
    };
