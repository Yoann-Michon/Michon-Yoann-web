let actionbox = document.getElementById('actionbox')

/*  permet d'afficher un message
 *  dans la boite #actionbox    */
export function log(message){
    let texte=document.createElement("p")
    texte.textContent=message
    actionbox.prepend(texte)
}
/*  permet d'afficher l'état
 *  du monstre reçu en paramètre dans la liste  */
function displayStatus(life, money, awake){

}