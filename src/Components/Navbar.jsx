
import React from 'react'
import Logo from '../Components/Logo'
import Search from '../Components/Search'
import Menu from '../Components/menu'

function Navbar() {


  return (
   
    <div className='absolute left-0 top-0 z-50 flex w-full items-center justify-between gap-2 bg-white/10 px-3 py-3 backdrop-blur-sm sm:gap-4 sm:px-5'>
       
        <Logo/>
        <Search/>
        <Menu/>

    </div>

  )
}

export default Navbar
