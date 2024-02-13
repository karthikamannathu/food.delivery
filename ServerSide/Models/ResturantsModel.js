

//  import uniqueValidator from'mongoose-unique-validator'

import  mongoose  from "mongoose"
const feeDetailSchema = new mongoose.Schema({
  name: String,
  fee: Number
});

const imageBadgeSchema = new mongoose.Schema({
  imageId: String,
  description: String
});

const badgeObjectSchema = new mongoose.Schema({
  attributes: {
    description: String,
    imageId: String
  }
});

const differentiatedUiMediaDetailsSchema = new mongoose.Schema({
  mediaType: String,
  lottie: Object,
  video: Object
});

const restaurantDetailsSchema = new mongoose.Schema({
  info: mongoose.Schema.Types.Mixed, // Handle varied structures or use a specific sub-schema
  
  feeDetails: {
    restaurantId: { type: String, default: '' }, // Ensure default value if no value is provided
    fees: [feeDetailSchema],
    totalFee: { type: Number, default: 0 } // Ensure default value if no value is provided
  },
  badges: {
    imageBadges: [imageBadgeSchema]
  },
  badgesV2: {
    entityBadges: {
      imageBased: {
        badgeObject: [badgeObjectSchema]
      },
      textBased: { type: Object, default: {} }, // Ensure default value if no value is provided
      textExtendedBadges: { type: Object, default: {} } // Ensure default value if no value is provided
    }
  },
  differentiatedUi: {
    displayType: { type: String, default: '' }, // Ensure default value if no value is provided
    differentiatedUiMediaDetails: differentiatedUiMediaDetailsSchema
  },
  availability: {
    nextCloseTime: { type: Date, default: null }, // Ensure default value if no value is provided
    opened: { type: Boolean, default: false } // Ensure default value if no value is provided
  },
  aggregatedDiscountInfoV3: {
    header: { type: String, default: '' }, // Ensure default value if no value is provided
    subHeader: { type: String, default: '' }, // Ensure default value if no value is provided
    discountTag: { type: String, default: '' } // Ensure default value if no value is provided
  },
  // Define other fields here...
}, { timestamps: true });

const RestaurantDataModel = mongoose.model('resturantsdata', restaurantDetailsSchema);

export default RestaurantDataModel;


