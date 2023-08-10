import { Producto } from "./classProducto.js";
let codigo = document.getElementById("codigo");
let nombre = document.getElementById("nombre");
let precio = document.getElementById("precio");
let categoria = document.getElementById("categoria");
let imagen = document.getElementById("imagen");
let descripcion = document.getElementById("descripcion");
let stock = document.getElementById("stock");
let formulario = document.getElementById("formularioProducto");
let listaProductos =JSON.parse(localStorage.getItem("listaProductosKey")) || [];
let booleanoParaEditarOCrear = true;

const modalProductos = new bootstrap.Modal(
  document.getElementById("ventanaModal")
);
let btnAgregarProducto = document.getElementById("btnAgregarProducto");

btnAgregarProducto.addEventListener("click", mostrarFormulario);
function mostrarFormulario() {
  resetearFormulario();
  codigo.value = uuidv4();
  modalProductos.show();
}

formulario.addEventListener("submit", crearProducto);

function crearProducto(e) {
  e.preventDefault();
  if(booleanoParaEditarOCrear){
  let nuevoProducto = new Producto(
    codigo.value,
    nombre.value,
    precio.value,
    categoria.value,
    imagen.value,
    descripcion.value,
    stock.value
  );
  listaProductos.push(nuevoProducto);
  guardarProductosEnLocalStorage();
  crearFila(nuevoProducto);
  resetearFormulario();
    }else{
        actualizarProducto();
    }
}

cargarProductos();
function cargarProductos() {
  if (listaProductos.length > 0) {
    listaProductos.forEach((productos) => {
      crearFila(productos);
    });
  }
}

function crearFila(producto) {
  let tablaBody = document.getElementById("tablaBody");
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
            <button class="btn btn-danger my-1" type="button" onclick="borrarProducto('${producto.codigo}')">
                <i class="fa-solid fa-eraser"></i>
            </button>
            <button class="btn btn-warning my-1" type="button" onclick="editarProducto('${producto.codigo}')">
                <i class="fa-regular fa-pen-to-square"></i>
            </button>
        </ul>
    </td>
</tr>`;
}

window.borrarProducto = function (codigoEncontrado) {
  Swal.fire({
    title: "Quiere borrar el producto?",
    text: "No se podrán restaurar los datos",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      let listaProductosSalvados = listaProductos.filter(
        (producto) => producto.codigo != codigoEncontrado
      );
      listaProductos = listaProductosSalvados;
      guardarProductosEnLocalStorage();
      tablaBody.innerHTML = "";
      cargarProductos();
      Swal.fire("Eliminado", "El producto ha sido removido.", "success");
    }
  });
};

window.editarProducto = function (codigoEncontrado) {
  booleanoParaEditarOCrear = false;
  resetearFormulario();
  let ProductoEditado = listaProductos.find(
    (producto) => producto.codigo === codigoEncontrado
  );
  modalProductos.show();
  codigo.value = ProductoEditado.codigo;
  nombre.value = ProductoEditado.nombre;
  precio.value = ProductoEditado.precio;
  categoria.value = ProductoEditado.categoria;
  imagen.value = ProductoEditado.imagen;
  descripcion.value = ProductoEditado.descripcion;
  stock.value = ProductoEditado.stock;
};

function actualizarProducto(){
    let nuevoProducto = listaProductos.findIndex((producto) => producto.codigo === codigo.value);
    listaProductos[nuevoProducto].codigo = codigo.value;
    listaProductos[nuevoProducto].nombre = nombre.value;
    listaProductos[nuevoProducto].precio = precio.value;
    listaProductos[nuevoProducto].categoria = categoria.value;
    listaProductos[nuevoProducto].imagen = imagen.value;
    listaProductos[nuevoProducto].descripcion = descripcion.value;
    listaProductos[nuevoProducto].stock = stock.value;
    guardarProductosEnLocalStorage();
    tablaBody.innerHTML = '';
    cargarProductos();
    modalProductos.hide();
    Swal.fire("Editado", "El producto ha sido editado.", "success");
}

function resetearFormulario() {
  formulario.reset();
  reiniciarForm();
  codigo.value = uuidv4();
}

function reiniciarForm() {
  let validaciones = document.getElementsByClassName("form-control");
  const campoValidaciones = Array.from(validaciones);
  campoValidaciones.forEach((validaciones) => {
    validaciones.className = "form-control";
  });
}

function guardarProductosEnLocalStorage() {
  localStorage.setItem("listaProductosKey", JSON.stringify(listaProductos));
}
