
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    //   primary key
    tbl.increments();
    //   user email
    tbl.string('email')
        .unique()
        .notNullable()
        .index();
    //   password
    tbl.string('password')
        .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
