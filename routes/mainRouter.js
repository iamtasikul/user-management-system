const express = require('express');
const route = express.Router();

const mainController = require('../controller/mainController');

route.get('/', mainController.indexController);

route.get('/add-user', mainController.addUserController);

route.get('/update-user', mainController.updateUserController);

//API
route.post('/api/users', mainController.create);

module.exports = route;
