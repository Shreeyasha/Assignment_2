const express = require('express');
const route = express.Router();

const controller = require('../controller/employees_controller.js');
const { routes } = require('../index.js');

route.get('/load', controller.get_api_data);

route.get('/employees', controller.get);

route.post('/employees', controller.create);

route.put('/employees/:id', controller.update);

route.delete('/employees/:id', controller.destroy);

route.get('/employees/:id', controller.getById);

module.exports = route;