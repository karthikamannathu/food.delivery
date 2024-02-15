
import { imageNot, restImg, restimg2 } from "../Utils/contants";
import {useParams } from "react-router-dom";
import useRestaurantInfo from "../Utils/Hooks/useRestaurantInfo"
import useRestaurantMenu from "../Utils/Hooks/useRestaurantMenu";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { BiCertification } from "react-icons/bi";
import { addItem } from "../Redux/CartsItems/cartSlice";
import StarRatingDisplay from "./Star";
import LoadingAnimation from "./ShimmerUI";




export default function RestroDetails() {
  
  const restaurantInfo = useRestaurantInfo() 
const menuAllData = useRestaurantMenu()
console.log("menuAllData",menuAllData)
const handleAddToCart = (item,e) => {
  console.log(item.imageId,"item.imageId")
  dispatch(addItem({id: item.id,
    imageId: item.imageId,
    name: item.name,
    category: item.category,
    
    price: item.price/100 || item.defaultPrice/100,
    amount:1, 
    rating:item.rating
  }));
};
// if (Array.isArray(menuAllData)) {
//   // Now it's safe to use map on menuAllData

// } else {
//   console.error('menuAllData is not an array or is empty');
// }
let dispatch = useDispatch()


   console.log(" restaurantInfo",restaurantInfo);

  return (
    <section>
      {menuAllData?(
<div className=" min-w-min flex  flex-col  border rounded-lg border-spacing-6 border-orange-500 shadow-md bg-orange-500 static ">
 <div className="  overflow-hidden" >
<div className=" relative overflow-hidden border-orange-700 lg:flex " key={restaurantInfo?.id}>

 
  <div className="h-80 w-auto relative mx-auto lg:w-full lg:object-contain ">

     <img src={restImg+ restaurantInfo?.cloudinaryImageId} className=" w-full h-full" /> 
     
     </div>
   
  <div className="absolute top-14 bottom-5 left-10 lg:static lg:self-center">

           <div className="animate__animated animate__lightSpeedInLeft flex-col text-center  justify-center text-xl font-bold bg-opacity-6">
         <div className=" italic  text-orange-100"> 
         <h2 className=" uppercase text-orange-500" >{restaurantInfo?.name}</h2>
          <h3>{restaurantInfo?.areaName}</h3>
           <h3>{restaurantInfo?.city}</h3> 
           <h3 className="italic mb-1 p-2 te">{restaurantInfo?.cuisines}</h3>
           <h3 className="italic mb-1">{restaurantInfo?.locality}</h3>
           <h3><StarRatingDisplay starValue = {restaurantInfo?.avgRating} /></h3> 
          </div>  </div>  

          </div>
           </div>     
         
     </div>
      
      
     
      <div className=" relative mt-5 grid gap-y-8  grid-cols-1 xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2  hover:text-white sm:gap-y-8 min-w-min ">
       
     
       
        {menuAllData.map((item,id) =>(
        
          <ul className=" mx-auto  w-[240px] lg:gap-4 md:gap-6 overflow-hidden bg-orange-600 sm:w-80 sm:full  text-orange-100"  key={id}  >
          <li className="p-2 animate__animated animate__fadeInTop">
            
        {item.imageId?
         (<img src={restImg + item?.imageId} className="" alt="Menu Item" />):
           (<img
        src={imageNot}
        className=" self-center h-44 w-full"
      />)}
          
          <div className="flex -translate-y-6 bg-OrangeRyb rounded-full p-2 w-20 text-center " >
        <samp className="">{item.defaultPrice/100|| item.price/100}</samp> 
         <FaRupeeSign className="mt-1 ml-1"  />
          </div> 

            <div className="flex flex-col">
            <h2 className="object-contain font-bold overflow-hidden  text-lg  \r\n">{item?.name}</h2>
            
            <p className=" italic font-semibold mt-2">{item?.category}</p>  
            </div>
            <div className="flex justify-end p-4">
          <button className="bg-orange-500 hover:bg-OrangePeel active:bg-orange-400  font-bold focus:bg-OrangePeel
                  focus:outline-none focus:ring focus:ring-orange-200 rounded-full p-1.5 animate__animated animate__pulse animate__infinite	infinite"
             onClick={() => handleAddToCart(item)}>
        Add to Cart
          </button>
           </div>
          
          
        </li>
        </ul>
        
      ))
      
        }
       
   
  </div> 
    
 </div>):(<LoadingAnimation />)}
 </section>
  )
}
  



