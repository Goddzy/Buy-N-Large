let listaProductosCarrito =
  JSON.parse(localStorage.getItem("listaProductosCarritoKey")) || [];

function cargarProductos(){
  if(listaProductosCarrito.length >0){
    listaProductosCarrito.forEach((producto)=>{dibujarTabla(producto)})
  }
}
cargarProductos()
function dibujarTabla(producto){
let carritoCompras = document.getElementById("carritoCompras");
    carritoCompras.innerHTML += `<aside class="col-12 col-md-2 mb-4">
    <img
      src="${producto.imagen}"
      alt="${producto.nombre}"
      class="w-100 mt-5"
    />
  </aside>
  <aside class="col-12 col-md-6 mt-5">
    <h2>${producto.nombre}</h2>
    <p>
      ${producto.descripcion}
    </p>
  </aside>
  <aside class="col-6 col-md-3 mb-4">
    <span class="badge bg-dark fs-5 mt-5">$${producto.precio}</span>
  </aside>
  <aside class="col-6 col-md-1 mb-4 mt-5">
    <button class="btn btn-danger" onclick="borrarProducto('${producto.codigo}')">
      <i class="fa-solid fa-eraser"></i>
    </button>
  </aside>`;
}

function borrarProducto(codigo){
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
      let productosSalvados = listaProductosCarrito.filter((productos)=> codigo != productos.codigo);
      listaProductos = productosSalvados;
      localStorage.setItem("listaProductosCarritoKey", JSON.stringify(listaProductos));
      let carritoCompras = document.getElementById("carritoCompras");
      carritoCompras.innerHTML= ''
      cargarProductos();
      Swal.fire("Removido", "El producto ha sido removido.", "success");
    }
  });
}