let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odd = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        odd += 1;
    }
}

if (odd === 0) {
    console.log('Nenhum valor ímpar encontrado.');
} else {
    console.log('Existem ' + odd + ' valores ímpares.');
}