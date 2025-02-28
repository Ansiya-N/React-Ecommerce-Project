const express=require("express");
const mongoose=require("mongoose");
const productRouter=require("./Routers/productRouter");
const cors=require("cors")
const app=express();

require("dotenv").config()

mongoose.connect(process.env.DB_URL,{useNewUrlParser:true})
.then(()=>console.log("mongodb connected"))
.catch((err)=>console.log(" connection failed",err))
const cloudinary=require("cloudinary").v2

cloudinary.config({cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
 api_secret:process.env.CLOUDINARY_API_SECRET})


 app.use(express.json());
 app.use(cors({
    origin:"http://localhost:3000",credentials:true
}))
app.use("/products",productRouter)
app.listen(process.env.PORT || 5000,()=>{
    console.log("server connected")
} )