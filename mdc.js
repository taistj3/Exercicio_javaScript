function calcularMDC(a, b) {
    return b === 0 ? a : calcularMDC(b, a % b);
};

module.exports={calcularMDC}