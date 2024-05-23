import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PotionapiDetails } from '../Services/Apis';
import {Link} from "react-router-dom"
import "../Pages/Style.css"

const SpellIdPage = () => {
    const [potiondata, setpotiondata] = useState({});
    const [loading, setLoading] = useState(true);
    const { potionId } = useParams();

    const fetchSpellData = async () => {
        try {
            const fetchdata = await PotionapiDetails(potionId);
            console.log(fetchdata);
            setLoading(false);
            setpotiondata(fetchdata.data);
        } catch (error) {
            console.log("Here is the problem:", error);
        }
    };

    useEffect(() => {
        fetchSpellData();
    }, []);

    return (
        <>
 {/* loading part */}
 {loading && <p className='md:text-2xl text-xl md:my-30 my-10 text-white md:mx-20  mx-10'>Loading...</p>}



 {/* Content part */}
    <div className='Spell-data'>
        {potiondata.attributes && 
            
          <>
            <div className='flex items-center justify-evenly flex-col md:flex-row w-full'>

                {/* image */}
                    <div className=' flex items-center justify-center  m-0 md:my-20 my-10 bg-transparent '>
                        <img src={potiondata.attributes.image} alt={potiondata.attributes.title} className='w-full rounded shadow-lg shadow-slate-950' />
                    </div>

                    {/* content and button */}
                    <div className='movie-details lg:w-6/12 md:w-5/12 w-10/12 md:my-20 '>

                        {/* content */}
                        <p className='title text-white md:text-2xl text-xl mb-6 font-normal tracking-wide spell-ID-Page-Title'>
                            {potiondata.attributes.name.toUpperCase()}
                        </p>

                        {potiondata.attributes.characteristics &&
                        <p className='Release Date  text-sm md:text-base xl:text-lg text-white my-2 '>
                            Characteristics : {potiondata.attributes.characteristics}
                        </p>
                        }
                       
                        {potiondata.attributes.effect && 
                        <p className='Release Date text-sm  md:text-base xl:text-lg text-white my-2'>
                            Effect : {potiondata.attributes.effect}
                        </p>
                          }
                           
                        {potiondata.attributes.ingredients && 
                        <p className='Release Date text-sm  md:text-base xl:text-lg text-white my-2'>
                        Ingredients : {potiondata.attributes.ingredients}
                        </p>
                        }
                       
                        {potiondata.attributes.difficulty &&
                        <p className='Release Date  text-sm md:text-base xl:text-lg text-white my-2'>
                         Difficutly : {potiondata.attributes.difficulty}
                        </p>
                        }
                        
                        {/* buttons */}
                        <div>
                            <Link to={potiondata.attributes.wiki} target='_blank'>
                                <button className='text-white md:px-4 px-2 py-1 md:py-2 my-4 rounded bg-gradient-to-r from-gray-900 via-voilet-950 to-orange-950 tracking-wide'>
                                    Read more
                                </button>
                            </Link>

                            <Link to='/potions' className='px-5'>
                                <button className='text-white md:px-4 px-2 py-1 md:py-2 my-4 rounded bg-gradient-to-r from-gray-800 via-voilet-950 to-indigo-950 tracking-wide'>
                                    Back
                                </button>
                            </Link>
                        </div>

                    </div>

                    
                </div>
            </>
            }
        </div>

        </>
    );
}

export default SpellIdPage