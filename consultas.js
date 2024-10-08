const { Pool } = require("pg");

/* En la terminal
CREATE DATABASE plan_de_viajes;
\c plan_de_viajes;
CREATE TABLE viajes (
   id SERIAL PRIMARY KEY, 
   destino VARCHAR(50) NOT NULL, 
   presupuesto INT NOT NULL);
*/

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "mo76492250",
  database: "plan_de_viajes",
  allowExitOnIdle: true,
});

const getDate = async () => {
  const result = await pool.query("SELECT NOW()");
  console.log(result.rows);
};

getDate(); // Si devuelve la fecha de hoy, indica que hubo una conexion a la BD

const agregarViajes = async (destino, presupuesto) => {
  const consulta = "INSERT INTO viajes (destino, presupuesto) VALUES ($1, $2)";

  const values = [destino, presupuesto];
  const result = await pool.query(consulta, values);

  console.log("Viaje agregado", result.rowCount);
};

agregarViajes("Valdivia", 1460000);

const obtenerViajes = async () => {
  const result = await pool.query("SELECT * FROM viajes");

  console.log(result.rows);
  return result.rows;
};

obtenerViajes();

//Esportar ambas funciones

module.esports = { agregarViajes, obtenerViajes };
