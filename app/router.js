const express = require('express');

const mainController = require('./controllers/mainController');
const listController = require('./controllers/listController');
const cardController = require('./controllers/cardController');
const tagController = require('./controllers/tagController');

const router = express.Router();


router.get('/', mainController.homePage);

//----------------listController----------------//
router.get('/lists', listController.all);
router.get('/lists/:id', listController.getById);




//----------------cardController----------------//
router.get('/cards', cardController.all);
router.get('/cards/:id', cardController.getById);



//----------------tagController----------------//
router.get('/tags', tagController.all);
router.get('/tags/:id', tagController.getById);


module.exports = router;