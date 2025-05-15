const submitBtn = document.querySelector('.submit-btn');

function calcularMedia(n1, n2) {
    console.log(n1 + n2);
    return (n1 + n2) / 2;
}

function obtemInfo() {
    const form = document.querySelector('.form');
    const nome = form.elements['nome'].value;
    const n1 = parseFloat(form.elements['nota-1'].value);
    const n2 = parseFloat(form.elements['nota-2'].value);

    return { nome, n1, n2 };
}

submitBtn.addEventListener('click', () => {
    const {nome, n1, n2} = obtemInfo()
    const media = calcularMedia(n1, n2);

    alert(`O aluno ${nome} tem a média: ${media}`);
});