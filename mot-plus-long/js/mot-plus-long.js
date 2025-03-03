"user strict";
// Cette fonction récupère le texte du paragraphe "citation", le découpe en mots et trouve le plus long.
function trouverMotPlusLong() {
    let phrase = document.getElementById("citation").textContent; // Récupérer la phrase
    
    // Supprimer la ponctuation en utilisant replace
    let phraseSansPonctuation = phrase.replace(/[.,?!]/g, '');
    
    // Diviser la phrase en mots en utilisant split
    let mots = phraseSansPonctuation.split(" ");
    
    // Trouver le mot le plus long
    let motPlusLong = mots.reduce((a, b) => a.length >= b.length ? a : b, "");
    
    // Afficher le mot le plus long
    document.getElementById("motPlusLong").textContent = motPlusLong;
}

document.addEventListener("DOMContentLoaded", trouverMotPlusLong);
