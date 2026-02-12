let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

console.log("Adivina el número del 1 al 10");

while (true) {

    let numeroUsuario = prompt("Enter a number:");

    if (numeroUsuario === null) {
        console.log("game cancelled");
        break;
    }


}