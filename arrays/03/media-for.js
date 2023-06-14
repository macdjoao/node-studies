const myNumbers = [100, 200, 300, 400, 600];

let numbersAdd = 0;

for (let i =0; i < myNumbers.length; i++) {
    numbersAdd += myNumbers[i];
};

const media = numbersAdd / myNumbers.length;

console.log(`media: ${media}`)