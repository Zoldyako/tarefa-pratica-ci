function validaNome(nome) {
    if (/\d/.test(nome) || /[^a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]/.test(nome)) {
        return { ok: false, err: '[ERROR]: Nome contém caracteres inválidos.' };
    } 

    return { ok: true, err: null };
}

function validaNotas(n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
        return { ok: false, err: '[ERROR]: Nota não é um número.' };
    }

    if (n1 > 10 || n2 > 10) { 
        return { ok: false, err: '[ERROR]: Nota não pode ser maior que 10.' };
    }
    
    if (n1 < 0 || n2 < 0) {
        return { ok: false, err: '[ERROR]: Nota não pode ser negativa.' };
    }
    
    return { ok: true, err: null };
}

function resultadoAluno(n1, n2) {
    const media = (n1 + n2) / 2;

    if (media >= 7 ) return { resultado: 'aprovado', media };
    
    if (media >= 5) return { resultado: 'recuperação', media };
    
    return { resultado: 'reprovado', media };
}

export { validaNome, validaNotas, resultadoAluno }