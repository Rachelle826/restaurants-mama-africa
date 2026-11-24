const bouton = document.getElementById("btn-message");
const message = document.getElementById("message-accueil");
let nombreClics = 0;

bouton.addEventListener("click", function () {
    nombreClics = nombreClics + 1;

    if (nombreClics === 1) {
        message.textContent = "Bienvenue chez Mama Africa !";
    } else if (nombreClics < 5) {
        message.textContent = "Vous avez cliqué " + nombreClics + " fois.";
    } else {
        message.textContent = "Ça suffit, venez plutôt manger !";
    }
});