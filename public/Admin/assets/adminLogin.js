window.onload = function() {
  const defaultUserEmail = "admin@gmail.com";
  const defaultUserPassword = "admin";

  document.getElementById("entrar").onclick = function (email, password){
    let userEmailInput = document.getElementById("user-email").value;
    let userPasswordInput = document.getElementById("user-password").value;
    if (validateEmailAndPassword(userEmailInput, userPasswordInput)) {
      location="./table.html";
    } else {
      alert("Usuario/Contraseña inválido");
    }
  }

  function validateEmailAndPassword(email, password) {
    if (defaultUserEmail === email && defaultUserPassword === password){
      return true;
    } else {
      return false;
    }
  }
};
