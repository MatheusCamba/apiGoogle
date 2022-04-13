import express from "express";
import Distancias from "./src/controller/distancias.js";
import * as dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Servidor em http://localhost:3000`);
});

Distancias.router(app);
