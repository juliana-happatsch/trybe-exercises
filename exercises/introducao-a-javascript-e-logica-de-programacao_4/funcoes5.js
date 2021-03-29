function maisRepete(numeros) {
    let repete = 0;
    let numero = 0;
    let indexRepete = 0;

    for (let i in numeros) {
        for (let j in numeros) {
            if (numeros[i] === numeros[j]) {
                repete += 1;
            }
        }
        if (repete > numero) {
            numero = repete;
            indexRepete = i;
        }
        repete = 0;
    }
    return numeros[indexRepete];
}

console.log(maisRepete([2, 3, 2, 5, 8, 2, 3]));