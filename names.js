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
    let fullName = { firstName, lastName }
    console.log(fullName)
}
nameAdder("navod", "contrath")
module.exports = nameAdder
