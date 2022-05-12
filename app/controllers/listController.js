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

        // Si id différent de NaN
        if(!isNaN(id)) {
            const list = await List.findByPk(id);
            res.json(list);
            return;
        } 

        res.status(404);
        res.send("Not found");
    },


};

module.exports = listController;