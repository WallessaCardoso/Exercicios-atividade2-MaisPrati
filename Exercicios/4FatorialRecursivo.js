const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

const debouncedLog = debounce((msg) => {
    console.log("Mensagem:", msg);
    rl.close();
}, 2000);

rl.question("Digite algo para testar debounce: ", (input) => {
    debouncedLog(input);
});