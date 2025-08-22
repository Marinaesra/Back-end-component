const express = require("express");
const cors = require("cors");
const healthyRouter = require("./src/router/healthyRouter");
const userRouter = require("./src/router/userRouter");
const productRouter = require("./src/router/productRouter");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

const connectToDatabase = require("./db/connectDb")

const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());

app.use("/healthy", healthyRouter);
app.use("/", userRouter);
app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
