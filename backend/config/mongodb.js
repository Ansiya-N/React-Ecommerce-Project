const mongoose=require("mongoose");



const connectDB=async()=>{
  console.log("function called")  

    
  mongoose.connect(process.env.DB_URL,{useNewUrlParser:true})
  .then(()=>console.log("mongodb connected"))
  .catch((err)=>console.log(" connection failed",err))
    
 
    
   

}
module.exports=connectDB