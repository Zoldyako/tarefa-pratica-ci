const calcularMedia = require('./scripts/calcularMedia.js');

const submitBtn = document.querySelector('.submit-btn');

function obtemInfo() {
    const form = document.querySelector('.form');
    const nome = form.elements['nome'].value;
    const n1 = parseFloat(form.elements['nota-1'].value);
    const n2 = parseFloat(form.elements['nota-2'].value);

    return { nome, n1, n2 };
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Só para impedir que o vite dê refresh na página

    const {nome, n1, n2} = obtemInfo()
    const media = calcularMedia(n1, n2);

    alert(`O aluno ${nome} tem a média: ${media}`);
});

module.exports = calcularMedia(), obtemInfo()