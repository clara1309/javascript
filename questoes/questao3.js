import entradaDados from 'readline-sync';

let x = entradaDados.questionInt("X: ");
let y = entradaDados.questionInt("Y: ");
let calculadora = entradaDados.questionInt("Em qual operacao voce quer usar? ")
switch (calculadora) {
case 1:
console.log(`Total: ${x+y}`)
break;
case 2:
console.log(`Total: ${x-y}`)
break
case 3:
console.log(`Total: ${x*y}`)
break
case 4:
console.log(`Total: ${x/y}`)
break
default:
console.log(`Não tem essa operação!`)
break;
}