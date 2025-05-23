import { resultadoAluno } from './scripts/calcularNota.js';
import { obtemInfo } from './scripts/obtemInfo.js';

const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Só para impedir que o vite dê refresh na página

    const { nome, n1, n2 } = obtemInfo()
    const resultado = resultadoAluno(n1, n2);

    alert(`O aluno ${nome} tem a média: ${resultado.media} e esta ${resultado.estado}`);
});
