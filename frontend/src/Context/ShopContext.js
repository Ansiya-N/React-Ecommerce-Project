import { createContext, useEffect, useState } from "react";
import image from "../Assets/Rectangle 3608.png";
export const shopContext=createContext();

const data=[{
  _id: "6683d3d47f779795ecfa98a3",
  name: "Men Round Neck Pure Cotton T-shirt",
  description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
  price: 80,
  image: image,
  category: "Men",
  subCategory: "Topwear",
  sizes: ["S", "M", "L","XL","XXL" ],
  bestseller: false,
},
 
{_id: "6683d3d47f779795ecfa98a4",
  name: "Men Round Neck Pure Cotton T-shirt",
  description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
  price: 80,
  image: image,
  category: "Men",
  subCategory: "Topwear",
  sizes: ["S", "M", "L","XL","XXL" ],
  bestseller: false,
},

{
  _id: "6683d3d47f779795ecfa98a5",
  name: "Men Round Neck Pure Cotton T-shirt",
  description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
  price: 80,
  image: image,
  category: "Men",
  subCategory: "Topwear",
  sizes: ["S", "M", "L","XL","XXL" ],
  bestseller: false,
},
{_id: "6683d3d47f779795ecfa98a6",
  name: "Men Round Neck Pure Cotton T-shirt",
  description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
  price: 80,
  image: image,
  category: "Men",
  subCategory: "Topwear",
  sizes: ["S", "M", "L","XL","XXL" ],
  bestseller: false,
},
{_id: "6683d3d47f779795ecfa98a7",
  name: "Men Round Neck Pure Cotton T-shirt",
  description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
  price: 80,
  image: image,
  category: "Men",
  subCategory: "Topwear",
  sizes: ["S", "M", "L","XL","XXL" ],
  bestseller: false,
},
{
  _id: "6683d3d47f779795ecfa98a8",
  name: "Men Round Neck Pure Cotton T-shirt",
  description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
  price: 80,
  image: image,
  category: "Men",
  subCategory: "Topwear",
  sizes: ["S", "M", "L","XL","XXL" ],
  bestseller: false,
},
{_id: "6683d3d47f779795ecfa98a9",
  name: "Men Round Neck Pure Cotton T-shirt",
  description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
  price: 80,
  image: image,
  category: "Men",
  subCategory: "Topwear",
  sizes: ["S", "M", "L","XL","XXL" ],
  bestseller: false,
},
{_id: "6683d3d47f779795ecfa98a10",
  name: "Men Round Neck Pure Cotton T-shirt",
  description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
  price: 80,
  image: image,
  category: "Men",
  subCategory: "Topwear",
  sizes: ["S", "M", "L","XL","XXL" ],
  bestseller: false,
},
{
 
 _id: "6683d3d47f779795ecfa98a11",
  name: "Men Round Neck Pure Cotton T-shirt",
  description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
  price: 80,
  image: image,
  category: "Men",
  subCategory: "Topwear",
  sizes: ["S", "M", "L","XL","XXL" ],
  bestseller: false,
},

{
 
  _id: "6683d3d47f779795ecfa98a312",
   name: "Men Round Neck Pure Cotton T-shirt",
   description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
   price: 80,
   image: image,
   category: "Men",
   subCategory: "Topwear",
   sizes: ["S", "M", "L","XL","XXL" ],
   bestseller: false,
 }]
const ShopContextProvider=(props)=>{
    const[products,setProducts]=useState(data)
    const[cartItems,setCartItems]=useState({})

    const addToCart = (itemId, size) => {
     
      if (!size) {
        console.log("size is not selected");
        return;
      }
    
      setCartItems((prevCart) => {
        let newCart = { ...prevCart };
    
        if (newCart[itemId]) {
          newCart[itemId] = { ...newCart[itemId] }; // Clone existing item
          if (newCart[itemId][size]) {
            newCart[itemId][size] += 1;
          } else {
            newCart[itemId][size] = 1;
          }
        } else {
          newCart[itemId] = { [size]: 1 };
        }
    
        console.log(newCart);
        return newCart;
      });
    };
    

    function deleteCart(itemId,size){
      setCartItems((prevCart) => {
        const updatedCart = { ...prevCart };
  
        if (updatedCart[itemId]) {
          
            delete updatedCart[itemId][size]; // Remove the size entry
          
  
          
        }
  
        return updatedCart;
      });
    

    }
// useEffect(()=>{
//   console.log(cartItems,"useEffect")
// },[cartItems])

const value={
    products,cartItems,addToCart,deleteCart
}
      return(<shopContext.Provider value={value}>
        {props.children}
      </shopContext.Provider>)
}

export default ShopContextProvider;