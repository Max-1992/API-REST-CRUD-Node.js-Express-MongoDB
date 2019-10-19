// IMPORTS
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');


// INITIALIZATIONS
const app = express();
dotenv.config();


// DATA BASE IS CONNECT
const db = require('./db-connect');
db();


// IMPORT ROUTER
const routes = require('./routes/api/index.routes');


// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))


// CORS CONFIGURATION


// ROUTES
routes(app);


// START THE SERVER
app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`);
});