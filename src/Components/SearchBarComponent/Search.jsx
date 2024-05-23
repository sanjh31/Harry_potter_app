import React from 'react'
import { TbSearch } from 'react-icons/tb';

const Search = ({searchQuery, handleSearchChange}) => {

    
    
    return (
    <>
    <div className='pb-4 md:pb-8 md:px-20 px-5  '>
      <div className=' bg-black w-full flex items-center justify-between border  md:rounded-full rounded-lg'>
    <input
      type='text'
      placeholder='Search spells...'
      value={searchQuery}
      onChange={handleSearchChange}
      className='md:w-11/12 w-full bg-black md:px-6 px-2 py-2 mx-2 rounded-full focus:outline-none text-white'


      
    />
    < TbSearch className='text-white text-xl mx-2'/>
    </div>
  </div>
  </>
  )
}

export default Search