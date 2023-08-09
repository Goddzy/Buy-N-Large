let email = document.getElementById('emailLogear');
let contrasenia = document.getElementById('contraseniaLogear');

email.addEventListener("blur", () => {
  verificarEmail(email);
});
contrasenia.addEventListener("blur", () => {
  verificarContrasenia(contrasenia);
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
