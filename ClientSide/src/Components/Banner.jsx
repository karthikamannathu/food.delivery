import React, { useState, useEffect } from 'react';
import { indroImg1, indroImg2, indroImg3 } from '../Utils/contants';

const Banner = () => {

  const images = [
    indroImg1,
    indroImg2,
    indroImg3
    
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
 
    <div className="w-full  object-contain">
    {images.map((image, index) => (
       <div
       key={index}
       className={`absolute  h-full w-full object-contain transition-opacity ${
         index === currentImage ? 'opacity-100' : 'opacity-0'
       }`}
       style={{ zIndex: index === currentImage ? 1 : 0 }}
     >
       <img
         src={image}
         alt={`Image ${index + 1}`}
         className="w-full h-full object-fill "
       />
       {index === currentImage && (
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
           <p className="text-2xl font-semibold animate__animated animate__fadeInUp font_head py-4 text-gold md:text-4xl md:py-6" >Hungry? We've Got You Covered!</p>
           <p className="  animate__animated animate__zoomIn  font text-gold md:text-xl" >" Find Your Perfect Meal Right Here.<br/> Browse, Order, and Enjoy - It's That Easy!"</p>
          



         </div>
       )}
     </div>
   ))}
  </div>
);
};

export default Banner;
