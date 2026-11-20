
import React from 'react'
import {Link} from 'react-router-dom'

const Hmenu = () => {
  return (
    <div className='bg-white/80 backdrop-blur-md p-5'>
      <p className='text-[#533416] italic font-bold text-2xl' > OUR MENU</p>
      <p className='text-amber-700 italic font-bold text-xl' >  A Taste of Something Special.</p>
      <p className='text-black italic mb-2 ' >Explore our selection of delicious dishes, crafted with fresh ingredients 
        and passion to bring you an unforgettable dining experience.</p>

        <div className='grid grid-cols-2 gap-5 md:grid-cols-3 mb-5' >
            <div>
                
               <img src="image 5.png" 
              
              className="h-60 w-50  rounded-3xl "
               
               />

            </div>
            <div>
                <img src="image6.png"
                
                className="h-60 w-50  rounded-3xl"
                />
            </div>
            <div>
                <img src="image7.png"
                className="h-60 w-50 rounded-3xl" />
            </div>
            <div>

              <img src='image8.png'
              className="h-60 w-50 rounded-3xl"/>
            </div>
            <div>

               <img src="image9.png" 
               className="h-60 w-50 rounded-3xl"/>
            </div>
            <div>
                <img src="image10.png"
                className="h-60 w-50 rounded-3xl" />
            </div>

        </div>

          <Link to="/menu "className='bg-black/80 backdrop-blur-lg px-2 py-1 rounded-ee-xl text-white ' >Explore Full Menu →</Link>


    </div>
  )
}

export default Hmenu
