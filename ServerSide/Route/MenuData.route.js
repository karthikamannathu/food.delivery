import  express  from "express";
import {saveMenuDataToDB  , getAllMenus} from "../Controllar/menu.controller.js";


const router = express.Router();
// Define a route to get all categories
router.post('/lists', saveMenuDataToDB );
router.get('/lists', getAllMenus );
// router.post('/categories', saveCategoryDataToDB);

export default router