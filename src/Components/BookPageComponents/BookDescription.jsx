import React, { useState } from 'react'
import Search from '../SearchBarComponent/Search';
import { Link } from "react-router-dom";
import { IoBookOutline } from "react-icons/io5";


const BookDescription = ({bookdata}) => {

  const [searchQuery, setSearchQuery] = useState('');


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

const filteredData = bookdata.filter(e => e.attributes.slug.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <>

    {/* SEARCH COMPONENT */}
    <div>
  <Search searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
  </div>


{/* ARRAY UI  */}
    <ul  className='grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-12 py-4 xl:mx-20 mx-5 md:mx-10'>
    {filteredData && filteredData.length> 0 && filteredData.map((e) => (

      <div  key={e.id} className=' flex   flex-col  rounded  bg-gradient-to-r from-gray-900 via-voilet-950 to-gray-950 tracking-wide shadow-sm shadow-indigo-600/50 p-3'>
        <li key={e.id}>

      <div ><img src={e.attributes.cover} alt={e.attributes.slug} className="rounded-lg"/></div>

      <div className="px-2 my-3 ">

      <h1 className='text-white text-sm font-medium md:text-normal xl:text-lg xl:font-normal  md:font-medium'>{e.attributes.title}</h1>
      <div  className='my-3 flex items-center justify-between'>
      <p className="flex items-center justify-center text-orange-400 text-sm font-medium "><IoBookOutline className='text-orange-500 font-lg text-lg me-1'/>{e.attributes.pages}<span className='font-normal text-sm'> pg </span> </p>
      <p className='Release Date text-sm text-orange-400 font-medium '>  {e.attributes.release_date.slice(0,-6)} <span className='font-normal text-sm'> yr </span> </p>
     </div>

      </div>
          
          {/* buttons */}
      <div className='py-3 text-start px-2 flex items-center justify-between'>
      <Link to={`${e.id}`}>
      <button className=' text-white px-2 text-sm py-1 font-medium  rounded bg-gradient-to-r from-gray-800 via-voilet-950 to-indigo-950 tracking-wide '>Details</button>
      </Link>

      <Link to={`${e.attributes.wiki}`} target='_blank'> 
      <button className=' text-white px-2 text-sm py-1 font-medium  rounded bg-gradient-to-r from-gray-900 via-voilet-950 to-orange-950 tracking-wide '>Read More</button>
      </Link>
      </div>

        </li>
        </div>
      ))} {filteredData.length === 0 &&
      <h1 className='text-white my-20 text-2xl '>Match Not found....</h1>

      }



  </ul>
  </>
  )
}

export default BookDescription