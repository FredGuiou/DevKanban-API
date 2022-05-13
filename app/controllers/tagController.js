const Tag = require("../models/Tag");

const tagController = {

    all: async (req, res) => {

        //Récupérer toutes les tags//
        const tags = await Tag.findAll({});

        res.json(tags);
    },

    getById: async (req, res) => {
        //Récupérer la carte via son id//

        const id = Number(req.params.id);

        try {
            // Si id différent de NaN
            if (!isNaN(id)) {
                const tag = await Tag.findByPk(id);
                res.json(tag);
                return;
            }

            res.status(404);
            res.send("Not found dans le getById de tagController.js");

        } catch (err) {
            res.status(500);
            res.send("Une erreur inatendu s'est produit dans la methode getById de tagController.js");
            console.error(err);
        }
    },

    createTag: async (req, res) => {
        const body = req.body;

        try {

            if (req.body) {
                const tag = await Tag.create(body);
                res.send(tag);
                return;
            }
            res.status(400);
            res.send("Vous devez inclure un body pour créer un tag via createTag de tagController.js");


        } catch (err) {
            res.status(500);
            res.send("Une erreur inatendu s'est produit dans la methode createTag de tagController.js");
            console.error(err);
        }
    },

    updateTag: async (req, res) => {

        const body = req.body;

        const id = Number(req.params.id);

        try {
            if (!isNaN(id)) {

                const tag = await Tag.update(body, {
                    where: {
                        id
                    }
                });
                res.send(tag);
                return;
            }

            res.status(404);
            res.send("Vous ne pouvez pas mettre à jour un tag via la méthode UpdateTag de tagController.js");

        } catch (err) {
            res.status(500);
            res.send("Une erreur inatendu s'est produit dans la méthode updatetag de tagController.js");
            console.error(err);
        }
    },

    deleteTag: async (req, res) => {

        const id = Number(req.params.id);
        try {
            if (!isNaN(id)) {
                const tag = await Tag.findByPk(id);
                tag.destroy();
                res.send("Votre tag est supprimée");
                return;
            }

            res.status(404);
            res.send("Vous ne pouvez pas supprimer un tag via la méthode deleteTag de tagController.js");
        } catch (err) {
            res.status(500);
            res.send("Une erreur inatendu s'est produit dans la méthode deleteLists de listController.js");
            console.error(err);
        }
    }

};

module.exports = tagController;