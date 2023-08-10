const urlParametro = new URLSearchParams(window.location.search);

let listaProductos =
  JSON.parse(localStorage.getItem("listaProductosKey")) || [];

let listaProductosCarrito =
  JSON.parse(localStorage.getItem("listaProductosCarritoKey")) || [];

let productoBuscado = listaProductos.find(
  (producto) => producto.codigo === urlParametro.get("codigo")
);

let detalleProducto = document.getElementById("detalleProducto");

detalleProducto.innerHTML = `  <article class="row">
<aside class="col-12 col-md-4 col-lg-4">
  <img src="${productoBuscado.imagen}" alt="${productoBuscado.nombre}" class="w-100">
</aside>
<aside class="col-12 col-md-8 col-lg-8">
  <h1 class="pb-3"><i>${productoBuscado.nombre}</i></h1>
  <h4>$${productoBuscado.precio}</h4>
  <p class="pt-3 pb-1">${productoBuscado.descripcion}</p>
  <p class="pt-3">Cantidad en Stock: ${productoBuscado.stock}</p>
  <button class="btn btn-primary my-3" type="submit" onclick="redireccionar()">Comprar ahora</button>
  <button class="btn btn-warning my-3" type="submit" onclick="agregarProductoCarrito()">Agregar al carrito</button>
</aside>
</article>`;

function redireccionar() {
  window.location.href = window.location.origin + "/pages/error404.html";
}

function agregarProductoCarrito() {
  const urlParametro = new URLSearchParams(window.location.search);
  let productoBuscado = listaProductos.find(
    (producto) => producto.codigo === urlParametro.get("codigo")
  );
  let ProductoFiltrado = listaProductosCarrito.filter((producto) => {
    return producto.codigo === urlParametro.get("codigo");
  });
  if (ProductoFiltrado.length > 0) {
    Swal.fire("Error", "El producto ya ha sido agregado!", "error");
  } else {
    listaProductosCarrito.push(productoBuscado);
    localStorage.setItem(
      "listaProductosCarritoKey",
      JSON.stringify(listaProductosCarrito)
    );
    Swal.fire(
      "Listo!",
      "El producto se ha agregado a su carrito de compra.",
      "success"
    );
  }
}
