import RestaurantDataModel from '../Models/ResturantsModel.js';
import { RESTAURANT_MAIN_LIST }from '../Utilits/Contents.js'


export const postRestaurantsData = async (req, res) => {
  
    const AllRestaurants = RESTAURANT_MAIN_LIST 
        
    try {
        // Check if the data already exists
        const existingRestaurant = await RestaurantDataModel.findOne({ /* Your criteria to check existing data */ });
      
        // If data doesn't exist, create a new instance of the Restaurant model
        if (!existingRestaurant) {
          const newRestaurant = await RestaurantDataModel.create(AllRestaurants);
          res.json(newRestaurant);
          console.log("New restaurant data inserted:", newRestaurant);
        } else {
          // Data already exists, send a message or handle accordingly
          res.json({ message: 'Data already exists' });
          console.log("Restaurant data already exists:", existingRestaurant);
        }
      } catch (error) {
        console.log('Server error:', error);
        res.status(500).json({ error: 'Server error' });
      }
           // Await all promises in this batch before moving to the next
    }
  
      
  



      export const getAllRestaurants = async (req,res) => {
        try {
            const Restaurants = await RestaurantDataModel.find({});
      
            res.json(Restaurants);
            // console.log(Restaurants); // Fetch all categories from the database and send as JSON response
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
      };
  


