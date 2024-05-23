import React from 'react'

const ShowMore = ({handleShowMore}) => {
  return (
    <button 
            onClick={handleShowMore} 
            className='border text-white md:px-4 px-2 py-1 md:py-2 rounded mr-2 md:my-8 mt-6 '
          >
            Show More
          </button>
  )
}

export default ShowMore