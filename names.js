/* 
1.names.js
Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
Esporta la funzione dal file.
*/
/**
 * 
 * @param {*} name 
 * @param {*} surname 
 * @returns object fullName
 */
function nameAdder(firstName, lastName) {
    let nameObject = { firstName, lastName }
    return nameObject.firstName + " " + nameObject.lastName
}
module.exports = nameAdder
