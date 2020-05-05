'use strict';

// NAMESPACE
var MONSTER = {
    modules : {}
};

MONSTER.modules.actions = (function(){
    let name, life, money, awake,etat;

    function get(){
        if(life >0){
            etat = "En vie";
        }else{
            etat = "Mort";
        }
    }

    function init(nom,vie,argent,reveiller){
        name = nom;
        life = vie;
        money = argent;
        awake = reveiller;
    }})

