/*  description du monstre  */
let name;
let life;
let money;
let awake;

/*  Export    */

/*  retourne l'état courant du monstre  */
export function _get(){
    return ("name : " + name + ",\nlife : " + life
        + ",\nmoney : " + money + ",\nawake : " + awake);
}

/*  initialise l'état du monstre avec
 *  les valeurs reçues en paramètres    */
export function _init(nom,vie,argent){
    name = nom;
    life = vie;
    money = argent;
    awake = true;
}




