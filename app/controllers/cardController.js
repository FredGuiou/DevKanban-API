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

};

module.exports = cardController;