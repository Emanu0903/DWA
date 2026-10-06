//Mensaje de informacion
console.log("Script cargado correctamente");


//Mensaje de advertencia
console.warn("Esta funcion esta desactualizada")

//Error (fondo rojo)
console.error("No se encontro el elemento")

///Mostrar el tipo de valor
console.log(typeof 42) // number
console.log(typeof 'hola') //string
console.log(typeof true) //boolean

const nombre = "Ana"
console.log("Nombre actual:", nombre );

//ELEMENTOS DOM

//getElementById
const titulo = document.getElementById("titulo-principal")
const form = document.getElementById("form-contacto")

// 2. querySelector — cualquier selector CSS válido
const boton = document.querySelector('.btn -primario ');
const nav = document.querySelector('nav');
const primero = document.querySelector('li:first -child ');
const inputEmail = document.querySelector('input[type="email"]')

// 3. querySelectorAll — todos los que coincidan
const tarjetas = document.querySelectorAll('.tarjeta ');
const links = document.querySelectorAll('a[href]');
const parrafos = document.querySelectorAll('main p');

tarjetas.forEach((tarjeta))


