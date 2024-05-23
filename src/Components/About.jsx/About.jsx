import React from 'react'
import Harry_Potter_about from '../../Assests/Harry_Potter_about.jpg'
import { Link } from 'react-router-dom'
import '../../Pages/Style.css'


const About = () => {
  return (
    <>

    {/* setting-background image by rgba  */}
    <div className='flex items-center justify-center w-full md:py-20 py-10' style={{
                background: `linear-gradient(rgba(225,225, 225, 0.85), rgba(225,225, 225, 0.85)), url(${Harry_Potter_about})`,
                backgroundSize: 'cover',
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'top',
                width: "100%"
            }}>
        


{/* this is the content part  */}
        <div className='content text-white w-11/12 sm:w-8/12 md:7/12 xl:w-6/12 text-center'>

          <h1 className='text-normal md:text-2xl welcometoabout font-semibold'>Welcome to </h1>

        <h1 className='text-3xl sm:text-5xl lg:text-6xl Harry_world tracking-wide font-semibold md:my-2  my-1'>Harry's World</h1>
        <p className='md:text-lg text-normal sm:text-lg font-semibold Para-content xl:mt-10 sm:mt-5 mt-2'>Welcome to the ultimate Harry Potter fan app! This app is your one-stop destination for all things related to the magical world created by J.K. Rowling. Whether you're a die-hard fan or a newcomer to the wizarding world, we've got you covered.</p>


        <h1 className='md:text-3xl font-semibold text-2xl  my-4  Explore_wizarding'>Explore the Wizarding World</h1>

        <p className='content_options text-justify  text-normal  sm:text-center mx-2 sm:mx-0 font-medium '>Dive into the cinematic adaptations of Harry Potter.Get detailed information about each <span> <Link className='underline' to={"/movies"}>movie</Link></span>, including synopses, cast lists, behind-the-scenes insights, and memorable quotes. Relive the magic of the original Harry Potter series. Access summaries, key plot points, and character arcs from each of the seven <span><Link className='underline' to={"/books"}>books</Link></span>. Meet the beloved and intriguing <span><Link to={"/character"} className='underline'>characters</Link></span> that make the Harry Potter universe so enchanting . Discover their backgrounds, personalities, and pivotal moments & Uncover the secrets of magical <span><Link to={"/potions"} className='underline'>potions</Link></span>.
        </p>

            
        </div>
       


        </div>
    </>
  )
}

export default About