require('dotenv').config();

const express = require('express');
const router = require('./app/router');
const cors = require('cors');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended : true }));

app.use(router);

app.use(cors('*'));

// app.use(express.static('public'));

app.listen(port, _ => {
    console.log(`Serveur lancé sur le http://localhost:${port}`);
});
