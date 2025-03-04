const express = require("express");
const { addProduct,removeProduct,singleProductView,listProducts } = require("../Controllers/productController");
const upload = require("../Middlewares/multer");
const productRouter = express.Router();

productRouter.post("/add", upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 }
]), addProduct);  // ✅ Add middleware and controller function

productRouter.delete("/remove/:id",removeProduct)
productRouter.get("/singleproductview/:id",singleProductView)
productRouter.get("/listProducts",listProducts)
module.exports = productRouter;
