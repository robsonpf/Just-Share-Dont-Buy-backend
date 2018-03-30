
exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', table => {
    table.increments()
    table.integer('user_id')
    table.foreign('user_id').references('id').inTable('users')
    table.integer('category_id')
    table.foreign('category_id').references('id').inTable('categories')
    table.string('name').notNullable()
    table.string('description').notNullable()
    table.boolean('reserved').notNullable().defaultTo(false)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('items')
};
