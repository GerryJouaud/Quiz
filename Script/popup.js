/** 
 * 
 * Ici se trouve les fonctions pour afficher le pop up d'accueil'
 * 
 */

function cacherPopAccueil(){
    let popupBackgroundAccueil=document.querySelector(".popupBackgroundAccueil")
    //de base .popupBackgroundAccueil est "display:flex", il faut le rendre "none"
    let boutonJouer=document.getElementById("boutonJouer")
    // si click en dehors de la div popup
    popupBackgroundAccueil.addEventListener("click", (event) => {
        if (event.target === popupBackgroundAccueil) {
            popupBackgroundAccueil.classList.add("desactive")
            compteARebours();
        }
        
        })
        // si click sur le boutonJouer
    boutonJouer.addEventListener("click", () =>{
        popupBackgroundAccueil.classList.add("desactive")
        compteARebours();
        
        
    })
       
    }


/** 
 * 
 * Ici se trouve les fonctions pour afficher le pop up de partage du score
 * 
 */

function afficherPopup(){
    let popupBackground=document.querySelector(".popupBackground")
    //de base .popupBackground est "display:none", il faut le rendre "active"
    popupBackground.classList.add("active")
}


function cacherPopup(){
    let popupBackground=document.querySelector(".popupBackground")
    //.popupBackground est donc "active", il faut le remettre en "display:none" en supprimant ".active"
    popupBackground.classList.remove("active")
}
function evenementAfficherPopup(){
    // on écoute l'évènement click du bouton partagerScore, et on utilise la fonction correspondante
    let boutonPartage=document.querySelector(".partageScore button")
   let popupBackground=document.querySelector(".popupBackground")
   boutonPartage.addEventListener("click", () => {
    afficherPopup()
   })

   popupBackground.addEventListener("click", (event) => {
    if (event.target === popupBackground) {
        cacherPopup()
    }
   })
}

