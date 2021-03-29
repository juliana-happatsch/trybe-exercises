function somatorio(a) {
    let soma = 0;
    for (let i = 1; i <= a; i += 1) {
        soma += i;
    }
    return soma;
}

console.log(somatorio(5));