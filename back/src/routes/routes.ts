import {Router} from "express";
import { UserController } from "../controllers/userController";
import { authenticate } from "../middlewares/authentication";

import { FavoritesController } from "../controllers/favoritesController";
import { photoUpload } from "../config/uploader";


const router = Router();

// rotas de teste do usuario
router.post("/user",UserController.createUser);
router.get("/user/:id",authenticate,UserController.readUser);
router.put("/user/:id",authenticate,UserController.updateUser);
router.delete("/user/:id",authenticate,UserController.deleteUser);
router.post("/login",UserController.login);

//rota de teste do uploader
router.post("/uploader",photoUpload.single("image"));


//rotas de teste dos favoritos
router.post("/favorite",FavoritesController.addFavorite);
router.get("/favorite/:userId",FavoritesController.readAllFavorites);
router.delete("/favoriteRemove/:id",FavoritesController.removeFavorite);
router.delete("/favoriteRemoveAll/:userId",FavoritesController.removeAllFavorites);




export default router