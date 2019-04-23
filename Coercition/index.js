/* Créez une fonction qui prend deux objets en entrée et écrit dans la console si leur type est identique ou pas.

    pareil(2, 3); // le type est le même
    pareil(2,"2"); // le type est différent */

    function pareil(ent1 , ent2){
        var rep;
        if(typeof ent1 === typeof ent2) {
            rep = "C'est pareil";
        }

        else {
            rep = "C'est pas pareil"
        }

        console.log(rep);
    }
    pareil(1, "a");
