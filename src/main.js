import { resultadoAluno } from './scripts/calcularNota.js';
import { obtemInfo } from './scripts/obtemInfo.js';

const submitBtn = document.querySelector('.submit-btn');
const aluno = document.querySelector('.aluno > p');
const notaFinal = document.querySelector('.nota-final > p');
const situacao = document.querySelector('.situacao > p');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Só para impedir que o vite dê refresh na página

    const { nome, n1, n2 } = obtemInfo()
    const { resultado, media } = resultadoAluno(n1, n2);

    aluno.innerText = nome;
    notaFinal.innerText = media;
    situacao.innerText = resultado;
});
