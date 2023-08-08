import { Producto } from "./classProducto.js";
let codigo = document.getElementById('codigo');
let nombre = document.getElementById('nombre');
let precio = document.getElementById('precio');
let categoria = document.getElementById('categoria');
let imagen = document.getElementById('imagen');
let descripcion = document.getElementById('descripcion');
let stock = document.getElementById('stock');
let listaProductos = [];

const modalProductos = new bootstrap.Modal(
    document.getElementById("formularioProducto")
  );
let btnAgregarProducto = document.getElementById('btnAgregarProducto');

btnAgregarProducto.addEventListener('click' , mostrarFormulario);
function mostrarFormulario(){
    codigo.value = uuidv4();
    modalProductos.show();
}

function resetearFormulario(){
    
}
