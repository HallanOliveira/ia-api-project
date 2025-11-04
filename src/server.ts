import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import { router } from "./routes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`, `teste variaveis de ambiente: ${process.env.TEST}`);
});
