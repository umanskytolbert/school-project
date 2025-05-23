// JavaScript code for generating a random number between 1 and 10

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber;
}

console.log(getRandomNumber());
