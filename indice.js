function encontrarIndices (numeros){

const maior = Math.max(...numeros);
const indiceMaior = numeros.indexOf(maior);

const menor = Math.min(...numeros);
const indiceMenor = numeros.indexOf(menor);

return {
    indiceMaior,
    indiceMenor
};
}
module.exports = {encontrarIndices};