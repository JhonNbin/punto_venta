const express = require('express');

const config = require('./config');

const ventas = require('./Controllers/VentaController/VentaController');

const app = express();

app.set('port', config.app.port);

app.use('/api/ventas', ventas);

module.exports = app;