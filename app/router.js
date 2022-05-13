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
router.post('/lists/:id', listController.createList);
router.patch('/lists/:id', listController.updateList);
router.delete('/lists/:id', listController.deleteList);


//----------------cardController----------------//
router.get('/cards', cardController.all);
router.get('/cards/:id', cardController.getById);
router.post('/cards/:id', cardController.createCard);
router.patch('/cards/:id', cardController.updateCard);
router.delete('/cards/:id', cardController.deleteCard);


//----------------tagController----------------//
router.get('/tags', tagController.all);
router.get('/tags/:id', tagController.getById);
router.post('/tags/:id', tagController.createTag);
router.patch('/tags/:id', tagController.updateTag);
router.delete('/tags/:id', tagController.deleteTag);


module.exports = router;