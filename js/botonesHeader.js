let iniciarSesionBoton = document.getElementById('iniciarSesion');
let crearUnaCuentaBoton = document.getElementById('crearUnaCuenta');
let administradorBoton = document.getElementById('administrador');
cerrarSesionBoton = document.getElementById('cerrarSesion');

cerrarSesionBoton.addEventListener('click' , borrarUsuario);
function borrarUsuario(){
  localStorage.removeItem('listaUsuariosLogeadosKey');
  chequearUsuario();
  Swal.fire("Cerrado de sesión", "Se cerró la sesión.", "success");
}

function chequearUsuario(){
  let usuario = JSON.parse(localStorage.getItem('listaUsuariosLogeadosKey'));
  if(usuario){
    iniciarSesionBoton.className = 'nav-item d-none'
    crearUnaCuentaBoton.className = 'nav-item d-none'
    cerrarSesionBoton.className = 'nav-item'
    if(usuario[0].administrador){
      administradorBoton.className = 'nav-item'
    }else{
      administradorBoton.className = 'nav-item d-none'
    }
  }else{
    iniciarSesionBoton.className = 'nav-item'
    crearUnaCuentaBoton.className = 'nav-item'
    cerrarSesionBoton.className = 'nav-item d-none'
    administradorBoton.className = 'nav-item d-none'
  }
}
chequearUsuario();