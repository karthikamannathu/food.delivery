import React, { useState, useEffect } from 'react';
import { restImg, restimg2 } from '../Utils/contants';
import {RestaurantCards} from './RestaurantsCards';




const AllDishCategory = ({AllRestroData }) => {
  const [data, setData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch('/api/dish/categories');
        const categoriesData = await response.json();
        console.log(categoriesData, "categoriesData");
        setData(categoriesData);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }
    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    
  
    // Filter restaurants based on the clicked category
    const filteredRestaurant = AllRestroData.filter((rest) => {
      const cuisines = rest.info.cuisines.map((cuisine) => cuisine.toLowerCase());
      return cuisines.includes(category.action.text.toLowerCase());




    });
    // Set the filtered restaurants in the parent component
    console.log(filteredRestaurants)
    setFilteredRestaurant( filteredRestaurant);
  };

  return (
    <div className='bg-OrangePeel'>
        <h2 className='mx-auto text-center text-white font-semibold uppercase'>your categories</h2>
        <div className="h-32 overflow-x-auto flex  p-3 md:p-6 md:h-40">
        {data.map((category) => (
          <img
            key={category.id}
            src={restimg2+ category.imageId}
            className="object-cover mx-3 h-full w-full rounded-full cursor-pointer md:mx-6"
            onClick={() => handleCategoryClick(category)}
            alt={category.id}
          />
        ))}
      </div>

      <div className="bg-orenge-100 grid gap-4 md:grid-row-3 ">
        {!filteredRestaurants.map((restaurant) => (
         <RestaurantCards {...restaurant.info} key={restaurant.info.id} />
        )) }
      </div>
    </div>
  );
};

export default AllDishCategory;
