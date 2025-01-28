import React from 'react'
import "./Features.css";
import exchangeIcon from "../../Assets/Vector (1).png"
import  qualityIcon  from"../../Assets/quality_icon.png"
import supportIcon from"../../Assets/support_img.png";

function Features() {

  let features=[{
    image:exchangeIcon,
    heading:"Easy Exchange Policy",
    desc:"We offer hassle free  exchange policy"
  },
  {
    image:qualityIcon,
    heading:"7 Days Return Policy",
    desc:"We provide 7 days free return policy"
  },
  {
    image:supportIcon,
    heading:"Best Customer Support",
    desc:"We provide 24/7 customer support"
  },

]
  return (
   <div className='flex featuresmain justify-between  max-sm:flex max-sm:flex-col max-sm:mt-[100px] max-sm:space-y-20'>
   
{
  features.map((item)=>(
    <div className='flex flex-col text-center items-center space-y-2 '>
    <img src={item.image} alt="img"className='image' ></img>
    <p className='font-semibold text-gray-700'>{item.heading} </p>

    <h1 className='text-gray-400'>{item.desc} </h1>
    </div>
    
  ))
}

   
    </div>
   
  
  )
}

export default Features