const dotenv = require('dotenv');
dotenv.config();

const { Card, Label, List } = require('./app/models/index');

let lists = List.findAll();
console.log(lists);

let cards = Card.findAll();
console.log(cards);

let labels = Label.findAll();
console.log(labels);