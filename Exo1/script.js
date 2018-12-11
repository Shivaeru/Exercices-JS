/* Réaliser une calculatrice
-choisir une opération : + * / -
-choisir un 1er nombre
-choisir un 2nd nombre
Afficher le résultat */


var nb1 = prompt("Rentrez un premier nombre: ");
var nb2 = prompt("Rentrez un second nombre: ");
var operateur = prompt("Rentrez un opérateur: ");



// Opérations de calcul
    switch (operateur) {
      case "+":
        var nbResult = parseInt (nb1) + parseInt (nb2);
        alert(nbResult)
        break;

      case "-":
            var nbResult = nb1 - nb2;
            alert(nbResult)
            break;

      case "*":
            var nbResult = nb1 * nb2;
            alert(nbResult)
            break;

      case "/":
            var nbResult = nb1 / nb2;
            alert(nbResult)
            break;

      default:
        nbResult = nb1;
    }
