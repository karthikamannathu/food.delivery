import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const useRestaurantInfo =(() => {

const  [restaurantInfo,setRestaurantInfo] = useState([]);
          
const { id } = useParams();
 async function fetchData() {
  try {
    const response = await fetch('/api/resturants/lists');
    const InfoData =  await response.json()

    const getInfoData = InfoData.map(obj => obj?.info);
      console.log("result", getInfoData);
      const foundObject = getInfoData.find(obj => obj?.id === id);
  console.log(foundObject)
return setRestaurantInfo(foundObject)
} catch (error) {
  console.error(error);
  // Handle any errors that occur during the fetch call
}
}


  useEffect(() => {
    fetchData();
   }, []);

  return restaurantInfo
 
})


export default  useRestaurantInfo;