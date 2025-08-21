import {Router} from "express";
import { UserController } from "../controllers/userController";
import { authenticate } from "../middlewares/authentication";

import { FavoritesController } from "../controllers/favoritesController";
import { photoUpload } from "../config/uploader";
import { AnnounceController } from "../controllers/announceController";
import { validateBody, validateParams } from "../middlewares/validate";
import userValidator from "../schemas/userValidator";

const router = Router();

// rotas de teste do usuario
router.post("/user",validateBody(userValidator.createUser),UserController.createUser);
router.get("/user/:id",authenticate,UserController.readUser);
router.put("/user/:id",authenticate,validateParams(userValidator.userId),validateBody(userValidator.updateUser),UserController.updateUser);
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
router.post("/uploader",photoUpload.single("image"));


//rotas de teste dos favoritos
router.post("/favorite",FavoritesController.addFavorite);
router.get("/favorite/:userId",FavoritesController.readAllFavorites);
router.delete("/favoriteRemove/:id",FavoritesController.removeFavorite);
router.delete("/favoriteRemoveAll/:userId",FavoritesController.removeAllFavorites);




export default router