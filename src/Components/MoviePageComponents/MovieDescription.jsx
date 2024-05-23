import React from 'react'
import Search from '../SearchBarComponent/Search'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoMdTime } from "react-icons/io";

const MovieDescription = ({moviedata}) => {

  const [searchQuery, setSearchQuery] = useState('');



  const handleSearchChange = (event) => {
  setSearchQuery(event.target.value);
  };

  const filteredData = moviedata
  .filter(e => e.attributes.slug.toLowerCase().includes(searchQuery.toLowerCase()));
  
  

  return (
    <>
    {/* SEARCH COMPONENT */}
    <div>
    <Search searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
    </div>


    {/* GETTING DATA FROM ARRAY */}
    <ul  className='grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 mx-5 sm:mx-10 xl:mx-20 gap-x-6 gap-y-6' >
    {filteredData && filteredData.length>0 && filteredData.map((e) => (
      
    <li key={e.id}>
      
      <div className=' flex   flex-col  rounded  bg-gradient-to-r from-gray-900 via-voilet-950 to-gray-950 tracking-wide shadow-sm shadow-indigo-600/50'>

      <div className='movie-posters m-0 p-0'>
      <img src={e.attributes.poster} alt={e.attributes.slug} className='w-full h-full object-cover'/>
      </div>

      <div className="px-6">
      <h1 className='text-white text-sm font-medium md:text-normal xl:text-lg xl:font-normal  md:font-medium'>{e.attributes.title}</h1>
      <div  className='my-3 flex items-center justify-between'>
      <p className='Release Date text-sm text-orange-400 font-normal '>  {e.attributes.release_date.slice(0,-6)}</p>
      <p className='flex items-center justify-center text-orange-400 text-sm font-normal '><IoMdTime className='text-orange-500 font-lg text-lg me-1'/> {e.attributes.running_time}</p>
      </div>
      </div>


{/* buttons */}
      <div className='py-3 text-start px-6 flex items-center justify-between'>
      <Link to={`${e.id}`}>
      <button className=' text-white px-2 text-sm py-1 font-normal md:font-medium  rounded bg-gradient-to-r from-gray-800 via-voilet-950 to-indigo-950 tracking-wide '>Details</button>
      </Link>
      <Link to={`${e.attributes.wiki}`} target='_blank'> 
      <button className=' text-white px-2 text-sm py-1 font-normal md:font-medium  rounded bg-gradient-to-r from-gray-900 via-voilet-950 to-orange-950 tracking-wide '>Read More</button>
      </Link>
      </div>

      </div>

        </li>
      ))}{
        filteredData.length === 0 &&
     
        <h1 className=' text-white text-2xl my-10'>Match Not found.....</h1>
       
      }



  </ul>
  </>
  )
}

export default MovieDescription