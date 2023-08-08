import { Producto } from "./classProducto.js";
let codigo = document.getElementById('codigo');
let nombre = document.getElementById('nombre');
let precio = document.getElementById('precio');
let categoria = document.getElementById('categoria');
let imagen = document.getElementById('imagen');
let descripcion = document.getElementById('descripcion');
let stock = document.getElementById('stock');
let formulario = document.getElementById('formularioProducto');
let listaProductos = [];

const modalProductos = new bootstrap.Modal(
    document.getElementById("ventanaModal")
  );
let btnAgregarProducto = document.getElementById('btnAgregarProducto');

btnAgregarProducto.addEventListener('click' , mostrarFormulario);
function mostrarFormulario(){
    codigo.value = uuidv4();
    modalProductos.show();
}

formulario.addEventListener('submit' , crearProducto)

function crearProducto(e){
    e.preventDefault();
    let nuevoProducto = new Producto(codigo.value, nombre.value, precio.value, categoria.value, imagen.value, descripcion.value, stock.value);
    listaProductos.push(nuevoProducto);
    resetearFormulario();
}


function resetearFormulario(){
    formulario.reset();
    reiniciarForm();
}

function reiniciarForm(){
    let validaciones = document.getElementsByClassName('form-control');
    const campoValidaciones = Array.from(validaciones);
    campoValidaciones.forEach((validaciones)=>{validaciones.className= 'form-control'})
}