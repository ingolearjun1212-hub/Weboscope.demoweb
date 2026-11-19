import React, { useState } from 'react'

function Search() {

const foods = [
  {
    name: "Pizza",
    price: 199,
    image: "image1.png"
  },
  {
    name: "Pineapple Pizza",
    price: 249,
    image: "image2 .png"
  },
  {
    name: "Paneer Pizza",
    price: 299,
    image: "image3.png"
  },
  {
    name: "Burger",
    price: 99,
    image: "image4.png"
  }
]


const [Data,setData] = useState('')

const getData = (e)=>{
    setData(e.target.value)


}

    let filterout = foods.filter((curvlaue)=>{

    return(
        curvlaue.name.toLowerCase().includes(Data.toLowerCase())
    )
})
  return (
    <div className='relative z-30 min-w-0   flex-1 lg:w-[500px] md:w-[300px]  md:h-16 lg:flex-none'>

 <input

        type='text'
        placeholder='Type Here...'
        onChange={getData}
        className='w-full h-full border border-white bg-white/20 outline-none rounded-full placeholder:text-white placeholder:text-sm px-3 py-2'
        
        />

       
      
     {Data.trim() && filterout.length > 0 && (
        <div className='absolute left-0 top-full mt-2 w-full max-h-72 overflow-y-auto rounded-lg bg-white p-2 text-black shadow-lg'>

          {filterout.map((cur)=>{

           return(
            <div key={cur.name} className='flex items-center justify-between gap-2 border-b border-gray-200 p-2 last:border-0'>
                <p className=' '>{cur.name}</p>
                <p className=''>{cur.price}</p>

                <img
                
                src={cur.image}
                className='h-12 w-12 rounded-lg object-cover'

                />
            </div>
           )

          } )}
        </div>
     )}

    </div>
  )
}

export default Search
