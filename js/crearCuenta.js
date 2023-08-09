import { Usuarios } from "./classUsuario";
let crearCuenta = document.getElementById('crearCuenta');
let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosCreadosKey')) || [];

crearCuenta.addEventListenert('submit', crearCuenta);

// function crearCuenta(e){
//   e.preventDefault();
  //crear mi class usuario
  //acá va a crear el usuario con los datos del formulario
  //chequear que el email no exista en el localstorage
  //si existe, muestro cartel de que ya existe
  //si no existe, pusheo el usuario en listaUsuarios, hago el local storage
  // localStorage.setItem("listaUsuariosCreadosKey", JSON.stringify(listaUsuarios));
  //redireccionar al inicio|
// }