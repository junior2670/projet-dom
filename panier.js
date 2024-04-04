
var prixT=document.getElementById("prixtotal")
//variable globale pour contenir les information sur le prix  des article 
var prix= [9000]
var prixTotal=0
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
var contenant=document.getElementsByClassName("contenant")


function supprimearticle1() {
    var artsup1=document.getElementById("article1")
    artsup1.innerHTML = " ";
    let lis= [0];
    reCalculeprix(lis);
     }
// fonction pour augmenter le nombre d'article
let plus= document.getElementsByClassName("plus1")
let quantiter=document.getElementById("quantiter")
let compteur =0
quantiter.innerText=1;
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
        quantiter.innerText=0
        compteur=0
        prixT=0
        reCalcule(0)

}

}


 
 
