import { resultadoAluno, validaNome, validaNotas } from '../scripts/calcularNota.js';

describe('Testa se o nome é valido', () => {
    test('Nome valido', () => {
        expect(validaNome('josé')).toStrictEqual({ ok: true, err: null});
    });

    test('Nome com números (invalido)', () => {
        expect(validaNome('José 2')).toStrictEqual({ ok: false, err: '[ERROR]: Nome contém caracteres inválidos.' })
    });
});

describe('Testa valores positivos', () => {
    test('Media da nota (4 + 4) / 2 = 4', () => {
        expect(resultadoAluno(4, 4)).toStrictEqual({ resultado: 'reprovado', media: 4 });
    });

    test('Media nota (6 + 7) / 2 = 6.5', () => {
        expect(resultadoAluno(6, 7)).toStrictEqual({ resultado: 'recuperação', media: 6.5 });
    });

    test('Media nota (8.9 + 8.9) / 2 = 8.9', () => {
        expect(resultadoAluno(8.9, 8.9)).toStrictEqual({ resultado: 'aprovado', media: 8.9 });
    });
}) 

describe('Testa não números, valores fora de range e negativos', () => {
    test('Testa nota não ser um número, nota maior que 10 (11 + 2)', () => {
        expect(validaNotas('one', 2)).toStrictEqual({ ok: false, err: '[ERROR]: Nota não é um número.' });
    });

    test('Media invalida, nota maior que 10 (11 + 2)', () => {
        expect(validaNotas(13, 2)).toStrictEqual({ ok: false, err: '[ERROR]: Nota não pode ser maior que 10.' });
    });

    test('Media invalida, nota negativa (3, -4', () => {
        expect(validaNotas(3, -4)).toStrictEqual({ ok: false, err: '[ERROR]: Nota não pode ser negativa.' });
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
