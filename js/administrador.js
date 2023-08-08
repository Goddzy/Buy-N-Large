import { Producto } from "./classProducto.js";
let codigo = document.getElementById('codigo');
let nombre = document.getElementById('nombre');
let precio = document.getElementById('precio');
let categoria = document.getElementById('categoria');
let imagen = document.getElementById('imagen');
let descripcion = document.getElementById('descripcion');
let stock = document.getElementById('stock');
let formulario = document.getElementById('formularioProducto');
let listaProductos = JSON.parse(localStorage.getItem('listaProductosKey')) || [];

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
    guardarProductosEnLocalStorage();
    crearFila(nuevoProducto);
    resetearFormulario();
}

cargarProductos();
function cargarProductos(){
    if(listaProductos.length >0){
        listaProductos.forEach((productos)=>{crearFila(productos);
        })
    }
}

function crearFila(producto){
    let tablaBody = document.getElementById('tablaBody');
    tablaBody.innerHTML += `<tr>
    <td>
        ${producto.codigo}
    </td>
    <td>${producto.nombre}</td>
    <td>
     ${producto.precio}
    </td>
    <td>
       ${producto.categoria}
    </td>
    <td>
     ${producto.imagen}
    </td>
    <td>
        ${producto.descripcion}
    </td>
    <td>
     ${producto.stock}
    </td>
    <td>
        <ul>
            <button class="btn btn-danger my-1" type="button">
                <i class="fa-solid fa-eraser"></i>
            </button>
            <button class="btn btn-warning my-1" type="button">
                <i class="fa-regular fa-pen-to-square"></i>
            </button>
        </ul>
    </td>
</tr>`
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

function guardarProductosEnLocalStorage(){
    localStorage.setItem('listaProductosKey' , JSON.stringify(listaProductos));
}