exports.up = function(knex, Promise) {
  return knex.schema.table('items', table => {
    table.boolean('reserved').notNullable().defaultTo(false)
  })
  .table('reservations', table => {
    table.dropColumn('reserved')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('items', table => {
    table.dropColumn('reserved')
  })
  .table('reservations', table => {
    table.boolean('reserved').notNullable().defaultTo(false)
  })
};
