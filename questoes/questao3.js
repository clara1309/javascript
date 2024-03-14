import entradaDados from 'readline-sync';

let x = entradaDados.questionInt("X: ")
let y = entradaDados.questionInt("Y: ")
let soma = entradaDados.question("x + ")

switch (soma) {
    case (x) + (y):
        console.log(`Total: ${x+y}`);
        break;

    default:
        break;
}