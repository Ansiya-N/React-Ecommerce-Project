import React from 'react'

import borderLine from "../../Assets/Rectangle 3605.png";
import image from "../../Assets/Rectangle 3608.png";
function FeaturedCollections(props) {
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

const isBestSeller=props.title1==="BEST"&&props.title2==="SELLER";
const displayCollections=isBestSeller?collections.slice(0,5):collections




  return (



  <div className='mt-[81px] max-sm:px-[49px]'>

<div className='flex flex-col items-center space-y-2 '>

<div className='flex items-center '> <h1 className='font bold text-3xl leading-10 '>
<span className="text-[#707070]">{props.title1} </span>
  <span className="text-[ #171717] mr-2 
">{props.title2} </span>
  </h1>
<img src={borderLine} alt="img" className=' h-0.5 flex '></img>
</div>
 <p className='text-[#868686] max-sm:text-center max-sm:text-sm  '>Lorem ipsum is simply dummy text of the printing and typsettting industry.Lorem ipsem has been the.</p>

 </div>

 <div className='mt-12 grid grid-cols-5  gap-x-4 gap-y-4 mx-[160px] max-sm:grid-cols-2 max-sm:mx-4'>
 
 {
 displayCollections.map((item)=>(
<div className='flex flex-col space-y-1.5 cursor-pointer transition ease-in-out hover:scale-105 '>
  <img src={item.image} alt="img" className=" w-[260px]"></img>
 <h1 className='whitespace-nowrap text-xs font-medium '> {item.heading} </h1>
 <h1 className='whitespace-nowrap text-xs font-medium'> {item.dec} </h1>
 </div>
 ))
 }
 





 </div>
  </div>
     
  )
}

export default FeaturedCollections