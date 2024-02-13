
import mongoose from 'mongoose';




// Define the schema for each category item
const categorySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  imageId: {
    type: String,
    required: true,
  },
  action: {
    link: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  entityType: {
    type: String,
    required: true,
  },
  accessibility: {
    altText: {
      type: String,
    },
    altTextCta: {
      type: String,
    },
  },
  entityId: {
    type: String,
    required: true,
  },
  frequencyCapping: {
    // You may define the structure based on your requirements
  },
});


const CategoryModel = mongoose.model('Categorys', categorySchema);

export default CategoryModel;


