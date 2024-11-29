function calcularPrecioConDescuento(precioOriginal, descuento) {
    return precioOriginal - (precioOriginal * (descuento / 100));
  }
  let precioOriginal = parseFloat(prompt("Ingresa el precio original del producto:"));
  let descuento = parseFloat(prompt("Ingresa el porcentaje de descuento:"));
  let precioFinal = calcularPrecioConDescuento(precioOriginal, descuento);
  console.log("El precio final con descuento es: " + precioFinal);
  document.write("El precio final con descuento es: " + precioFinal);