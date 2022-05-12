const Card = require("../models/Card");

const cardController = {

    all: async (req, res) => {
        
        //Récupérer toutes les cartes//
        const cards = await Card.findAll({});

        res.json(cards);
    },

    getById: async (req, res) => {
        //Récupérer la carte via son id//
        
        const id = Number(req.params.id);

        // Si id différent de NaN
        if(!isNaN(id)) {
            const card = await Card.findByPk(id);
            res.json(card);
            return;
        } 

        res.status(404);
        res.send("Not found");
    },

    createCard: async (req, res) => {
        const body = req.body;

        try {
            if(req.body) {
                const card = await Card.create(body);
                res.send(card);
            } else {
                res.status(400);
                res.send("Vous devez inclure un body pour créer une carte via createCard de cardController.js");
            }
    
        } catch(err) {
            res.status(500);
            res.send("Une erreur inatendu s'est produit dans la methode createCard de cardController.js");
            console.error(err);
        }
    },

    updateCard: async (req, res) => {
        
        const body = req.body;
        
        const id = Number(req.params.id);

        
        if(!isNaN(id)) {
            
            const card = await Card.update(card, { where: { id }});
            res.send(card);
            return;
        } 

        res.status(404);
        res.send("Vous ne pouvez pas mettre à jour une carte via la méthode UpdateCard de cardController.js");

    },

    deleteCard: async (req, res) => {

        const id = Number(req.params.id);

        if(!isNaN(id)) {
            const card = await Card.findByPk(id);
            card.destroy();
            res.send("Votre carte est supprimée");
            return;
        } 

        res.status(404);
        res.send("Vous ne pouvez pas supprimer une carte via la méthode deleteCard de cardController.js");
    }

};

module.exports = cardController;