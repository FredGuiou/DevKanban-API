const List = require("../models/List");

const listController = {

    all: async (req, res) => {
        //Récupérer toutes les listes//

        const lists = await List.findAll({});

        res.json(lists);
    },

    getById: async (req, res) => {
        //Récupérer la liste via son id//

        const id = Number(req.params.id);

        try {
            // Si id différent de NaN
            if (!isNaN(id)) {
                const list = await List.findByPk(id);
                res.json(list);
                return;
            }

            res.status(404);
            res.send("Not found dans le getById de listController.js");

        } catch (err) {
            res.status(500);
            res.send("Une erreur inatendu s'est produit dans la methode getById de listController.js");
            console.error(err);
        }
    },

    createList: async (req, res) => {
        const body = req.body;

        try {

            if (req.body) {
                const list = await List.create(body);
                res.send(list);
                return;
            }
            res.status(400);
            res.send("Vous devez inclure un body pour créer une liste via createLists de listController.js");


        } catch (err) {
            res.status(500);
            res.send("Une erreur inatendu s'est produit dans la méthode createLists de listController.js");
            console.error(err);
        }
    },

    updateList: async (req, res) => {

        const body = req.body;

        const id = Number(req.params.id);

        try {
            if (!isNaN(id)) {

                const list = await List.update(body, {
                    where: {
                        id
                    }
                });
                res.send(list);
                return;
            }

            res.status(404);
            res.send("Vous ne pouvez pas mettre à jour une liste via la méthode updateLists de listController.js");

        } catch (err) {
            res.status(500);
            res.send("Une erreur inatendu s'est produit dans la méthode updateLists de listController.js");
            console.error(err);
        }
    },

    deleteList: async (req, res) => {

        const id = Number(req.params.id);
        try {
            if (!isNaN(id)) {
                const list = await List.findByPk(id);
                list.destroy();
                res.send("Votre liste est supprimée");
                return;
            }

            res.status(404);
            res.send("Vous ne pouvez pas supprimer une liste via la méthode deleteLists de listController.js");
        } catch (err) {
            res.status(500);
            res.send("Une erreur inatendu s'est produit dans la méthode deleteLists de listController.js");
            console.error(err);
        }
    }

};

module.exports = listController;