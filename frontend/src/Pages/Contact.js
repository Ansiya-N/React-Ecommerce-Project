import React from 'react'
import borderLine from "../Assets/Rectangle 3605.png";
import image from "../Assets/contact_img.png";
import SubmitForm from '../Components/SubmitForm/SubmitForm';
import "../Pages/Contact.css"
function Contact() {
   
  return (
    <div className='pt-10 border-t-[0.5px] border-solid border-gray-200 main  ' >
 
 
 <div className='flex  items-center justify-center mb-10'>
  
     <h1 className='font bold text-3xl leading-10 '>
  <span className="text-gray-500 font-medium">CONTACT </span>
    <span className="text-gray-700 font-medium
  ">US </span>
    </h1>
  <img src={borderLine} alt="img" className=' h-0.5 ml-2  '></img>
  
  </div>
 <div className="flex space-x-8  subdiv ">
 <div className="max-w-[450px]  w-full   imagediv   bg-cover bg-no-repeat bg-center"style={{ backgroundImage: `url(${image})` }} >

</div>
<div className='py-10 rightsection w-full '>
   
    <p className='font-semibold text-xl text-gray-600'>OUR STORE</p><br></br>
    
      <p className='text-gray-500'>
      54709 Willms Station <br></br>
Suite 350, Washington, USA<br></br>
<br></br>
      </p>
<p className='text-gray-600'>Tel: (415) 555‑0132<br></br>
Email: greatstackdev@gmail.com<br></br></p>
<br></br>
      <p className='font-semibold text-xl text-gray-600'>CAREERS AT FOREVER</p><br></br>
<p className='text-gray-600'>      Learn more about our teams and job openings.</p><br></br>
      


<br></br>
<button className='contactbtn '>Explore Jobs</button>
</div>
 </div>
 

 
<SubmitForm/>

 </div>

  )
}

export default Contact;