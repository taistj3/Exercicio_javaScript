function somarMultiplos(limite){
const numeros = Array.from({ length: limite }, (_ , i) => i + 1);
let soma = 0;

numeros.forEach(num => {
  if (num % 5 === 0 || num % 7 === 0) {
    soma += num;
  }
});

return soma;
}

module.exports = {somarMultiplos}