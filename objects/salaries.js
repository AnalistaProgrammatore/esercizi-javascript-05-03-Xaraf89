//Dato il seguente oggetto
//Scrivere nel file salaries.js la funzione sumSalaries che dato 
//in input l'oggetto salaries produca in output la somma di tutti i salari contenuti

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

//versione light

console.log(salaries.John + salaries.Ann + salaries.Pete)

//versione con funzione

const sumSalaries = (obj) => {
    return Object.values(obj).reduce((x, y) => x + y)
}

console.log(sumSalaries(salaries))

