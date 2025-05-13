const {somarMultiplos} = require('./multiplos')

describe('Função somar múltiplos', () => {
    it('Deve somar múltiplos de 5 e 7 num array de 1000 números', () => {
        expect(somarMultiplos(1000)).toBe(157361);
    });
});