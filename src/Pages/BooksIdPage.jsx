import React, { useState, useEffect } from 'react';
import { BooksapiDetails } from '../Services/Apis';
import { Link, useParams } from 'react-router-dom';
import '../Pages/Style.css'

const MoviesIdPage = () => {
    const [Booksdata, setBooksdata] = useState({});
    const [loading, setLoading] = useState(true);
    const { booksId } = useParams();


    // fetching data from another component api one
    const fetchBooksData = async () => {
        try {
            const fetchdata = await BooksapiDetails(booksId);
            console.log(fetchdata);
            setLoading(false);
            setBooksdata(fetchdata.data);
        } catch (error) {
            console.log("Here is the problem:", error);
        }
    };

    useEffect(() => {
        fetchBooksData();
    }, []);

return (
   <>
  {/* loading part */}
        {loading && <p className='md:text-2xl text-xl md:my-30 my-10 text-white md:mx-20  mx-10'>Loading...</p>}



    {/* Content part */}

    {/* background-image */}
    <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.95)), url(${Booksdata.attributes ? Booksdata.attributes.cover : ''})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: "100%",
    }}>


        {/* ID-description */}
    {Booksdata.attributes && 
        <>
            <div className='flex items-center justify-evenly flex-col lg:flex-row w-full'>

                {/* Image */}
                    <div className='lg:w-3/12 w-10/12 flex items-center justify-center m-0 lg:my-20 my-5'>
                        <img src={Booksdata.attributes.cover} alt={Booksdata.attributes.title} className='w-full rounded-2xl' />
                    </div>

                {/* Content-Description */}
                  <div className='movie-details lg:w-6/12 lg:my-20 w-10/12 '>


                    {/* text */}
                    <p className='title text-white lg:text-2xl text-lg lg:mb-6 mb-4 font-base tracking-wide Books-id-page-title'>
                     {Booksdata.attributes.title.toUpperCase()}
                    </p>
                    <p className='Release Date md:text-base text-sm text-white my-2'>
                     Author: {Booksdata.attributes.author}
                    </p>
                    <p className='Release Date md:text-base text-sm text-white my-2'>
                     Released On: {Booksdata.attributes.release_date}
                    </p>
                    <p className='boxOffice text-white md:text-base  text-sm my-2'>
                     Pages: {Booksdata.attributes.pages}
                    </p>
                    <p className='directors text-white md:text-base  text-sm my-2'>
                     Dedication: {Booksdata.attributes.dedication}
                    </p>
                   
                      
                    <p className='Summary md:text-base text-sm  text-white my-2 text-justify'>
                     Summary: <br /> {Booksdata.attributes.summary}
                    </p>


                      
                    {/* buttons */}
                    <div>
                        <Link to={Booksdata.attributes.wiki} target='_blank'>
                            <button className='text-white px-4 md:py-2 py-1 my-4 rounded bg-gradient-to-r from-gray-900 via-voilet-950 to-orange-950 tracking-wide'>
                                Read more
                            </button>
                        </Link>

                        <Link to='/books' className='px-5'>
                            <button className='text-white px-6 md:py-2 py-1 my-4 rounded bg-gradient-to-r from-gray-800 via-voilet-950 to-indigo-950 tracking-wide'>
                                Back
                            </button>
                        </Link>
                    </div>

                    </div>
                    {/* end of description */}

                </div>
            </>
         }
            
            
    </div>
</>
    
    );
};

export default MoviesIdPage;
