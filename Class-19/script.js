//Diferencia de Var - Evitar en el codigo Moderno

var nombre = "Ana";
var nombre = "Luis";

console.log(nombre)

//Let - Para valores que cambian

let edad = 20;
edad = 25;

if(true){
    let bloque = "solo aqui!!!!";
    console.log(bloque);
}


//Const - Para valores que no cambian
const PI = 3.14159

PI = 3;

console.log(PI)

console.log(typeof 'hola');
console.log(typeof 43);
console.log(typeof 34.90);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

console.log(typeof {});
console.log(typeof []);

console.log(typeof function(){});

//Conversion de tipos

const numero = parseInt("42px")
const decimal = parseFloat('3.14')
const texto = String(100)
const booleano = Boolean(0)
const boleano2 = Boolean('hola')

//Verificar NaN (isNaN devuelve true is es Nan)
console.log(isNaN('texto' * 2));
console.log(isNaN(42));
const nombre = 'Ana'
const edad2 = 22
const precio = 29.99

//Sin template literal (mas legiible)
const msg1 = 'Hola' + nombre + '.Tienes' + edad + 'años'

//Con template literal (mas legible)
const msg2 = `Hola. ${nombre}. Tienes ${edad} años`

//Expresiones dentro de ${}
const descuento = 0.15
const msg3 = `Precio con descuento : $${(precio * (1 - descuento)). toFixed(2)}`
console.log(msg3); // "Precio don descuento $25.49"

// Multi-linea sin \n

const html =
<div class="tarjeta">
    <h2>${nombre}</h2>
    <p>${edad} años</p>
</div>

//Generar HTML dinamico con template literal
const productos = ['Camisa', 'Pantalon', 'Zapatos']
const lista = productos
    .map ((prod, i) => `<li>${i + 1}. ${prod}</li>`)
    .join('')

    document.querySelector('#lista').innerHTML = `<ul> ${lista}</ul>`

    //Construir mensajes de error descriptivos
    function mostrarError (campo, mensaje) {
        const el = document.querySelector(`#error-${campo}`)
        if (el) {
            el.textContent = `${mensaje}`
            el.classList.remove('Oculto')
        }
    }

mostrarError('email', 'Formato invalido')


//1. SCOPE GOBLAl - accesible en todo el script
const APP_NOMBRE = 'MiTienda'
let paginaActual = 'inicio'

// 2. SCOPE DE FUNCION - solo dentro de la funcion
function calcularTotalPrecio(precio, cantidad) {
    const subtotal = precio * cantidad // Sol existe aqui
    const impuesto = precio * 0.13 // Solo existe aqui
    return subtotal + impuesto
}

// 3. SCOPE DE BLOQUE - let/const  dentro de {}
function revisar (stock) {
    if (stock > 0 ) {
        const mensaje = 'Disponible' // Solo en este {}
        console.log(mensaje); // OK
    }
    //console.log(mensaje) //Error: no existe aqui
}

//Declaracion - hoisted: se puede llamar antes
saludar ('Carlos')
function saluda(nombre) {
    console.log(`Hola, ${nombre}`);
}

// Funcion con valor de retorno
function calcularArea(base, altura) {
    const area = (base * altura) / 2
    return area
}

const resultado = calcularArea(6,8)
console.log(`Area: ${resultado} cm2`); //24 cm2

//return detiene la funcion inmediatamente
function encontrarPrimeroNegativo(nums) {
    for (let i = 0; 1 < nums.length; 1++) {
        if (nums[1] < 0 ) return nums[1]
    }
    return null
}

console.log(encontrarPrimeroNegativo([3, 7, -2, 5]));


// Expresion - NO hoisted: declarar antes de llamar
const calcular = function(a, b) {
    return a + b
}

console.log(calcular(3, 4)); //7

// 1. Cuerpo completo con return explicito
const sumar = (a, b) => { return a + b}

// 2. Cuerpo conciso - return implicito
const multilpicar = (a ,b) => a * b

//3. Un solo parametro - parentesis opcionales
const cuadrado = n => n * n

// 4. Sin parametros - parentesis obligatorios
const obtenerFecha = () => new Date().
    toLocaleDateString();
console.log(sumar(3, 4));
console.log(multilpicar(3, 4));
console.log(cuadrado(5));

// SI el argumento no se oasa, se usa el valr por defecto

function crearMensaje ( nombre, saludo = 'Hola') {
    return`${saludo}, ${nombre}`
}

console.log(crearMensaje('Ana')); // Hola Ana
console.log(crearMensaje('Luis', 'Buenas')); // Buenas, Luis

//Los defaults tambien pueden ser expresiones
function calcularPrecio (base, descuento = 0, iva = 0.13) {
    const neto = base * (1 - descuento)
    return neto * (1 + iva)
}

console.log(calcularPrecio(100)); //113
console.log(calcularPrecio(100, 0.10)); 101.70












