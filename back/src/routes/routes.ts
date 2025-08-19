import {Router} from "express";
import { UserController } from "../controllers/userController";
import { authenticate } from "../middlewares/authentication";
import { photoUpload } from "../config/uploader";
import { AnnounceController } from "../controllers/announceController";

const router = Router();

// rotas de teste do usuario
router.post("/user",UserController.createUser);
router.get("/user/:id",authenticate,UserController.readUser);
router.put("/user/:id",authenticate,UserController.updateUser);
router.delete("/user/:id",authenticate,UserController.deleteUser);
router.post("/login",UserController.login);

// rotas de teste dos anuncios
router.post("/announce", AnnounceController.createAnnounce);
router.get("/announce/:announceid", AnnounceController.readAnnounce);
router.get("/announces", AnnounceController.readAllAnnounces);
router.put("/announce/:announceid", AnnounceController.updateAnnounce);
router.delete("/announce/:announceid", AnnounceController.deleteAnnounce);
router.post("/announce/:announceid", photoUpload.single("image"), AnnounceController.uploadAnnouncePhoto);

//rota de teste do uploader
router.post("/uploader",photoUpload.single("image"))

export default router