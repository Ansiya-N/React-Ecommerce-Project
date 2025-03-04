const cloudinary = require("cloudinary").v2;
const productModel = require("../Models/productSchema");

const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;

        if (!name || !description || !price || !category || !subCategory || !sizes) {
            return res.status(400).json({ error: "All required fields must be provided." });
        }

        const image1 = req.files.image1 ? req.files.image1[0] : null;
        const image2 = req.files.image2 ? req.files.image2[0] : null;
        const image3 = req.files.image3 ? req.files.image3[0] : null;
        const image4 = req.files.image4 ? req.files.image4[0] : null;

        const images = [image1, image2, image3, image4].filter(img => img !== null);

        let imageUrls = await Promise.all(images.map(async (img) => {
            let result = await cloudinary.uploader.upload(img.path, { resource_type: "image" });
           
            return result.secure_url;
        }));
         console.log(imageUrls)
        const productData = {
            name,
            description,
            price,
            category,
            subCategory,
            sizes,
            bestSeller: bestSeller || false,
            images: imageUrls, // ✅ Store image URLs in DB
            date:Date.now(),
        };

        const product=new productModel(productData)

        await product.save();
        res.status(201).json({ message: "Product added successfully", product: productData });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const removeProduct=async(req,res)=>{
try {
    const product=await productModel.findByIdAndDelete(req.params.id);
      res.json(product)
} catch (error) {
    console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
}
}

const singleProductView=async(req,res)=>{
    try {
        const product=await productModel.findById(req.params.id);
          res.json(product)
    } catch (error) {
        console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
    }
}

const listProducts=async(req,res)=>{
    const product=await productModel.find();
    res.json(product)
}

module.exports = { addProduct,removeProduct,singleProductView,listProducts };
