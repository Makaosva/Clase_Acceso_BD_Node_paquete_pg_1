const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "mo76492250",
  database: "plan_de_viajes",
  allowExitOnIdle: true, 
});
