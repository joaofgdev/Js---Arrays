const alunos = ["ana", "marcos", "maria", "mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovaos = alunos.filter( (_ , indice) => {
    return medias[indice] > 7;
});
console.log(reprovaos)