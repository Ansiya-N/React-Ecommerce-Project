import React from 'react'
import "./Footer.css";
import ellipseIcon from "../../Assets/Ellipse 658.png"
function Footer() {
  return (
   <div  className='px-[8.375rem] max-sm:px-[49px] ' >
    <div className='flex max-sm:flex max-sm:flex-col  mt-[200px] pb-[62px]  justify-between border-b-[0.5px] border-solid border-[ #BDBDBD] '>

<div className='flex flex-col space-y-8 max-sm:items-center'>
<div className="flex items-end">
    
    <h1 className="text-4xl font-semibold ">FOREVER</h1>
    
    <div className='flex px-1 py-1'><img className="w-3 h-3  " src={ellipseIcon} alt="img" /></div>
    
    </div>

    <div>
  <p  className='text-lg leading-7 max-sm:text-sm text-[" #595959;
"]' style={{fontFamily:"Outfit"}} >
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br></br>  whenan unknown printer took a galley of type and scrambled it to make a type<br></br> specimen book.
  </p>
</div>


</div>

<div className='flex sm:flex-col space-y-4  max-sm:justify-center max-sm:space-x-4 max-sm:text-sm '>
  <h1 className='text-xl font-semibold max-sm:hidden'style={{fontFamily:"Outfit"}}>COMPANY</h1>
  <h1>Home</h1>
  <h1>About Us</h1>
  <h1>Delivery</h1>
  <h1>Privacy Policy</h1>


   </div>
   <div className='flex sm:flex-col space-y-4 max-sm:justify-center max-sm:space-x-4 max-sm:text-sm '>
  <h1 className='text-xl font-semibold max-sm:hidden'style={{fontFamily:"Outfit"}}>GET IN TOUCH</h1>
  <h1>+1-212-456-7890</h1>
  <h1>greatstackdev@gmail.com</h1>

   </div>


   
    </div>
    <div className='my-[29px] text-lg leading-7  text-[" #595959;
"] style={{fontFamily:"Outfit"}} ' >
      <h1 className='text-center max-sm:text-sm'>Copyright 2024 © GreatStack.dev - All Right Reserved.</h1>
    </div>
 
    </div>
  )
}

export default Footer