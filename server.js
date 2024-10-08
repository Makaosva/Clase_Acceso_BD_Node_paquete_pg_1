const express = require("express");
const { agregarViajes, obtenerViajes } = require("./consultas");
const app = express();

app.use(express.json());

app.get("/viajes", async (req, res) => {
  const viajes = await obtenerViajes();
  res.json(viajes);
});

app.post("/viajes", async (req, res) => {
  const { destino, presupuesto } = req.body;
  await agregarViajes(destino, presupuesto);
  res.send("Viaje agregado con éxito");
});

app.listen(3001, () => console.log("Servidor levantado en el puerto 3001"));
