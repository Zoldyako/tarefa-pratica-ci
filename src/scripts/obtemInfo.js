export function obtemInfo() {
    const form = document.querySelector('.form');
    const nome = form.elements['nome'].value;
    const n1 = parseFloat(form.elements['nota-1'].value);
    const n2 = parseFloat(form.elements['nota-2'].value);

    return { nome, n1, n2 };
}