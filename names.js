/* 
1.names.js
Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
Esporta la funzione dal file.
*/
/**
 * 
 * @param {*} name 
 * @param {*} surname 
 * @returns object
 */
function nameAdder(firstName, lastName) {
    let nameObject = { firstName, lastName }
    return nameObject
}
module.exports = nameAdder
