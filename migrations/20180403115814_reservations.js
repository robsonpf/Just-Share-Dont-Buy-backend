
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reservations', table => {
    table.increments()
    table.integer('user_id')
    table.foreign('user_id').references('id').inTable('users')
    table.integer('item_id')
    table.foreign('item_id').references('id').inTable('items')
    table.boolean('reserved').notNullable().defaultTo(false)
    table.timestamps(true, true)
  )}
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('reservations')
};
