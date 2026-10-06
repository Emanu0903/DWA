//Inicio de clase practica 22
//Operadores logicos

const precio = 8.5
const cantidad = 2

console.log("Multiplicacion:",precio * cantidad); // 17 multiplicacion
console.log("Suma:", precio + cantidad); //10.5 suma
console.log("Resta:", precio - cantidad); //6.5 resta
console.log("Division:",precio / cantidad); //4.25 division

console.log(0.1 + 0.2); // 0.3000000004
console.log((0.1+0.2).toFixed(2));

console.log('5' + 3);
console.log(5 + '3');
console.log('5' - 3);


//MODULO % EXPONENTE
// Residuo de una division
console.log(5 % 2);
console.log(10 % 5);
console.log(7 % 3);

//Funcion  para validar un numero par

function esPar(n) { return  n % 2 === 0};

console.log(esPar(8));
console.log(esPar(7));

const estudiantes = 23
const porGrupo = 5

console.log("Grupos: " + Math.floor(estudiantes / porGrupo)); // 4 grupos
console.log("Sobran: " + estudiantes % porGrupo + " estudiantes");

console.log("2*2*2 =>" +2 ** 3);
console.log("10*10 =>" + 10 ** 2);
console.log("4*0.5 =>", 4 ** 0.5);

console.log(Math.pow(2,3));


//ASIGNACION COMPUESTA
let totalPedidos = 0;

//FORMA LARGA
totalPedidos = totalPedidos + 8.5;

//FORMA CORTA
totalPedidos += 8.5; // Suma y aisgna
totalPedidos -= 8.5 //resta y asignar
totalPedidos *= 8.5 // Multiplicar y asignar
totalPedidos /= 8.5; // Dividir y asignar
totalPedidos **= 8.5 //eleva y asigna

//Incremento y decremento

let contador = 0;
contador++; // contador = contador + 1;
contador--; // contador - 1;

let total = 0;
let items = 0;

function agregarCarrito(precio) {
    total += precio;
    items++;
}

agregarCarrito(1.50);
agregarCarrito(3.0);

console.log("Items: " + items + ", Total: " + total + " GRACIAS POR SU COMPRA");


const totalPedido = 18;
const esClienteFrecuente = true;

// AND - => todas las condiciones deben cumplirse
const aplicarDescuento = esClienteFrecuente && totalPedido > 15; // TRUE
console.log("AND APLICA: " + aplicarDescuento); // TRUE

// || -- Valor por defecto si algo falta
const propina = 0;
const propinaFinal = propina || 1.00; // 1.00
console.log(propinaFinal);


const sinStock = false;
if (!sinStock) { console.log('Productos Disponible.')}

// combinacion con Operadores aritmeticos ? Si: NO
//SI APLICA DESCUENTO => EL TOTAL DE PEDIDO - 10% SINO 0 SIN DESCUENTO;
const descuento = aplicarDescuento ? totalPedido * 0.10: 0;
const totalFinal = totalPedido - descuento;
console.log("Total de pedido: 18 - 2.8 => " + totalFinal);






