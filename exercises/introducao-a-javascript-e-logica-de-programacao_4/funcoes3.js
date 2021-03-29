function maiorNome(nomes) {
    let maior = nomes[0];

    for (let i in nomes) {
        if (maior.length < nomes[i].length) {
            maior = nomes[i];
        }
    }

    return maior;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));