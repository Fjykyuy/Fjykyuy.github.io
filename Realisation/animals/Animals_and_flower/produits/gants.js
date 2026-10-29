//Partie Carousel

let liste_images = ["../images/gants1.jpg", "../images/gants2.jpg", "../images/gants3.jpg"]

let Image = document.querySelector(".img_produit")
let FlecheGauche = document.querySelector(".fleche_gauche")
let FlecheDroite = document.querySelector(".fleche_droite")

let Indice = 0



FlecheGauche.addEventListener("click", function(){
    if (Indice !== 0) {
        Indice = Indice - 1
        Image.setAttribute("src", liste_images[Indice])
    }
    else {
        Indice = 2
        Image.setAttribute("src", liste_images[Indice])

    }
})

FlecheDroite.addEventListener("click", function(){
    if (Indice !== 2) {
        Indice = Indice + 1
        Image.setAttribute("src", liste_images[Indice])
    }
    else {
        Indice = 0
        Image.setAttribute("src", liste_images[Indice])

    }
})














// Partie Caractéristiques

let Caracteristiques = document.querySelector("#caracteristiques")
let Description = document.querySelector("#description_produit")
let Conteneur = document.querySelector("#contenu_caracteristiques")
let Carac_content = Conteneur.innerHTML
let Desc_content = "<p>Gants de jardinage confortables et résistants, parfaits pour manipuler les plantes, rempoter des fleurs ou entretenir le jardin sans se salir les mains. Leur matière souple permet de garder une bonne précision dans les mouvements.</p>"

Caracteristiques.addEventListener("click", function() {
    Caracteristiques.classList.add("fond_gris")
    Description.classList.remove("fond_gris")
    Conteneur.innerHTML = Carac_content


})

Description.addEventListener("click", function() {
    Caracteristiques.classList.remove("fond_gris")
    Description.classList.add("fond_gris")
    Conteneur.innerHTML = Desc_content


})


//Notification Bouton Panier

let boutonPanier = document.querySelector("#contenu_caracteristiques button")
let notif = document.querySelector("#notif")

boutonPanier.addEventListener("click", function(){

    notif.classList.add("active")

    setTimeout(function(){
        notif.classList.remove("active")
    }, 3000)

})