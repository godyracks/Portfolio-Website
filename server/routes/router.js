const express = require('express');
const route = express.Router();

const services = require('../services/render');
/**
 * @description homePage/homeroute
 * method GET /
 */

route.get('/', services.homeRoutes);

module.exports = route;