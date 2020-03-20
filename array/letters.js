//Create an object that stores individual letters in an array and
//has a function for displaying the letters as a single word.

//versione light senza oggetto

const parole = ["a", "b", "c", "d", "e", "f"]
let a = parole.join("")
console.log(a)

/////////////////////

//creo oun oggetto che unisce tutte le lettere

class lettereUnite {
    constructor() {
        this.lettere = []
    }

    aggiungi(lettera) {
        this.lettere.push(lettera);
    }

    unisci() {
        return this.lettere.join("")
    }
}



let nuovaParola = new lettereUnite;

nuovaLettera.aggiungi("c");
nuovaLettera.aggiungi("a");
nuovaLettera.aggiungi("n");
nuovaLettera.aggiungi("e");

console.log(nuovaLettera.unisci())