function maiorNome(nomes) {
    let maior = nomes[0];

    for (let i in nomes) {
        if (nomes[i].length > maior.length) {
            maior = nomes[i];
        }
    }

    return maior;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));