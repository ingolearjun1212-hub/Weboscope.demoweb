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

      <div className='absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10 ' />

      <div className='absolute inset-0 z-10 flex items-center px-6 mt-44 sm:px-12 lg:px-20'>
        <div className='max-w-3xl text-center sm:text-left'>
          <p className='mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300 sm:text-sm'>
            A little taste of something special
          </p>
          <h1 className='font-serif text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl'>
            Made for <span className='italic text-amber-200'>memorable</span> moments.
          </h1>
          <p className='mx-auto mt-6 max-w-xl text-base leading-7 text-white/85 sm:mx-0 sm:text-lg'>
            Thoughtfully prepared food, warm hospitality, and a table worth coming back to.
          </p>
          <div className='mt-8 flex flex-wrap justify-center gap-3 sm:justify-start'>
            <Link to='/Menu' className='rounded-full bg-amber-950/50  px-6 py-3 text-sm font-semibold text-white transition hover:bg-black'>
              Explore the menu
            </Link>
            <Link to='/Contact' className='rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15'>
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
