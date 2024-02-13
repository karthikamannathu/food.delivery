

import { Link } from "react-router-dom"
import { restImg } from "../Utils/contants"
import StarRatingDisplay from "./Star"
 

export  const RestaurantCards = ({cloudinaryImageId,name,cuisines,avgRating,areaName,id}) => {

    //  displayed All Resturents Cards
return (

    <div  className="mx-auto  md:w-[300px]   hover:ease-out hover:scale-90 hover:duration-300 text-center  rounded-3xl bg-orange-600 md:h-[300px]  object-contain overflow-hidden w-[280px] xl:w-[280px]">
  <Link to={"/restaurant/"+id}>
    <div className=" w-full  h-full flex flex-col hover:bg-orange-400 hover:rounded-full  hover:text-orange-600 text-slate-100 animate__animated animate__fadeInRight">
    <div className="">
      <img className=" w-full h-full object-cover rounded-3xl" src={restImg + cloudinaryImageId} alt={name} />
      </div>
    <div className=" hover:bg-opacity-60 flex flex-col items-center w-full overflow-hidden object-contain ">
        <h2 className="font-bold text-2xl  object-contain overflow-hidden ">{name}</h2>
        <h4 className="font-semibold ">{areaName}</h4>
        
        <h4 className="text-xs font-normal mb-4 ">Rating<StarRatingDisplay starValue={avgRating} /> </h4>
      </div>
     
    </div>
  </Link>
</div>

)
 
}

