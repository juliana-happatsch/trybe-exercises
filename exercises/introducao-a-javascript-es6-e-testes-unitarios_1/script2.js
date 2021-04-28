const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

const sorting = array => {
  const sortedArray = array.sort((a, b) => a - b);
  return `Os números ${sortedArray} se encontram ordenados de forma crescente!`;
}

console.log(sorting(oddsAndEvens));
