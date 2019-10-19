// Import 
const db = require('mongoose');

const connect = async() => {
    try {
        await db.connect(process.env.URL_DB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
        console.log(`DataBase is connected`);
    } catch (err) {
        console.error(`[ERROR_DB]: `, err);
    }
}

module.exports = connect;