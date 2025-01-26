import React from 'react'
import borderLine from "../Assets/Rectangle 3605.png";
import product from "../Assets/Rectangle 3635.png";

import greenEllipse from "../Assets/Ellipse 666.png";

function Order() {
  return (
    <div className='pt-10 mt-[31px] border-t-[0.5px] border-solid border-[ #ADADAD] ml-[135px] mr-[135px]  ' >

        <div className='flex  items-center  mb-5'>
           
              <h1 className='font bold text-3xl leading-10 '>
           <span className="text-[#707070]">MY </span>
             <span className="text-[ #171717] 
           ">ORDERS </span>
             </h1>
           <img src={borderLine} alt="img" className=' h-0.5 ml-2  '></img>
           
           </div>
           <div className=' flex flex-col '>
                 <div className='border-t-[0.5px]  border-solid border-[ #ADADAD] py-2 flex '>
                 <img src={product} alt="img" ></img>
                 <div className='flex   justify-between w-full '>
                 <div className='flex flex-col ml-6 mt-4 '>
                     <p className='font-medium'>Men Round Neck Pure Cotton T-shirt</p>
                     <div className='flex mt-4 space-x-2'>
                     <h1>$149</h1>
                     <h1>Quantity: 1</h1>
                     <h1>Size: L</h1>
                     </div>
                     <h1 className='mt-4'>Date: 25, May, 2024</h1>
                 </div>
                
                 
                 <div className="flex items-center space-x-4  ">
             <img src={greenEllipse} alt="img" className=' h-4'></img>
             <p>Ready to ship</p>


          
                 </div>
                 <div className='flex items-center'>
                 <button className='  px-2 py-2 mt-2 w-[160px] border border-gray-200 border-black  font-medium'>   Track Order</button>

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
                     <p className='font-medium'>Men Round Neck Pure Cotton T-shirt</p>
                     <div className='flex mt-4 space-x-2'>
                     <h1>$149</h1>
                     <h1>Quantity: 1</h1>
                     <h1>Size: L</h1>
                     </div>
                     <h1 className='mt-4'>Date: 25, May, 2024</h1>
                 </div>
                
                 
                 <div className="flex items-center space-x-4  ">
             <img src={greenEllipse} alt="img" className=' h-4'></img>
             <p>Shipped</p>


          
                 </div>
                 <div className='flex items-center'>
                 <button className='  px-2 py-2 mt-2 w-[160px] border border-gray-200 border-black  font-medium'>   Track Order</button>

                 </div>
                 </div>
                 </div>
                
           </div>
        </div>
         
        </div>
  )
}

export default Order