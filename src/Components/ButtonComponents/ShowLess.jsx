import React from 'react'

const ShowLess = ({handleShowLess}) => {
  return (
    <button 
    onClick={handleShowLess} 
    className='border text-white md:px-4 px-2 py-1 md:py-2 rounded md:my-8 mt-6 '
  >
    Show Less
  </button>
  )
}

export default ShowLess