function calcularMDC(a, b) {
    return b === 0 ? a : calcularMDC(b, a % b);
};

console.log(calcularMDC(56, 98));