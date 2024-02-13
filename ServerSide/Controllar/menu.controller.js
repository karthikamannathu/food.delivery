import RestaurantMenuModel from '../Models/MenuDatails.Model.js';
import  {menuDetails}  from '../Utilits/Contents.js';

export const saveMenuDataToDB = async (req, res) => {
 
 try{
      const menuDatas = menuDetails; 
      console.log(menuDatas,"menudatapost")
      // / Assuming new menulists data is sent in the request body
      const savedmenulists = await RestaurantMenuModel.create(menuDatas);
      res.json(savedmenulists);
      console.log(savedmenulists); // Fetch all categories from the database and send as JSON response after pushing new data
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }

  }

  export const getAllMenus = async (req, res) => {
    try {
      const { id } = req.query;
      // console.log(id)
  
      if (!id) {
        return res.status(400).json({ error: 'ID parameter is missing' });
      }
  
      const menuData = (await RestaurantMenuModel.findOne({},id));
        // Adjust the query based on your model
      //  console.log(menuData)
      if ( !menuData) {
       
        return res.status(404).json({ error: 'Menu not found' });
      }
  
      const menuWithOutKey = menuData[id];
      

      res.status(200).json(menuWithOutKey);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  


// export const getAllMenus = async (req, res) => {
//   try {
    
//     const docs = await RestaurantMenuModel.find({}); // Use lean to convert to plain JavaScript objects

//     res.status(200).json(docs); // Send all documents as a JSON array
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };