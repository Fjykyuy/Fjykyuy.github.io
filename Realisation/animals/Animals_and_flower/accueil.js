const recherche_btn = document.getElementById('bouton_recherche');
const recherche_cont = document.getElementById('conteneur_recherche');
const recherche_ent = document.getElementById('recherche_entree');

recherche_btn.addEventListener('click', (e) => {    

    recherche_cont.classList.toggle('active');    // permet d'activer ou désactiver la class pour faire apparaitre la class
    
});