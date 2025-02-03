import React, { useContext } from 'react';
import borderLine from "../Assets/Rectangle 3605.png";
import delicon from "../Assets/bin_icon.png";
import { NavLink } from 'react-router-dom';
import "../Pages/Cart.css";
import { shopContext } from '../Context/ShopContext';

function Cart() {
  const { cartItems, products, deleteCart } = useContext(shopContext);
  
  // Convert cartItems into an array of separate products per size
  const cartData = [];

  products.forEach((item) => {
    if (cartItems[item._id]) {
      Object.keys(cartItems[item._id]).forEach((size) => {
        cartData.push({
          ...item,
          size,
          quantity: cartItems[item._id][size]
        });
      });
    }
  });
 
const subtotal=cartData.reduce((total,item)=>(
 total+item.price*item.quantity

),0)

  return (
    <div className='pt-10 border-t-[0.5px] border-solid border-gray-200 main'>
      <div className='flex items-center mb-5'>
        <h1 className='font-bold text-3xl leading-10'>
          <span className="text-gray-500 font-medium">YOUR </span>
          <span className="text-gray-700 font-medium">CART </span>
        </h1>
        <img src={borderLine} alt="img" className='h-0.5 ml-2' />
      </div>

      <div className='flex flex-col'>
        {cartData.length === 0 ? (
          <p>Add items to the cart</p>
        ) : (
          cartData.map((item) => (
            <div  className='border-t-[0.5px] border-solid border-gray-200 py-2 flex'>
              <img src={item.image} alt="img" className="w-24 h-auto" />
              <div className="flex items-center justify-between w-full">
                
                {/* Product Name, Price, and Size */}
                <div className="flex flex-col ml-6 mt-4">
                  <p className="font-medium text-gray-700">{item.name}</p>
                  <div className="flex mt-4">
                    <h1 className="text-gray-600">${item.price}</h1>
                    <div className="ml-2 text-center bg-slate-50 sizebtn border border-solid">
                     {item.size}
                    </div>
                  </div>
                </div>

                {/* Quantity Input */}
                <div className="flex items-center justify-center" style={{ width: '6.25rem' }}>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    className="w-20 border pl-2"
                    
                  />
                </div>

                {/* Delete Icon (Per Size) */}
                <div className="flex items-center">
                  <img
                    className="delicon cursor-pointer"
                    src={delicon}
                    alt="Delete"
                    onClick={() => deleteCart(item._id, item.size)}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Cart Totals */}
      <div className='flex justify-end mt-10'>
        <div className='carttotal'>
          <div className='flex items-center mb-5'>
            <h1 className='font-bold text-3xl leading-10'>
              <span className="text-gray-500 font-medium">CART </span>
              <span className="text-gray-700 font-medium">TOTALS </span>
            </h1>
            <img src={borderLine} alt="img" className='h-0.5 ml-2' />
          </div>

          <div className='flex justify-between border-b-[0.5px] border-solid border-gray-200 pb-2'>
            <h1 style={{ fontFamily: "Outfit" }}>Subtotal</h1>
            <h1> {subtotal} </h1>
          </div>
          <div className='flex justify-between border-b-[0.5px] border-solid border-gray-200 pb-2 pt-2'>
            <h1 style={{ fontFamily: "Outfit" }}>Shipping Fee</h1>
            <h1>$10</h1>
          </div>
          <div className='flex justify-between pb-2 pt-2'>
            <h1 className='font-bold'>Total</h1>
            <h1 className='font-bold'>${subtotal+10}  </h1>
          </div>
          <div className='flex justify-end'>
            <NavLink to="/place-order">
              <button className='bg-black text-white px-2 py-2 mt-5'>PROCEED TO CHECKOUT</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
