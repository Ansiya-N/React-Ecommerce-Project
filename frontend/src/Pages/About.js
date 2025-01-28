import React from 'react'
import borderLine from "../Assets/Rectangle 3605.png";
import image from "../Assets/about_img.png";
import SubmitForm from '../Components/SubmitForm/SubmitForm';
import "../Pages/About.css"
function About() {
   
  return (
    <div className='pt-10  border-t-[0.5px] border-solid  main  border-gray-200' >
 
 
 <div className='flex  items-center justify-center mb-10'>
 
    <h1 className='font bold text-3xl leading-10 '>
 <span className="text-gray-500 font-medium">ABOUT </span>
   <span className="text-gray-700 font-medium
 ">US </span>
   </h1>
 <img src={borderLine} alt="img" className=' h-0.5 ml-2  '></img>
 
 </div>
 <div className="flex gap-10 imagediv ">
 <div className="max-w-[450px]  w-full   min-h-[458px]   bg-cover bg-no-repeat bg-center"style={{ backgroundImage: `url(${image})` }} >

</div>
<div className='py-10 max-w-[700px] w-full '>
    <p className='text-gray-600 text-left'>
    
    Forever was born out of a passion for innovation and a desire to revolutionize  the waypeople shop online. Our journey began with a simple idea: to provide a platform where customers can easily  discover, explore, and purchase a wide range of products from the comfort of their homes.
    <br></br>
    <br></br>
    
    Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference.From  fashion and beauty toelectronics and home essentials, we offer an extensive collection  sourced from trusted brands and suppliers.
    <br></br>
    <br></br>
    
    <b className='text-gray-800'>Our Mission</b><br></br><br></br>
    Our mission at Forever is to empower customers with choiceconvenience,and confidence. We're dedicated to providing a seamless shopping experience  that exceeds expectations, from browsing and ordering to delivery and beyond.
    
</p>
</div>
 </div>
 
 
 <div className='flex items-center mt-36 mb-10'> <h1 className='font bold text-3xl leading-10 '>
 <span className="text-gray-500">WHY </span>
   <span className="text-gray-700 font-medium
 ">CHOOSE US</span>
   </h1>
 <img src={borderLine} alt="img" className=' h-0.5 flex '></img>
 </div>


 <div className='grid grid-cols-3 descdiv '>
    <div className='flex flex-col justify-center text-sm  gap-5 px-10 py-20 border-[0.5px]  border-solid  border-gray-200'>
        <b>QUALITY ASSURANCE:</b>
        <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
    </div>
    <div className=' px-10 py-20 text-sm justify-center flex flex-col gap-5 border-l-0 border-[0.5px]  border-solid  border-gray-200'>
    <b>CONVENIENCE:</b>
    <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
    </div>
    <div className=' px-10 py-20 text-sm justify-center flex flex-col gap-5 border-l-0 border-[0.5px] border-solid  border-gray-200 '>
    <b className='whitespace-nowrap'>EXCEPTIONAL CUSTOMER SERVICE:</b>
    <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
    </div>
</div>
<SubmitForm/>

 </div>
  )
}

export default About