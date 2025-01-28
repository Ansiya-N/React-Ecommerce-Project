import React,{useState}  from 'react'
import "./Header.css";
import{NavLink} from "react-router-dom";

import searchIcon from "../../Assets/search icon.png"
import profileIcon from "../../Assets/profile-icon.png"
import vectorIcon from "../../Assets/Vector.png"
import menuIcon from "../../Assets/hamburger.png";
import logo from "../../Assets/logo.png";
function Header({setisSearch,isSearch}) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let header=[
    {
id:1,
name:"HOME",
value:"/home"
    },

    {
        id:2,
        name:"COLLECTION",
       value:"/collection"
    },
    {
        id:3,
        name:"ABOUT",
       value:"/about"
    },
    {
      id:4,
      name:"CONTACT",
     value:"/contact"
  },


    /*{
      id:5,
      name:"order",
     value:"/order"
  },*/
  
  
    
    
   
        ]
         
  return (
   

    <div className='flex justify-between maindivheader max-sm:px-[49px]  '>
<div >
  <NavLink to="/home" ><img src={logo} className="w-36" alt=""></img> </NavLink>

</div>
       
       
        
      
       
       
       <div className=' justify-between items-center w-96 hidden sm:flex '> 



       

{

  header.map((item)=>(
    <NavLink to={item.value} className={({ isActive }) =>
      `font-medium leading-5 text-gray-700 ${isActive ? "underline " : ""}`
    }> {item.name} </NavLink>
  ))
}
      
        
        </div>
        <div className='flex justify-between items-center   gap-x-8' >
            <NavLink to="/collection" onClick={()=>setisSearch(true)} ><img src={searchIcon}  alt="img"></img></NavLink>
        <NavLink to="/login"><img src={profileIcon} alt="img"></img></NavLink>
            
        <NavLink to="/cart"> <img src={vectorIcon} alt="img" className='w-5 h-6 border-2 '></img></NavLink>
            
        <button className="sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src={menuIcon} alt="menu" className="w-6 h-6" />
        </button>
      

           </div>
           {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-md rounded-md p-4 sm:hidden">
          {header.map((item) => (
            <NavLink  to={item.value} className="block py-2" onClick={() => setIsMenuOpen(false)}>
              {item.name}
            </NavLink>
          ))}
        </div>
      )}

    </div>
  )
}

export default Header