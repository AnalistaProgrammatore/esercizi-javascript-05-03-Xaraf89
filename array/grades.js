//creare un oggetto con proprietà nome cognome e la chiamata voto e visualizza a schermo la media
/*
let voti = [5, 6, 9, 7, 3, 6];
const nome = ["Mario"];
const cognome = ["Rossi"];

var votiEx1, votiEx2
votiEx1 = prompt("che voto vuoi aggiungere");
votiEx2 = prompt("che voto vuoi aggiungere");
voti.push(Number(votiEx1), Number(votiEx2))

let count = voti.length;
voti = voti.reduce((previous, current) => current += previous);
voti /= count;
console.log(nome + cognome + " ha la seguente media " + voti)
*/

const studente = {
    chimica: [],
    vulcanologia: [4, 6, 9, 1, 1, 1, 11, 11, 1, 1, 1, 1, 1,],
    latino: [],
    astrologia: []
}
//const ch = "chimica"
//console.log(studente.chimica)
//console.log(studente[ch])

function aggiungiVoto(materia, voto) {
    studente[materia].push(voto)
}

aggiungiVoto("chimica", 5)
aggiungiVoto("chimica", 7)
console.log(studente)

function mediaVoto(materia) {
    return studente[materia].reduce((ac, cv) => ac + cv) / studente[materia].length
}

console.log(mediaVoto("vulcanologia"))






