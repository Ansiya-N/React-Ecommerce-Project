import React, { useState } from 'react'
import borderLine from "../Assets/Rectangle 3605.png";
import searchIcon from "../Assets/search icon.png"
import image from "../Assets/Rectangle 3608.png";
import crossIcon from "../Assets/cross.png"
import { NavLink } from 'react-router-dom';
import "../Pages/Collection.css"
function Collection({isSearch,setisSearch}) {
   let collections=[
      {image:image,
          heading:"Women Round Neck Cotton Top",
  
          dec:"$149"
      },
      {image:image,
        heading:"Women Round Neck Cotton Top",
  
        dec:"$149"
    },
    {image:image,
      heading:"Women Round Neck Cotton Top",
  
      dec:"$149"
  },
  {image:image,
    heading:"Women Round Neck Cotton Top",
  
    dec:"$149"
  },
  {image:image,
    heading:"Women Round Neck Cotton Top",
  
    dec:"$149"
  },
  {image:image,
    heading:"Women Round Neck Cotton Top",
  
    dec:"$149"
  },
  {image:image,
    heading:"Women Round Neck Cotton Top",
  
    dec:"$149"
  },
  {image:image,
    heading:"Women Round Neck Cotton Top",
  
    dec:"$149"
  },
  {image:image,
    heading:"Women Round Neck Cotton Top",
  
    dec:"$149"
  },
  {image:image,
    heading:"Women Round Neck Cotton Top",
  
    dec:"$149"
  },
      
  ]
  
  return (
    


<div className='pt-10  border-t-[0.5px] border-solid border-gray-200 main   '>
{isSearch&&(

  <div className='border-b-[0.5px]  border-gray-200 border-solid  mb-10 ' >
    

     <div className='flex items-center justify-center space-x-6 '>

     <div className=' flex   border-solid rounded-full border-gray-400 border-[0.5px] px-4 py-2  w-[60%] max-w-[500px] mb-6 justify-between items-center'>

     
<input type="text " className="outline-none w-100% h-100%"placeholder='Search'></input>
<img src={searchIcon} alt="img" className='w-4  h-4' ></img>
  

  </div>
  
<div className='pb-5 '>
<button onClick={()=>setisSearch (false)}><img src={crossIcon} alt="img" className='w-5 h-5 '></img></button>
  </div>
   
      </div>
    </div>
)



}

<div className='flex    '>


<div className='flex flex-col'>
<p className='text-xl leading-8 pt-3'>FILTERS</p>
  <div className="mt-4 category border-[0.5px]  border-solid  border-gray-300">
  <p className='text-sm font-medium' >CATEGORIES</p>
  <div className="mt-4 space-y-2">
      {/* Checkbox for Men */}
      <label className="flex items-center space-x-2">
        <input type="checkbox" className=" h-4 w-4 " />
        <span className="text-sm text-gray-700">Men</span>
      </label>

      {/* Checkbox for Women */}
      <label className="flex items-center space-x-2">
        <input type="checkbox" className=" h-4 w-4 " />
        <span className="text-sm text-gray-700">Women</span>
      </label>

      <label className='flex items-center space-x-2'>
        <input type="checkbox" className="h-4 w-4 "/>
        <span className="text-sm text-gray-700">Kids</span>
      </label>
      </div>
  
  </div>
  <div className="mt-4 category border-[0.5px]   border-solid  border-gray-300">
  <h1 >TYPE</h1>
  <div className="mt-4 space-y-2">
      {/* Checkbox for Men */}
      <label className="flex items-center space-x-2">
        <input type="checkbox" className=" h-4 w-4 " />
        <span className="text-sm text-gray-700">Topwear</span>
      </label>

      {/* Checkbox for Women */}
      <label className="flex items-center space-x-2">
        <input type="checkbox" className=" h-4 w-4 " />
        <span className="text-sm text-gray-700">Bottomwear</span>
      </label>

      <label className='flex items-center space-x-2'>
        <input type="checkbox" className="h-4 w-4 "/>
        <span className="text-sm text-gray-700">Winterwear</span>
      </label>
      </div>
  
  </div>
</div>
<div className='flex flex-col ml-5 space-y-5 '>
<div className='flex  items-start justify-between w-full'>
<div className='flex  items-center '>

   <h1 className='font bold text-3xl leading-10 '>
<span className="text-gray-500 font-medium">ALL</span>
  <span className="text-gray-700 font-medium"> COLLECTIONS</span>
  </h1>
<img src={borderLine} alt="img" className=' h-0.5 ml-2  '></img>

</div>


<div className="flex flex-col w-50">
  
  <select
   
    className="border-2 border-gray  px-2 py-2 text-sm"
    
  >
    <option>Sort by: Price: Low To High</option>
    
  </select>
</div>
</div>

<div className=' grid grid-cols-4  gap-x-4 gap-y-4  '>
 
 {
 collections.map((item)=>(
<div className='flex flex-col space-y-1.5 cursor-pointer text-gray-700 transition ease-in-out hover:scale-105'>
 <NavLink to="/product"> <img    src={item.image} alt="img" className=" w-[260px]"></img></NavLink>
 <h1 className='text-sm '> {item.heading} </h1>
 <h1 className='text-sm font-medium'> {item.dec} </h1>
 </div>

 
 ))
 }
 





 </div>

</div>
</div>
</div>


  

    
  )
}

export default Collection