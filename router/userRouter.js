import express from "express";
import * as userController from "../controller/userController.js";

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/detail/:id", userController.getDetailUser);

export default router;
