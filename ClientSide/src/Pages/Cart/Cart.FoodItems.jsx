import React, { useEffect } from "react";
import { restImg,imageNot } from "../../Utils/contants";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemCount,
  increaseItemCount,
  removeItem,
  selectCartItems,
} from "../../Redux/CartsItems/cartSlice";


// import { StripeWrapper } from './PaymentFrom';

const FoodItems = ({
  id,
  name,
  category,
  price,
 imageId ,
  ratings,
  amount,
  description

}) => {
  console.log( ratings," ratings")
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const itemInCart = cartItems.find((item) => item.id === id);
  const quantity = itemInCart ? itemInCart.amount : 0;

  console.log(quantity, "quantity");
  const handleIncrease = (id) => {
    dispatch(increaseItemCount({ id }));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseItemCount({ id }));
  };

  const handleRemove = (id) => {
    dispatch(removeItem({ id }));
  };

  return (
    
    <div className="flex h-auto justify-center mt-5 bg-white border border-gray-200 rounded-lg shadow-md  overflow-hidden md:mx-auto md:w-full md:h-40">
      <div className=" relative rounded-md  p-5 flex md:flex-row  w-full overflow-hidden  flex-col"> 
      <div className=" overflow-hidden rounded-md  h-40 w-30 self-center flex flex-col md:h-32 ">
       <div className="  self-center  h-32 w-36 rounded-full  bg-red-500 md:h-32  md:w-32 ">
       {imageId?(<img
          src={restImg+imageId}
          className=" object-contain "
        />):(  <img
        src={imageNot}
        className=" h-28 w-full md:h-20 "
      />)}
      
         <div className=" grid grid-cols-3 bg-OrangeRyb text-white text-center pl-2  pr-2">
        <button
          className="btn focus:border-oreange-200 hover:bg-orange-300 hover:rounded-sm text-3xl  font-bold text-center "
          onClick={() => handleIncrease(id)}
        >
          +
        </button>

        <p className="self-center "> {amount}</p>

        <button
          className="btn hover:border-gray-200 hover:bg-orange-300  text-5xl  font-bold "
          onClick={() => handleDecrease(id)}
        >
         -
        </button>
</div>
        
        </div> 
      </div>
      {/* <div className="ml-4 flex flex-1 flex-col"> */}

      <div className=" w-full h-40 pl-4 text-gray-900 items-center  ml-2 overflow-hidden md:h-36">
        <h4 className=" text-lg font-bold mt-2">{name}</h4>
       
        <h2 className="font-semibold mt-2 ">{category}</h2>
        
         


        



          <h4 className=" text-orange-500 font-semibold">Rupees {price }</h4>
      

         {/* <StarRatingDisplay starValue = {ratings?.aggregatedRating?.rating}/> */}

       
       

        <button
          className="btn bg-white absolute text-red-500   left-3/4 bottom-8  border-gray-200 md:bottom-4  font-bold hover:scale-125"
          onClick={() => handleRemove(id)}
        >
        Remove
        </button>
      </div>
      {/* <StripeWrapper/> */}
      </div>   
    </div>
    
  );
};
export default FoodItems;
