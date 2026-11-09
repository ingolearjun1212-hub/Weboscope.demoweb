import React, { useState } from 'react'
import { Menu, X, Search } from "lucide-react"

const Navbar = () => {

  const [isOpen,setISopen] = useState(false)   
  const [search,setSearch] = useState('')


    const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];



  
const menuData = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    category: "Paneer",
    price: 250,
  },
  {
    id: 2,
    name: "Shahi Paneer",
    category: "Paneer",
    price: 280,
  },
  {
    id: 3,
    name: "Kadai Paneer",
    category: "Paneer",
    price: 260,
  },
  {
    id: 4,
    name: "Veg Burger",
    category: "Burger",
    price: 120,
  },
  {
    id: 5,
    name: "Cheese Burger",
    category: "Burger",
    price: 160,
  },
  {
    id: 6,
    name: "Chicken Burger",
    category: "Burger",
    price: 180,
  },
  {
    id: 7,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 220,
  },
  {
    id: 8,
    name: "Cheese Pizza",
    category: "Pizza",
    price: 280,
  },
  {
    id: 9,
    name: "Farmhouse Pizza",
    category: "Pizza",
    price: 320,
  },
  {
    id: 10,
    name: "Veg Sandwich",
    category: "Sandwich",
    price: 100,
  },
  {
    id: 11,
    name: "Cheese Sandwich",
    category: "Sandwich",
    price: 140,
  },
  {
    id: 12,
    name: "French Fries",
    category: "Snacks",
    price: 100,
  },
  {
    id: 13,
    name: "Paneer Tikka",
    category: "Starter",
    price: 220,
  },
  {
    id: 14,
    name: "Cold Coffee",
    category: "Drinks",
    price: 120,
  },
  {
    id: 15,
    name: "Chocolate Milkshake",
    category: "Drinks",
    price: 150,
  },
];


const filteredDishes = menuData.filter((dish) =>
  dish.name.toLowerCase().includes(search.toLowerCase())
);

  return (

    <>

    <nav className=' w-full shadow-md   relative  h-screen '>


      <div className='h-full w-full relitive z-10'>
         
         <video 
         
          src='https://res.cloudinary.com/dgdxl274u/video/upload/v1794212406/istockphoto-2259519015-640_adpp_is_ayalc3.mp4'
          
          loop 
          muted
          autoPlay
          
          className='w-full  object-cover h-full'

         />


          
          </div>
         



        <div className='max-w-7xl mx-auto px-5 z-50 top-0 bg-black/20 backdrop-blur-sm absolute w-full  '> 

            <div className='flex items-center justify-between gap-5 '>

            <div>
                <img
               
               src='https://res.cloudinary.com/dgdxl274u/image/upload/v1794212731/ChatGPT_Image_Nov_4_2026_05_25_14_PM_qfvetl.png'
               className='w-full h-11 bg-black rounded-full p-1  '
            />
          

         
             
              
            </div>


            <div className="relative">

  <form
    onSubmit={(e) => e.preventDefault()}
    className="flex items-center border border-gray-200 rounded-full px-4 gap-2 py-2"
  >
    <Search size={19} className="text-white" />

    <input
      type="search"
      placeholder="Search dishes..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full bg-transparent outline-none text-sm text-white placeholder:text-white"
    />
  </form>

  {search.trim() && (
    <div className="absolute top-full left-0 w-full bg-white/80 rounded-xl shadow-lg mt-2 z-50 ">

      {filteredDishes.length > 0 ? (

        filteredDishes.map((dish) => (
          <div key={dish.id} className="p-3 border-b text-black">

            <h3>{dish.name}</h3>
            <p>{dish.category} - ₹{dish.price}</p>

          </div>
        ))

      ) : (
        <p className="p-3 text-black font-bold">No dishes found!</p>
      )}

    </div>
  )}

</div>
              


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
                className="py-4 md:text-[#972828] text-black  text-center hover:text-white hover:bg-[#280905] hover:backdrop-blur-md bg-white/50 backdrop-blur-lg  rounded-b-full font-extrabold transition duration-1000 hover:scale-105"
              >
                {link.name}
              </a>
            ))}

                </div>
            

              </div>

               
      </div>


       

    </nav>



          </>

  )
}

export default Navbar
