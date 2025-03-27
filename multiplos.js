const numeros = Array.from({ length: 1000 }, (_ , i) => i + 1);
let soma = 0;

numeros.forEach(num => {
  if (num % 5 === 0 || num % 7 === 0) {
    soma += num;
  }
});

console.log(soma);