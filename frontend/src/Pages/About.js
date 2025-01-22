import React from 'react'
import borderLine from "../Assets/Rectangle 3605.png";
import image from "../Assets/about_img.png";
import SubmitForm from '../Components/SubmitForm/SubmitForm';
function About() {
   
  return (
    <div className='pt-10 mt-[31px] border-t-[0.5px] border-solid border-[ #ADADAD] ml-[135px] mr-[135px]  ' >
 
 
 <div className='flex  items-center justify-center mb-10'>
 
    <h1 className='font bold text-3xl leading-10 '>
 <span className="text-[#707070]">ABOUT </span>
   <span className="text-[ #171717] 
 ">US </span>
   </h1>
 <img src={borderLine} alt="img" className=' h-0.5 ml-2  '></img>
 
 </div>
 <div className="flex space-x-8 px-[100px] ">
 <div className="max-w-[450px]  w-full   min-h-[458px]   bg-cover bg-no-repeat bg-center"style={{ backgroundImage: `url(${image})` }} >

</div>
<div className='py-10 max-w-[700px] w-full '>
    <p className='font-[Outfit] font-bold text-lg leading-8 text-[#6D6D6D] text-left'>
    
    Forever was born out of a passion for innovation and a desire to revolutionize  the waypeople shop online. Our journey began with a simple idea: to provide a platform where customers can easily  discover, explore, and purchase a wide range of products from the comfort of their homes.
    <br></br>
    <br></br>
    
    Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference.From  fashion and beauty toelectronics and home essentials, we offer an extensive collection  sourced from trusted brands and suppliers.
    <br></br>
    <br></br>
    
    <h1 style={{color:"black"}}>Our Mission</h1><br></br>
    Our mission at Forever is to empower customers with choiceconvenience,and confidence. We're dedicated to providing a seamless shopping experience  that exceeds expectations, from browsing and ordering to delivery and beyond.
    
</p>
</div>
 </div>
 
 <div className='flex items-left mt-[89px] mb-[29px] '>
 <div className='flex items-center justify-center   '> <h1 className='font bold text-3xl leading-10 '>
 <span className="text-[#707070]">WHY </span>
   <span className="text-[ #171717] mr-2 
 ">CHOOSE US</span>
   </h1>
 <img src={borderLine} alt="img" className=' h-0.5 flex '></img>
 </div>

 </div>
 <div className='grid grid-cols-3 mb-[200px] '>
    <div className='flex flex-col  space-y-4 px-10 py-20 border-[0.5px]  border-solid  border-[ #BDBDBD] 'style={{fontFamily:"Outfit"}}>
        <h1 className='font-semibold ' >QUALITY ASSURANCE:</h1>
        <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
    </div>
    <div className=' px-10 justify-center flex flex-col space-y-4  border-l-0 border-[0.5px]  border-solid  border-[ #BDBDBD] 'style={{fontFamily:"Outfit"}}>
    <h1 className='font-semibold'>CONVENIENCE:</h1>
    <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
    </div>
    <div className=' px-10 justify-center flex flex-col space-y-4 border-l-0 border-[0.5px] border-solid  border-[ #BDBDBD] 'style={{fontFamily:"Outfit"}}>
    <h1 className='font-semibold  whitespace-nowrap'>EXCEPTIONAL CUSTOMER SERVICE:</h1>
    <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
    </div>
</div>
<SubmitForm/>

 </div>
  )
}

export default About