const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", require("./routes/products"));

app.listen(3001, () => {
    console.log("Servidor iniciado en http://localhost:3001");
});