/*  description du monstre  */
let monster={   name: "",
                life: "",
                money: "",
                awake: Boolean(),
                etat: ""};

/*  Export    */

/*  retourne l'état courant du monstre  */
export function _get(){
    return monster;
}

/*  initialise l'état du monstre avec
 *  les valeurs reçues en paramètres    */
export function _init(nom,vie,argent,reveiller){
    monster.name = nom;
    monster.life = vie;
    monster.money = argent;
    monster.awake = reveiller;
}




