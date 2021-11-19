exports.up = async (knex) => {
  await knex.schema
    .createTable("roles", (tbl) => {
      tbl.increments("roles_id");
      tbl.string("name", 128).notNullable().unique();
    })
    .createTable("classes", (tbl) => {
      tbl.increments("class_id");
      tbl.string("name", 128);
      tbl.string("time", 128).notNullable();
      tbl.string("date", 32).notNullable();
      tbl.string("duration", 128).notNullable();
      tbl.string("type", 256).notNullable();
      tbl.string("intensity", 128).notNullable();
      tbl.string("location", 256).notNullable();
      tbl.integer("capacity");
      tbl.integer("reservations");
    })
    .createTable("users", (tbl) => {
      tbl.increments("user_id");
      tbl.string("username", 200).notNullable().unique();
      tbl.string("password", 200).notNullable();
      tbl.timestamps(false, true);
      tbl
        .integer("role")
        .unsigned()
        .references("roles.roles_id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .defaultTo(1);
    })
    .createTable("users_classes", (tbl) => {
      tbl.increments("user_class_id");
      tbl
        .integer("user_id")
        .unsigned()
        .references("users.user_id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("class_id")
        .unsigned()
        .references("classes.class_id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists("users_classes")
    .dropTableIfExists("users")
    .dropTableIfExists("classes")
    .dropTableIfExists("roles");
};
