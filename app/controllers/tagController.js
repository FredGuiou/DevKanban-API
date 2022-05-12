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

        // Si id différent de NaN
        if(!isNaN(id)) {
            const tag = await Tag.findByPk(id);
            res.json(tag);
            return;
        } 

        res.status(404);
        res.send("Not found");
    },

};

module.exports = tagController;