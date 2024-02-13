
import CategoryModel from '../Models/DishCategory.js';
import  {Catogery}  from '../Utilits/Contents.js';


export const saveCategoryDataToDB = async (req,res) => {
try{
  const newCategory = Catogery; // Assuming new category data is sent in the request body
  const savedCategory = await CategoryModel.create(newCategory);
  res.json(savedCategory);
  console.log(savedCategory); // Fetch all categories from the database and send as JSON response after pushing new data
} catch (error) {
    res.status(500).json({ error: 'Server error' });
}
   };
export const getAllCategories = async (req,res) => {
  try {
      const categories = await CategoryModel.find();

      res.json(categories);
      // console.log(categories); // Fetch all categories from the database and send as JSON response
  } catch (error) {
      res.status(500).json({ error: 'Server error' });
  }
};




