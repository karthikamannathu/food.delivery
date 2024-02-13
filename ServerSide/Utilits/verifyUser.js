import { errorHandelar } from "./error.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import axios from "axios";
dotenv.config();





   













//  const token = req.cookies.access_token;
// //  console.log(token,"token")

//  if (!token) return next(errorHandelar(401,"you are not authenticate!d"));

//  jwt.verify(token,process.env.JWT_SECRET,(err,user) =>{
//     if (err) return next(errorHandelar(401,'Token is not valid!'))

//     console.log(user,"user")

// next();
//  })
//  }


export const verifyToken = (req, res, next) => {
   const token = req.cookies.access_token;
 
   if (!token) {
     return next(errorHandelar(401, "You are not authenticated!"));
   }
 
   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
     if (err) {
       return next(errorHandelar(401, 'Token is not valid!'));
     }
 
     req.user = user;
     console.log(user); // This will log the user details
 
     next();
   });
 };
