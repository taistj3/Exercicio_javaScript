let numeros = [5, 3, 9, 1, 7, 2, 6];

let maior = Math.max(...numeros);
let indiceMaior = numeros.indexOf(maior);

let menor = Math.min(...numeros);
let indiceMenor = numeros.indexOf(menor);

console.log("Índice do maior número:", indiceMaior);
console.log("Índice do menor número:", indiceMenor);
