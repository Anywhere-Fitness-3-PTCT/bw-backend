exports.seed = function (knex) {
  const classesSeed = [
    {
      name: "Kettle Bell Extravaganza",
      time: "13:30",
      date: "2021-11-30",
      duration: "40",
      type: "Cross-fit",
      intensity: "beginner",
      location: "John's Cross Fit",
      capacity: 25,
      reservations: 6,
    },
    {
      name: "Hip-hop Spin",
      time: "17:30",
      date: "2021-12-07",
      duration: "60",
      type: "Spin",
      intensity: "advanced",
      location: "LA Spin",
      capacity: 40,
      reservations: 22,
    },
    {
      name: "Morning Wake Up",
      time: "06:30",
      date: "2021-11-24",
      duration: "45",
      type: "Yoga",
      intensity: "beginner",
      location: "Bikram Boston",
      capacity: 30,
      reservations: 17,
    },
  ];

  return knex("classes")
    .insert(classesSeed)
    .then(() => console.log("\n== Seed data for classes table added. ==\n"));
};
