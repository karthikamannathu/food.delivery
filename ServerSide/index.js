import express from 'express'
import dotenv from 'dotenv'
import mongoose from'mongoose'
import SignupRouter  from './Route/Sinup.route.js';
import cookieParser from 'cookie-parser';
import UpdateRouter from './Route/User.router.js';
import DishCategoryRouter from './Route/DishCategory.route.js'
import  RestaurantsRouter from './Route/ResturantsData.route.js'
import  MenuDataRouter  from './Route/MenuData.route.js';
import  Stripe from './Route/Strip.route.js';
import Order from './Route/Order.Route.js';
dotenv.config();
  mongoose
  .connect(process.env.MONGO)
  
     .then(()=>{
      console.log("connected to MongoDB!")
  
      const app = express();
      app.use(express.json());
  
      app.use(cookieParser());
      
    
    app.listen(3001,() => {
    console.log('sever connected 3001 backend pass')

  app.use('/user',SignupRouter)
  app.use("/orders", Order);
app.use('/auth',UpdateRouter)
app.use('/dish',DishCategoryRouter)
app.use('/resturants',RestaurantsRouter)
 app.use('/menu',MenuDataRouter)
app.use('/stripe',Stripe)
app.use((req, res, next) => {
  // Access req.cookies here
  console.log(req.cookies);
  next();
});
app.use((err, req, res, next ) => {


const statusCode = err.statusCode || 500;
const  message = err.message || 'internal server error';
return res.status(statusCode).json({
  success: false,
  message,
  statusCode:statusCode,

});
});
})

     })   
.catch((err) =>
{
  console.log(err,'mongoose not connected')});
 


