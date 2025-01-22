import React from 'react'
import borderLine from "../Assets/Rectangle 3605.png";
import image from "../Assets/contact_img.png";
import SubmitForm from '../Components/SubmitForm/SubmitForm';
function Contact() {
   
  return (
    <div className='pt-10 mt-[31px] border-t-[0.5px] border-solid border-[ #ADADAD] ml-[135px] mr-[135px]  ' >
 
 
 <div className='flex  items-center justify-center mb-10'>
  
     <h1 className='font bold text-3xl leading-10 '>
  <span className="text-[#707070]">CONTACT </span>
    <span className="text-[ #171717] 
  ">US </span>
    </h1>
  <img src={borderLine} alt="img" className=' h-0.5 ml-2  '></img>
  
  </div>
 <div className="flex space-x-8 px-[100px] mb-[150px] ">
 <div className="max-w-[450px]  w-full   min-h-[458px]   bg-cover bg-no-repeat bg-center"style={{ backgroundImage: `url(${image})` }} >

</div>
<div className='py-10 max-w-[700px] w-full '>
    <p className='font-[Outfit] font-bold text-lg leading-8 text-[#6D6D6D] text-left'>
    <h1  style={{color:"#4E4E4E"}}>OUR STORE</h1><br></br>
    
      54709 Willms Station <br></br>
Suite 350, Washington, USA<br></br>
<br></br>
Tel: (415) 555‑0132
Email: greatstackdev@gmail.com<br></br>
<br></br>
      <h1 style={{color:"#4E4E4E"}}>CAREERS AT FOREVER</h1><br></br>
      Learn more about our teams and job openings.<br></br>
      

</p>
<br></br>
<button className='w-[171px] h-[62px] border-[1px]  border-solid  border-black'>Explore Jobs</button>
</div>
 </div>
 

 
<SubmitForm/>

 </div>

  )
}

export default Contact;