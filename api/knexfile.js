// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'wealth-management',
      user: 'postgres',
      password: 'wealth-management'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'wealth-management',
      user: 'postgres',
      password: 'wealth-management'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'wealth-management',
      user: '',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
