import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='relative z-10 h-screen h-[100dvh] w-full overflow-hidden'>

      <video
      
      src='https://res.cloudinary.com/dgdxl274u/video/upload/v1794212406/istockphoto-2259519015-640_adpp_is_ayalc3.mp4'
         
       autoPlay
       loop
       muted
       playsInline

      className='absolute inset-0 h-full w-full object-cover'
        />

      <div className='  inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10 ' />

      <div className=' absolute inset-0 z-20 flex  items-center  mb-44 lg:px-20'>
        <div className='max-w-3xl text-center  sm:text-left'>
          <p className='mb-2 text-2xl font-semibold uppercase tracking-[0.35em] text-amber-950 bg-white/30 backdrop-blur-xl '>
            A little taste of something special
          </p>
          <h1 className='font-serif text-5xl font-medium leading-[1.05] py-2 tracking-tight text-amber-800 bg-white/30 backdrop-blur-md sm:text-6xl lg:text-8xl'>
            Made for <span className='italic text-amber-950'>memorable</span> moments.
          </h1>
          <p className='mx-auto  max-w-xl text-base leading-7 px-2 text-black bg-white/60 mt-1 backdrop-blur-sm sm:mx-0 sm:text-lg'>
            Thoughtfully prepared food, warm hospitality, and a table worth coming back to.
          </p>
          <div className='mt-8 flex flex-wrap justify-center gap-3 sm:justify-start  '>
            <Link to='/Menu' className='rounded-ee-2xl bg-white/30  px-6 py-3 text-sm font-semibold text-black backdrop-blur-lg transition hover:bg-black'>
              Explore the menu
            </Link>
            <Link to='/Contact' className='rounded-es-2xl border bg-white/60 backdrop-blur-lg border-white/70 px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/15'>
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
