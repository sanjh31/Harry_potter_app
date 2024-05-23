// src/Header.js
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Harrypotter_logo from "../../Assests/Harrypotter_logo.png";
import './Navbar.css';
import { FaHome } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { FaPerson } from "react-icons/fa6";
import { GiMagicPotion } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.nav-bar')) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    // navbar Container
    <div className='nav-bar flex items-center justify-between lg:px-10 xl:px-20 py-0 bg-gradient-to-r from-gray-950 via-voilet-950 to-gray-800  ' style={{backgroundColor: "#0C0C0C"}}>

        {/* Logo of the Navbar */}
      <Link to={"/"}>
        <div className='logo'>
          <img src={Harrypotter_logo} alt="harrypoter_logo" />
        </div>
      </Link>



      {/* Navitems  */}

      <div className={`nav-links-container ${isOpen ? "open" : ""}`}>
        <ul className='nav-links'>


    {/* just for the mobile responsive system */}
        <li className='mobile-responsive-logo'>
        <div className='logo'>
          <img src={Harrypotter_logo} alt="harrypoter_logo" />
        </div>
        </li>
   

          <li onClick={closeMenu}>
            <NavLink to="/" className={({ isActive }) => 
              `block py-2   duration-200  border-gray-100 ${isActive ? "text-orange-500 font-medium" : "text-white"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 tracking-wider text-xs md:text-sm flex`
            }>
              <FaHome className='nav-icons me-2 text-base ' /> HOME
            </NavLink>
          </li>

          <li onClick={closeMenu}>
            <NavLink to="movies" 


            className={({isActive}) => 
              `block py-2   duration-200  border-gray-100 ${isActive ? "text-orange-500 font-medium" : "text-white"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 tracking-wider text-xs md:text-sm flex`
            }
            >
              <MdLocalMovies className='nav-icons me-2 text-base' /> MOVIES
            </NavLink>
          </li>

          <li onClick={closeMenu}>
            <NavLink to="books" className={({ isActive }) => 
              `block py-2   duration-200  border-gray-100 ${isActive ? "text-orange-500 font-medium" : "text-white"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 tracking-wider text-xs md:text-sm flex`
            }>
              <IoBookSharp className='nav-icons me-2 text-base' /> BOOKS
            </NavLink>
          </li>

          <li onClick={closeMenu}>
            <NavLink to="character" className={({ isActive }) => 
              `block py-2   duration-200  border-gray-100 ${isActive ? "text-orange-500 font-medium" : "text-white"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 tracking-wider text-xs md:text-sm flex`
            }>
              <FaPerson className='nav-icons me-2 text-base' /> CHARACTERS
            </NavLink>
          </li>

          <li onClick={closeMenu}>
            <NavLink to="potions" className={({ isActive }) => 
              `block py-2   duration-200  border-gray-100 ${isActive ? "text-orange-500 font-medium" : "text-white"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 tracking-wider text-xs md:text-sm flex`
            }>
              <GiMagicPotion className='nav-icons me-2 text-base' /> POTIONS
            </NavLink>
          </li>
        </ul>
      </div>



{/* Toggle menu Hamburger */}


      <div className={`nav-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>


    </div>
    // end of the navigation bar container


  );
};

export default Navbar;
