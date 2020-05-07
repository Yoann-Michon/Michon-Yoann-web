import {_init,_get} from './actions.js';
import {log,displayStatus} from "./ui.js";

/*  handlers associés aux événements produits par les actions de
 *  l'utilisateur sur l'interface   */
let kill = document.querySelector('k');
let newLife = document.querySelector('b1');
let run = document.querySelector('b2');
let fight = document.querySelector('b3');
let sleep = document.querySelector('b4');
let eat = document.querySelector('b5');
let show = document.querySelector('b6');
let work = document.querySelector('b7');



/*  ce handler affiche l'état courant
 *  du monstre en utilisant une alerte.  */
let showme=(function(){
    alert(  "Nom : " + _get().name +
        "\n Point de vie: " + _get().life +
        "\n Monnaie: " + _get().money +
        "\n etat: " + _get().awake );
})

/*  Export    */

/* initialise l'application*/
export function start(){
    _init();
    show.onclick=showme;
    run.onclick = run;
    fight.onclick = fight;
    sleep.onclick = sleep;
    eat.onclick = eat;
    work.onclick = work;
    newLife.onclick = newLife;
    kill.onclick = kill;
}




