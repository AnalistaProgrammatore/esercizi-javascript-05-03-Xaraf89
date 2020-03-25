//Store a set of words in an array and display the contents both forward and backward. 

//qui rimaniamo dentro l'array e invertiamo i valori

let array = ["ape", 2, 3, 4, 5, 6, 7, 8, 9]
let array2 = [...array].reverse();
console.log(array)
console.log(array2)

//////////////////////
//Con questo oggetto tiriamo fuori tutte le parole e invertiamo il tutto

let oggettoMesi = {
    mesi: [],
    add(parole) {
        this.mesi.push(parole)
    },
    avanti() {
        return this.mesi.join(", ")
    },
    dietro() {
        return this.mesi.reduce((acc, curr) => curr + ", " + acc)
    }
}

oggettoMesi.add("gennaio")
oggettoMesi.add("marzo")
oggettoMesi.add("giugno")
oggettoMesi.add("dicembre")

console.log(oggettoMesi.avanti())
console.log(oggettoMesi.dietro())