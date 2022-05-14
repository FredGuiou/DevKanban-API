const app = {
    init(){
        setListsTitle();
        getLists();
    },
    async getLists() {
        // je viens interroger mon API
        const response = await fetch("http://localhost:4001");

        // je teste si la réponse est OK
        if (response.ok) {
            // console.log(await response.json());

            // je vais récupérer mon parent UL
            const listesHTML = document.getElementById("listes");
            // je récupère l'ensemble des régions
            const listesJSON = await response.json();

            for (const liste of listesJSON) {
                let li = document.createElement("li");
                li.textContent = liste.nom;
                listesHTML.appendChild(li);
            }
        }
        else {
            console.log(response);
        }
    },

    setListsTitle() {
        const listesHTML = document.getElementById("listes");
        let li = document.createElement("li");
        li.textContent = "LISTE DES LISTES";
        listesHTML.appendChild(li);
    }
};

// On attend que la page soit chargée complètement avant d'afficher les régions
document.addEventListener("DOMContentLoader", app.init);