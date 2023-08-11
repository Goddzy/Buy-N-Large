let iniciarSesion = document.getElementById('iniciarSesion');
let crearUnaCuenta = document.getElementById('crearUnaCuenta');
let administrador = document.getElementById('administrador');
let cerrarSesion = document.getElementById('cerrarSesion');
let formulario = document.getElementById('usuarioLogear');
let emailLogear = document.getElementById('emailLogear');
let contraseniaLogear = document.getElementById('contraseniaLogear');


formulario.addEventListener('submit' , logearUsuario);
let listaUsuariosLogeados = JSON.parse(localStorage.getItem('listaUsuariosLogeadosKey')) || [];
let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuariosCreadosKey")) || [];
function logearUsuario(e){
  e.preventDefault();
  const usuarioEncontrado = listaUsuarios.find((usuario) => usuario.email === emailLogear.value);
  if(emailLogear.value === usuarioEncontrado.email && contraseniaLogear.value === usuarioEncontrado.contrasenia){
    let usuarioLogeado = {
      email: emailLogear.value,
      contrasenia: contraseniaLogear.value,
      administrador: usuarioEncontrado.administrador
    }
    listaUsuariosLogeados.push(usuarioLogeado);
    localStorage.setItem("listaUsuariosLogeadosKey",JSON.stringify(listaUsuariosLogeados)); 
    resetearFormulario();
    chequearUsuario();
    Swal.fire({
      title: "Datos correctos",
      text: "Ha iniciado sesión correctamente.",
      icon: "success",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK"
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = window.location.origin + "/index.html";

      }
    });
  }else{
    Swal.fire("Datos incorrectos", "Verifique si la contraseña o el email coinciden.", "error");
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

cerrarSesion.addEventListener('click' , borrarUsuario);

function borrarUsuario(){
  localStorage.removeItem('listaUsuariosLogeadosKey');
  chequearUsuario();
  Swal.fire("Cerrado de sesión", "Se cerró la sesión.", "success");
}

function chequearUsuario(){
  let usuario = JSON.parse(localStorage.getItem('listaUsuariosLogeadosKey'));
  if(usuario){
    iniciarSesion.className = 'nav-item d-none'
    crearUnaCuenta.className = 'nav-item d-none'
    cerrarSesion.className = 'nav-item'
    if(usuario[0].administrador){
      administrador.className = 'nav-item'
    }else{
      administrador.className = 'nav-item d-none'
    }
  }else{
    iniciarSesion.className = 'nav-item'
    crearUnaCuenta.className = 'nav-item'
    cerrarSesion.className = 'nav-item d-none'
    administrador.className = 'nav-item d-none'
  }
}
chequearUsuario();