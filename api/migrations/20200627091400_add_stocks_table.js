exports.up = function (knex) {
    return knex.schema.createTable('stocks', table => {
        table.increments('stock_id');
        table.string('symbol');
        table.string('company_name');
        table.string('amount_of_shares');
        table.string('purchase_price');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('stock')
};
