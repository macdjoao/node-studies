const students = ["John", "Doe", "Alan", "Turing", "Nikola", "Tesla", "Albert", "Einstein"];

// '1' - Delete a partir do índice 1
// '2' - Delete 2 itens (contando com item no índice de início)
// 'Leonardo' - Adicione esse item na lista, no índice '1' (primeiro parametro)
students.splice(1, 2, "Leonardo");

console.log(students);