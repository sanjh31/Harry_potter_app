import React from 'react'
import { Bookapi } from '../Services/Apis'
import BookDescription from '../Components/BookPageComponents/BookDescription'
import { useState, useEffect } from 'react'

const Books = () => {
  const [bookdata, setbookdata] = useState([])
  const [loading, setLoading] = useState(true);

  const fetchbookData =  async ()=>{
    try{
      const fetchdata = await Bookapi();
      setbookdata(fetchdata.data);  
      setLoading(false);
    }
    catch(error){
      console.log("Here is the problem")
    }

  }

  useEffect(()=>{fetchbookData()},[])






  return (
    <>

      <div className=' py-10'>

        {/* Loading */}
      {loading && <p className='text-white text-2xl my-30'>Loading...</p>}


        {/* Book Description */}
        {!loading && bookdata.length >0 && (
          <BookDescription bookdata ={bookdata}/>
        )}

        
      </div>
      </>
  )
}

export default Books