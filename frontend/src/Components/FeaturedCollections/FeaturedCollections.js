import React, { useContext } from 'react';
import borderLine from "../../Assets/Rectangle 3605.png";

import { shopContext } from '../../Context/ShopContext';

function FeaturedCollections(props) {

const {products}=useContext(shopContext);

 
 
const displayCollections=products.slice(0,props.productCount)

  
  

  

  return (
    <div className='mt-20 max-sm:px-[49px]'style={{ marginLeft: '160px', marginRight: '160px' }}>
      <div className='flex flex-col items-center space-y-2'>
        <div className='flex items-center'>
          <h1 className='font bold text-3xl leading-10'>
            <span className="text-gray-500 font-medium">{props.title1} </span>
            <span className="text-gray-700 font-medium mr-2">{props.title2} </span>
          </h1>
          <img src={borderLine} alt="img" className='h-0.5 flex'></img>
        </div>
        {props.showIntro && (
          <p className='text-gray-600 max-sm:text-center max-sm:text-sm'>
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the.
          </p>
        )}
      </div>

      <div className='mt-12 grid grid-cols-5 gap-x-4 gap-y-4  max-sm:grid-cols-2 max-sm:mx-4'>

      
     { displayCollections.map((item,key)=>(

<div key={key} className='flex flex-col space-y-1.5 text-gray-700 cursor-pointer transition ease-in-out hover:scale-105'>
       <img src={item?.image} alt="img"   />
        <h1 className='text-sm'>{item?.name}</h1>
        <h1 className='text-sm font-medium'>${item.price}</h1>
      </div>
    

  ))
      }
      
      </div>
    </div>
  );
}

export default FeaturedCollections;
