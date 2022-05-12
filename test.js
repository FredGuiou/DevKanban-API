const dotenv = require('dotenv');
dotenv.config();

const { Card, Label, List } = require('./app/models/index');



async function allLists() {
let lists = await List.findAll();
console.log(lists);
};

allLists();

async function allCards() {
let cards = await Card.findAll();
console.log(cards);
};

allCards();

async function allLabels() {
let labels = await Label.findAll();
console.log(labels);
};

allLabels();