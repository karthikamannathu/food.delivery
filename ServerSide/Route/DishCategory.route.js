import  express  from "express";
import { getAllCategories, saveCategoryDataToDB } from "../Controllar/dishcategory.controller.js";


const router = express.Router();
// Define a route to get all categories
router.get('/categories', getAllCategories);
router.post('/categories', saveCategoryDataToDB);

export default router