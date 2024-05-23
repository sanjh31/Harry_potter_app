import React from 'react'
import { useState } from 'react';
import {Link } from 'react-router-dom';
import ShowLess from '../ButtonComponents/ShowLess';
import ShowMore from '../ButtonComponents/ShowMore';
import Search from '../SearchBarComponent/Search';


const CharacterDescription = ({characterdata}) => {
    const [visibleCount, setVisibleCount] = useState(15);
    const [searchQuery, setSearchQuery] = useState('');


    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
// handle show or more function by increasing it by 10
    const handleShowMore = () => {
      setVisibleCount(prevCount => prevCount + 10); 
    }
    const handleShowLess = () => {
      setVisibleCount(prevCount => (prevCount - 10)); 
    };
  

    // Searchquery by lowercase
    const filteredData = characterdata.filter(e => e.attributes.slug.toLowerCase().includes(searchQuery.toLowerCase()))
                                      .filter(e => e.attributes.image)




    return (
      <>


{/* SEARCH COMPONENT */}
    <div>
      <Search searchQuery={searchQuery} handleSearchChange={handleSearchChange}/>
      </div>

{/* DATA SHOWING IN UI */}
        <ul className='grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-12 py-4 xl:mx-20 mx-5 md:mx-10'>
          {filteredData.slice(0, visibleCount).map((e) => (

        <div key={e.id} className='bg-gradient-to-r from-gray-900 via-voilet-950 to-gray-950 shadow-sm shadow-indigo-600/50'>
          <li key={e.id} className=' shadow-md rounded p-3'>


              <div style={{
                  width: "100%",
                  height: "300px"
              }}>
              <img src={e.attributes.image} alt={e.attributes.slug} className='w-full h-full object-cover rounded' />
              </div>

              <h1 className='text-white  text-normal font-medium xl:text-lg my-4 mx-2'>Character name : {e.attributes.name}</h1>

                {/* button only one */}
              <Link to={`${e.attributes.wiki}`} target='_blank' className='mx-3'> 
              <button className=' text-white px-2 text-sm py-1 font-medium  rounded bg-gradient-to-r from-gray-800 via-voilet-950 to-orange-950         tracking-wide '>Read More</button>
              </Link>

            </li>

            </div>
          ))}{
            filteredData.length === 0 &&
            <h1 className='text-white text-xl'>Match Not found...</h1>
          }
       </ul>



        <div className='text-center mt-4'>
          {visibleCount < filteredData.length && (
        <ShowMore handleShowMore={handleShowMore}/>
          )}
          {visibleCount > 15 && (
            <ShowLess handleShowLess={handleShowLess}/>
          )}
        </div>

      </>
    );
}

export default CharacterDescription