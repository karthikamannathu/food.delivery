import mongoose from "mongoose";



const cartItemSchema = new mongoose.Schema({
  id: { type: String },
  imageId: { type: String },
  name: { type: String },

  price: { type: Number },
  amount: { type: Number}
});



const CartDataModel  = mongoose.model("Order", cartItemSchema);
export default CartDataModel;
//  const CartItem = mongoose.model('CartItem', cartItemSchema);

//   export default CartItemz


// const orderSchema = mongoose.Schema(
//   {
//     userId: { type: String, required: true },
//     products: [
//       { id: { type: String },quantity:{ type: Number, default: 1 },name:{ type: String },catogery:{ type: String },price:{ type:Number },imgeURL:{ type: String }},
//     ],
//     subtotal: { type: Number, required: true },
//     total: { type: Number, required: true },
//     Address : { type: Object, required: true },
//     delivery_status: { type: String, default: "pending" },
//     payment_status: { type: String, required: true },
//   },
//   { timestamps: true }
// );



 
  
//   const OrderModels   = mongoose.model("Order", orderSchema);
//   export default OrderModels;