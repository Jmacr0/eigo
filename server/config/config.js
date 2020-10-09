const path = require('path');

require('dotenv').config({
    path: path.resolve(__dirname, '..', '..', '.env'),
});

const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE,
    DB_HOST,
    DB_DIALECT,
    LOCAL_DB_USERNAME,
    LOCAL_DB_PASSWORD,
    LOCAL_DB_DATABASE,
    LOCAL_DB_HOST,
} = process.env;

module.exports = {
    development: {
        username: LOCAL_DB_USERNAME,
        password: LOCAL_DB_PASSWORD,
        database: LOCAL_DB_DATABASE,
        host: LOCAL_DB_HOST,
        dialect: DB_DIALECT,
    },
    production: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DATABASE,
        host: DB_HOST,
        dialect: DB_DIALECT,
    },
}