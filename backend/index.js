const express=require("express");
const cors=require("cors")
require("dotenv").config()
const connectDB=require( "./config/mongodb");
const cloudinaryConnection=require  ("./config/cloudinary");
const productRouter=require("./Routers/productRouter");
const userRouter=require("./Routers/userRouter")
//App config
const app=express();
const port=process.env.PORT || 5000
connectDB();
cloudinaryConnection()


//Middlewares
 app.use(express.json());
 app.use(cors({
    origin:"http://localhost:3000",credentials:true
}))

//API Endpoints

app.use("/api/products",productRouter)


app.listen(port,()=>{
    console.log("server connected")
} )