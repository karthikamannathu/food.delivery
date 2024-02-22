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
  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectTotalItems);
  const [signIn, setSignIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility
  const [showCloseIcon, setShowCloseIcon] = useState(false); // State to manage which icon to show


  const { currentUser } = useSelector((state) => state.user);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu state
    setShowCloseIcon(!showCloseIcon); // Toggle menu state
    console.log(menuOpen,"toggle menu")
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close menu
    setShowCloseIcon(false); // Hide close icon
    console.log(closeMenu,"toggle menu")
  };


  return (
    <header className="relative font-semibold uppercase left-0 top-0 w-full z-50">
      <nav className="relative h-20 flex items-center pb- w-full bg-greenprimary">
        <div className="mx-auto md:mx-0">{Logo()}</div>
        
        <div className={` nav-Lists absolute top-6 left-0 py-14 h-full w-full border-b  mx-auto md:block md:static md:border-none md:py-0 md:ml-auto 
        md:h-auto md:w-full md:m-5 ${menuOpen ? 'block' : 'hidden'}`}>
          {/* Navigation Links */}
          <ul className="bg-PrincetonOrange w-full text-white text-center flex flex-col gap-4 md:flex-row md:bg-greenprimary md:justify-end">
            <div className="flex flex-col gap-4 mx-auto md:flex-row md:gap-5">
              <li>
                <Link to="/" className="navLink md:hover:text-orange-400 ease-out" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="navLink md:hover:text-orange-400 ease-out" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="navLink md:hover:text-orange-400 ease-out" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
              <li className="md:hover:text-orange-400 ease-out">
                <Link to="/cart" className="navLink flex justify-center -space-x-2" onClick={closeMenu}>
                  <HiShoppingCart size={22} />
                  <samp className="-translate-y-3 bg-orange-500 w-6 rounded-full">{totalItems}</samp>
                </Link>
              </li>
              <li className="md:hover:text-orange-400">account</li>
              <Link to="/profile" className="navLink p-5 text-white md:text-OrangePeel md:p-0 md:mx-auto" onClick={closeMenu}>
                {currentUser ? (
                  <li className="">
                    <img
                      className="rounded-full h-10 w-10 object-fit self-center border-1 boder border-black"
                      src={currentUser.avatar}
                      alt="profile"
                    />
                  </li>
                ) : (
                  <li className="hover:underline">Sign In</li>
                )}
              </Link>
            </div>
          </ul>
        </div>
        <div className="absolute left-0 right-0 top-8 inset-0 flex justify-end   self-center pr-5 hover:cursor-pointer text-2xl md:hidden text-OrangePeel">
        {showCloseIcon ? (
            <IoMdClose onClick={closeMenu} />
          ) : (
            <IoMdMenu onClick={toggleMenu} />
          )}
        </div>
      </nav>
    </header>
  );
}
