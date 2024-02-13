import  express  from "express";
// import {AllCategoryData} from '../Controllar/category.controller.js'
import { signUp,signIn,google,signout} from "../Controllar/singup.controller.js";

// import ALLCatogery from "../Controllar/Category.js";

const router = express.Router();

router.post('/signUp',signUp)
 router.post('/signIn',signIn)
 router.post('/google',google)
 router.get('/signout',signout);
  // router.get('/itemsCatogery',AllCategoryData)

  

export default router;