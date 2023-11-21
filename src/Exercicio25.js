const alunos = []

const alunos2 = alunos.map(function(itemAtual) {
    itemAtual = {
        nome: itemAtual,
        nota: 0
    }

    return itemAtual
})

alunos2.push({
    nome: 'Fernando',
    nota: 10
})

alunos2.push({
    nome: 'Gabriella',
    nota: 6
})

alunos2.push({
    nome: 'Josi',
    nota: 1
})

alunos2.push({
    nome: 'Carlos',
    nota: 4
})

alunos2.push({
    nome: 'Paulo',
    nota: 7
})


function FiltraAlunos(aluno) {
    return aluno.nota >= 6
}

const alunosAprovados = alunos2.filter(FiltraAlunos)

console.log(alunosAprovados)