let nombre = document.getElementById('nombre');
let precio = document.getElementById('precio');
let categoria = document.getElementById('categoria');
let imagen = document.getElementById('imagen');
let descripcion = document.getElementById('descripcion');
let stock = document.getElementById('stock');

nombre.addEventListener('blur', () => { verificarNombre(nombre) });
precio.addEventListener('blur', () => { verificarPrecio(precio) });
precio.addEventListener('keydown', (precio) => { validarNumeros(precio) });
categoria.addEventListener('blur', () => { verificarCategoria(categoria) });
imagen.addEventListener('blur', () => { verificarImagen(imagen) });
descripcion.addEventListener('blur', () => { verificarDescripcion(descripcion) });
stock.addEventListener('blur', () => { verificarStock(stock) });
stock.addEventListener('keydown', (stock) =>{validarNumerosStock(stock)})

function verificarNombre(input) {
    if (input.value.length >= 2 && input.value.length <= 30) {
        nombre.className = 'form-control is-valid'
        return true
    }
    else {
        nombre.className = 'form-control is-invalid'
        return false
    }
}

function verificarPrecio(input) {
    patron = /^\d+(.\d{1,4})?(.\d{1,4})?(,\d{1,2})?$/
    if (patron.test(input.value) && input.value.length <= 12) {
        precio.className = 'form-control is-valid'
        return true
    } else {
        precio.className = 'form-control is-invalid'
        return false
    }
}

function verificarCategoria(input) {
    if (input.value === '') {
        categoria.className = 'form-control is-invalid'
        return false
    } else {
        categoria.className = 'form-control is-valid'
        return true
    }
}

function verificarImagen(input) {
    let patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/;
    if (patron.test(input.value) && input.value.length >= 20) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}

function verificarDescripcion(input){
    if(input.value.length >=15 && input.value.length <=400){
        descripcion.className = 'form-control is-invalid'
        return false
    }else {
        descripcion.className = 'form-control is-valid'
        return true
    }
}

function verificarStock(input){
    if(input.value.length <=5){
        stock.className = 'form-control is-valid';
        return true;
    }else{
        stock.className = 'form-control is-invalid';
        return false;
    }
}

function validarNumeros(input) {
    if (
        input.key === "ArrowLeft" ||
        input.key === "ArrowRight" ||
        input.key === "ArrowUp" ||
        input.key === "ArrowDown" ||
        input.key === "Backspace" ||
        input.key === "Delete" ||
        input.key === "Tab" ||
        input.key === "Home" ||
        input.key === "End" ||
        input.key === "Enter" ||
        input.key === "Escape"
    ) {
        return;
    }
    if (!/[\d.\d,]/.test(input.key)) {
        input.preventDefault();
    }
}

function validarNumerosStock(input) {
    if (
        input.key === "ArrowLeft" ||
        input.key === "ArrowRight" ||
        input.key === "ArrowUp" ||
        input.key === "ArrowDown" ||
        input.key === "Backspace" ||
        input.key === "Delete" ||
        input.key === "Tab" ||
        input.key === "Home" ||
        input.key === "End" ||
        input.key === "Enter" ||
        input.key === "Escape"
    ) {
        return;
    }
    if (!/[\d\d]/.test(input.key)) {
        input.preventDefault();
    }
}