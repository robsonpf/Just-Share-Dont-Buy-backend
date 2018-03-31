exports.up = function(knex, Promise) {
  return knex.schema.table('users', table => {
    table.timestamps(true, true)
  })
  .table('categories', table => {
    table.timestamps(true, true)
  })
  .table('items', table => {
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', table => {
    table.dropColumn('created_at')
    table.dropColumn('updated_at')
  })
  .table('categories', table => {
    table.dropColumn('created_at')
    table.dropColumn('updated_at')
  })
  .table('items', table => {
    table.dropColumn('created_at')
    table.dropColumn('updated_at')
  })
};
