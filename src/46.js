const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let questionCount = 0;
let question;

readline.question("What is your name? ", (answer) => {
  questionCount++;
  if (questionCount > 2) {
    console.log("Please answer the question more than twice.");
    return readline.close();
  }

  readLine("Enter 'exit' to exit: ");
});

console.log("\nThank you for participating!");
