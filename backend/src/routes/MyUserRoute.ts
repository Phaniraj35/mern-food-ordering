import express from "express";
import MyUserController from "../Controllers/MyUserController";
import { jwtCheck } from "../middleware/auth";

const router = express.Router();

router.post("/", jwtCheck, MyUserController.createCurrentUser)
router.put("/", MyUserController.updateCurrentUser);

export default router;