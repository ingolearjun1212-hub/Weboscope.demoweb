
import React from 'react'
import { useState } from 'react'
import { Search } from 'lucide-react'

function Navbar() {


 const [search, setSearch] = useState('')
 const [showSuggestions, setShowSuggestions] = useState(false)

  const foods = [
  {
    name: "Pizza",
    price: 199,
    image: "image.png"
  },
  {
    name: "Pineapple Pizza",
    price: 249,
    image: "https://images.unsplash.com/photo- pineapple"
  },
  {
    name: "Paneer Pizza",
    price: 299,
    image: "https://images.unsplash.com/photo- paneer"
  },
  {
    name: "Burger",
    price: 99,
    image: "https://images.unsplash.com/photo- burger"
  }
]

  const filteredFoods = foods.filter((food)=>
    food.name.toLowerCase().includes(search.toLowerCase())
)

  return (
    <section className='bg-white/2 backdrop-blur-sm h-20 w-full   absolute '>
      


     <div className='flex justify-between items-center h-ful w-fulll px-5 py-5'> 
    
    <div className='flex items-center'>
      <img
       

       src='https://res.cloudinary.com/dgdxl274u/image/upload/v1794212731/ChatGPT_Image_Nov_4_2026_05_25_14_PM_qfvetl.png'
       className='rounded-full h-11 bg-black p-1 '
      
      />
    </div>
    
    <div className='flex text-white justify-baseline items-center 
    border border-white rounded-full px-3 py-2  gap-2'>
    
        

<Search  size={20} />


<input

type='text'
placeholder='search food...'
value={search}
onChange={(e)=> {setSearch(e.target.value)
setShowSuggestions(true)

}}
className='w-full p-1  rounded-full outline-none placeholder:text-white placeholder:text-sm'



/>





{showSuggestions && search.length > 0 && filteredFoods.length > 0 && (
<div className='bg-blue-500 mt-2 rounded-xl shadow-md ' >


{filteredFoods.map((food,index)=>(

 <div
 
 key={index}
 onClick={()=>{setSearch(food.name)
   setShowSuggestions(false)

}}

 className='p-3 hover:bg-gray-100 cursor-pointer '>


     <img
      src={food.image}
      alt={food.name}
      className=' flex items-center w-14 h-14 object-cover rounded-lg'
    />

    <div>
      <h3 className='font-semibold'>{food.name}</h3>
      <p className='bg-black'>₹{food.price}</p>
    </div>

 


  </div>


))}

</div>
)}


      
      </div>



    </div>
    <nav></nav>

     

    </section>
  )
}

export default Navbar
