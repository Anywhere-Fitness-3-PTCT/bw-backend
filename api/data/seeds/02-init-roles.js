exports.seed = function (knex) {
  const roles = [
    {
      name: "user", // will get id 1
    },
    {
      name: "admin", // will get id 2
    },
  ];

  return knex("roles")
    .insert(roles)
    .then(() => console.log("\n== Seed data for roles table added. ==\n"));
};
