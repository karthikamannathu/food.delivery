import  express  from "express";
import {  getAllRestaurants,postRestaurantsData } from "../Controllar/restaurantsDataController.js"


const router = express.Router();
// Define a route to get all categories
router.get('/lists', getAllRestaurants);
router.post('/lists', postRestaurantsData );

export default router