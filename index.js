import express from "express";

//para usar variables de entorno
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 8080;

import { router as caramelosRouter } from "./routers/caramelos.router.js";

app.use("/caramelos", caramelosRouter);

app.listen(port, () => {
  if (process.env.NODE_ENV === "production")
    console.log(`Listening at port ${port}`);
});

export default app;
