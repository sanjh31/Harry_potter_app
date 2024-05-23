import React, { Fragment } from 'react'
import Harrypotter_logo from "../../Assests/Harrypotter_logo.png"
import { Link, NavLink } from 'react-router-dom'
import { FaFacebookSquare ,FaInstagramSquare } from "react-icons/fa";
import { FaSquareYoutube , FaSquareTwitter} from "react-icons/fa6";


const Footer = () => {
  return (
    <Fragment>
        {/* <hr /> */}


<div className='bg-gradient-to-r from-gray-900 via-voilet-950 to-gray-950 '>


      <div className=' py-6 text-white text-sm px-6  flex items-start justify-between xl:mx-40 flex-col  sm:flex-row'>


{/* LOGO FOOTER */}
    <div className='logo'>
    <Link to={"/"}>
    <h1><img src={Harrypotter_logo} alt=""  width={"150px"}/></h1>
    </Link>  
    </div>


{/* RESOURCES ITEMS FOOTER */}
    <div className='Resources-items-footer'>

    <h1 className='text-normal text-gray-300 font-medium md:my-4 mt-6 mb-2 tracking-wide'>RESOURCES</h1>
    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-x-14 md:gap-y-3 gap-y-1'>
      <li>
      <NavLink to="/" 
      className={({isActive}) =>
       `${isActive ? "text-orange-500 font-medium" : "text-gray-400" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 tracking-wider text-sm  font-base`}>
      Home
      </NavLink>
      </li>





      <li>
      <NavLink to="movies"
      className={({isActive}) =>
      `${isActive ? "text-orange-500 font-medium" : "text-gray-400" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 tracking-wider text-sm font-base`}>
      Movies
      </NavLink>
      </li>

      <li>
      <NavLink
      to="books"
      className={({isActive}) =>
      `${isActive ? "text-orange-500 font-medium" : "text-gray-400" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 tracking-wider font-base`}>
      Books
      </NavLink>
      </li>

 


      <li>
      <NavLink
      to="character"
      className={({isActive}) =>
      ` ${isActive ? "text-orange-500 font-medium" : "text-gray-400" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 tracking-wider text-sm font-base`}>
      Characters
      </NavLink>
      </li>

      <li>
      <NavLink to="potions"
       className={({isActive}) =>
      `${isActive ? "text-orange-500 font-medium" : "text-gray-400" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 tracking-wider text-sm font-base`}>
      Potion
      </NavLink>
      </li>



      </ul>
            
        </div>


<div className='legal '>
<h1 className='text-normal text-gray-300 font-medium md:my-4  mt-6 mb-2 tracking-wide'>LEGAL</h1>
<ul className='gap-x-14 md:gap-y-3 gap-y-1 grid grid-cols-1'>
  <li className='text-gray-400'>Privacy Policy</li>
  <li className='text-gray-400'>Terms & Condition</li>
</ul>
</div>


<div>
<h1 className='text-normal text-gray-300 font-medium md:my-4 mt-6 mb-3 tracking-wide'>FOLLOW US</h1>
<div className='flex items-center justify-around gap-x-4'>
<FaFacebookSquare className='text-2xl' />
<FaInstagramSquare className='text-2xl'/>
<FaSquareTwitter className='text-2xl'/>
<FaSquareYoutube className='text-2xl'/>
</div>
</div>

{/* copyright section */}
</div>





<hr  className='bg-white visible mx-4' />
<div className='py-2  mx-4 text-white font-light text-sm text-end'> @2023HarryPotter</div>
</div>







    
</Fragment>
)
}

export default Footer