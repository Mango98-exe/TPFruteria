let productosFruteria = [
    {id: 1, nombre: "anana", precio: 5000,img: "img/anana.jpg"},
    {id: 1, nombre: "banana", precio: 5500,img: "img/anana.jpg"},
    {id: 1, nombre: "manzana", precio: 5200,img: "img/anana.jpg"},
    {id: 1, nombre: "kiwi", precio: 6000,img: "img/anana.jpg"},
    {id: 1, nombre: "mango", precio: 9000,img: "img/anana.jpg"},
    {id: 1, nombre: "sandia", precio: 10000,img: "img/anana.jpg"},
    {id: 1, nombre: "cerezas", precio: 7500,img: "img/anana.jpg"},
    {id: 1, nombre: "durazno", precio:6000,img: "img/anana.jpg"},
    {id: 1, nombre: "naranja", precio: 5300,img: "img/anana.jpg"},
    {id: 1, nombre: "melon", precio: 8000,img: "img/anana.jpg"},

]













let cuadriculaProductos = document.querySelector(".productGrid");
let BarraBusqueda = document.querySelector(".search-bar");

let botonesCarrito = document.querySelectorAll(".add-to-cart");
let objetosCarrito = document.getElementById("cart-items");
let precioCarrito = document.getElementById("total-prize");
let contadorCarrito = document.getElementById("cart-count")

let carrito = [];




//mostrar productos//

function mostrarProductos(array){
    let cartaProducto ="";

    for(let i = 0;i < array.length;i++){
        cartaProducto += `<div class="product.card">
    <img src="${array[i].img}" alt="${array[i].nombre}">
    <h3>${array[i].nombre}</h3>
    <p>$${array[i].precio}</p>
    <button class="add-to-cart" onclick="agregarCarrito(${array[i].id})">Agregar a carrito</button>
</div>`;
    }
cuadriculaProductos.innerHTML = cartaProducto;

}

//agregar a carrito//
function agregarCarrito(id){
    console.log(`id del producto:${id}`)


    let frutaSeleccionada = productosFruteria.find(fruta => fruta.id === id);
}

    
//funcion inicializadora

function init(){
    
    console.log(productosFruteria.length);

    console.log(productosFruteria);

    console.table(productosFruteria);

    mostrarProductos(productosFruteria);
}