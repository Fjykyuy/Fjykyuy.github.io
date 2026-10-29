//Partie Carousel

let liste_images = ["../images/arrosoir1.jpg", "../images/arrosoir2.jpg", "../images/arrosoir3.jpg"]

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
let Desc_content = "<p>Arrosoir élégant et résistant parfait pour l’entretien des plantes d’intérieur et des fleurs du jardin. Son bec fin permet un arrosage précis sans abîmer les feuilles.</p>"

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