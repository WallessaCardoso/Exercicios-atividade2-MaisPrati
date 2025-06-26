const readline = require('readline');

function memoize(fn) {
    const cache = {};
    return function(...args) {
        const chave = JSON.stringify(args);
        if (cache.hasOwnProperty(chave)) {
            return cache[chave];
        }
        const resultado = fn.apply(this, args);
        cache[chave] = resultado;
        return resultado;
    };
}

function fatorial(n) {
    if (n < 0) throw new Error("Fatorial não definido para números negativos");
    if (n === 0) return 1;
    return n * fatorial(n - 1);
}

const fatorialMemo = memoize(fatorial);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número inteiro para calcular o fatorial: ", function(input) {
    const numero = parseInt(input);

    if (isNaN(numero)) {
        console.log("Por favor, digite um número válido.");
    } else {
        try {
            const resultado = fatorialMemo(numero);
            console.log(`Fatorial de ${numero} é: ${resultado}`);
        } catch (erro) {
            console.log(erro.message);
        }
    }

    rl.close();
});