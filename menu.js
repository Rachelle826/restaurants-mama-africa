const sections = {
    entrees: document.getElementById("entrees"),
    plats: document.getElementById("plats"),
    desserts: document.getElementById("desserts")
};

function afficherSeulement(nom) {
    sections.entrees.style.display = "none";
    sections.plats.style.display = "none";
    sections.desserts.style.display = "none";

    sections[nom].style.display = "block";
}

document.getElementById("btn-entrees").addEventListener("click", function () {
    afficherSeulement("entrees");
});

document.getElementById("btn-plats").addEventListener("click", function () {
    afficherSeulement("plats");
});

document.getElementById("btn-desserts").addEventListener("click", function () {
    afficherSeulement("desserts");
});
document.getElementById("btn-tout").addEventListener("click", function () {
    sections.entrees.style.display = "block";
    sections.plats.style.display = "block";
    sections.desserts.style.display = "block";
});
const listePanier = document.getElementById("liste-panier");
const totalAffiche = document.getElementById("total");
let total = 0;

const boutonsAjouter = document.querySelectorAll(".btn-ajouter");

boutonsAjouter.forEach(function (bouton) {
    bouton.addEventListener("click", function () {
        const carte = bouton.parentElement;
        const nom = carte.dataset.nom;
        const prix = Number(carte.dataset.prix);

        const ligne = document.createElement("li");
        ligne.textContent = nom + " - " + prix + " FCFA";
        listePanier.appendChild(ligne);

        total = total + prix;
        totalAffiche.textContent = total;
    });
});
   