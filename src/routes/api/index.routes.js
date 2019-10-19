const express = require('express');
const app = express();

// IMPORTS ROUTES
const FrutasRoutes = require('./fruta.routes');

const routes = async(server) => {
    await server.use('/frutas', FrutasRoutes);
}


module.exports = routes;