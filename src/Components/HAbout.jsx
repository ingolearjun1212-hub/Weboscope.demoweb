import React from 'react'
import {Link} from 'react-router-dom'

const HAbout = () => {
  return (
    <div className='bg-white/80 backdrop-blur-lg  text-black p-2 '>
      <p className='text-amber-700 font-bold font-mono italic text-2xl ' >ABOUT US</p>
      <h2 className='text-amber-700 font-sans font-bold ' >Little About Our Restaurant</h2>
      <p className='text-black italic mb-2' >We believe that great food creates 
        beautiful memories. Our restaurant
         brings together delicious flavours, fresh ingredients, and warm hospitality to make every visit special.
        From carefully prepared dishes to a
       welcoming atmosphere, we make every
       dining experience worth remembering.</p>
      
      <Link to="/About" className='text-white px-2 py-1 rounded-ee-2xl  bg-black' >
          Discover More →
      </Link>

    </div>
  )
}

export default HAbout
