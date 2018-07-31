  window.onload=()=>{
      showVisitors()
}
showVisitors = ()=>{ 
    visitorList.innerHTML = ''
      getVisitorsInside().on('child_added', (visitorId) => {
          getVisitorData(visitorId.val().id).then(visitor => {
              visitor = visitor.val()
              visitorList.innerHTML += `
               <div class="row visitor">
                  <div class="col s1 m1">
                    <p>${visitor.credencial}</p>
                  </div>
                   <div class="col s2 m2">
                    <img src="${visitor.photo}">
                  </div>
                  <div class="col s5 m4">
                    <p>${visitor.name}</p>
                    <p>${visitor.destination}</p>
                  </div>
                  <div class="col s3 m4">
                    <p><span>Hora de entrada<span>  
                    <p>${visitor.checkingTime}</p>
                  </div>
                   <div class="col s1 right m1">
                   <span>Salida</span>
                    <i class="material-icons right checkout" onclick="checkout('${visitor.id}')">keyboard_tab
                    </i>
                    </div>
                </div>`
          })
      });
    }
checkout = (id) => {
    let time = new Date().toLocaleString()
    checkoutVisitor(id, time).then(response => {
showVisitors()
    });
}
searchVisitor =(credencial)=>{
    window.searchVisitorInside(credencial).then(
        (results) => {
            getVisitorData(results[1].id).then(visitor => {
                console.log(visitor.val())
                visitor = visitor.val()
                visitorList.innerHTML =''
                visitorList.innerHTML += `
                <div class="row visitor">
                  <div class="col s1 m1">
                    <p>${visitor.credencial}</p>
                  </div>
                   <div class="col s2 m2">
                    <img src="${visitor.photo}">
                  </div>
                  <div class="col s5 m4">
                    <p>${visitor.name}</p>
                    <p>${visitor.destination}</p>
                  </div>
                  <div class="col s3 m4">
                    <p><span>Hora de entrada<span>  
                    <p>${visitor.checkingTime}</p>
                  </div>
                   <div class="col s1 right m1">
                   <span>Salida</span>
                    <i class="material-icons right checkout" onclick="checkout('${visitor.id}')">keyboard_tab
                    </i>
                    </div>
                </div>`
            })
        })
}
search.addEventListener("change", function () {
    let credencial = search.value
    if(credencial === ''){
        showVisitors()
    }
    else{
        searchVisitor(credencial)
    }
});