let alunos = [];

alunos.push({nome: "Jose", nota: 9.0});
alunos.push({nome: "Carlos", nota: 4.5});
alunos.push({nome: "Maria", nota: 6.4});
alunos.push({nome: "Tati", nota: 9.7});
alunos.push({nome: "Jacques", nota: 8.0});
alunos.push({nome: "Vidal", nota: 8.3});
alunos.push({nome: "Marcio", nota: 5.8});
alunos.push({nome: "Cristina", nota: 9.5});
alunos.push({nome: "Flávia", nota: 5.8});
alunos.push({nome: "Boscaine", nota: 7.7});
alunos.push({nome: "Giovani", nota: 4.5});
alunos.push({nome: "Thiago", nota: 6.6});
alunos.push({nome: "Alexandre", nota: 8.5});


console.log(alunos);


function alunosAprovados(alunos){
    return alunos.filter(aluno => aluno.nota >= 6);
}

let aprovados = alunosAprovados(alunos);

console.log(aprovados);