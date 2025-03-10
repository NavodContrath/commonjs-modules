/* 
1.names.js
Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
Esporta la funzione dal file.
*/
function nameAdder(name, surname) {
    let fullName = { firstName: name, lastName: surname }
    return fullName
}
module.exports = nameAdder
