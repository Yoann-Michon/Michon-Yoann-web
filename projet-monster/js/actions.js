/*  Import  */
import * as ui from "./ui.js"

/*  description du monstre  */
let name;
let life;
let money;
let awake;
let message;

/*  permet de recuperer les points de vie
* initial   */
let pvMax;

/*  Export    */

/*  retourne l'état courant du monstre  */
export function _get(abs){
    if (abs==='name')return name;
    if (abs==='life')return life;
    if (abs==='money')return money;
    if (abs==='awake')return awake;
}

/*  initialise l'état du monstre avec
 *  les valeurs reçues en paramètres    */
export function _init(nom,vie,argent){
    name = nom;
    life = vie;
    pvMax=life;
    money = argent;
    awake = true;
}

export function run(){
    if (awake===false){
        if(life === 0){
            message=name+" est mort, impossible de courir";
        }else {
            message=name+" est endormie, impossible de courir";
        }
    }
    life -= 1;
    message=name+" court et perd 1 point de vie";

    ui.log(message);
    ui.displayStatus(life,money,awake);
}

export function fight(){
    if (awake===false){
        if(life === 0){
            message=name+" est mort, impossible de se battre";
        }else {
            message=name+" est endormie, impossible de se battre";
        }
    }else  if(life <=3){
                message=name+" ne peut pas se battre, n'a pas assez de point de vie";
           }else {
                life-=3;
                message=name+" se bat et perd 3 points de vie";
           }
        ui.log(message);
        ui.displayStatus(life,money,awake);
}

export function work(){
    if (awake===false) {
        if (life === 0) {
            message = name + " est mort, impossible de travailler";
        } else {
            message = name + " est endormie, impossible de travailler";
        }
    }
    if (life <=1){
        message=name+" ne peut pas travailler, n'a pas assez de point de vie";
    }else{
            life-=1;
            money+=2;
            message=name+" travaille, gagne 2 unités d'argent mais perd 1 points de vie";
          }
    ui.log(message);
    ui.displayStatus(life,money,awake);
}

export function eat(){
    if (awake===false) {
        if (life === 0) {
            message = name + " est mort, impossible de manger";
        } else {
            message = name + " est endormie, impossible de manger";
        }
    }
    if (money<3){
        message=name+" ne possede pas assez d'argent";
    }else {
        life += 2;
        money -= 3;
        message=name+" mange, gagne 2 points de vie et perd 3 unités d'argent";
    }
    ui.log(message);
    ui.displayStatus(life,money,awake);
}

export function sleep(){
    if (awake===false) {
        if (life === 0) {
            message = name + " est mort, impossible de manger";
        } else {
            message = name + " dort déjà !";
        }
    }else{
        awake=false;
        message=name+" ne peut rien faire car il dors";
        ui.displayStatus(life,money,awake);
        setTimeout(function(){
            awake = true;
            life+=1;
            message=name+" est réveillé";
            ui.log(message)
            ui.displayStatus(life,money,awake);},10000);
    }
}

/*  fonction qui s'exécute toute les 12s    */
export function auto(){
    if (life>0){
        life-=1;
        setInterval(function(){
            let act=[run,fight,work,eat];
            let nbr=Math.round(Math.random() * 4);
            act[nbr]();
            ui.displayStatus(life,money,awake);}, 12000);
    }
}

export function kill(){
    life = 0;
    money = 0;
    awake = false;
    message="Vous avez tué " +name;
    ui.log(message);
    displayStatus(life, money, awake);
}

export function newLife(){

}



