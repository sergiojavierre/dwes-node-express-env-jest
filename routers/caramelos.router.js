import express from "express";

const router = express.Router();

import * as controller from "../controllers/caramelos.controller.js";

router.get("/", controller.get);

export { router };
