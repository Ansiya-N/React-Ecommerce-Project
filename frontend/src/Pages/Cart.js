import React from 'react'
import borderLine from "../Assets/Rectangle 3605.png";
import product from "../Assets/Rectangle 3635.png";
import delicon from "../Assets/bin_icon.png"
import { NavLink } from 'react-router-dom';
import "../Pages/Cart.css"
function Cart() {
  return (
    <div className='pt-10  border-t-[0.5px]  border-solid border-gray-200 main ' >
 <div className='flex  items-center  mb-5'>
   
      <h1 className='font bold text-3xl leading-10 '>
   <span className="text-gray-500 font-medium">YOUR </span>
     <span className="text-gray-700 font-medium 
   ">CART </span>
     </h1>
   <img src={borderLine} alt="img" className=' h-0.5 ml-2  '></img>
   
   </div>
   <div className=' flex flex-col '>
         <div className='border-t-[0.5px]  border-solid border-gray-200 py-2 flex '>
         <img src={product} alt="img" ></img>
         <div className='flex   justify-between w-full '>
         <div className='flex flex-col ml-6 mt-4 '>
         <p className='font-medium text-gray-700'>Men Round Neck Pure Cotton T-shirt</p>
             <div className='flex mt-4'>
             <h1 className='text-gray-600'>$149</h1>
             <button className='ml-8 px-2 bg-slate-50 sizebtn  border border-solid '>L</button>
             </div>
         </div>
        
         
         <div className="flex items-center space-x-4 justify-center  ">
    <input type="number" min="1" value="1" className='w-20 border'></input>
  
         </div>
         <div className='flex items-center'>
           <img className="delicon" src={delicon} alt="img"></img>
         </div>
         </div>
         </div>
        
   </div>
   <div className=' border-b-[0.5px] border-solid border-gray-200'>

  
<div className=' flex flex-col '>
      <div className='border-t-[0.5px]  border-solid border-gray-200 py-2 flex '>
      <img src={product} alt="img" ></img>
      <div className='flex   justify-between w-full '>
      <div className='flex flex-col ml-6 mt-4 '>
      <p className='font-medium text-gray-700'>Men Round Neck Pure Cotton T-shirt</p>      <div className='flex mt-4'>
          <h1 className='text-gray-600'>$149</h1>
          <button className='ml-8 bg- #DFDFDF]slate-50 px-2 w-[30px]  border border-solid '>L</button>
          </div>
      </div>
     
      
      <div className="flex items-center space-x-4 justify-center  ">
  <input type="number" min="1" value="1" className='w-20 border' ></input>

      </div>
      <div className='flex items-center'>
        <img className="delicon" src={delicon} alt="img"></img>
      </div>
      </div>
      </div>
     
</div>
</div>
 

 
 
 
 
 
 <div className='flex justify-end mt-10 '>
 <div className='carttotal'>
 <div className='flex  items-center    mb-5'>
   
   <h1 className='font bold text-3xl leading-10 '>
<span className="text-gray-500 font-medium">CART </span>
  <span className="text-gray-700 font-medium
">TOTALS </span>
  </h1>
<img src={borderLine} alt="img" className=' h-0.5 ml-2  '></img>



 
 </div>


<div className='flex justify-between border-b-[0.5px] border-solid border-gray-200 pb-2 '>
<h1  style={{fontFamily:"Outfit"}}>Subtotal</h1>
<h1>$60.00</h1>
</div>
<div className='flex justify-between border-b-[0.5px] border-solid border-gray-200 pb-2 pt-2'>
<h1 style={{fontFamily:"Outfit"}}>Shipping Free</h1>
<h1>$10</h1>
</div>
<div className='flex justify-between  pb-2 pt-2'>
<h1 className='font-bold'>Total</h1>
<h1 className='font-bold'>$70.00</h1>
</div>
<div className='flex justify-end'>
<NavLink to="/place-order"  ><button className='bg-black text-white px-2 py-2 mt-5 '>   PROCEED TO CHECKOUT</button></NavLink>

</div>
 </div>
 </div>

 
 </div>
  )
}

export default Cart 