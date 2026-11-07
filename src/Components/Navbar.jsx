import React, { useState } from 'react'
import { Menu, X, Search } from "lucide-react";

const Navbar = () => {

  const [isOpen,setISopen] = useState(false)   
  const [search,setSearch] = useState()


    const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (

    <>

    <nav className=' w-full shadow-md  h-full  bg-amber-400'>


      <div className='h-full w-full relitive z-10 bg-red-500'>
         
         <video 
         
          src='public/hero.mp4'
          
          loop 
          muted
          autoPlay
          
          className='w-full h-full'

         />
          </div>
         



        <div className='max-w-7xl mx-auto px-5 z-50 top-0 bg-black/20 backdrop-blur-sm absolute w-full '> 

            <div className='flex items-center justify-between gap-5'>

            <div>
                <img
               
               src='public/logo.png'
               className='w-full h-11 bg-black rounded-full p-1  '
            />
            </div>


              <div className='flex gap-5 py-5 '>
                <form 
                 onSubmit={(e)=>{
                  
                    e.preventDefault();
                    console.log('Searching:', Search);

                 }}
                 className='flex items-center flex-1 max-w-xl h-11  border
                  border-gray-200 rounded-full px-4 gap-2 hover:bg-white/20'
                
                
                
                >

                 <search size={19} className='text-white shrink-0 '/>

                 <input
                 
                 type='search'
                 placeholder='search dishes...'
                 value={search}
                 onChange={(e)=> setSearch(e.target.value)}
                 className='w-full bg-transparent outline-none text-sm text-white  placeholder:text-white'/>

                 
                </form>
              


            <button
            
             onClick={()=> setISopen(!isOpen)}

             className='w-11 h-11  text-white  rounded-xl  
             flex items-center justify-center shrink-0 hover:bg-white/20 transition'
             aria-label={isOpen ? 'close menu' :' open menu'}
             aria-expanded={isOpen}
            
            >
          
           {isOpen ? <X size={25}/> : <Menu size={25}/>}
          
            </button>

              </div>

                   

              <div className={`absolute top-full left-0 w-full  shadow-lg  transition-all duration-300  overflow-hidden${


               isOpen 
               ? "max-h-96 opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
              }`}>
        
                <div className='max-w-7xl  mx-auto px-10 py-3 flex flex-col rounded-4xl '>


                    {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setISopen(false)}
                className="py-4   text-black   hover:bg-white/20 hover:backdrop-blur-md bg-white/50 backdrop-blur-lg  rounded-b-full font-extrabold transition"
              >
                {link.name}
              </a>
            ))}

                </div>
            

              </div>

               
      </div>


       </div>

    </nav>



          </>

  )
}

export default Navbar
