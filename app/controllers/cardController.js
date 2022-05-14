const Card = require("../models/Card");

const cardController = {

    async all (req, res) {

        //Récupérer toutes les cartes//
        const cards = await Card.findAll({});

        res.json(cards);
    },

    async getById (req, res) {
        //Récupérer la carte via son id//

        const id = Number(req.params.id);

        try {
            // Si id différent de NaN
            if (!isNaN(id)) {
                const card = await Card.findByPk(id);
                res.json(card);
                return;
            }

            res.status(404);
            res.send("Not found dans le getById de cardController.js");

        } catch (err) {
            res.status(500);
            res.send("Une erreur inatendu s'est produit dans la methode getById de cardController.js");
            console.error(err);
        }
    },

    async createCard (req, res) {
        const body = req.body;

        try {

            if (req.body) {
                const card = await Card.create(body);
                res.send(card);
                return;
            }
                res.status(400);
                res.send("Vous devez inclure un body pour créer une carte via createCard de cardController.js");
            

        } catch (err) {
            res.status(500);
            res.send("Une erreur inatendu s'est produit dans la methode createCard de cardController.js");
            console.error(err);
        }
    },

    async updateCard (req, res) {

        const body = req.body;

        const id = Number(req.params.id);

        try {
            if (!isNaN(id)) {

                const card = await Card.update(body, {
                    where: {
                        id
                    }
                });
                res.send(card);
                return;
            }

            res.status(404);
            res.send("Vous ne pouvez pas mettre à jour une carte via la méthode UpdateCard de cardController.js");

        } catch (err) {
            res.status(500);
            res.send("Une erreur inatendu s'est produit dans la méthode updateCard de cardController.js");
            console.error(err);
        }
    },

    async deleteCard (req, res) {

        const id = Number(req.params.id);
        try {
            if (!isNaN(id)) {
                const card = await Card.findByPk(id);
                card.destroy();
                res.send("Votre carte est supprimée");
                return;
            }

            res.status(404);
            res.send("Vous ne pouvez pas supprimer une carte via la méthode deleteCard de cardController.js");
        } catch (err) {
            res.status(500);
            res.send("Une erreur inatendu s'est produit dans la méthode deleteList de cardController.js");
            console.error(err);
        }
    }

};

module.exports = cardController;