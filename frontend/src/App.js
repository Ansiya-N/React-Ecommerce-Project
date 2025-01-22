
import './App.css';
import {BrowserRouter, Routes,Route, Navigate} from "react-router-dom"
import Home from "./Pages/Home"
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About  from './Pages/About';
import Contact from "./Pages/Contact"
import Collection from './Pages/Collection';


function App() {
 


    


  return (
   
 <BrowserRouter>
 
 <Header/>
 <Routes>
      <Route path="*" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/collection" element={<Collection/>}/>

      
    </Routes>
 <Footer/>
 </BrowserRouter>
  );
}

export default App;
