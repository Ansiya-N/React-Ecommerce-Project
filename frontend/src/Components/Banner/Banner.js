import React from 'react'
import "./Banner.css";
import borderLine from "../../Assets/Rectangle 3605.png";
import bannerImage from"../../Assets/file 1.png";
function Banner() {
  return (
   

    <div className='grid grid-cols-2 mt-5 px-[8.375rem] ' >
      <div className='flex flex-col  justify-center  items-center  border-[0.5px] border-r-0 border-solid  border-[ #BDBDBD]'>
      <div className='space-y-2'>
      <div className='flex items-center '>
        
        <img src={borderLine} alt="img"></img>
            <h1 className='font-medium ml-2  '>OUR BESTSELLERS</h1>
       </div>
    <div><h1 className=' text-5xl whitespace-nowrap  '>Latest Arrivals</h1></div>
      <div className='flex items-center  '>
      <h1 className='mr-2 font-semibold'>SHOP NOW</h1>
        <img src={borderLine}  alt="img"></img>
            
       </div>
      </div>
      </div>
      <div className='bg-[#FFDAD6] border-[0.5px] border-solid border-l-0 '>
  <img src={bannerImage} alt="Test" />

</div>


    </div>
  )
}

export default Banner