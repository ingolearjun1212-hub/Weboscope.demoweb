
import React from 'react'
import Logo from '../Components/Logo'
import Search from '../Components/Search'
import menu from '../Components/menu'

function Navbar() {


  return (
   
    <div className='absolute top-0 left-0 w-full z-50 flex
     items-center justify-between px-2 py-5 bg-white/10 backdrop-blur-sm'>
       
        <Logo/>
        <Search/>
        <menu/>

    </div>

  )
}

export default Navbar
