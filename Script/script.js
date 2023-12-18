/*********************************************************************************
* 
* Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
* 
*********************************************************************************/

/**
* Cette fonction affiche dans la console le score de l'utilisateur
* @param {number} score : le score de l'utilisateur
* @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
*/

function afficherScore(score, nombreQuestions) {
    // récupération du span
    let spanScore = document.querySelector(".score span")
    // écriture texte
    let afficherScore = `${score} / ${nombreQuestions}`
    // On place le texte dans le span
    spanScore.innerText = afficherScore


}
/**
 * Cette fonction affiche la question dans la zone définie, le joueur devra trouver la réponse
 * @param {string} question 
 */

function afficherQuestion(question) {
    let zoneQuestion = document.querySelector(".zoneQuestion")
    zoneQuestion.innerText = question
}

/**
 * Cette fonction réinitialise tous les input au chargement de la page
 */

function resetInput() {
    document.addEventListener("DOMContentLoaded", function () {
        // Désélectionner les boutons radio
        let boutonsTheme = document.getElementsByName("boutonTheme")
        // Supprime le contenu de ZoneReponseUtilisateur
        let zoneReponseUtilisateur = document.getElementById("zoneReponseUtilisateur")
        boutonsTheme.forEach(function (bouton) {
            bouton.checked = false
            zoneReponseUtilisateur.value = ""
        })
    })
}

/**
 * Cette fonction permet de désactiver le choix des thèmes
 */

function desactiverChoixTheme() {
    let themeGeographie = document.getElementById("themeGeographie")
    let themeHistoire = document.getElementById("themeHistoire")
    let themeMathematiques = document.getElementById("themeMathematiques")
    let themeSVT = document.getElementById("themeSVT")
    let themePhilosophie = document.getElementById("themePhilosophie")
    let themeLitterature = document.getElementById("themeLitterature")
    themeGeographie.disabled = true
    themeHistoire.disabled = true
    themeMathematiques.disabled = true
    themeSVT.disabled = true
    themePhilosophie.disabled = true
    themeLitterature.disabled = true
}
/**
 * Cette fonction permet de Ré-activer le choix des thèmes
 */

function activerChoixTheme() {
    let themeGeographie = document.getElementById("themeGeographie")
    let themeHistoire = document.getElementById("themeHistoire")
    let themeMathematiques = document.getElementById("themeMathematiques")
    let themeSVT = document.getElementById("themeSVT")
    let themePhilosophie = document.getElementById("themePhilosophie")
    let themeLitterature = document.getElementById("themeLitterature")
    themeGeographie.disabled = false
    themeHistoire.disabled = false
    themeMathematiques.disabled = false
    themeSVT.disabled = false
    themePhilosophie.disabled = false
    themeLitterature.disabled = false
}
/**
 * Cette fonction construit le mail et l'envoie avec le client de messagerie électronique
 * @param {string} nom 
 * @param {string} email 
 * @param {string} score 
 */
function envoiEmail(nom, email, score) {
    let mailTo = `mailto:${email}?subject= Partage de mon score sur <Quiz/>= Bonjour, c'est ${nom} je voulais t'annoncer que j'ai obtenu le score de ${score} sur <Quiz/>, je te mets au défi de me battre !`
    location.href = mailTo
}
/**
 * Cette fonction valide le nom saisi en verifiant s'il fait + de 2 caractères 
 * @param {string} nom 
 * @throws {Error}
 */
function validerNom(nom) {
    if (nom.length <= 2) {
        throw new Error("Le nom est trop court !")
    }
}
/**
 * Cette fonction valide l'email saisie en fonction des criètres définis
 * @param {string} email 
 * @throws {Error}
 */
function validerEmail(email) {
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (!emailRegExp.test(email)) {
        throw new Error("L'email n'est pas valide !")
    }
}
/**
 * Cette fonction permet de créer un spanErreurMessage 
 * @param {*} message 
 */
function afficherMessageErreur(message) {


    let spanErreurMessage = document.getElementById("erreurMessage")

    if (!spanErreurMessage) {
        let popup = document.querySelector(".popup")
        spanErreurMessage = document.createElement("span")
        spanErreurMessage.id = "erreurMessage"
        popup.append(spanErreurMessage)
    }
    spanErreurMessage.innerText = message


}


/**
 * Cette fonction permet de gérer le formulaire du partage de score
 */
function gererFormulaire(scoreEmail) {
    try {
        let baliseNom = document.getElementById("nom")
        let nom = baliseNom.value
        validerNom(nom)

        let baliseEmail = document.getElementById("email")
        let email = baliseEmail.value
        validerEmail(email)

        afficherMessageErreur("")
        envoiEmail(nom, email, scoreEmail)

    } catch (erreur) {
        // gérer l'erreur
        afficherMessageErreur(erreur.message)
    }

}



/***
 * Cette fonction gère le compteARebours représenté par une une de-progress bar.
 */
function compteARebours() {
    function updateProgressBar(percentage) {
        document.getElementById('progress').style.width = percentage + '%';
    }

    let progressPercentage = 100; // Pourcentage initial
    let boutonPartage = document.querySelector(".partageScore button")
    let boutonValider = document.getElementById("boutonValider")
    const interval = setInterval(() => {
        progressPercentage -= 1; // Décrémente le pourcentage
        updateProgressBar(progressPercentage); // Met à jour la barre de progression

        // Arrête la progression lorsque le pourcentage atteint 0
        if (progressPercentage <= 0) {
            clearInterval(interval);
            boutonPartage.disabled = false
            boutonValider.disabled = true
            desactiverChoixTheme()
        }
    }, 1200); // Intervalle de mise à jour en millisecondes pour que la durée totale soit de deux minutes
    /////
}

/**
 * Cette fonction lance le jeu, elle demande à l'utilisateur de répondre à des questions en fonction des thèmes choisis
 */
function lancerJeu() {

    // initilisations 
    cacherPopAccueil()
    evenementAfficherPopup()
    let score = 0
    let i = 0
    


    let boutonPartage = document.querySelector(".partageScore button")
    let boutonValider = document.getElementById("boutonValider")

    let zoneReponseUtilisateur = document.getElementById("zoneReponseUtilisateur")
    let listeBoutonTheme = document.querySelectorAll(".listeBoutonTheme input")

    // gestion de l'évènement click sur bouton valider, valide si la saisie de l'utilisateur correspond à la bonne réponse associée et réinitialise l'input

    resetInput()


    // Le bouton valider est désactivé jusqu'au choix du thème
    boutonPartage.disabled = true
    boutonValider.disabled = true
    afficherQuestion("Veuillez sélectionner un thème")
    boutonValider.addEventListener("click", () => {
        if (zoneReponseUtilisateur.value === bonneReponseGeographie[i] || zoneReponseUtilisateur.value === bonneReponseHistoire[i] || zoneReponseUtilisateur.value === bonneReponseMathematiques[i]
            || zoneReponseUtilisateur.value === bonneReponseSvt[i] || zoneReponseUtilisateur.value === bonneReponsePhilosophie[i] || zoneReponseUtilisateur.value === bonneReponseLitterature[i]) {

            zoneReponseUtilisateur.classList.remove("flashBonneReponse") // Réinitialise la classe pour pouvoir la rajouter
            zoneReponseUtilisateur.classList.remove("flashMauvaiseReponse") // Réinitialise la classe pour pouvoir la rajouter

            setTimeout(() => { // Laisse un court délai pour rendre asynchrone et  faire fonctionner l'ajout de la classe
                zoneReponseUtilisateur.classList.add("flashBonneReponse");
            }, 10);
            score++


            activerChoixTheme()
        } else {
            
            zoneReponseUtilisateur.classList.remove("flashBonneReponse") // Réinitialise la classe pour pouvoir la rajouter
            zoneReponseUtilisateur.classList.remove("flashMauvaiseReponse") // Réinitialise la classe pour pouvoir la rajouter

            setTimeout(() => { // Laisse un court délai pour faire fonctionner l'ajout de la classe
                zoneReponseUtilisateur.classList.add("flashMauvaiseReponse");
            }, 10);
        }
        i++

        afficherScore(score, i)

        // On réinitialise la zone de réponse utilisateur
        zoneReponseUtilisateur.value = ""

        // Si le tableau de questions est vide on affiche un message et on désactive les boutons de jeu
        if (listeTheme[i] === undefined) {
            afficherQuestion("Quelle vitesse, vous avez terminé le jeu avant la fin du temps reglementaire !")
            desactiverChoixTheme()
            boutonValider.disabled = true
            boutonPartage.disabled = false
            boutonPartage.classList.add("active") // fait apparaitre le bouton partage de score
        } else {
            afficherQuestion(listeTheme[i])

        }
    })

    // gestion de l'évènement change sur les boutons radio

    for (let index = 0; index < listeBoutonTheme.length; index++) {
        listeBoutonTheme[index].addEventListener("change", (event) => {
            boutonValider.disabled = false
            // switch case qui en fonction de la value récupère la bonne liste de thème
            switch (event.target.value) {
                case "1":
                    listeTheme = questionGeographie
                    break
                case "2":
                    listeTheme = questionHistoire
                    break
                
                case "3":
                    listeTheme = questionMathematiques
                    break
                case "4":
                    listeTheme = questionSvt
                    break
                case "5":
                    listeTheme = questionPhilosophie
                    break
                case "6":
                    listeTheme = questionLitterature
                    break

            }
            // on affiche donc la question correspondante
            afficherQuestion(listeTheme[i])
            themeGeographie.disabled = true
            themeHistoire.disabled = true
            themeMathematiques.disabled = true
            themeSVT.disabled = true
            themePhilosophie.disabled = true
            themeLitterature.disabled = true

        })
    }

    //gestion de l'évènement submit du formulaire Pop Up de partage de score
    let form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let scoreEmail = `${score} / ${i}`
        gererFormulaire(scoreEmail)


    })

    afficherScore(score, i)

}
