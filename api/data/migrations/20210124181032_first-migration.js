exports.up = async (knex) => {
  await knex.schema
    .createTable("roles", (tbl) => {
      tbl.increments("roles_id");
      tbl.string("name", 128).notNullable().unique();
    })
    .createTable("users", (users) => {
      users.increments("user_id");
      users.string("username", 200).notNullable();
      users.string("password", 200).notNullable();
      users.timestamps(false, true);
      users
        .integer("role")
        .unsigned()
        .references("roles.roles_id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .defaultTo(1);
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("users").dropTableIfExists("roles");
};
