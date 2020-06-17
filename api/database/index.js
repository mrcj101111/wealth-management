const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'wealth-management',
        database: 'wealth-management',
    }
});

module.exports = knex;