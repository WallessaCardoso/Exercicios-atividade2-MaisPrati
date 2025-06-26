const readline = require('readline');

function palavrasUnicas(str) {
    const palavras = str.split(" ");
    const resultado = [];

    for (let i = 0; i < palavras.length; i++) {
        let unica = true;
        for (let j = 0; j < palavras.length; j++) {
            if (i !== j && palavras[i] === palavras[j]) {
                unica = false;
                break;
            }
        }
        if (unica) resultado.push(palavras[i]);
    }

    return resultado;
}
