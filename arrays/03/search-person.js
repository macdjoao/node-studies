const persons = ["John", "Doe", "Alan", "Turing"];
const medias = [10, 8, 7.5, 9];

const personsMedias = [persons, medias];

function showNameAndMedia(person) {
    if (personsMedias[0].includes(person)) {
        const [persons, medias] = personsMedias;
        const indice = persons.indexOf(person);
        const personMedia = medias[indice];
        console.log(`${person} media: ${personMedia}`);
    } else {
        console.log(`${person} not finded`);
    };
}

showNameAndMedia("Doe");
showNameAndMedia("Joao");