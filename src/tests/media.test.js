import { calcularMedia, resultadoAluno } from '../scripts/calcularNota.js';

describe('Testa valores positivos', () => {
    test('Media da nota (4 + 4) / 2 = 4', () => {
        expect(calcularMedia(4, 4)).toBe(4);
    });

    test('Media nota (6.5 + 3.3) / 2 = 4.9', () => {
        expect(calcularMedia(6.5, 3.3)).toBe(4.9);
    });
}) 

describe('Testa valores negativos e fora de range', () => {
    test('Media invalida, nota negativa (3, -4', () => {
        expect(calcularMedia(3, -4)).toBe(false);
    });

    test('Media invalida, nota maior que 10 (11 + 2)', () => {
        expect(calcularMedia(11, 2)).toBe(false);
    });
})

describe('Testa o estado baseado na média', () => {
    test('Aluno aprovado', () => {
        expect(resultadoAluno(10, 10)).toStrictEqual({resultado: 'aprovado', media: 10});
    }); 

    test('Aluno em recuperação', () => {
        expect(resultadoAluno(7, 6)).toStrictEqual({resultado: 'recuperação', media: 6.5});
    }); 

    test('Aluno reprovado', () => {
        expect(resultadoAluno(4, 3)).toStrictEqual({resultado: 'reprovado', media: 3.5});
    }); 
})
