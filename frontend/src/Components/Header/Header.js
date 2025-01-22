import React from 'react'
import "./Header.css";
import{NavLink} from "react-router-dom";
import ellipseIcon from "../../Assets/Ellipse 658.png"
import searchIcon from "../../Assets/search icon.png"
import profileIcon from "../../Assets/profile-icon.png"
import vectorIcon from "../../Assets/Vector.png"
function Header() {


  let header=[
    {
id:1,
name:"Home",
value:"/home"
    },

    {
        id:2,
        name:"Collection",
       value:"/collection"
    },
    {
        id:3,
        name:"About",
       value:"/about"
    },
    {
        id:4,
        name:"Contact",
       value:"/contact"
    }
      
  
    
    
   
        ]
  return (
   

    <div className='flex justify-between pt-[1.813rem] px-[8.375rem] '>
<div className="flex items-end">
<NavLink to="/home" className="text-4xl font-semibold ">FOREVER</NavLink> 


<div className='flex px-1 py-1'><img className="w-3 h-3  " src={ellipseIcon} alt="img" /></div>

</div>

       
       
        
      
       
       
       <div className='flex justify-between items-center w-96'> 



       

{

  header.map((item)=>(
    <NavLink to={item.value} className={({ isActive }) =>
      `font-medium leading-5 ${isActive ? "underline " : ""}`
    }> {item.name} </NavLink>
  ))
}
      
        
        </div>
        <div className='flex justify-between items-center   gap-x-8' >
            <img src={searchIcon}  alt="img"></img>
        <NavLink to="/login"><img src={profileIcon} alt="img"></img></NavLink>
            
            <img src={vectorIcon} alt="img" className='w-5 h-6 border-2 '></img>
            
            
           </div>
       

    </div>
  )
}

export default Header