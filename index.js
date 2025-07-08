const express = require("express");
const cors = require("cors");
const healthyRouter = require('./src/router/healthyRouter')

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/healthy", healthyRouter);

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});