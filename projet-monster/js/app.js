import * as actions from './actions.js';
import * as ui from "./ui.js";


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
    alert(  "Nom : " + actions._get('name') +
        "\n Point de vie: " + actions._get('life')+
        "\n Monnaie: " + actions._get('money') +
        "\n etat: " + actions._get('awake') );
})

/*  Export    */

/* initialise l'application*/
export function start(){
    actions._init();
    show.onclick=showme;
    run.onclick = actions.run();
    fight.onclick = actions.fight();
    sleep.onclick = actions.sleep();
    eat.onclick = actions.eat();
    work.onclick = actions.work();
    newLife.onclick = actions.newLife();
    kill.onclick = actions.kill();
}




