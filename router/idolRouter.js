import express from "express";
import * as idolController from "../controller/idolController.js";

const router = express.Router();

router.get("/all", idolController.getAllIdol);

export default router;
