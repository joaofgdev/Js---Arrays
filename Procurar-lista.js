// const alunos = ['João', 'Maria', 'Pedro', 'Ana'];

// // Array de notas dos alunos
// const notas = [8.5, 9.0, 7.5, 10.0];

// // Array que contém os alunos e as notas, onde o primeiro elemento é o array de alunos e o segundo é o array de notas
// const lista = [alunos, notas];

// // Função que exibe o nome e a nota de um aluno
// function ExibeNomeENota(alunos) {
//     // Verifica se o nome do aluno está incluído no array de alunos
//     if (lista[0].includes(alunos)) {
//         // Se o aluno for encontrado, obtém o índice do aluno no array
//         const indice = lista[0].indexOf(alunos);
//         // Usa o índice para encontrar a nota correspondente no array de notas
//         const mediaAluno = lista[1][indice];
//         // Exibe o nome do aluno e sua nota
//         console.log(`O aluno ${alunos} tem nota ${mediaAluno}`);
//     } else {
//         // Se o aluno não for encontrado, exibe uma mensagem de erro
//         console.log('Aluno não encontrado.');
//     }
// }

// // Chama a função para exibir a nota do aluno "João"
// ExibeNomeENota("João");

const alunos = ['João', 'Maria', 'Pedro', 'Ana'];

// Array de notas dos alunos
const notas = [8.5, 9.0, 7.5, 10.0];

// Array que contém os alunos e as notas, onde o primeiro elemento é o array de alunos e o segundo é o array de notas
const lista = [alunos, notas];

// Função que exibe o nome e a nota de um aluno
function ExibeNomeENota(alunos) {
    // Verifica se o nome do aluno está incluído no array de alunos
    if (lista[0].includes(alunos)) {
        const [alunos, medias] = lista;
        // Se o aluno for encontrado, obtém o índice do aluno no array
        const indice = alunos.indexOf(alunos);
        // Usa o índice para encontrar a nota correspondente no array de notas
        const mediaAluno = alunos[indice];
        // Exibe o nome do aluno e sua nota
        console.log(`O aluno ${alunos} tem nota ${mediaAluno}`);
    } else {
        // Se o aluno não for encontrado, exibe uma mensagem de erro
        console.log('Aluno não encontrado.');
    }
}

// Chama a função para exibir a nota do aluno "João"
ExibeNomeENota("João");
