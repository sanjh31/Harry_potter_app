import React from 'react'
import { Potionapi } from '../Services/Apis';
import PotionDescription from '../Components/PotionPageComponents/PotionDescription';
// import { Movieapi } from '../Services/Apis';
import { useState, useEffect } from 'react';


const Potions = () => {
  const [potionData, setpotiondata] = useState([])
  const [loading, setLoading] = useState(true);

  const fetchpotionData = async ()=>{
    try{
      const fetchdata = await Potionapi();
      // console.log(fetchdata.data)
      setpotiondata(fetchdata.data); 
      setLoading(false);
    }catch(error){
      console.log("Here is the problem")
    }

  }

    useEffect(()=>{fetchpotionData()},[])








  return (
    <>

      <div className=' md:py-10 py-8'>
        {/* Loading */}
      {loading && <p className='md:text-2xl text-xl my-10 md:my-30 text-white md:mx-20 mx-10'>Loading...</p>}


        {/* spell description */}
        {!loading && (
          <PotionDescription potionData = {potionData}/>
        )}

        
      </div>
      </>
  )
}

export default Potions