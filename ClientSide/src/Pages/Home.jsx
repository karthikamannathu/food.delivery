import React, { useState, useEffect, Fragment } from "react";
import { RestaurantCards } from "../Components/RestaurantsCards";


import { Home_Bg_image } from "../Utils/contants";
import AllDisCatogery from "../Components/AllDishCategorys";
import Banner from "../Components/Banner";
import ShimmerUI from "../Components/ShimmerUI";


export default function Home() {
 

  const [FiltterResturant, setfiltterResturant] = useState([]);
  const [allRestaurants, setALLRestaurants] = useState([]);
  
console.log(allRestaurants,"allresto")
  async function getResturent() {
    try {
      const response = await fetch("/api/resturants/lists");
      const data = await response.json();

      console.log(data, "restroData");
       return setALLRestaurants(data), setfiltterResturant(data);
    } catch {
      (error) => {
        // Handle errors
        console.error("There was a problem with the fetch operation:", error);
      };
    }
    // console.log('data',data)
  }

  useEffect(() => {
    getResturent();
  }, []);
  // console.log(allRestaurants, "");
  return (
    <Fragment>
      
      <div className="object-contain h-60 relative md:h-96  mx-auto">
      
        <Banner />
      </div>
      <div className=" max-w-screen-l object-center">
        <AllDisCatogery key={allRestaurants?.info?.id} 
          AllRestroData={allRestaurants} // Assuming 'allRestaurants' contains the necessary category data
        />
      </div>
      <div          
        className="bg-no-repeat bg-fixed  bg-cover  "
        style={{
          backgroundImage: `url('${Home_Bg_image}')`,
          objectFit: "cover",
          
        }}
      > 

<div className="pt-10 pb-10 mx-auto bg-opacity-60 bg-zinc-950 " >
        <div className=" grid gap-y-20 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 lg:gap-x-3  xl:grid-cols-4  
         hover:text-white  mx-auto sm:grid-cols-2 ">
            
              
          {allRestaurants?.map((restaurant,index) => {
           return (
            <div key={index}>
              {allRestaurants? (
                <RestaurantCards {...restaurant?.info} key={restaurant?.info?.id} />
                
              ) : (
                
                <ShimmerUI/>
              
              
              )}
            </div>
          )
          })}
        </div>
        </div>
      </div>

      {/* <StripeWrapper /> */}
    </Fragment>
  );
}
