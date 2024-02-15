import React, { useState, useEffect, Fragment } from "react";
import { RestaurantCards } from "../Components/RestaurantsCards";
import { Home_Bg_image } from "../Utils/contants";
import AllDisCatogery from "../Components/AllDishCategorys";
import Banner from "../Components/Banner";

import useOnline from "../Utils/Hooks/useOnline";
import Error from "../Components/Error";
import LoadingAnimation from "../Components/ShimmerUI"; // Import the LoadingAnimation component

export default function Home() {
  const isOnline = useOnline();
  console.log(isOnline, "OnlineCheck");

  const [FiltterResturant, setfiltterResturant] = useState([]);
  const [allRestaurants, setALLRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
console.log(isLoading,"isloading")
  async function getResturent() {
    try {
      const response = await fetch("/api/resturants/lists");
      const data = await response.json();

      console.log(data, "restroData");
      setALLRestaurants(data);
      setfiltterResturant(data);
      setIsLoading(true);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

  useEffect(() => {
    getResturent();
  }, []);

 
  return (
    
    <Fragment>
       {isLoading ? 
     (
      <div >
        <div className="object-contain h-60 relative md:h-96  mx-auto">
          <Banner />
        </div>
    

      <div className="max-w-screen-l object-center">
        <AllDisCatogery
          key={allRestaurants?.info?.id}
          AllRestroData={allRestaurants}
        />
      </div>

      <div
        className="bg-no-repeat bg-fixed  bg-cover  "
        style={{
          backgroundImage: `url('${Home_Bg_image}')`,
          objectFit: "cover",
        }}
      >
       
          <div className="pt-10 pb-10 mx-auto bg-opacity-60 bg-zinc-950 ">
            <div className="grid gap-y-20 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 lg:gap-x-3  xl:grid-cols-4  hover:text-white  mx-auto sm:grid-cols-2 ">
              {allRestaurants?.map((restaurant, index) => {
                return (
                  <div key={index}>
                    <RestaurantCards
                      {...restaurant?.info}
                      key={restaurant?.info?.id}
                    />
                  </div>
                );
              })}
            </div>
          </div>
       
      </div>
      </div>
      )  :(<LoadingAnimation /> )// Use the LoadingAnimation component here
      }
    </Fragment>
 
  );
}
