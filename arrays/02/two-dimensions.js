const persons = ["John", "Doe", "Alan", "Turing"];
const medias = [10, 8, 7.5, 9];

const personsMedias = [persons, medias];

console.log(personsMedias);

// 0 - Lista
// 1 - Índice da lista selecionada (0)
console.log(`Doe: ${personsMedias[0][1]}`);