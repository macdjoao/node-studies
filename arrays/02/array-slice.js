const students = ["John", "Doe", "Alan", "Turing", "Nikola", "Tesla", "Albert", "Einstein"];
console.log(students);

const newStudents = students.slice(0, (students.length / 2));
console.log(newStudents);

const oldStudents = students.slice(2, (students.length / 2));
console.log(oldStudents);