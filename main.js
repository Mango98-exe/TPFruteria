
let productosFruteria = [  
    {id: 1, nombre: "anana", precio: 5000, img: "img/anana.jpg"},  
    {id: 2, nombre: "banana", precio: 5500, img: "img/banana.jpg"},  
    {id: 3, nombre: "coco", precio: 5200, img: "img/coco.jpg"},  
    {id: 4, nombre: "kiwi", precio: 6000, img: "img/kiwi.jpg"},  
    {id: 5, nombre: "mango", precio: 9000, img: "img/mango.jpg"},  
    {id: 6, nombre: "sandia", precio: 10000, img: "img/sandia.jpg"},  
    {id: 7, nombre: "frutillas", precio: 7500, img: "img/frutilla.jpg"},  
    {id: 8, nombre: "durazno", precio: 6000, img: "img/durazno.jpg"},  
    {id: 9, nombre: "naranja", precio: 5300, img: "img/naranja.jpg"},  
    {id: 10, nombre: "melon", precio: 8000, img: "img/melon.jpg"}, 
    {id: 11, nombre: "manzana roja", precio: 8000, img: "img/manzana roja.jpg"},  
    {id: 12, nombre: "manzana verde", precio: 8000, img: "img/manzana verde.jpg"}, 
];  

let cuadriculaProductos = document.querySelector(".product-grid");  
let objetosCarrito = document.getElementById("cart-items");  
let precioCarrito = document.getElementById("total-price");  
let contadorCarrito = document.getElementById("cart-count");  
let BarraBusqueda = document.querySelector(".search-bar");  

let carrito = [];  

// Mostrar productos  

function mostrarProductos(array) {  
    let cartaProducto = "";  

    for (let i = 0; i < array.length; i++) {  
        cartaProducto += `<div class="product-card">  
            <img src="${array[i].img}" alt="${array[i].nombre}">  
            <h3>${array[i].nombre}</h3>  
            <p>$${array[i].precio}</p>  
            <button class="add-to-cart" onclick="agregarCarrito(${array[i].id})">Agregar a carrito</button>  
        </div>`;  
    }  
    cuadriculaProductos.innerHTML = cartaProducto;  
}  

// Agregar al carrito  

function agregarCarrito(id) {  
    let frutaSeleccionada = productosFruteria.find(fruta => fruta.id === id);  
    if (frutaSeleccionada) {  
        carrito.push(frutaSeleccionada);  
        actualizarCarrito();  
    }  
}  

// Actualizar carrito  

function actualizarCarrito() {  
    if (carrito.length === 0) {  
        objetosCarrito.innerHTML = "<p>No hay elementos en el carrito</p>";  
    } else {  
        objetosCarrito.innerHTML = carrito.map((item, index) => `  
            <li>  
                ${item.nombre} - $${item.precio}   
                <button class="eliminarCarrito" onclick="eliminarDelCarrito(${index})">Eliminar</button>  
            </li>  
        `).join('');  
    }  
    precioCarrito.innerText = `$${carrito.reduce((total, item) => total + item.precio, 0)}`;  
    contadorCarrito.innerText = carrito.length;  
}  

// Eliminar del carrito 

function eliminarDelCarrito(index) {  
    carrito.splice(index, 1); 
    actualizarCarrito(); 
}  

// Filtrar productos  

function filtrarProductos() {  
    const textoBusqueda = BarraBusqueda.value.toLowerCase();  
    const productosFiltrados = productosFruteria.filter(producto =>   
        producto.nombre.toLowerCase().includes(textoBusqueda)  
    );  
    mostrarProductos(productosFiltrados);  
}

// Función inicializadora  

function init() {  
    console.log(productosFruteria.length);  
    console.log(productosFruteria);  
    console.table(productosFruteria);  
    mostrarProductos(productosFruteria);  
}  

// Evento de búsqueda  

BarraBusqueda.addEventListener("input", filtrarProductos);  


init();  