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
import Product from './Pages/Product';
import DeliveryInfo from './Pages/DeliveryInfo';
import ShopContextProvider from "./Context/ShopContext";
//import Order from './Pages/Order';

function App() {
 


  const [isSearch,setisSearch]=useState(false)


  return (
   
 <BrowserRouter>
 
 <ShopContextProvider>
 <Header setisSearch={setisSearch} isSearch={isSearch}/>
 <Routes>
      <Route path="*" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/collection" element={<Collection isSearch={isSearch} setisSearch={setisSearch}/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/place-order" element={<DeliveryInfo/>}/>
      {/*<Route path="/order" element={<Order/>}/>*/}

      
    </Routes>
 <Footer/>
 </ShopContextProvider>
 </BrowserRouter>
  );
}

export default App;
