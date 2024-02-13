import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logoimg } from "../Utils/contants";
import { useSelector } from "react-redux";
import Home from "../Pages/Home";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { HiShoppingCart } from "react-icons/hi";

import {
  selectCartItems,
  selectTotalItems,
} from "../Redux/CartsItems/cartSlice";
// import SinIn from './Pages/SignUp';

const Logo = () => (
  <a href="/" className=" font-sans uppercase text-2xl text-white pl-5" >
   I<samp className=" text-OrangePeel" >food</samp> 
  </a>
);



export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

console.log(isMenuOpen, "menu");

// const toggleMenu = () => {
//   // Toggle the menu state
//   setMenuOpen(!isMenuOpen);

//   // Check if the element exists before performing operations on it
  

  // Get the element with the class 'nav-Lists
  const navMenu = document.querySelector(".nav-Lists");
  const closeIcon = document.getElementById("close");
  // Get the element with the id 'close' (assuming closeIcon is an element with this id)
  const menuIcon = document.getElementById("menu");
  const linknavList = document.querySelectorAll(".navLink")
  // Check if the elements exist before performing operations on them

//  console.log("navMenu:", navMenu);
// console.log("linknavList:", linknavList);
//     // Toggle the 'hidden' class based on the menu state
//     // if (linknavList){
     
        
      
//     //     if (!isMenuOpen) {
//     //       navMenu.classList.remove("hidden");
          
//     //       linknavList.forEach((link) => {
           
//     //         link.addEventListener("click",()=>{
            
//     //           navMenu.classList.add("hidden");
//     //           setMenuOpen(false)
              
//     //         }) 
//     //      })
          
//     //     }  
              
//     if (navMenu) {
//       if (!isMenuOpen) {
//         navMenu.classList.remove("hidden");
//       } else {
//         navMenu.classList.add("hidden");
//       }
//     }
//   };


  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
              navMenu.classList.remove("hidden");
            } else {
              navMenu.classList.add("hidden");
            }
          
  };

  const closeMenu = () => {
    setMenuOpen(false);
    navMenu.classList.add("hidden");
    
  };
       
         
    //     else {
    //       menuIcon.classList.add("hidden");
    //      navMenu.classList.add("hidden");

    // }
 
  // }
 
// };
  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectTotalItems);
  const [singIn, setSingIn] = useState(false);
  // const [menuToggle] = useState("true");

  const { currentUser } = useSelector((state) => state.user);

  console.log(currentUser, "head");

  return (
    
    <header className=" relative font-semibold uppercase left-0 top-0 w-full  z-50  ">
     
    <nav className="relative h-20 flex items-center  pb- w-full bg-greenprimary" > 
    <div className="mx-auto md:mx-0"> {Logo()}</div> 
    
      <div className="hidden nav-Lists absolute top-0 left-0 py-14 h-full border-b w-full   mx-auto md:block md:static md:border-none md:py-0  md:ml-auto  md:h-auto  md:w-full  md:m-5">

        <ul className="  bg-PrincetonOrange  w-full  text-white text-center  flex  flex-col  gap-4  md:flex-row  md:bg-greenprimary  md:justify-end ">
      <div className="flex   flex-col gap-4 mx-auto  md:flex-row md:gap-5  ">
          <li>
            <Link to="/" className="navLink md:hover:text-orange-400    ease-out"  onClick={closeMenu}>
            
           Home
            </Link> </li>

            <li><Link to="/about" className="navLink  md:hover:text-orange-400  ease-out  "  onClick={closeMenu}>
          
         About 
           </Link></li>

           <li><Link to="/contact" className="navLink md:hover:text-orange-400  ease-out  "  onClick={closeMenu}>
         
        Contact 
          </Link></li>

             <li  className="md:hover:text-orange-400 ease-out " >
              <Link to="/cart" className=" navLink flex justify-center -space-x-2" onClick={closeMenu} >
            
              <HiShoppingCart size={22}/>
                        <samp className=" -translate-y-3 bg-orange-500 w-6  rounded-full">{totalItems}</samp>
            
          </Link></li>


          <li className="md:hover:text-orange-400  "> account </li>
     
          
      <Link to="/profile" className="navLink p-5 text-white md:text-OrangePeel md:p-0  md:mx-auto "  onClick={closeMenu}>
        {currentUser ? (
          <li className=" "><img
          
          className="rounded-full h-10 w-10 object-fit self-center border-1 boder border-black "
            src={currentUser.avatar}
            alt="profile"
          /></li>
        ) : (
          <li className="hover:underline "> Sign In</li>
        )}
      </Link>
      </div>
      </ul>
      </div>
     
     


      <div
          className={`pr-5 hover:cursor-pointer text-2xl md:hidden text-OrangePeel ${
            isMenuOpen ? "" : "md:w-0"
          }`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <IoMdClose /> : <IoMdMenu  onClick={closeMenu} />}
        </div>
      
     
    
    </nav>
    </header>
  );

}
