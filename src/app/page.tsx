
import React from 'react'

function Home() {
  return (
    <div className='min-w-[400pxl] mx-auto py-5 text-white grid  grid-rows-6 sm:grid-row-2 md:grid-row-3 lg:grid-row-4 gap-5 grid-flow-col'>
      <div className='bg-blue-300 text-center py-5 row-span-6 px-10'>ONE</div>
      <div className='bg-yellow-200 text-center py-5 col-span-12 '>TWO</div>   
      <div className='bg-pink-300 text-center  py-5 col-span-5'>THREE</div> 
      
       
      <div className='bg-red-300 text-center py-5 row-span-4 px-6'>FOUR</div>
      <div className='bg-orange-300 text-center py-5 col-span-11 '>FIVE</div>
      <div className='bg-pink-300 text-center py-5 row-span-2 col-span-4 '>SIX</div>
      <div className='bg-pink-300 text-center py-5 row-span-2 col-span-4'>SEVEN</div>
      <div className='bg-pink-200 text-center py-5 col-span-6'>EIGHT</div>
      <div className='bg-pink-300 text-center py-5 col-span-6'>NINE</div>
      <div className='bg-blue-300 text-center py-5 row-span-6 px-10'>TEN</div>
  
   
   
   
   
   
    </div>
  )
}

export default Home
