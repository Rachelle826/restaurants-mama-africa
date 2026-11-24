console.log("Bienvenue dans notre restaurant Chez Mama Africa !");
const bouton = document.getElementById("btn-message");
const message = document.getElementById("message-accueil");

bouton.addEventListener("click", function () {
    message.textContent = "Bienvenue chez Mama Africa !";
});