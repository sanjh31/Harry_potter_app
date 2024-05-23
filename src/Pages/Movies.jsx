import React, { useEffect, useState } from 'react'
import { Movieapi } from '../Services/Apis';
import MovieDescription from '../Components/MoviePageComponents/MovieDescription';

const Movies = () => {

  const [moviedata, setmoviedata] = useState([])
  const [loading, setLoading] = useState(true);

  const fetchMovieData =  async ()=>{
    try{
      const fetchdata = await Movieapi();
      console.log(fetchdata.data)
      // console.log(fetchdata.data.data[0].id)
      setmoviedata(fetchdata.data);  // Correctly setting the data state
      setLoading(false);
    }
    catch(error){
      console.log("Here is the problem")
    }

  }

useEffect(()=>{fetchMovieData()},[])






  return (
    <>

      <div className='bg-black py-10'>
        {loading && <p className='text-xl md:text-2xl my-30 text-white mx-20'>Loading...</p>}


        
        {!loading && moviedata.length >0 && (
          <MovieDescription moviedata ={moviedata} />
        )}

        
      </div>
      </>
  )
}

export default Movies