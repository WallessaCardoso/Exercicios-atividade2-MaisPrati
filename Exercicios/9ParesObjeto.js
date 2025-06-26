const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function paresParaObjeto(pares) {
    const obj = {};
    for (const [chave, valor] of pares) {
        obj[chave] = valor;
    }
    return obj;
}

function objetoParaPares(obj) {
    const pares = [];
    for (const chave in obj) {
        pares.push([chave, obj[chave]]);
    }
    return pares;
}

function perguntar(question) {
    return new Promise(resolve => {
        rl.question(question, answer => {
            resolve(answer);
        });
    });
}

async function main() {
    // Parte 1: Receber pares para converter em objeto
    const pares = [];
    const qtdParesStr = await perguntar("Quantos pares [chave, valor] deseja informar para criar um objeto? ");
    const qtdPares = parseInt(qtdParesStr);

    if (isNaN(qtdPares) || qtdPares <= 0) {
        console.log("Quantidade inválida.");
        rl.close();
        return;
    }

    for (let i = 0; i < qtdPares; i++) {
        const chave = await perguntar(`Chave do par ${i + 1}: `);
        const valor = await perguntar(`Valor do par ${i + 1}: `);
        pares.push([chave, valor]);
    }

    const obj = paresParaObjeto(pares);
    console.log("\nObjeto criado a partir dos pares:");
    console.log(obj);

    // Parte 2: Receber objeto para converter em pares
    const paresDoObjeto = [];
    const qtdObjStr = await perguntar("\nQuantos pares [chave, valor] deseja informar para criar um objeto para converter em pares? ");
    const qtdObj = parseInt(qtdObjStr);

    if (isNaN(qtdObj) || qtdObj <= 0) {
        console.log("Quantidade inválida.");
        rl.close();
        return;
    }

    const objParaConverter = {};
    for (let i = 0; i < qtdObj; i++) {
        const chave = await perguntar(`Chave do par ${i + 1}: `);
        const valor = await perguntar(`Valor do par ${i + 1}: `);
        objParaConverter[chave] = valor;
    }

    const resultadoPares = objetoParaPares(objParaConverter);
    console.log("\nArray de pares criado a partir do objeto:");
    console.log(resultadoPares);

    rl.close();
}

main();