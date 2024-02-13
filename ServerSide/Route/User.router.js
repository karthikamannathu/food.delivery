import  express  from "express";
import { deleteUser, test,updateUserInfo } from '../Controllar/user.controllers.js'
 import { verifyToken } from "../Utilits/verifyUser.js";

const router = express.Router();

router.get('/',test)
router.post('/update/:id',verifyToken,updateUserInfo);
router.delete('/delete/:id',verifyToken,deleteUser);

export default router;