// Percorra o array [1,2,3,4,5,6,7,8,9,10] e exiba apenas os valores pares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.forEach((numeroAtual) => {
  if (numeroAtual % 2 === 0) {
    console.log(`${numeroAtual} é par`);
  }
});
