//crea un oggetto user vuoto
//aggiunge una proprietà name con i flag di default e valore Mario
//aggiunge una proprietà surname con i flag writeable: false e configurable: false con valore Rossi
//modifica il valore della proprietà name al valore Marco
//elimina la proprietà name dall'oggetto user

let user = {}

Object.defineProperty(user, "nome", {
    value: "Mario",
    writable: true,        //normalmente settato su true permette il cambio del valore
    configurable: true,
    enumerable: true       //normalmente settato su true permette di cambiare le proprietà
})

Object.defineProperty(user, "cognome", {
    value: "Rossi",
    writable: false,        //normalmente settato su true permette il cambio del valore
    configurable: true,
    enumerable: false       //normalmente settato su true permette di cambiare le proprietà
})


Object.defineProperty(user, "nome", {
    value: "Marco",
})

delete user.nome

console.log(Object.getOwnPropertyDescriptors(user))