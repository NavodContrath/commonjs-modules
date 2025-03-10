/* 
3.people.js
Importa la tua funzione da names.js
Importa la tua funzione da hobbies.js
Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto */
const nameAdder = require('./names.js')
const hobbiesAdder = require('./hobbies.js')
/**
 * 
 * @returns an object created by two functions
 */
function objectGenerator() {
    let name = nameAdder("Navod", "Contrath")
    let person = {
        fullName: name.firstName + " " + name.lastName,
        hobbies: hobbiesAdder("basket", "books", "cinema"),
    }
    return person
}
const test = objectGenerator()
console.log(test)
