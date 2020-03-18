/*
3. Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
data using a two-dimensional array.
Create functions to display the monthly average, a specific week’s average, and all the weeks’ averages.
*/
const mese = {
    settimana1: [4, 5, 6, 7],
    settimana2: [4, 6, 9, 5],
    settimana3: [3, 3, 3, 4],
    settimana4: [5, 4, 4, 5]
}

function aggiungiTemp(settimana, temperatura) {
    mese[settimana].push(temperatura)
}

aggiungiTemp("settimana1", 5)  //mette in coda
mese.settimana1.unshift(1)     //mette davanti
//delete mese.settimana1[0]  //ti lascia spazio vuoto ma puoi decidere quale e mantiene il numero complessivo dell'array
mese.settimana4.shift()    //toglie il primo elemento e riassegna il tutto ma non mantiene il numero complessivo di elementi dell'array (length)
mese.settimana4.push(10)   //aggiunge alla fine dell'array un elemento
mese.settimana1.pop()      //toglie l'ultimo elemento e riassegna il tutto ma non mantiene il numero complessivo dell'array dell'array  (length)

function mediaSettimana(settimana) {
    return mese[settimana].reduce((ac, cv) => ac + cv) / mese[settimana].length
}

console.log(mediaSettimana("settimana2"))
////////////

//array mese
//var arrayMese = mese.length;
//console.log(mese[arrayMese - 1])

var i
for (i in mese) {
    console.log(mese[i])
}
/*
var temperatureMese = [[0, 1], [2, 3], [4, 5]].reduce(
    function (accumulator, currentValue) {
        return accumulator.concat(currentValue);
    },
    []
);*/

let mese1 = mese.settimana1.concat(mese.settimana2).concat(mese.settimana3).concat(mese.settimana4);
console.log("mese1", mese1)

function mediaMese(m) {
    return m.reduce((ac, cv) => ac + cv) / m.length
}
console.log(mese1.length)
console.log(mediaMese(mese1))