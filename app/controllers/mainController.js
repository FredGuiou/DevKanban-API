const mainController = {

    homePage: (req, res) => {
        
        res.send("Welcome to Okanban ! ;)");
        console.log("Welcome to Okanban ! ;)");
    }

};

module.exports = mainController;