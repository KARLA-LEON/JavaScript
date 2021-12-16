const compra = parseFloat(prompt("Ingresa el total de tu compra"));
var descuento = 0;
var total = 0;

function totalDeCompra(compra, descuento){
    total = compra - descuento;
    return total;
}

if (compra < 100) {
    descuento = compra * 0.10;
    totalDeCompra(compra, descuento);
    document.write("El total de tu compra es $" + total);

} else if (compra>100 $$ compra <200) {
    descuento = compra * 0.20;
    totalDeCompra( compra, descuento);
    document.write("El total de tu compra es $" + total);

} else {
    descuento = compra * 0.30;
    totalDeCompra( compra, descuento);
    document.write("El total de tu compra es $" + total);
}