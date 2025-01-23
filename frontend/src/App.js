import {React, useState } from 'react';
import './App.css';
import {BrowserRouter, Routes,Route, Navigate} from "react-router-dom"
import Home from "./Pages/Home"
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About  from './Pages/About';
import Contact from "./Pages/Contact"
import Collection from './Pages/Collection';
import Login from "./Pages/Login";
import Cart from './Pages/Cart';

function App() {
 


  const [isSearch,setisSearch]=useState(false)


  return (
   
 <BrowserRouter>
 
 <Header setisSearch={setisSearch} isSearch={isSearch}/>
 <Routes>
      <Route path="*" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/collection" element={<Collection isSearch={isSearch} setisSearch={setisSearch}/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<Cart/>}/>

      
    </Routes>
 <Footer/>
 </BrowserRouter>
  );
}

export default App;
