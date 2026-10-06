const { act } = require("react");

//Por clase -- el primero que conicida
const boton = document.querySelector('.boton-reservar');

//Por id
const menu = document.querySelector('#menu-principal');

//Por atributo
const email = document.querySelector('input [typr="email"');

//Combinador descendiente -- p dentro de  .tarjeta
const precio = document.querySelector('.tarejta p.precio');

//Pseudo-clase -- la primera tarjeta del listado
const primera = document.querySelector('.tarejta:first-child');

//queeySelectorAll -- SIEMPRE devuelve una NodeList
const tarjetas = document.querySelectorAll('.tarjeta-platillo');
console.log(tarjetas.length); //ej.3

const tarjeta = document.querySelector('.tarjeta-platillo');

tarjeta.classList.add('destacado'); //agrega
tarjeta.classList.remove('destacado'); //quita
tarjeta.classList.toggle('destacado'); //agrega o quita
tarjeta.classList.contains('destacado'); // true / false

//Toogle con segundo argumento -- forzar estado
tarjeta.classList.toggle('destacado', true); //agrega
tarjeta.classList.toggle('destacado', false); //quita

//Ejemplo real: modo oscuro con preferencias guardad
const btnModo = document.querySelector('#btn-modo-oscuro');
btnModo.addEventListener('Click', () => {
    document.body.classList.toggle('oscuro');
    const activo = document.body.classList.contains('oscuro');
    localStorage.setItem('modoOscuro', activo)
});

const botonn = document.querySelector('#mi -boton ');
boton.addEventListener('click ', function(event) {
console.log('Clic en:', event.target);
event.target.textContent = '¡Clic!';
});
// Reaccionar mientras el usuario escribe
const campo = document.querySelector('#nombre ');
campo.addEventListener('input ', (event) => {
console.log('Valor actual:', event.target.value);
});
// Reaccionar al enviar un formulario
const form = document.querySelector('#form -contacto ');
form.addEventListener('submit ', (event) => {
event.preventDefault (); // evita la recarga de página
console.log('Formulario enviado sin recargar ');
});
// removeEventListener -- necesita la MISMA referencia de
función
function saludar () { console.log('Hola'); }
boton.addEventListener('click ', saludar);
boton.removeEventListener('click ', saludar);

// Caso 1: dentro de un <script > mientras carga --
funciona
document.write('<p>Cargado directo en el HTML </p>');
// Caso 2: después de que la página ya cargó -- rompe
todo
window.addEventListener('load', () => {
document.write('Tarde!');
// El navegador ABRE un documento nuevo y BORRA
// todo el HTML , CSS y JS que ya estaba en pantalla
});
// Caso 3: dentro de un evento de clic -- mismo problema
boton.addEventListener('click ', () => {
document.write('Esto borra la página entera ');
});

// Un solo elemento con etiquetas HTML
const titulo = document.querySelector('.titulo -seccion ');
titulo.innerHTML = '<em >Menú </em > del día';
// Construir VARIOS elementos con map + join
const platillos = [
{ nombre: 'Pupusas revueltas ', precio: 1.50 },
{ nombre: 'Yuca frita ', precio: 3.00 },
{ nombre: 'Atol de elote ', precio: 1.25 },
];
const lista = document.querySelector('.lista -platillos ');
lista.innerHTML = platillos
.map(p => `<li >${p.nombre} - $${p.precio}</li >`)
.join('');
// CUIDADO : innerHTML += vuelve a parsear TODO el HTML
// -- lento y pierde listeners ya puestos en los hijos
lista.innerHTML += '<li >Otro platillo </li >'; // evitar en loops

// Un "usuario" escrcibe esto en un formulario de comentarios

const comentarioMalicioso = '<img src  ="x" onerror="alert`Hackeado!`>';

const contenedor = document.querySelector('.comentarios');

// PELIGRO : el navegador ejecuta el onerror -> alert ()
// contenedor . innerHTML = comentarioMalicioso ;
// SEGURO : se inserta como texto plano , la etiqueta
// <img > nunca se interpreta , solo se ve como texto
contenedor.textContent = comentarioMalicioso;

// Resultado en pantalla :
// <img src ="x" onerror =" alert(` Hackeado !`)">
// (texto literal , no una imagen rota ni una alerta )