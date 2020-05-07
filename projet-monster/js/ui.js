let actionbox = document.getElementById('actionbox')
let statusElements=document.getElementById('status').childNodes

/*  permet d'afficher un message
 *  dans la boite #actionbox    */
export function log(message){
    let texte=document.createElement("p")
    texte.textContent=message
    actionbox.prepend(texte)
}
/*  permet d'afficher l'état
 *  du monstre reçu en paramètre dans la liste  */
export function displayStatus(life, money, awake){
    statusElements[0].innerHTML="Life : "+life;
    statusElements[1].innerHTML="Money : "+money;
    statusElements[2].innerHTML="Awake : "+awake;
}