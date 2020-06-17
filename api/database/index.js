const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'corne',
        password: 'password',
        database: 'airport',
    }
});

module.exports = knex;