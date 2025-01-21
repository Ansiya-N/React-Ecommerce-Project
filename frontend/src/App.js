
import './App.css';
import {BrowserRouter, Routes,Route, Navigate} from "react-router-dom"
import Home from "./Pages/Home"
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About  from './Pages/About';

import Collection from './Pages/Collection';
import aboutImage from "./Assets/about_img.png";
import contactImage from "./Assets/contact_img.png"
function App() {
 const aboutContent=`Forever was born out of a passion for innovation and a desire to revolutionize  the waypeople shop online. Our journey began with a simple idea: to provide a platform where customers can easily  discover, explore, and purchase a wide range of products from the comfort of their homes.
    <br></br>
    
    Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference.From  fashion and beauty toelectronics and home essentials, we offer an extensive collection  sourced from trusted brands and suppliers.
    <br></br>
    
    <h1 style="color: black;">Our Mission</h1><br>
    Our mission at Forever is to empower customers with choiceconvenience,and confidence. We're dedicated to providing a seamless shopping experience  that exceeds expectations, from browsing and ordering to delivery and beyond.
    
    `


    const contactContent=`
      <h1 style="color: #4E4E4E;">OUR STORE</h1><br>
      54709 Willms Station <br>
Suite 350, Washington, USA<br></br>
Tel: (415) 555‑0132<br>
Email: greatstackdev@gmail.com<br></br>
      <h1 style="color: #4E4E4E;">CAREERS AT FOREVER</h1><br>
      Learn more about our teams and job openings.<br></br>
      <button style="border:solid;padding:21px 41px;font-size:18px ">Explore Jobs</button>


    `


  return (
   
 <BrowserRouter>
 
 <Header/>
 <Routes>
      <Route path="*" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About title1="ABOUT" title2="US" image={aboutImage} 
    content={aboutContent} 
/>}/>
      <Route path="/contact" element={<About title1="CONTACT" title2="US" image={contactImage} 
    content={contactContent} paddingClass="px-[100px]" 
/>}/>
      <Route path="/collection" element={<Collection/>}/>

      
    </Routes>
 <Footer/>
 </BrowserRouter>
  );
}

export default App;
