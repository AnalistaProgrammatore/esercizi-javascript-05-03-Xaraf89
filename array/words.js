//Create an object that stores individual letters in an array and
//has a function for displaying the letters as a single word.

//versione light senza oggetto

const parole = ["a", "b", "c", "d", "e", "f"]
let a = parole.join("")
console.log(a)

/////////////////////

//creo un oggetto che unisce tutte le lettere

var randomLettera = []

function add(lettera) {
    randomLettera.push(lettera)

}
add("c")
add("a")
add("n")
add("e")

function convertiStringa(randomLettera, item) {
    return randomLettera + item
}

var b = randomLettera.reduce(convertiStringa)
console.log(b)
