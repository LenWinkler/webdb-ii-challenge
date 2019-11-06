
exports.up = function(knex) {
  return knex.schema.createTable('cars', function(table) {
      table.increments();

      table.string('vin', 17).notNullable();
      table.string('make', 64).notNullable();
      table.string('model', 64).notNullable();
      table.integer('mileage').notNullable();
      table.string('transmission', 16);
      table.string('titleStatus', 64);

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
