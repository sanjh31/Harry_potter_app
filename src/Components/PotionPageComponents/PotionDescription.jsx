import React, { useState } from 'react';
import Search from '../SearchBarComponent/Search';
import ShowMore from '../ButtonComponents/ShowMore';
import ShowLess from '../ButtonComponents/ShowLess';
import { Link} from "react-router-dom";

const PotionDescription = ({ potionData = [] }) => {
  const [visibleCount, setVisibleCount] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');



// functions to handle showmore and showless by 5
  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 5); 

  };

  const handleShowLess = () => {
    setVisibleCount(prevCount => prevCount - 5);
  }


// handlesearchfunction

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = potionData
    .filter(e => e.attributes.image)
     // Filter out items without an image
    .filter(e => e.attributes.slug.toLowerCase().includes(searchQuery.toLowerCase())); 
    // Filter based on search query


  return (
    <>

    {/* Search Component*/}
    <div>
    <Search handleSearchChange={handleSearchChange} searchQuery={searchQuery}/>
    </div>
    


    {/* THese are array iteration */}
    <ul className='grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 lg:mx-20 mx-5 gap-x-6 gap-y-6'>

        {filteredData && filteredData.length>0 && filteredData.slice(0,visibleCount).map((e) => (

          <div key={e.id} className='  rounded  bg-gradient-to-r from-gray-900 via-voilet-950 to-gray-950 tracking-wide shadow-sm shadow-indigo-600/50'>

          <li key={e.id} className=' shadow-md rounded p-3 flex flex-col items-center'>
          <div className='Book-details  flex items-center justify-center' style={{height: "400px" , width: '100%'}}>
            <img src={e.attributes.image} alt={e.attributes.slug} className=' rounded-md  ' />
          </div>

          <div className="detail my-4 px-1">
          <h1 className='text-white  text-normal xl:text-lg font-medium '>{e.attributes.name}</h1>
          </div>
            

          {/* buttons */}
      <div className='py-3 text-start  flex items-center justify-between'>
      <Link to={`${e.id}`}>
      <button className=' text-white px-2  text-sm py-1 font-medium  rounded bg-gradient-to-r from-gray-800 via-voilet-950 to-indigo-950 tracking-wide '>Details</button>
      </Link>

      <Link to={`${e.attributes.wiki}`} target='_blank' className='mx-3'> 
      <button className=' text-white px-2 text-sm py-1 font-medium  rounded bg-gradient-to-r from-gray-900 via-voilet-950 to-orange-950 tracking-wide '>Read More</button>
      </Link>
      </div>

          </li>
          </div>

        ))}
        {filteredData.length === 0 &&
          <h1 className="text-white text-2xl my-20">Match not found...</h1>
        }
      </ul>


{/* show less and show more Component with the function passing as a prop */}
      <div className='text-center '>
        {visibleCount < filteredData.length && (
         <ShowMore handleShowMore={handleShowMore} />
        )}
        {visibleCount > 10 && (
          <ShowLess handleShowLess={handleShowLess}/>
        )}
      </div>
    </>
  );
};

export default PotionDescription;
