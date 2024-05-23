
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from "react-router-dom"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Home_movie_posters from "../../Assests/Home_movie_posters.jpeg"
import Home_book_poster from "../../Assests/Home_book_poster.jpg"
import Home_character_image from "../../Assests/Home_character_image.jpg"
import Antidote   from "../../Assests/Antidote-to-Uncommon-Poisons.jpg";
import './Swiper.css'



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SwiperSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        // centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
        //   disableOnInteraction: false,
        }}
   
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
      
        <SwiperSlide className='w-full lg:h-vh md:h-5/6 h-screen   bg-gray-950 text-white   md:p-6 lg:p-10'>

        {/* flex-container  */}
            <div className='flex items-center justify-center lg:justify-around   w-full lg:h-auto md:h-5/6 h-screen  relative'>

            {/* image-container */}
            <div className='xl:w-7/12 lg:w-6/12 w-full   h-screen md:h-5/6 lg:h-auto'>
              <img src={Home_movie_posters} alt="movieposter" className='md:rounded-lg w-full h-full object-cover' />
              </div>

              {/* Content-button-container */}
            <div className='xl:w-4/12 lg:w-5/12 w-full md:h-full h-screen lg:h-auto    absolute lg:relative   flex-col flex justify-center lg:items-start items-center   Swipper_Upper_Slider_Heading'>

                <h1 className='md:text-2xl xl:text-3xl text-lg   md:mx-24 lg:mx-0 sm:mx-16 mx-5   uppercase  tracking-widest lg:tracking-normal xl:tracking-wide   text-white   text-center lg:text-justify '>Harry Potter and the Philosophers Stone</h1>

                <p className='my-4 md:my-6 md:mx-20 lg:mx-0 xl:my-10 lg:my-5 mx-5 sm:mx-16   sm:text-base text-sm   font-sans  text-center lg:text-left   tracking-wide'>Dive into the cinematic adaptations of Harry Potter Movies.Get detailed information about each movie, including synopses, cast lists, behind-the-scenes insights, and memorable quotes.</p>
               
               {/* button-container */}
                <div className='my-4 md:my-4 lg:my-5 xl:my-0   font-sans'>
                <Link to={"/movies"} target='_blank' > 
                <button className='px-6 py-2  xl:py-3 lg:py-2   font-medium   text-sm   rounded    bg-gradient-to-r from-gray-900 via-voilet-950 to-orange-950 tracking-widest text-white   hover:border    transition-all'> MOVIES </button>
                </Link>
                </div>


                </div>
                <div>
                
                </div>
            </div>
        </SwiperSlide>




        <SwiperSlide className='w-full lg:h-vh md:h-5/6 h-screen   bg-gray-950 text-white   md:p-6 lg:p-10'>

        {/* flex-container  */}
        <div className='flex items-center justify-center lg:justify-around   w-full lg:h-auto md:h-5/6 h-screen  relative'>

          {/* image-container */}
            <div className='xl:w-7/12 lg:w-6/12 w-full   h-screen md:h-5/6 lg:h-auto'>
              <img src={Home_book_poster} alt="" className='md:rounded-lg w-full h-full object-cover' />
              </div>


          {/* Content-button-container */}
            <div className='xl:w-4/12 lg:w-5/12 w-full md:h-full h-screen lg:h-auto    absolute lg:relative   flex-col flex justify-center lg:items-start items-center   Swipper_Upper_Slider_Heading'>
                <h1 className='md:text-2xl xl:text-3xl text-lg   md:mx-24 lg:mx-0 sm:mx-16 mx-5   uppercase  tracking-widest lg:tracking-normal xl:tracking-wide   text-white   text-center lg:text-justify'>Harry Potter and the Cursed Child</h1>
                <p className='my-4 md:my-6 md:mx-20 lg:mx-0 xl:my-10 lg:my-5 mx-5 sm:mx-16   sm:text-base text-sm   font-sans  text-center lg:text-left   tracking-wide'>Relive the magic of the original Harry Potter series. Access summaries, key plot points, and character arcs from each of the seven books.</p>
               
                {/* button-container */}
                <div className='my-4 md:my-4 lg:my-5 xl:my-0   font-sans'>
                <Link to={"/books"} target='_blank' > 
                <button className='px-6 py-2  xl:py-3 lg:py-2   font-medium   text-sm   rounded    bg-gradient-to-r from-gray-900 via-voilet-950 to-orange-950 tracking-widest text-white   hover:border    transition-all'> BOOKS </button>
                </Link>
                </div>

                </div>

              <div>
                
            </div>
         </div>
        </SwiperSlide>





        <SwiperSlide className='w-full lg:h-vh md:h-5/6 h-screen   bg-gray-950 text-white   md:p-6 lg:p-10'>

          
        {/* flex-container  */}
        <div className='flex items-center justify-center lg:justify-around   w-full lg:h-auto md:h-5/6 h-screen  relative'>

          {/* image-container */}
            <div className='xl:w-7/12 lg:w-6/12 w-full   h-screen md:h-5/6 lg:h-auto'><img src={Home_character_image} alt="" className=' md:rounded-lg w-full h-full object-cover' /></div>

            {/* Content-button-container */}
            <div className='xl:w-4/12 lg:w-5/12 w-full md:h-full h-screen lg:h-auto    absolute lg:relative   flex-col flex justify-center lg:items-start items-center   Swipper_Upper_Slider_Heading'>
                <h1 className='md:text-2xl xl:text-3xl text-lg   md:mx-24 lg:mx-0 sm:mx-16 mx-5   uppercase  tracking-widest lg:tracking-normal xl:tracking-wide   text-white   text-center lg:text-justify'>Aberforth Dumbledore</h1>
                <p className='my-4 md:my-6 md:mx-20 lg:mx-0 xl:my-10 lg:my-5 mx-5 sm:mx-16   sm:text-base text-sm   font-sans  text-center lg:text-left   tracking-wide'>Meet the beloved and intriguing characters that make the Harry Potter universe so enchanting.Have a Look on the interesting Characters.</p>

                {/* button-container */}
                <div className='my-4 md:my-4 lg:my-5 xl:my-0   font-sans'>
                <Link to={"/books"} target='_blank' > 
                <button className=' px-6 py-2  xl:py-3 lg:py-2   font-medium   text-sm   rounded    bg-gradient-to-r from-gray-900 via-voilet-950 to-orange-950 tracking-widest text-white   hover:border    transition-all'> CHARACTERS </button>
                </Link>
                </div>
                </div>
                <div>
                
                </div>
            </div>
        </SwiperSlide>




        <SwiperSlide className='w-full lg:h-vh md:h-5/6 h-screen   bg-gray-950 text-white   md:p-6 lg:p-10'>

          
        {/* flex-container  */}
        <div className='flex items-center justify-center lg:justify-around   w-full lg:h-auto md:h-5/6 h-screen  relative'>

          {/* image-container */}
            <div className='xl:w-7/12 lg:w-6/12 w-full   h-screen md:h-5/6 lg:h-auto'><img src={ Antidote} alt="Antidote-to-Uncommon-Poisons" className=' md:rounded-lg w-full h-full object-cover' /></div>

            {/* Content-button-container */}
            <div className='xl:w-4/12 lg:w-5/12 w-full md:h-full h-screen lg:h-auto    absolute lg:relative   flex-col flex justify-center lg:items-start items-center   Swipper_Upper_Slider_Heading'>
                <h1 className='md:text-2xl xl:text-3xl text-lg   md:mx-24 lg:mx-0 sm:mx-16 mx-5   uppercase  tracking-widest lg:tracking-normal xl:tracking-wide   text-white   text-center lg:text-justify'>POTIONS</h1>
                <p className='my-4 md:my-6 md:mx-20 lg:mx-0 xl:my-10 lg:my-5 mx-5 sm:mx-16   sm:text-base text-sm   font-sans  text-center lg:text-left   tracking-wide'>Discover their backgrounds, personalities, and pivotal moments & Uncover the secrets of magical potions.</p>
               
                {/* button-container */}
                <div className='my-4 md:my-4 lg:my-5 xl:my-0   font-sans'>
                <Link to={"/spells"} target='_blank' > 
                <button className=' px-6 py-2  xl:py-3 lg:py-2   font-medium   text-sm   rounded    bg-gradient-to-r from-gray-900 via-voilet-950 to-orange-950 tracking-widest text-white   hover:border    transition-all'> POTION </button>
                </Link>
                </div>
                </div>
                <div>
                
                </div>
            </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}

