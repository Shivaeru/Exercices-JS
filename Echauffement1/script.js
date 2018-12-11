/* Demander prénom util, vérifier entre 1 et 10 caractères, si vide = erreur, répondre Bonjour "prénom"
*/

var prénom = prompt("Quel est votre prénom?");
var nblettre = prénom.length; //length calcule le nombre de caractères


if(nblettre >=10){
    
    prénom = window.alert("Veuillez saisir un prénom existant!");

} else if(prénom === "" ){
    prénom = window.alert("Veuillez entre un prénom!");

    
} else {
    alert("Bonjour " + prénom + ", ça va ou quoi ?");
}