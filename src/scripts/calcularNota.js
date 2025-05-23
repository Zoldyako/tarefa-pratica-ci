export function validarNotas(n1, n2) {
    if (n1 > 10 || n2 > 10) { 
        console.log(`ERROR: Uma das notas é maior que 10. n1:${n1} | n2:${n2}`);
        return false; 
    }
    
    if (n1 < 0 || n2 < 0) {
        console.log(`ERROR: Uma das notas é negativa. n1:${n1} | n2:${n2}`);
        return false;
    }

    else { 
        return true 
    }
}

export function calcularMedia(n1, n2) {
    if (!validarNotas(n1, n2)) {
        return false;
    }

    return (n1 + n2) / 2;
}

export function resultadoAluno(n1, n2) {

    const media = calcularMedia(n1, n2);

    if (media >= 7 ) { 
        return 'aprovado';
    }
    
    if (media >= 5) { 
        return 'recuperação';
    }
    
    else { 
        return 'reprovado';
    }
}