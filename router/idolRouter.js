import express from "express";
import * as idolController from "../controller/idolController.js";

const router = express.Router();

router.get("/all", idolController.getAllIdol);
router.post("/insert", idolController.insertIdol);
router.patch("/update", idolController.updateIdol);
router.delete("/delete/:id", idolController.deleteIdol);

export default router;
