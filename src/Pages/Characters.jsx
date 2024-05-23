import React from 'react'
import {Characterapi} from '../Services/Apis';
import CharacterDescription from '../Components/CharacterPageComponents/CharacterDescription';
import { useState, useEffect } from 'react';

const Characters = () => {
  const [characterdata, setcharacterdata] = useState([])
  const [loading, setLoading] = useState(true);

  const fetchCharacterData =  async ()=>{
    try{
      const fetchdata = await Characterapi();
      console.log(fetchdata.data)
      // console.log(fetchdata.data.data[0].id)
      setcharacterdata(fetchdata.data);  
      setLoading(false);
    }
    catch(error){
      console.log("Here is the problem")
    }

  }

    useEffect(()=>{fetchCharacterData()},[])






  return (
    <>
   <div className=' md:py-10 py-5'>
    {/* loader part */}
      {loading && <p className='md:text-2xl text-xl md:my-30 my-10 text-white md:mx-20  mx-10'>Loading...</p>}


        {/* component description */}
        {!loading && characterdata.length > 0 && (
          <CharacterDescription characterdata ={characterdata}/>
        )}

        
      </div>
      </>
  )
}

export default Characters