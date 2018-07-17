let listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

function appelListe() {
    document.getElementById("contenu").innerHTML = "";
    listeLiens.forEach(function (listeLiens) { // 
        let div = document.createElement("div"); // création de lélément div
        div.className = "lien";// Ajout de la classe .lien à l'élément div
        document.getElementById("contenu").appendChild(div);// Insertion de l'élément div dans l'élément contant l'id contenu
        div.innerHTML = "<a href='" + listeLiens.url + "' target='_blank' style='color: #428bca'>" + listeLiens.titre + "</a>\t <span>" + listeLiens.url + "</br>" + "</br> Ajouté par " + listeLiens.auteur + "</span>";// Ajout de contenu html dans la div
    });// fermeture de la boucle forEach
}
/*//Creation du bouton
 // La zone de réponse contient initialement un bouton
    let zoneFormElt = document.createElement("div");
    let boutonElt = document.createElement("button");
    boutonElt.textContent = "Ajouter un lien";
    zoneFormElt.appendChild(boutonElt);

    boutonElt.addEventListener("click", function () {
        // Remplacement du bouton par la réponse à la question
        let formElt = document.createElement("div");
        reponseElt.textContent = question.reponse;
        zoneFormElt.innerHTML = "<button>Ajouter un lien !</button>";
        zoneFormElt.appendChild(formElt);
});

// let boutonElt = document.createElement("bouton")
// boutonElt

*/








/* function clic() {
}
let boutonElt = document.getElementById("bouton");
boutonElt.addEventListener("click", clic); */
    


//Ajout d'un formulaire apres click sur le bouton

appelListe();