
import React from 'react'
import {Link} from 'react-router-dom'

const Hmenu = () => {
  return (
    <div className='bg-white/80 backdrop-blur-md p-2'>
      <p className='text-[#533416] italic font-bold text-2xl' > OUR MENU</p>
      <p className='text-amber-700 italic font-bold text-xl' >  A Taste of Something Special.</p>
      <p className='text-black italic mb-2 ' >Explore our selection of delicious dishes, crafted with fresh ingredients 
        and passion to bring you an unforgettable dining experience.</p>

        

          <Link to="/menu "className='bg-black/80 backdrop-blur-lg px-2 py-1  rounded-ee-xl text-white ' >Explore Full Menu →</Link>


    </div>
  )
}

export default Hmenu
