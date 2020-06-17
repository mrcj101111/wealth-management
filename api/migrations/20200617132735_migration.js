exports.up = function (knex) {
    return knex.schema.createTable('account', table => {
        table.increments('account_id');
        table.string('account_name');
        table.string('account_surname');
        table.string('account_email');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('account')
};