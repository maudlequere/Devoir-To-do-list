// éléments du HTML à prendre
const tacheAjoutee = document.getElementById("tache");
const boutonAjouter = document.querySelector(".ajouter");
const listeDetaches = document.querySelector("#tache-a-faire ul");
const nbTache = document.querySelector("#nb-tache p");

// boucle pour ajouter une tâche
tailleListe = 0
function ajouterUneTache(){

    if (tacheAjoutee.value.length > 0){
         tailleListe = tailleListe + 1;
        const nouvelleTache = document.createElement("li");
        nouvelleTache.textContent=`Tâche ${tailleListe}: ${tacheAjoutee.value}`;
        nouvelleTache.classList.add("couleur-tache-liste")
        listeDetaches.appendChild(nouvelleTache);
    }
    tacheAjoutee.value = "";
    console.log(tailleListe);
    
     if (tailleListe == 1){
        nbTache.textContent = `Il vous reste 1 tâche à faire !`;
    }

    if (tailleListe > 1){
        nbTache.textContent = `Il vous reste ${tailleListe} tâches à faire !`;
    }
    
}

// au clic la tâche est ajoutée

boutonAjouter.addEventListener("click",ajouterUneTache);





