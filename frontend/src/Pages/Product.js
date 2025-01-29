import React, { useContext } from 'react'
import image1 from "../Assets/Rectangle 3635.png";
import image2 from "../Assets/Rectangle 3634.png"
import starIcon from "../Assets/star_icon.png"

import "../Pages/Product.css"
import { shopContext } from '../Context/ShopContext';
import FeaturedCollections from '../Components/FeaturedCollections/FeaturedCollections';
import { useParams } from 'react-router-dom';
function Product() {
 
   const {products}=useContext(shopContext);
   const {id}=useParams();
   const productData = products.find((item) => item.id === Number(id));

   console.log(productData,"productdata")
  return (
    <div className='pt-10  border-t-[0.5px] border-solid border-gray-200 main' >
 <div className='flex gap-12'>
 <div className='flex gap-3 w-full'>
 <div><img src={productData.image} alt="img" className='imagesize '></img></div>
 <div><img src={productData.image} alt="img" className='w-full h-auto   '></img></div>
 </div>
<div className='flex flex-col imagedet'>
<h1 className='font-medium text-2xl mt-2 '>{productData.heading}</h1>
 <div className='flex  items-center gap-1 mt-2'>
    <img src={starIcon} alt="img" className='star '  ></img>
    <img src={starIcon} alt="img" className='star '   ></img>
    <img src={starIcon} alt="img" className='star '   ></img>
    <img src={starIcon} alt="img" className='star '  ></img>
    <img src={starIcon} alt="img" className='star '   ></img>
    <p className='pl-2'>(122)</p>
</div>
<h1 className='font-medium text-3xl mt-4'>{productData.dec}</h1>
<p className="mt-5 text-gray-500 productdesc" >A lightweight, usually knitted, pullover shirt, 
    close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.</p>
<h1 className='font-medium text-4-xl text-gray mt-4'>Select Size</h1>
<div className='flex gap-4 my-2 mb-4'>
<button className=' bg-gray-100 border py-2 px-4'>S</button>
<button className=' bg-gray-100 border py-2 px-4'>M</button>
<button className=' bg-gray-100 border py-2 px-4'>L</button>
<button className=' bg-gray-100 border py-2 px-4'>XL</button>
<button className=' bg-gray-100 border py-2 px-4'>XXL</button>
</div>
<button className='bg-black text-white px-8 py-3 mt-2 cartbtn  '>   ADD TO CART</button>
<hr className='mt-6'></hr>
<div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
<p style={{fontFamily:"Outfit"}}>100% Original product.</p>
<p style={{fontFamily:"Outfit"}}>Cash on delivery is available on this product.</p>
<p style={{fontFamily:"Outfit"}}>Easy return and exchange policy within 7 days.</p>
</div>
 </div>
 </div>


 
    <div className=' mb-20'>
<button className='  px-2 py-2 mt-2 descbtn border border-gray-200 border-black  font-medium'>   Description</button>
<button className=' bg-gray-200  px-2 py-2 mt-2 descbtn border border-gray-200 border-black font-medium'>   Reviews(122)</button>


<div className='border  border-gray-300 border-solid px-8 py-8 text-sm text-gray-500'>
    <p style={{fontFamily:"Outfit"}} >
    An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
    </p><br></br>
    <p style={{fontFamily:"Outfit"}} >
    E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
    </p>
</div>
  </div>
  
  <FeaturedCollections title1="RELATED" title2="PRODUCTS" productCount={5} showIntro={false} />
   
  
 </div>
  )
}

export default Product
