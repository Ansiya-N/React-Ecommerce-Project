import React from 'react'
import borderLine from "../Assets/Rectangle 3605.png";
import { NavLink } from 'react-router-dom';
import SubmitForm from '../Components/SubmitForm/SubmitForm';
function Login() {
  return (
    <div className='pt-20  mt-[31px] border-t-[0.5px] border-solid border-[ #ADADAD] ml-[135px] mr-[135px]   '>
<div className='flex  items-center justify-center mb-10'>
  
     <h1 className='font bold text-3xl leading-10 text-4xl'style={{fontFamily:"Prata"}}>

  Login
    </h1>
  <img src={borderLine} alt="img" className=' h-0.5 ml-2  '></img>
  
  </div>

  <form className='flex flex-col items-center space-y-2 '>
    <input className='border-[1px] pl-4 border-solid border-black w-[500px] h-[54px] 'placeholder='Email'></input>
    <input className='border-[1px] pl-4 border-solid border-black w-[500px] h-[54px] 'placeholder='Password'></input>
  <div className='flex space-x-60 'style={{fontFamily:"Outfit"}}>
  <NavLink to="/" >Forgot your password?</NavLink>
  <NavLink to="/">Create account</NavLink>
  </div>
  <button className='bg-black text-white w-[150px] h-[50px] '>Sign in</button>
  </form>

<div className='mt-[350px] '>
<SubmitForm/>
</div>
</div>
  )
}

export default Login