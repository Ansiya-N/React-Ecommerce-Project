import React from 'react'
import "./Footer.css";
import logo from "../../Assets/logo.png";
function Footer() {
  return (
   <div  className='px-[8.375rem] max-sm:px-[49px] maindiv ' >
    <div className='flex max-sm:flex max-sm:flex-col  mt-[200px] pb-[62px]  justify-between '>

<div className='flex flex-col space-y-8 max-sm:items-center'>
<img src={logo} className="w-36" alt=""></img>
    <div className='flex sm:flex-col  max-sm:justify-center max-sm:space-x-4 max-sm:text-sm text-gray-600'>
  <p   >
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br></br>  whenan unknown printer took a galley of type and scrambled it to make a type<br></br> specimen book.
  </p>
</div>


</div>

<div className='flex sm:flex-col  max-sm:justify-center max-sm:space-x-4 max-sm:text-sm '>
  <h1 className='text-xl font-medium max-sm:hidden mb-5'>COMPANY</h1>
  <h1 className='text-gray-600'>Home</h1>
  <h1 className='text-gray-600'>About Us</h1>
  <h1 className='text-gray-600'>Delivery</h1>
  <h1 className='text-gray-600'>Privacy Policy</h1>


   </div>
   <div className='flex sm:flex-col  max-sm:justify-center max-sm:space-x-4 max-sm:text-sm '>
  <h1 className='text-xl font-medium max-sm:hidden mb-5 '>GET IN TOUCH</h1>
  <h1 className='text-gray-600'>+1-212-456-7890</h1>
  <h1 className='text-gray-600'>greatstackdev@gmail.com</h1>

   </div>


   
    </div>
    
 <div>
  <hr></hr>

  <p className='py-5 text-sm text-center text-gray-600'>Copyright 2024 © GreatStack.dev - All Right Reserved.</p>
 
 </div>
    </div>
  )
}

export default Footer