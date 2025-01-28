import React from 'react'
import borderLine from "../Assets/Rectangle 3605.png";
import stripeLogo from "../Assets/stripe_logo.png"

import razorpay from "../Assets/razorpay_logo.png";
import "../Pages/DeliveryInfo.css"
function DeliveryInfo() {
  return (
    <div className='pt-10  border-t-[0.5px] border-solid border-gray-200  delmain' >
<div className='flex items-center  mb-8 '> <h1 className='text-2xl '>
 <span className="text-gray-500 font-medium">DELIVERY </span>
   <span className="text-gray-700 font-medium mr-2 
 ">INFORMATION</span>
   </h1>
 <img src={borderLine} alt="img" className=' h-0.5 flex '></img>
 </div>

 <div className='flex gap-8'>
 <form className='flex flex-col space-y-2 ' style={{fontFamily:"Outfit"}}>
  <div className='flex space-x-4'>
  <input className="border  border-gray-300 rounded border-solid px-3.5 py-1.5 text-lg" type="text" placeholder='First name ' ></input>
  <input  className="border  border-gray-300 rounded border-solid px-3.5 py-1.5 text-lg" type="text" placeholder='Last name' ></input>
  </div>
  <input  className="border  border-gray-300 rounded border-solid px-3.5 py-1.5 text-lg"type="email" placeholder='Email address' ></input>
  <input className="border  border-gray-300 rounded border-solid px-3.5 py-1.5 text-lg"type="text" placeholder='Street' ></input>
 <div className='flex space-x-4'>
 <input className="border  border-gray-300 rounded border-solid px-3.5 py-1.5 text-lg"type="text" placeholder='City' ></input>
 <input className="border  border-gray-300 rounded border-solid px-3.5 py-1.5 text-lg"type="text" placeholder='State' ></input>
 </div>
 <div className='flex space-x-4'>
 <input className="border  border-gray-300 rounded border-solid px-3.5 py-1.5 text-lg"type="text" placeholder='Zip code' ></input>
 <input className="border  border-gray-300 rounded border-solid px-3.5 py-1.5 text-lg"type="text" placeholder='Country' ></input>
 </div>
  <input className="border  border-gray-300 rounded border-solid px-3.5 py-1.5 text-lg"type="text" placeholder='Phone' ></input>
 </form>


 
  <div className='flex flex-col '>
  <div className='flex  items-center  '>
    
    <h1 className=' text-2xl '>
 <span className="text-gray-500 font-medium">CART </span>
   <span className="text-gray-700 font-medium 
 ">TOTALS </span>
   </h1>
 <img src={borderLine} alt="img" className=' h-0.5 ml-2  '></img>
 
 
 
  </div>



<div className='flex  mt-5'>
<div className='carttotal '>
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

 </div>
</div>

<div className='flex  items-center mt-5 '>
    
    <h1 className='font bold text-xl leading-10 '>
 <span className="text-[#707070]">PAYMENT </span>
   <span className="text-[ #171717] 
 ">METHOD </span>
   </h1>
 <img src={borderLine} alt="img" className=' h-0.5 ml-2  '></img>
 
 
 
  </div>
  <div className="flex space-x-2 mt-2">
  {/* Stripe Payment */}
  <label className="px-2 py-2 w-[130px] border-[0.5px]  border-gray-300 border-solid font-medium cursor-pointer flex items-center justify-between">
    <input type="radio" name="payment"  />
    <div className="w-4 h-4 border border-gray-400 rounded-full "></div>
    <img className="h-5" alt="" src={stripeLogo} />
  </label>

  {/* Razorpay Payment */}
  <label className="px-2 py-2 w-[150px] border-[0.5px]  border-gray-300 border-solid font-medium cursor-pointer flex items-center justify-between">
    <input type="radio" name="payment" />
    <div className="w-4 h-4 border border-gray-400 rounded-full "></div>
    <img className="h-5" alt="" src={razorpay} />
  </label>

  {/* Cash on Delivery */}
  <label className="px-2 py-2 w-[170px] border-[0.5px]  border-gray-300 border-solid font-medium cursor-pointer flex items-center justify-between">
    <input type="radio" name="payment" />
    <div className="w-4 h-4 border border-gray-400 rounded-full "></div>
    <p className="text-gray-500 text-sm whitespace-nowrap">CASH ON DELIVERY</p>
  </label>
</div>


  <div className='flex justify-end'>
<button className='bg-black text-white px-8 py-2 mt-8 '>   PLACE ORDER</button>
</div>
  </div>

 </div>



</div>
  )
}

export default DeliveryInfo