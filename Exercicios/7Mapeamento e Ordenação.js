const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function nomesOrdenadosPorPreco(produtos) {
    return produtos
        .slice()
        .sort((a, b) => a.preco - b.preco)
        .map(produto => produto.nome);
}

function perguntar(question) {
    return new Promise(resolve => {
        rl.question(question, answer => {
            resolve(answer);
        });
    });
}

async function main() {
    const produtos = [];
    const qtdStr = await perguntar("Quantos produtos deseja cadastrar? ");
    const qtd = parseInt(qtdStr);

    if (isNaN(qtd) || qtd <= 0) {
        console.log("Quantidade inválida.");
        rl.close();
        return;
    }

    for (let i = 0; i < qtd; i++) {
        const nome = await perguntar(`Nome do produto ${i + 1}: `);
        const precoStr = await perguntar(`Preço do produto ${i + 1}: `);
        const preco = parseFloat(precoStr);

        if (isNaN(preco) || preco < 0) {
            console.log("Preço inválido, tente novamente.");
            i--; // repetir esse produto
        } else {
            produtos.push({ nome, preco });
        }
    }

    const nomesOrdenados = nomesOrdenadosPorPreco(produtos);
    console.log("Produtos ordenados por preço:", nomesOrdenados);

    rl.close();
}

main();