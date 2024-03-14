import rl, { questionInt } from 'readline-sync';

let media_bimestral = 0;
let cont = 0;
let n = 0
let media = 0; 
let alunos = rl.questionInt(`Digite a quantia de alunos na sala:`)

while(cont < aluno){
while ( n < 4) {
    let nota  = rl.questionInt(`Nota do bimestre ${n+1}:`);
    media = media + nota;
    n++
}
}
cont++
console.log(`A media do aluno ${cont} e igual ${media/4}`);
medial_bimestral

    
}
console.log(`A media dos alunos e igual ${media/4}`)