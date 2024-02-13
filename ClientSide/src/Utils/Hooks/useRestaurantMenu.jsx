

// const useRestaurantMenu =  () => {
//   const [restaurantMenuData, setRestaurantMenuData] = useState(null);
//   const [FilterId,setFilterID] = useState([])
//   const { id } = useParams();
//   console.log("id", id);


//   const fetchMenuArrayById = async (id) => {
//     try {
//       const response = await fetch(`/api/menu/lists?id=${id}`);
  
//       if (!response.ok) {
//         throw new Error('Network response was not ok.');
//       }
//      const specificArray = await response.json();
  
//       console.log(`Array for ID ${id}:`, specificArray);
//       // Use specificArray to display or process the data as needed
//       setRestaurantMenuData(specificArray)



//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
  
//   // Usage:
//  // Replace with the desired ID
//   fetchMenuArrayById(id);
  


  
//   // Usage:
//   // Replace with the desired ID
 
  
//   // async function fetchData() {
   

//   //   try {
//   //     const response = await fetch('/api/menu/lists');
  
//   //      const MenuData = await response.json()
//   //     // const matchedObject = (InfoData.map(obj => obj[0][0].Id || obj[0][0].id)).find(obj => obj === id)
      
//   //     console.log(MenuData,"Menudata")
      
//   //     if (MenuData) {
//   //       let GetMenuItems = MenuData.find(obj=> obj === id )
//   //       console.log(GetMenuItems,'GetMenuItems'); 
//   //           setRestaurantMenuData(InfoData[matchedIndex][1])
//   //    }else {
      
//   //   // Handle any errors that occur during the fetch call
//   //   }
//   // }      
//   // catch (error) {
//   //      console.error(error);
//   //    // Handle any errors that occur during the fetch call
//   //    }
//   //  }

//   useEffect(() => {
//     fetchMenuArrayById
//   }, []); 
//   return  restaurantMenuData

// };
// export default useRestaurantMenu;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const useRestaurantMenu = () => {
  const [restaurantMenuData, setRestaurantMenuData] = useState(null);
  const { id } = useParams();
console.log(id)
  const fetchMenuArrayById = async (id) => {
    try {
      const response = await fetch(`/api/menu/lists?id=${id}`);
  // console.log(response)
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      const specificArray = await response.json();
  
      console.log(`Array for ID ${id}:`, specificArray);
      setRestaurantMenuData(specificArray);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Optionally handle error state here
    }
  };
  
  useEffect(() => {
   
      fetchMenuArrayById(id);
    
  }, [id]);

console.log('restaurantMenuData',restaurantMenuData)
  return restaurantMenuData;
};

export default useRestaurantMenu;

