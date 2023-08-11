let formulario = document.getElementById("crearCuenta");
let listaUsuarios =
  JSON.parse(localStorage.getItem("listaUsuariosCreadosKey")) || [];
let nombreUsuario = document.getElementById("nombre");
let apellidoUsuario = document.getElementById("apellido");
let emailUsuario = document.getElementById("email");
let contraseniaUsuario = document.getElementById("contrasenia");
formulario.addEventListener("submit", crearCuentaUsuario);

function crearCuentaUsuario(e) {
  e.preventDefault();
  //crear mi class usuario
  let UsuarioFiltrado = listaUsuarios.filter((usuario) => {
    return usuario.email === emailUsuario.value;
  });
  if (UsuarioFiltrado.length > 0) {
    Swal.fire("Email ya ingresado", "Esta cuenta ya existe, por favor, ingrese sesión.", "error");
  } else {
    let nuevaCuenta = {
      nombre: nombreUsuario.value,
      apellido: apellidoUsuario.value,
      email: emailUsuario.value,
      contrasenia: contraseniaUsuario.value,
      administrador: false
    };
    listaUsuarios.push(nuevaCuenta);
    localStorage.setItem(
      "listaUsuariosCreadosKey",
      JSON.stringify(listaUsuarios)
    );
    resetearFormulario();
    Swal.fire({
      title: "Creada",
      text: "Su cuenta ha sido creada exitosamente.",
      icon: "success",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK"
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = window.location.origin + "/index.html";
      }
    });
    }
  
  }

function resetearFormulario() {
    formulario.reset();
    reiniciarForm();
}
function reiniciarForm() {
    let validaciones = document.getElementsByClassName("form-control");
    const campoValidaciones = Array.from(validaciones);
    campoValidaciones.forEach((validaciones) => {
      validaciones.className = "form-control text-center";
    });
}
