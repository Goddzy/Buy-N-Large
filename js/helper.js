let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let contrasenia = document.getElementById("contrasenia");
let btnEnviar = document.getElementById("btnEnviar");

email.addEventListener("blur", () => {
  verificarEmail(email);
});
contrasenia.addEventListener("blur", () => {
  verificarContrasenia(contrasenia);
});
nombre.addEventListener("blur", () => {
  verificarNombre(nombre);
});
apellido.addEventListener("blur", () => {
  verificarApellido(apellido);
});

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

function verificarNombre(input) {
  if (input.value.length >= 3 && input.value.length <= 50) {
    nombre.className = "form-control is-valid text-center";
    return true;
  } else {
    nombre.className = "form-control is-invalid text-center";
    return false;
  }
}

function verificarApellido(input) {
  if (input.value.length >= 2 && input.value.length <= 50) {
    apellido.className = "form-control is-valid text-center";
    return true;
  } else {
    apellido.className = "form-control is-invalid text-center";
    return false;
  }
}
