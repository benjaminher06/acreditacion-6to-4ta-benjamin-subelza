let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

document.write(arreglo[2]);
document.write(arreglo[3]);
document.write(arreglo[6]);
console.log(arreglo[2]);
console.log(arreglo[3]);
console.log(arreglo[6]);

arreglo[1] = "AMEBA";
arreglo[2] = "ZLED";
document.write(arreglo[1,2]);

arreglo.push(11);
console.log(arreglo[10]);

document.write(arreglo.length);
console.log(arreglo.length);

console.log(arreglo.sort);

for (let i = 0; i < arreglo.length; i++) {
    document.write(arreglo[i]);
    console.log(arreglo[i])
}

