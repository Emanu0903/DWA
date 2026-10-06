// TIENDA - EJERCICIO 1/2
const productos = [
    {nombre: 'Camisa Oxford', precio: 29.99, categoria: 'ropa'},
    {nombre: 'Mochila Urban', precio: 54.50, categoria: 'accesorio'},
    {nombre: 'Tenia Runner', precio: 89.00, categoria: 'calzado'}
];

// 1. Calcular precio final con descuento e IVA (Corregido el nombre aquí)
function calcularPrecioFinal(precio, descuento = 0, iva = 0.13) {
    const neto = precio * (1 - descuento);
    return parseFloat((neto * (1 + iva)).toFixed(2));
}

// 2. Formatear como moneda
const formatearPrecio = (precio) => `$${precio.toFixed(2)}`;

//3. Etiqueta de categoria (objeto como mapa)
const etiquetas = { ropa: 'Ropa y moda', accesorio: 'Accesorios', calzado: 'Calzado'};
const obtenerEtiqueta = cat => etiquetas[cat] ?? 'General';

//4. Generar tarjeta (texto multi-linea)
function generarTarjeta(prod, dto = 0) {
    const pFinal = calcularPrecioFinal(prod.precio, dto);
    const orig = formatearPrecio(prod.precio);
    const dtoStr = dto > 0
        ? `(${dto*100}% dto. - antes ${orig})`
        : '';
    return `--- ${prod.nombre} ---
Categoria: ${obtenerEtiqueta(prod.categoria)}
Precio: ${formatearPrecio(pFinal)} ${dtoStr}`.trim();
}

// 5. Mostrar tarjetas en consola
productos.forEach(p => {
    console.log(generarTarjeta(p, 0.10));
    console.log('');
});

console.log(generarTarjeta(productos[2], 0.20));