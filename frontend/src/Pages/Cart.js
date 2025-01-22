import React from 'react'
import borderLine from "../Assets/Rectangle 3605.png";
import product from "../Assets/Rectangle 3635.png";
import delicon from "../Assets/bin_icon.png"
function Cart() {
  return (
    <div className='pt-10 mt-[31px] border-t-[0.5px] border-solid border-[ #ADADAD] ml-[135px] mr-[135px]  ' >
 <div className='flex  items-center  mb-5'>
   
      <h1 className='font bold text-3xl leading-10 '>
   <span className="text-[#707070]">YOUR </span>
     <span className="text-[ #171717] 
   ">CART </span>
     </h1>
   <img src={borderLine} alt="img" className=' h-0.5 ml-2  '></img>
   
   </div>
   <div className=' flex flex-col '>
         <div className='border-t-[0.5px]  border-solid border-[ #ADADAD] py-2 flex '>
         <img src={product} alt="img" ></img>
         <div className='flex   justify-between w-full '>
         <div className='flex flex-col ml-6 mt-4 '>
             <h1 className='font-medium'style={{fontFamily:"Outfit"}}>Men Round Neck Pure Cotton T-shirt</h1>
             <div className='flex mt-4'>
             <h1>$149</h1>
             <button className='ml-8 bg- #DFDFDF] w-[30px]  border border-solid border-black'>L</button>
             </div>
         </div>
        
         
         <div className="flex items-center space-x-4 justify-center  ">
      {/* Decrease Button */}
      <button
        
        className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300"
      >
        −
      </button>

      {/* Quantity Display */}
      <div className=" flex items-center justify-center border border-gray-300 text-lg font-semibold rounded-md">
       1
      </div>

      {/* Increase Button */}
      <button
       
        className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300"
      >
        +
      </button>
  
         </div>
         <div className='flex items-center'>
           <img className="w-[25px] h-[25px] " src={delicon} alt="img"></img>
         </div>
         </div>
         </div>
        
   </div>
   <div className=' border-b-[0.5px] border-solid border-[ #ADADAD]'>

  
<div className=' flex flex-col '>
      <div className='border-t-[0.5px]  border-solid border-[ #ADADAD] py-2 flex '>
      <img src={product} alt="img" ></img>
      <div className='flex   justify-between w-full '>
      <div className='flex flex-col ml-6 mt-4 '>
          <h1 className='font-medium text-2-xl'style={{fontFamily:"Outfit"}}>Men Round Neck Pure Cotton T-shirt</h1>
          <div className='flex mt-4'>
          <h1>$149</h1>
          <button className='ml-8 bg- #DFDFDF] w-[30px]  border border-solid border-black'>L</button>
          </div>
      </div>
     
      
      <div className="flex items-center space-x-4 justify-center  ">
   {/* Decrease Button */}
   <button
     
     className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300"
   >
     −
   </button>

   {/* Quantity Display */}
   <div className=" flex items-center justify-center border border-gray-300 text-lg font-semibold rounded-md">
    1
   </div>

   {/* Increase Button */}
   <button
    
     className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300"
   >
     +
   </button>

      </div>
      <div className='flex items-center'>
        <img className="w-[25px] h-[25px] " src={delicon} alt="img"></img>
      </div>
      </div>
      </div>
     
</div>
</div>
 

 
 
 
 
 <div className='flex  items-center  mt-5 justify-end'>
   
   <h1 className='font bold text-3xl leading-10 '>
<span className="text-[#707070]">CART </span>
  <span className="text-[ #171717] 
">TOTALS </span>
  </h1>
<img src={borderLine} alt="img" className=' h-0.5 ml-2  '></img>



 </div>
<div className='flex justify-end mt-5'>
<div className='w-[400px] '>
<div className='flex justify-between border-b-[0.5px] border-solid border-[ #ADADAD] pb-2 '>
<h1  style={{fontFamily:"Outfit"}}>Subtotal</h1>
<h1>$60.00</h1>
</div>
<div className='flex justify-between border-b-[0.5px] border-solid border-[ #ADADAD] pb-2 pt-2'>
<h1 style={{fontFamily:"Outfit"}}>Shipping Free</h1>
<h1>$10</h1>
</div>
<div className='flex justify-between  pb-2 pt-2'>
<h1 className='font-bold'>Total</h1>
<h1>$70.00</h1>
</div>
<div className='flex justify-end'>
<button className='bg-black text-white px-2 py-2 mt-2 '>   PROCEED TO CHECKOUT</button>

</div>
 </div>
</div>
 
 </div>
  )
}

export default Cart 