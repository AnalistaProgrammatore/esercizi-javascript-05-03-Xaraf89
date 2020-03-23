//Scrivi nel file multiply.js una funzione multiply che dato in input un oggetto 
//e un numero moltiplichi tutte le proprietà numeriche dell'oggetto per il numero 
//dato. NB la funzione deve essere pura. Ad esempio

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}
//const newMenu = multiplyNumeric(menu, 2)
////////////////////////////////////////////////////

//versione light

console.log([menu.width * 2, menu.height * 2, menu.title])

//versione funzione
var newMenu = [];

menu.forEach((menu) =>
    newMenu.push(menu.width * 2),
    newMenu.push(menu.height * 2),
    newMenu.push(menu.title)
);
console.log(newMenu());
