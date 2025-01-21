import React from 'react'
import "./SubmitForm.css"
function SubmitForm() {
  return (
   <div className='flex flex-col items-center space-y-4 '>
   
   <div className='flex items-center '> <h1 className='font bold text-3xl '>
   Subscribe now & get 20% off
     </h1>
   
   </div>
    <p className='text-[#868686]' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

    
    <form   className='flex justify-between h-10 '>
      <div className='border-[0.5px]  border-solid  px-2 py-2  w-[500px]'><input type="email" placeholder='Enter your email id'></input></div>
    <div><button className='bg-black px-2 text-white h-full'>SUBSCRIBE</button></div>
    </form>
  
    
   
    </div>
   
  )
}

export default SubmitForm