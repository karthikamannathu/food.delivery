import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Redux/CartsItems/cartSlice.jsx";
import { selectCartItems, selectTotalAmount, selectTotalItems } from "../Redux/CartsItems/cartSlice";
import { FaCircleCheck } from "react-icons/fa6";


  const checkoutSuccess = ()  => {
    // const dispatch = useDispatch();
    // const totalItems = useSelector(selectTotalItems);
    // const totalAmount = useSelector(selectTotalAmount);
    // const cart = useSelector(selectCartItems);
  
    // useEffect(() => {
    //   dispatch(clearCart());
    // }, [dispatch]);
  
    // useEffect(() => {
    //   // dispatch((totalItems));
    //   // dispatch((totalAmount))
    // }, [cart, dispatch]);
  
    return (<div className=" h-96  flex">
      <div className="mx-auto  w-[380px]  h-[400px] flex flex-col align-center justify-center  ">
       <div className="text-center flex justify-center  bg-green-600 h-14 "><FaCircleCheck  className="self-center text-white"  size={28}/></div>
        <div className=" border-green-600 border-4">
        
        <h2 className="text-center mt-6 text-lg">  Checkout Successful</h2>
        <p className=" italic mx-auto">Your order might take some time to process.</p>
        <p className=" italic mx-auto">Check your order status at your profile after about 10mins.</p>
        <p className=" italic mx-auto">
          Incase of any inqueries contact the support at{""}
          
        </p>
      </div></div></div>
    );
}
 export default checkoutSuccess