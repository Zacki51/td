"use strict";
// Cette fonction sélectionne aléatoirement un élément d'un tableau et l'affiche
function tirage() {
    let mangas = ["Naruto", "One Piece", "DBZ", "Bleach", "HxH", "JJK", "Spy x Family", "Sakamoto Days", "JJBA", "HnK", "Boruto"];
    let randomIndex = Math.floor(Math.random() * mangas.length); // Générer un index aléatoire
    document.getElementById("affichage").textContent = mangas[randomIndex]; // Afficher l'élément tiré au sort
}
