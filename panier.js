/**
 * Déclare toutes tes variables globales tout en haut
 */
var prixT = document.getElementById("prixtotal")
//variable globale pour contenir les information sur le prix  des article 
var prix= [9000]
var prixTotal = 0;
let plus= document.getElementsByClassName("plus1")
let quantiter = document.getElementById("quantiter")
let compteur = 0;

quantiter.innerText=1;
// programme  pour calculer le prix total des articles 

for (let i in prix ) {prixTotal=prixTotal+prix[i] }
    prixT.innerHTML=prixTotal +" FCFA"
    prixT.style.fontSize='18px'
    //fonction pour calculer le prie total des acticle 
    var prie=0
    function reCalculeprix(liste){
    for (let i in liste ) {
        prie=prie+liste[i]
        prixT.innerHTML=prie +"  FCFA"
    }
}

// fonction pour supprimer un article 
var contenant=document.getElementsByClassName("contenant");

/**
 * Evite de mettre les 123 dans les noms de variables et fonctions si ça n'a pas de sens
 */
function supprimearticle1() {
    var artsup1=document.getElementById("article1")
    artsup1.innerHTML = " ";
    let lis= [0];
    reCalculeprix(lis);
}
// fonction pour augmenter le nombre d'article


 function reCalcule(c){
    let recalprix =  c*9000
    prixT.innerHTML=recalprix +"  FCFA"
}

function Augmente(){
    // Incrémenter le compteur à chaque clic
    compteur++;
    // Afficher le nombre de clics dans la console  
        quantiter.innerText=compteur
        prix.push(9000)
        console.log(prix)
      reCalcule(compteur)
}
console.log(prix)
// FONCTION POUR DIMINUER LE NOMBRE D'ARTICLE 
function diminue(){
    // decrémenter le compteur à chaque clic
    compteur--;
    let comp=compteur*(-1)
    console.log(comp)
    if(quantiter.innerText!=0 &&quantiter.innerText !=1){
        quantiter.innerText=compteur
        reCalcule(comp)
    }

    else {
        quantiter.innerText = 0;
        compteur = 0;
        prixT = 0;
        reCalcule(0);
    }

}


 
 /**
  * Ne modifie pas directement les valeurs affichées par tes balises sinon ça va te mélanger. 
  * Il faut que tu déclares des variables avec une bonne structure qui te permet de représenter toute les informations importantes
  * Voici un exemple de structuration : 
  * 
  * var panier = {
  *     produit1: {
  *         quantite: 0,
  *         prixUnitaire: 9000,
  *     },
  *     produit2: {
  *         quantite: 0,
  *         prixUnitaire: 10000,
  *     },
  * };
  * 
  * Cette variable résume les informations les plus importantes.
  * 
  * Ensuite, tu crée une fonction actualiserAffcihage. Son rôle sera de se baser sur tes variables globales pour modifier les contenus des balises avec les bonnes informations
  * Tu va appeler cette fonction à chaque fois  que tu modifies une variable importante
  * 
  * Dans tes fonctions ajouter, diminuer et supprimer, tu vas juste modifier less variables globales et appeler ta fonction actualiiserAffichage pour qu'elle affiche les nouvelles informations
  */