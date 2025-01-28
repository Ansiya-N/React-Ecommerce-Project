import React from 'react'
import "./Banner.css";
import borderLine from "../../Assets/Rectangle 3605.png";
import bannerImage from"../../Assets/file 1.png";
function Banner() {
  return (
   

    <div className='sm:grid sm:grid-cols-2 mt-5 max-sm:mt-[57px] px-[8.375rem] max-sm:px-[49px] ' >
      <div className='flex flex-col max-sm:py-[99px]  justify-center  items-center  border-[0.5px] sm:border-r-0 border-solid  border-gray-400'>
      <div className='space-y-2 '>
      <div className='flex items-center '>
        
        <img src={borderLine} alt="img"></img>
            <h1 className='font-medium leading-5 text-gray-700 ml-2  '>OUR BESTSELLERS</h1>
       </div>
    <div><h1 className='text-5xl whitespace-nowrap text-gray-700 font-serif
 '>Latest Arrivals</h1></div>
      <div className='flex items-center  '>
      <h1 className=' mr-2 font-medium leading-5 text-gray-700'>SHOP NOW</h1>
        <img src={borderLine}  alt="img"></img>
            
       </div>
      </div>
      </div>
      <div className='bg-[#FFDAD6] border-[0.5px] border-solid sm:border-l-0 border-gray-400'>
  <img src={bannerImage} alt="Test" />

</div>


    </div>
  )
}

export default Banner