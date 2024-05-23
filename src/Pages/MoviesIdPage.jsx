import React, { useState, useEffect } from 'react';
import { MovieapiDetails } from '../Services/Apis';
import { Link, useParams } from 'react-router-dom';
import "../Pages/Style.css"

const MoviesIdPage = () => {
    const [moviedata, setMoviedata] = useState({});
    const [loading, setLoading] = useState(true);
    const { moviesId } = useParams();

    const fetchMovieData = async () => {
        try {
            const fetchdata = await MovieapiDetails(moviesId);
            console.log(fetchdata);
            setLoading(false);
            setMoviedata(fetchdata.data);
        } catch (error) {
            console.log("Here is the problem:", error);
        }
    };

    useEffect(() => {
        fetchMovieData();
    }, []);

    return (
        <>
   {/* loading part */}
   {loading && <p className='md:text-2xl text-xl md:my-30 my-10 text-white md:mx-20  mx-10'>Loading...</p>}



   {/* Content part */}

            {/* setting background image */}
            <div style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${moviedata.attributes ? moviedata.attributes.poster : ''})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: "100%",

            }}>




                {/* ID-description-data */}
            {moviedata.attributes && 
            <>
                <div className='flex items-center justify-evenly flex-col lg:flex-row w-full'>

                    {/* image */}
                    <div className='lg:w-4/12 w-11/12 flex items-center justify-center m-0 lg:my-20 my-5'>
                        <img src={moviedata.attributes.poster} alt={moviedata.attributes.title} className='w-full' />
                    </div>

                    {/* content-button */}
                    <div className='movie-details lg:w-6/12 lg:my-20 w-10/12 '>

                        {/* content */}
                        <p className='title text-white lg:text-2xl text-lg lg:mb-6 mb-4 font-normal tracking-wide movie-id-page-title'>
                            {moviedata.attributes.title.toUpperCase()}
                        </p>
                        <p className='Release Date md:textbasel text-sm text-white my-2'>
                            Released On: {moviedata.attributes.release_date}
                        </p>
                        <p className='boxOffice text-white md:text-base text-sm my-2'>
                            Box Office: {moviedata.attributes.box_office}
                        </p>
                        <p className='directors text-white md:text-base text-sm my-2'>
                            Directors: {moviedata.attributes.directors}
                        </p>
                        <p className='Producers text-white md:text-base text-sm my-2'>
                            Producers: {moviedata.attributes.producers.join(' , ')}
                        </p>
                        <p className='Music md:text-base text-sm text-white my-2'>
                            Music Composers: {moviedata.attributes.music_composers.join(' , ')}
                        </p>
                        <p className='Summary md:text-base text-sm tracking-wide text-white my-2 text-justify'>
                            Summary: <br /> {moviedata.attributes.summary}
                        </p>

                        {/* buttons */}
                        <div>
                            <Link to={moviedata.attributes.wiki} target='_blank'>
                                <button className='text-white px-4 md:py-2 py-1 my-4 rounded bg-gradient-to-r from-gray-900 via-voilet-950 to-orange-950 tracking-wide'>
                                    Read more
                                </button>
                            </Link>
                            <Link to='/movies' className='px-5'>
                                <button className='text-white px-6 md:py-2 py-1 my-4 rounded bg-gradient-to-r from-gray-800 via-voilet-950 to-indigo-950 tracking-wide'>
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
};

export default MoviesIdPage;
