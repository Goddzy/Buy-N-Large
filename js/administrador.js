const modalProductos = new bootstrap.Modal(
    document.getElementById("formularioProducto")
  );
let btnAgregarProducto = document.getElementById('btnAgregarProducto');

btnAgregarProducto.addEventListener('click' , mostrarFormulario);
function mostrarFormulario(){
    modalProductos.show();
}

