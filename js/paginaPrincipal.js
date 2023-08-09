let listaProductos = JSON.parse(localStorage.getItem('listaProductosKey')) || [];
let grilla = document.getElementById('grilla');

function cargarProductos(){
  if(listaProductos.length > 0){
    listaProductos.forEach((producto) => {crearProductos(producto)});
  }
}
function crearProductos(producto){
  grilla.innerHTML += `
  <aside class="col-6 col-md-4 col-lg-3 mt-3">
            <div class="card shadow">
              <img
                src="${producto.imagen}"
                class="card-img-top w-100 imagenProductos"
                alt="${producto.nombre}"
              />
              <div class="card-body">
                <h5 class="card-title">$${producto.precio}</h5>
                <span class="badge rounded-pill bg-primary">${producto.categoria}</span>
                <span class="badge rounded-pill bg-warning">Stock: ${producto.stock}</span>
                <p class="card-text">${producto.nombre}</p>
                <button class="btn btn-primary" onclick="verProductosDetalle('${producto.codigo}')">Ver más</button>
              </div>
            </div>
          </aside>`
}
cargarProductos();

function verProductosDetalle(codigo){
  window.location.href = window.location.origin + "/pages/detalleProducto.html?codigo=" + codigo
}

let buscador = document.getElementById('buscador');

buscador.addEventListener('change', buscarProducto);

function buscarProducto(){
  console.log(buscador.value);
  if(buscador.value === ''){
    grilla.innerHTML = '';
    listaProductos = JSON.parse(localStorage.getItem('listaProductosKey')) || [];
    cargarProductos();
  }else{
    let productosBuscados = listaProductos.filter((producto)=>{return producto.nombre === buscador.value || producto.categoria === buscador.value});
    listaProductos = productosBuscados
    grilla.innerHTML = '';
    cargarProductos();
  }
}
