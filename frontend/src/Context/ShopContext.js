import { createContext, useState } from "react";
import image from "../Assets/Rectangle 3608.png";
export const shopContext=createContext();

const data=[{
    id:1,
    image:image,
      heading:"Women Round Neck Cotton Top",

      dec:"$149"
  },
 
  { id:2,
    image:image,
    heading:"Women Round Neck Cotton Top",

    dec:"$149"
},
{ id:3,
  image:image,
  heading:"Women Round Neck Cotton Top",

  dec:"$149"
},

{
id:4,
image:image,
heading:"Women Round Neck Cotton Top",

dec:"$149"
},
{
id:5,
image:image,
heading:"Women Round Neck Cotton Top",

dec:"$149"
},
{
id:6,
image:image,
heading:"Women Round Neck Cotton Top",

dec:"$149"
},
{
id:7,
image:image,
heading:"Women Round Neck Cotton Top",

dec:"$149"
},
{
id:8,
image:image,
heading:"Women Round Neck Cotton Top",

dec:"$149"
},
{
id:9,
image:image,
heading:"Women Round Neck Cotton Top",

dec:"$149"
},
{
id:10,
image:image,
heading:"Women Round Neck Cotton Top",

dec:"$149"
},]
const ShopContextProvider=(props)=>{
    const[products,setProducts]=useState(data)
const value={
    products
}
      return(<shopContext.Provider value={value}>
        {props.children}
      </shopContext.Provider>)
}

export default ShopContextProvider;