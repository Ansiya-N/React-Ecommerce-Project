import React from 'react'
import "./SubmitForm.css"
function SubmitForm() {
  return (
   <div className='flex flex-col items-center space-y-4 max-sm:px-[49px] '>
   
   <div className='flex items-center '> <h1 className='font bold text-3xl '>
   Subscribe now & get 20% off
     </h1>
   
   </div>
    <p className='text-[#868686] text-sm' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

    
    <form   className='flex justify-between h-10 max-sm:px-[49px] '>
      <div className='border-[0.5px]  border-solid  px-2 py-2  max-sm:w-[400px]  w-[500px] '><input type="email" placeholder='Enter your email id'></input></div>
    <div><button className='bg-black px-2 text-white h-full'>SUBSCRIBE</button></div>
    </form>
  
    
   
    </div>
   
  )
}

export default SubmitForm