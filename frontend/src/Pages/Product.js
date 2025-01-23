import React from 'react'
import image1 from "../Assets/Rectangle 3635.png";
import image2 from "../Assets/Rectangle 3634.png"
import starIcon from "../Assets/star_icon.png"
import borderLine from "../Assets/Rectangle 3605.png"
function Product() {
    let collections=[
        {image:image1,
            heading:"Women Round Neck Cotton Top",
    
            dec:"$149"
        },
        {image:image1,
          heading:"Women Round Neck Cotton Top",
    
          dec:"$149"
      },
      {image:image1,
        heading:"Women Round Neck Cotton Top",
    
        dec:"$149"
    },
    {image:image1,
      heading:"Women Round Neck Cotton Top",
    
      dec:"$149"
    },
    {image:image1,
      heading:"Women Round Neck Cotton Top",
    
      dec:"$149"
    },
    
        
    ]
    
  return (
    <div className='pt-10  mt-[31px] border-t-[0.5px] border-solid border-[ #ADADAD] ml-[135px] mr-[135px]  ' >
 <div className='flex gap-12'>
 <div className='flex gap-3'>
 <div><img src={image1} alt="img"></img></div>
 <div><img src={image2} alt="img" className='w-[500px] h-[300px]  '></img></div>
 </div>
<div className='flex flex-col '>
<h1 className='font-medium text-4-xl mb-2'>Men Round Neck Pure Cotton T-shirt</h1>
 <div className='flex gap-2 mb-4'>
    <img src={starIcon} alt="img" className='w-[20px] h-[20px] '  ></img>
    <img src={starIcon} alt="img" className='w-[20px] h-[20px] '  ></img>
    <img src={starIcon} alt="img" className='w-[20px] h-[20px] '  ></img>
    <img src={starIcon} alt="img" className='w-[20px] h-[20px] '  ></img>
    <img src={starIcon} alt="img" className='w-[20px] h-[20px] '  ></img>
    <h1>(122) </h1>
</div>
<h1 className='font-medium text-4-xl mb-4'>$149</h1>
<p className="pr-10 mb-4" style={{fontFamily:"Outfit"}} >A lightweight, usually knitted, pullover shirt, 
    close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.</p>
<h1 className='font-medium text-4-xl text-gray mb-4'>Select Size</h1>
<div className='flex gap-2 mb-4'>
<button className=' bg-gray-200 w-[40px] h-[40px]  border border-solid border-black font-medium text-4-xl'>S</button>
<button className=' bg-gray-200 w-[40px] h-[40px] border border-solid border-black font-medium text-4-xl'>M</button>
<button className=' bg-gray-200 w-[40px] h-[40px]  border border-solid border-black font-medium text-4-xl'>L</button>
<button className=' bg-gray-200 w-[40px] h-[40px]  border border-solid border-black font-medium text-4-xl'>XL</button>
<button className=' bg-gray-200 w-[40px] h-[40px]  border border-solid border-black font-medium text-4-xl'>XXL</button>
</div>
<button className='bg-black text-white px-2 py-2 mt-2 w-[200px]  mb-6'>   ADD TO CART</button>
<div className='border-t-[0.5px]  border-solid border-[ #ADADAD] pt-2'>
<p style={{fontFamily:"Outfit"}}>100% Original product.</p>
<p style={{fontFamily:"Outfit"}}>Cash on delivery is available on this product.</p>
<p style={{fontFamily:"Outfit"}}>Easy return and exchange policy within 7 days.</p>
</div>
 </div>
 </div>


 <div>
    <div className='flex mt-[50px] '>
<button className='  px-2 py-2 mt-2 w-[160px] border border-gray-200 border-black  font-medium'>   Description</button>
<button className=' bg-gray-200  px-2 py-2 mt-2 w-[160px] border border-gray-200 border-black font-medium'>   Reviews(122)</button>

</div>
<div className='border  border-gray-300 border-solid px-8 py-8'>
    <p style={{fontFamily:"Outfit"}} >
    An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
    </p><br></br>
    <p style={{fontFamily:"Outfit"}} >
    E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
    </p>
</div>
  </div>

  <div className='flex  items-center justify-center  mt-[150px]'>
    
       <h1 className='font bold text-3xl leading-10 '>
    <span className="text-[#707070]">RELATED </span>
      <span className="text-[ #171717] 
    ">PRODUCTS </span>
      </h1>
    <img src={borderLine} alt="img" className=' h-0.5 ml-2  '></img>
    
    </div>
    <div className='mt-12 grid grid-cols-5  gap-x-4 gap-y-4 px-[30px] '>
 
    {
     collections.map((item)=>(
    <div className='flex flex-col space-y-1.5 cursor-pointer transition ease-in-out hover:scale-105  '>
      <img src={item.image} alt="img" ></img>
     <h1 className='whitespace-nowrap text-xs font-medium '> {item.heading} </h1>
     <h1 className='whitespace-nowrap text-xs font-medium'> {item.dec} </h1>
     </div>
     ))
     }
     </div>
     
 </div>
  )
}

export default Product
