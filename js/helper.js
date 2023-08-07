let email = document.getElementById("email");
let contrasenia = document.getElementById("contrasenia");
let btnEnviar = document.getElementById('btnEnviar');
let btnAdministrador = document.getElementById("btnAdministrador");

email.addEventListener("blur", () => {
  verificarEmail(email);
});
email.addEventListener("blur", () => {
  verificarAdmin(email);
});
contrasenia.addEventListener("blur", () => {
  verificarContrasenia(contrasenia);
});

btnEnviar.addEventListener("submit", error404);
function error404(e){
    e.preventDefault();
}

function verificarEmail(input) {
  let patron =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  if (
    patron.test(input.value) &&
    input.value.length >= 10 &&
    input.value.length <= 60
  ) {
    email.className = "form-control is-valid text-center";
    return true;
  } else {
    email.className = "form-control is-invalid text-center";
    return false;
  }
}

function verificarContrasenia(input) {
  if (input.value.length >= 6 && input.value.length <= 50) {
    contrasenia.className = "form-control is-valid text-center";
    return true;
  } else {
    contrasenia.className = "form-control is-invalid text-center";
    return false;
  }
}

function verificarAdmin(input) {
  if (input.value === "renatotrevisiolmontiel@gmail.com") {
    btnAdministrador.className = "btn btn-warning container mt-3";
  }else{
    btnAdministrador.className= "btn btn-warning container mt-3 d-none";    
  }
}
