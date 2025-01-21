import React from 'react'
import borderLine from "../Assets/Rectangle 3605.png"
import image from "../Assets/Rectangle 3608.png";
function Collection() {
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
    


<div className='pt-10 mt-[31px] border-t-[0.5px] border-solid border-[ #ADADAD] ml-[135px] mr-[135px]   '>


<div className='flex    '>


<div className='flex flex-col'>
<h1 className='text-2xl leading-8 pt-4'>FILTERS</h1>
  <div className="mt-4 w-[250px] h-[160px] border-[0.5px] pl-[23px] pt-[14px]  border-solid  border-[ #BDBDBD]">
  <h1 >CATEGORIES</h1>
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
  <div className="mt-4 w-[250px] h-[160px] border-[0.5px] pl-[23px] pt-[14px]  border-solid  border-[ #BDBDBD]">
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
<span className="text-[#707070]">ALL</span>
  <span className="text-[ #171717] 
"> COLLECTIONS</span>
  </h1>
<img src={borderLine} alt="img" className=' h-0.5 ml-2  '></img>

</div>


<div className="flex flex-col w-50">
  
  <select
   
    className="border-2 border-gray  px-2 py-2 text-black-400 "
    
  >
    <option>Sort by: Price: Low To High</option>
    
  </select>
</div>
</div>

<div className=' grid grid-cols-4  gap-x-4 gap-y-4  '>
 
 {
 collections.map((item)=>(
<div className='flex flex-col space-y-1.5 cursor-pointer transition ease-in-out hover:scale-105'>
  <img src={item.image} alt="img" className=" w-[260px]"></img>
 <h1 className='whitespace-nowrap text-xs font-medium '> {item.heading} </h1>
 <h1 className='whitespace-nowrap text-xs font-medium'> {item.dec} </h1>
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