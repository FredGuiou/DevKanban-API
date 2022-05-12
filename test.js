require("dotenv").config();

const { List,Card } = require("./app/models"); // équivalent à require("./app/models/index.js")

async function testList(){
    const allList = await List.findAll({
        include:[
            {
                association:"cards",
                include:[{
                    association:"tags"
                }]
            }
        ]
    });

    for(const list of allList){
        console.log("-",list.name);
        for(const card of list.cards){
            console.log("--",card.name);
            // for(const tag of card.tags){
            //     console.log("---",tag.name);
            // }
        }
    }
    
}

async function testCard(){
    const allCards = await Card.findAll({
        include:"list"
    });
    console.log(allCards);
}

testList();
// testCard();