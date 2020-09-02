
exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
      tbl.increments();

      tbl.string('proj_name', 255)
      .notNullable()

      tbl.string('proj_img', 2048)
      .notNullable()

      tbl.string('desc', 2048)
      .notNullable()

      tbl.string('stack', 1024)

      tbl.date('date')

      tbl.string('deploy', 2048)

      tbl.string('repo', 2048)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("projects");
};
