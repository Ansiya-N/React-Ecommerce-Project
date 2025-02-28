const mongoose=require ("mongoose");
const productSchema=new mongoose.Schema({

name:{type:String,required:true},
description:{type:String,required:true},
price:{type:Number,required:true},
image: { type: String, required: true },
category:{type:String,required:true},
subCategory:{type:String,required:true},
sizes: { type: [String], required: true }, // Array of available sizes
bestseller: { type: Boolean, default: false }

})

module.exports=mongoose.model("products",productSchema)