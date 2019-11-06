const express = require('express');

const server = express();

const CarsRouter = require('./routers/cars-router.js');

server.use(express.json());

server.use('/api/cars', CarsRouter);

module.exports = server;