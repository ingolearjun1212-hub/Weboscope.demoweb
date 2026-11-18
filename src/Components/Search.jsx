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


const [store,setstore] = useState(foods)
const [Data,setData] = useState()

const getData = (e)=>{
    console.log(e.target.value)
    setData(e.target.value)


}

     let filterout = store.filter((curvlaue)=>{

    return(
        curvlaue.name.toLowerCase().includes(Data) 
    )
})
  return (
    <div className='w-[200px]   z-30 '>

 <input

        type='text'
        placeholder='Type Here...'
        onChange={getData}
        className='w-full   border-1 border-white 
         outline-none rounded-full placeholder:text-white placeholder:text-sm px-2 py-2'
        
        />

        <div className=' flex  mt-10 justify-around hidden '>
            <h3>Name</h3>
            <h3>Price</h3>
            <h3>Foods</h3>
        </div>
      
     {

          filterout.map((cur)=>{

           return(
            <div className='flex justify-around '>
                <p className=' '>{cur.name}</p>
                <p className=''>{cur.price}</p>

                <img
                
                src={cur.image}
                className=' w-[90px] rounded-2xl'

                />
            </div>
           )

          } )
     }

    </div>
  )
}

export default Search
