
exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', table => {
    table.increments()
    table.foreign('user_id').references('id').inTable('users')
    table.foreign('category_id').references('id').inTable('categories')
    table.string('name').notNullable()
    table.string('description').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('items')
};
