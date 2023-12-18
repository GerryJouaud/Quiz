/**
 * ce .js contient les questions et les réponses du quizz. Sachant qu'avec le code de script.js les questions sont dans l'ordre i++
 */


// Ce tableau contient les questions et les réponses du thème Géographie
const questionGeographie = [
    "Quel est l'océan le plus vaste au monde ?",
    "Quel est le dernier pays du monde, par ordre alphabétique ?",
    "Quelle est la capitale de la Grèce ?",
    "Où se trouve le siège de la Commission Européenne ?",
    "Quelle ville du Morbihan est célèbre pour ses alignements de menhirs ?",
    "Quelle région chinoise était autrefois un pays indépendant gouverné par le Dalaï Lama ?",
    "Quel pays possède plus de lacs, que tout le reste du monde réuni ?",
    "Quel est le plus long fleuve d'’Europe qui traverse plusieurs pays ?",
    "Quelle est la plus grande ville de Bourgogne ?",
    "Quel est le fleuve le plus profond du monde ?",

]
const bonneReponseGeographie = [
    "Océan Pacifique",
    "Zimbabwe",
    "Athènes",
    "Bruxelles",
    "Carnac",
    "Tibet",
    "Canada",
    "Danube",
    "Dijon",
    "Congo",

]

// Ce tableau contient les questions et les réponses du thème Histoire
const questionHistoire = [
    "Quand a été instauré la Ve République en France ?",
    "Qui a découvert l'Amérique ?",
    "En quelle année le mur de Berlin a-t-il été construit ?",
    "Qui a été le premier président des États-Unis ?",
    "Où a eu lieu le tribunal international au cours duquel ont été jugés les hauts responsables nazis ?",
    "En quelle année les femmes ont-elles obtenu le droit de vote ?",
    "Qui a succédé à Staline en 1953 ?",
    "En quelle année le Maroc accède-t-il à l’indépendance ?",
    "En quelle année Nelson Mandela devient-il le premier président noir d’Afrique du Sud ?",
    "Au XIVe siècle, dans quelle ville française les papes ont-ils établi leur lieu de résidence permanent ?",
]
const bonneReponseHistoire = [
    "1958",
    "Christophe Colomb",
    "1961",
    "George Washington",
    "Nuremberg",
    "1944",
    "Nikita Khrouchtchev",
    "1956",
    "1994",
    "Avignon",
    



]

// Ce tableau contient les questions et les réponses du thème Mathématiques
const questionMathematiques = [
    "Quel est le terme général de la suite arithmétique 3,7,11,15,…3,7,11,15,… ?",
    "Quelle est la racine carrée de 144 ?",
    "Résolvez l'équation 2x−5=112x−5=11?",
    "Quel est le périmètre d'un rectangle de longueur 6 cm et de largeur 4 cm ?",
    "Simplifiez l'expression 3x+2x−7x3x+2x−7x.",
    "Quelle est la valeur de ππ (pi) au centième près ?",
    "Combien de faces a un dodécaèdre régulier ?",
    "Résolvez l'inéquation 2x+3>72x+3>7.",
    "Quelle est la dérivée de x2x2 par rapport à xx ?",
    "Quelle est la somme des angles intérieurs d'un triangle ?",

]

const bonneReponseMathematiques = [
    "19",
    "12",
    "8",
    "20",
    "-2x",
    "3,14",
    "12",
    "2",
    "2x",
    "180",
]
// Ce tableau contient les questions et les réponses du thème SVT

const questionSvt = [
    "Quel est l'organe principal du système circulatoire humain ?",
    "Quel est le processus par lequel les plantes convertissent la lumière en énergie ?",
    "Quelle est l'unité de base du système nerveux ?",
    "Quel organe produit l'insuline dans le corps humain ?",
    "Comment appelle-t-on la phase de division cellulaire où le noyau de la cellule se divise en deux ?",
    "Quel gaz les plantes absorbent-elles pendant la photosynthèse ?",
    "Quel organe du système digestif est responsable de l'absorption des nutriments dans le sang ?",
    "Quelle est la couche externe de la peau qui protège le corps contre les infections ?",
    "Quel est l'organe responsable de la production de bile pour la digestion des graisses ?",
    "Quel processus biologique permet la conversion du glucose en énergie dans les cellules ?",
]

const bonneReponseSvt = [
    "Coeur",
    "Photosynthèse",
    "Neurone",
    "Pancréas",
    "Mitose",
    "Dioxyde de carbone",
    "Intestin",
    "Épiderme",
    "Foie",
    "Respiration",
]

// Ce tableau contient les questions et les réponses du thème Philosophie

const questionPhilosophie = [
    "Quel philosophe a formulé la maxime \"Cogito, ergo sum\" (Je pense, donc je suis) ?",
    "Quel concept philosophique désigne la recherche du bonheur comme le but ultime de la vie ?",
    "Quel terme signifie, en philosophie, l'amour de la sagesse et la recherche de la connaissance ?",
    "Quelle éthique se base sur le devoir moral sans se soucier des conséquences ?",
    "Quel philosophe grec a fondé l'école de pensée stoïcienne ?",
    "Quelle théorie éthique affirme que la moralité dépend des conséquences de nos actions ?",
    "Quel philosophe a développé la théorie de la justice comme équité dans \"Théorie de la justice\" ?",
    "Quelle philosophie prône la recherche du plaisir et l'évitement de la douleur comme but de la vie ?",
    "Quel concept philosophique désigne la recherche du sens et du but de la vie ?",
    "Selon Socrate, quelle est la clé de la vertu?",

]

const bonneReponsePhilosophie = [
    "Descartes",
    "Eudémonisme",
    "Philosophie",
    "Déontologie",
    "Zénon",
    "Conséquentialisme",
    "John Rawls",
    "Hedonisme",
    "Existentialisme",
    "Connaissance",


]

// Ce tableau contient les questions et les réponses du thème Littérature

const questionLitterature = [
    "Quel auteur a écrit les romans “L’Étranger” et “La Peste” ?",
    "Quel est le premier livre écrit par Françoise Sagan alors qu’elle n’a que 18 ans, en 1954 ?",
    "Le film Charlie et la chocolaterie est l’adaptation d’un célèbre roman pour enfant, mais qui en est l’auteur ?",
    "Qui a écrit le roman à succès “Les fourmis” ?",
    "Comment s’appelle le capitaine qui veut se venger de Moby-Dick dans le roman d’Hermann Melville ?",
    "Quelle est la tragédie la plus célèbre de William Shakespeare ?",
    "Qui a écrit le roman “La Ferme des Animaux” ?",
    "Quel est le seul roman écrit par Oscar Wilde ?",
    "Quel auteur écrit le roman 'La Disparition', sans utiliser la lettre: 'e' ?",
    "Dans le roman Notre-Dame de Paris de Victor Hugo, qui a recueilli et élevé Quasimodo ?",
]

const bonneReponseLitterature = [
    "Albert Camus",
    "Bonjour tristesse",
    "Roald Dahl",
    "Bernard Werber",
    "Capitaine Achab",
    "Hamlet",
    "Georges Orwell",
    "Le portrait de Dorian Gray",
    "Georges Perec",
    "Claude Frollo"
]


