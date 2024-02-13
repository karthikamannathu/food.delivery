
import {
 
    Route,Routes,BrowserRouter
   
  } from "react-router-dom";
import React from 'react'
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Cart from '../Pages/Cart/Cart.jsx';
import Home from '../Pages/Home.jsx';
import SignUp from "../Pages/Auth/SignUp.jsx";
import LogIn from "../Pages/Auth/LogIn.jsx";
import  CheckoutSuccess from "../Pages/CheckoutSuccess.jsx"
import About from '../Pages/About.jsx';
import Contact from "../Pages/Contact.jsx";
import RestroCardDetails from "../Components/RestroCardDetails.jsx"
import PrivateRoute from "../Components/PrivateRoute.jsx";
import Profile from "../Pages/Auth/Profile.jsx";

export default function Navigation() {


    return (
   
  
   <BrowserRouter>
   <Header/>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/cart" element={<Cart />} />
   <Route path="/about" element={<About />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/sign-In" element={<LogIn />} />
   <Route path="/sign-up" element={<SignUp/>} />
   <Route path="/restaurant/:id" element={<RestroCardDetails/>} />
   <Route  element={<PrivateRoute/>}>
   <Route path="/profile" element={<Profile/>} />
   </Route>

   <Route path="/checkout-success" element={<CheckoutSuccess/>} />
   </Routes>
   <Footer />
   </BrowserRouter>
    
    
    );
  }







