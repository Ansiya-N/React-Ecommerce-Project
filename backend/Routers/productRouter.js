const express=require("express");
const router=express.Router();
const products=require("../Models/productSchema")


router.get("/",async(req,res)=>{
    const product=await products.find();
    res.json(product)
  })
  
  router.post("/", async (req, res) => {
    try {
        // Extract data from request body
        const { name, description, price, image, category, subCategory, sizes, bestseller } = req.body;

        // Validate required fields
        if (!name || !description || !price || !image || !category || !subCategory || !sizes) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Create new product
        const productData = new products({
            name,
            description,
            price,
            image,
            category,
            subCategory,
            sizes,
            bestseller: bestseller || false, // Default to false if not provided
        });

        // Save to database
        const savedProducts = await productData.save();
        console.log(savedProducts);
        res.status(201).json({ message: "Product created successfully", savedProducts });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

  
  router.put("/:id",async(req,res)=>{
    try {
      const product=await products.findByIdAndUpdate(req.params.id,{name:req.body.name});
      res.json(product)
      
    } catch (error) {
      
    }
  })

  router.delete("/:id",async(req,res)=>{
    try {
        const product=await products.findByIdAndDelete(req.params.id)
       res.status(200).json({message:"product created successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"})
    }

  })
  
  
  



module.exports=router;