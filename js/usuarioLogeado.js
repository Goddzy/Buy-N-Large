let formulario = document.getElementById('usuarioLogear');
let emailLogear = document.getElementById('emailLogear');
let contraseniaLogear = document.getElementById('contraseniaLogear');
let btnCerrarSesion = document.getElementById('cerrarSesion');
usuarioLogear.addEventListener('submit' , logearUsuario);
let listaUsuariosLogeados = JSON.parse(localStorage.getItem('listaUsuariosLogeadosKey')) || [];
let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuariosCreadosKey")) || [];
function logearUsuario(e){
  e.preventDefault();
  const usuarioEncontrado = listaUsuarios.find((usuario) => usuario.email === emailLogear.value);
  if(emailLogear.value === usuarioEncontrado.email && contraseniaLogear.value === usuarioEncontrado.contrasenia){
    let usuarioLogeado = {
      email: emailLogear.value,
      contrasenia: contraseniaLogear.value 
    }
    listaUsuarios.push(usuarioLogeado);
    localStorage.setItem("listaUsuariosLogeadosKey",JSON.stringify(listaUsuarios));
    resetearFormulario();
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
