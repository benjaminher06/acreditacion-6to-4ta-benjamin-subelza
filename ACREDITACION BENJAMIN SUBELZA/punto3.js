function areaRectangulo(base, altura) {
    let area = base * altura;
    return area;
}
let base = parseFloat(prompt("Introduce la base del rectángulo: "));
let altura = parseFloat(prompt("Introduce la altura del rectángulo: "));
let area = areaRectangulo(base, altura);
console.log("El área del rectángulo es: " + area);
document.write("El área del rectángulo es: " + area);
