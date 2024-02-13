import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./Cart.FoodItems";

import { loadStripe } from "@stripe/stripe-js";
import {
  clearCart,
  selectCartItems,
  selectTotalAmount,
  selectTotalItems,
} from "../../Redux/CartsItems/cartSlice";





export default function Cart() {

  
  const { currentUser } = useSelector((state) => state.user)
  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectTotalItems);
  const Amount = useSelector(selectTotalAmount);
const TotalAmount = Amount;

  const dispatch = useDispatch();

  const handleClearItem = () => {
    dispatch(clearCart(cartItems));
  };

  const makePayment = async()=>{

    // console.log(import.meta.env.STRIPE_PUBLISHABLE_KEY_IS_NODE );
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);


    const body = {
      cartItems:cartItems,
      user:currentUser
      
    }
    const headers = {
        "Content-Type":"application/json"
    }
    const response = await fetch("/api/stripe/create-checkout-session",{
        method:"POST",
        headers:headers,
        body:JSON.stringify(body)
    });

    const session = await response.json();
    console.log(session);
    const result = stripe.redirectToCheckout({
        sessionId:session.id
    });
    
    if(result.error){
        console.log(result.error);
    }
}









  if (!cartItems || cartItems.length === 0) {
    return (
      <div className=" text-black  mt-16 w-full h-80  mx-auto  object-center  flex">
        <h1 className="mx-auto   justify-center align-middle text-xl font-semibold font-serif">Your Cart is empty!!</h1>
      </div>
    );
  }

  return (
    <div className="  flex-row bg-PrincetonOrange ">
    <div className=" ">
      <div className="p-8 sm:p-10">
        <h2 className="font-bold flex justify-center items-center font_regular text-white text-lg ">Cart Items</h2>
        <div className="flex justify-end">
          <button className="btn p-1 m-2 text-red-600 font-semibold text-lg hover:ring-4 hover:ring-orange-600 rounded-full " onClick={() => handleClearItem()}>
            Clear All cart
          </button>
        </div>
        <div className="w-full">
          {cartItems.map((item) => (
            <FoodItems key={item.id} {...item} />
            
          ))}
        </div>
      
        <div>
            {/* Wrap the payment section with Elements from Stripe */}
            {/* <Elements stripe={stripePromise}>
              <StripeWrapper cartItems={cartItems}  />
            </Elements> */}
          </div>
        <div className="mt-2 p-2 mx-auto md:mt-0 md:w-full md:max-w-md">
          <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div className="max-w-xs mx-auto">
              <h2 className=" font-semibold py-3">Taxes and shipping calculated at checkout</h2>
              
          <p>Total Items: {totalItems}</p>
          <p>Total Amount: {TotalAmount} Rupees</p>
        

              {/* Customer Details Form */}
     

      {/* Proceed to Payment Button */}
      
              <button className='mt-4 btn-success w-24 h-8 bg-orange-500 text-white font-medium  rounded-full' onClick={makePayment} type='button'>Checkout</button>
            </div>
          </div>
        </div>
        
        {/* <PayButton cartItems={cartItems} /> */}
        {/* <AddressForm/> */}
      </div>
    </div>
  </div>
  
  );
}
