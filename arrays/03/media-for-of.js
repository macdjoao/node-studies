const myNumbers = [100, 200, 300, 400, 600];

let numbersAdd = 0;

for (let number of myNumbers) {
    numbersAdd += number
};

const media = numbersAdd / myNumbers.length;

console.log(`media: ${media}`);