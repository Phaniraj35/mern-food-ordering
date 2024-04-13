import express from "express";
import MyUserController from "../Controllers/MyUserController";

const router = express.Router();

router.post("/", MyUserController.createCurrentUser)

export default router;