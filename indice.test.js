const {encontrarIndices} = require('./indice')

describe('Encontrar índices de maior e menor número', () => {
    it('deve retornar os índices corretos', () => {
        const numeros = [5,3,9,1,7,2,6];
        const resultado = encontrarIndices(numeros);
        expect(resultado).toEqual({
            indiceMaior:2,
            indiceMenor:3
        })
    });
});
