let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

console.log("Guess the number from 1 to 10");

while (true) {

    let userNumber = prompt("Enter a number:");

    if (userNumber === null) {
        console.log("Game cancelled");
        break;
    }

    attempts++;

    if (Number(userNumber) === secretNumber) {
        console.log("You won in " + attempts + " attempts");
        break;
    } else if (userNumber < secretNumber) {
        console.log("Higher");
    } else {
        console.log("Lower");
    }
}
