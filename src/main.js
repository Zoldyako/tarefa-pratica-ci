import { validaNome, validaNotas, resultadoAluno } from './scripts/calcularNota.js';
import { obtemInfo } from './scripts/obtemInfo.js';

const submitBtn = document.querySelector('.submit-btn');
const aluno = document.querySelector('.aluno > p');
const notaFinal = document.querySelector('.nota-final > p');
const situacao = document.querySelector('.situacao > p');
const errorElement = document.querySelector('.error');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Só para impedir que o vite dê refresh na página

    const { nome, n1, n2 } = obtemInfo();

    const nomeValidado = validaNome(nome);
    const notasValidadas = validaNotas(n1, n2);

    if (!nomeValidado.ok) { 
        errorElement.innerText = nomeValidado.err;
        return;
    }

    if (!notasValidadas.ok) {
        errorElement.innerText = notasValidadas.err;
        return;
    }

    const { resultado, media } = resultadoAluno(n1, n2);

    aluno.innerText = nome;
    notaFinal.innerText = media;
    situacao.innerText = resultado;
    errorElement.innerText = '';
});
