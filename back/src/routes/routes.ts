import {Router} from "express";
import { UserController } from "../controllers/userController";
import { authenticate } from "../middlewares/authentication";

const router = Router();

// rotas de teste do usuario
router.post("/user",UserController.createUser);
router.get("/user/:id",authenticate,UserController.readUser);
router.put("/user/:id",authenticate,UserController.updateUser);
router.delete("/user/:id",authenticate,UserController.deleteUser);
router.post("/login",UserController.login);


export default router