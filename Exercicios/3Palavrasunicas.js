const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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

rl.question("Digite uma frase: ", function(frase) {
    const unicas = palavrasUnicas(frase);
    console.log("Palavras únicas:", unicas);
    rl.close();
});