const {calcularMDC} = require('./mdc') 

describe('Calcular mdc entre dois números', () => {
    it('Deve calcular mdc entre dois números', () => {
        expect(calcularMDC(56, 98)).toBe(14)
    });
});
