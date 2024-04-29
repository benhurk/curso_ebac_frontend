let notas = [
    {
        aluno: 'André',
        nota: 3.5
    },

    {
        aluno: 'Flávio',
        nota: 5.0
    },

    {
        aluno: 'Luana',
        nota: 6.0
    },

    {
        aluno: 'Luís',
        nota: 10.0
    }
];

const alunosAprovados = () => notas.filter(i => i.nota >= 6.0);

console.log(alunosAprovados());