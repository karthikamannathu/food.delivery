import express, { json, query }  from "express";
import Stripe from "stripe";
import dotenv from 'dotenv' ;
import jsons from 'big-json'
// import CartItems from "../Models/Order.Models.js";
import OrderModels from "../Models/Order.Models.js";

dotenv.config();
const stripe = Stripe(process.env.SECRET_KEY_STRIP)
const router = express.Router()





  // const {cartItems} = req.body;

// const customerDetails = req.body.customerDetails;
// console.log(customerDetails )

// const createOrRetrieveCustomer = async (customerDetails) => {
  // try {
//     // You should implement your logic here to create or retrieve a customer
//     // For example, you might check if the customer already exists based on some identifier

//     // Replace this with your actual logic to check if the customer exists
//     let existingCustomer = await stripe.customers.list({
//       email: customerDetails.email, // Use a unique identifier for your customers
//       limit: 1,
//     });

//     if (existingCustomer.data.length > 0) {
//       // If the customer already exists, return the existing customer ID
//       return existingCustomer.data[0].id;
//     } else {
//       // If the customer doesn't exist, create a new customer
//       const newCustomer = await stripe.customers.create({
//         name: customerDetails.name,
//         email: customerDetails.email,
//         address: {
//           line1: customerDetails.address.line1,
//           line2: customerDetails.address.line2,
//           city: customerDetails.address.city,
//           state: customerDetails.address.state,
//           postal_code: customerDetails.address.postal_code,
//           country: customerDetails.address.country,
//         },
//       });

//       // Return the ID of the newly created customer
//       return newCustomer.id;
//     }
//   } catch (error) {
//     console.error('Error creating or retrieving customer:', error);
//     throw error;
//   }
// };




router.post("/create-checkout-session", async (req, res) => {
  try {
  const  {cartItems }  = req.body;
  // Adjust the chunk size as needed to accommodate metadata overhead

// Convert the array of objects to a JSON string
// Assume this function saves the cart data to your database and returns a unique identifier

const cartItem = cartItems.map((cartItems) => ({
  id:cartItems.id,
  name:cartItems.name,
 catogery:cartItems.catogery,
  price:cartItems.price,
   quantity: cartItems.amount,
   imgeURL:cartItems.imageId }))

   const jsonString = JSON.stringify(cartItem)
   const compressedData =  btoa(jsonString);


const customer = await stripe.customers.create({
      metadata
      :{userId: req.body.user._id,
      CartsData:compressedData}
  });
  
            // Return the ID of the newly created customer

    const lineItems = cartItems.map((product) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: product.name,
        images:['https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'+product.imageId],
        
      },
      unit_amount_decimal:Math.round(product.price*100)
      },
      quantity: product.amount,

    })); 




    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
     
      line_items: lineItems,
     
      billing_address_collection: 'required', // Collect billing address automatically
      // shipping_address_collection: {
      //   allowed_countries: ['IN'], // Allow shipping to all countries (change based on your requirements)
      // },
      currency: 'inr',

  

      mode: "payment",
       customer:customer.id,
      success_url: "http://localhost:5173/checkout-success",
      cancel_url: "http://localhost:5173/cart",
    });
  
    res.json({ id: session.id });
     console.log(session, "session");
  
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }





  




});

const createOrder = async(customer,data,cartItems) =>{
const Items = cartItems

const products = Items.map((item) => {
  return {
    id:item.id,
   name:item.name,
  catogery:item.catogery,
   price:item.price,
    quantity: item.amount,
    imgeURL:item.imageId ,
  };
});
const newOrder = new OrderModels({
  user: customer.metadata.userId,
     Items: JSON.Parse(products),
  customerId: data.customer,
  paymentIntentId: data.payment_intent,
  subtotal: data.amount_subtotal,
  Address: data.customer_details,
  payment_status: data.payment_status,
});
try {
  const savedOrder = await newOrder.save();
  console.log("Processed Order:", savedOrder);
} catch (err) {
  console.log(err);
}
}




// This is your Stripe CLI webhook secret for testing your endpoint locally.
let endpointSecret
// endpointSecret = "whsec_fef53b1bb1820b408975650523a674392f7a1dedea0f375ba7aa467e87785f66";


router.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const sig = req.headers['stripe-signature'];

let data;
let eventType;

  if(endpointSecret){

    let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    console.log("webhook Verified")
  } catch (err) {
    console.log(`Webhook Error: ${err.message}`)
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }
   data = event.data.object;
   eventType = event.type


  } else {

data = req.body.data.object;
eventType = req.body.type;

  }
  

  // Handle the event
 
  if(eventType == "checkout.session.completed")
  {
    
stripe.customers
.retrieve(data.customer)
.then((customer)=>{
  console.log(data.customer,"data of customer")
  console.log(data,"dataass")
try{
   // CREATE ORDER
   createOrder(customer, data);
}
catch (err) {
  console.log(typeof createOrder);
  console.log(err);
}
}).catch((err) =>console.log(err.message))
}



  // Return a 200 response to acknowledge receipt of the event
  res.send().end();
});

  export default router