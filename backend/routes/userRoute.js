import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router.route("/register").post(UserController.registerUser);

export default router;
