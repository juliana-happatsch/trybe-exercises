function maiorValor(numeros) {
    let indiceMax = 0;

    for (let i in numeros) {
        if (numeros[i] > numeros[indiceMax]) {
            indiceMax = i;
        }
    }

    return indiceMax;
}

console.log(maiorValor([2, 3, 6, 7, 10, 1]));