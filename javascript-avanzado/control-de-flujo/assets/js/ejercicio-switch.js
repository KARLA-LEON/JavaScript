let precio = parseInt(prompt("Total de la compra"))
let cupon = prompt("Tipo de cupón:")

switch(cupon){
    case "Bronce":
        document.write(`El precio total de tu compra es ${precio}, con tu cupón ${cupon}, el precio final es de ${precio*0.95}.`);
        break;
    case "Plata":
        document.write(`El precio total de tu compra es ${precio}, con tu cupón ${cupon}, el precio final es de ${precio*0.90}.`);
        break;
    case "Oro":
        document.write(`El precio total de tu compra es ${precio}, con tu cupón ${cupon}, el precio final es de ${precio*0.80}.`);
        break;
    case "Platino":
        document.write(`El precio total de tu compra es ${precio}, con tu cupón ${cupon}, el precio final es de ${precio*0.75}.`);
        break;
    default:
        document.write("Cupón no válido")
    break;
}

