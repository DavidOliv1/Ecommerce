import express from "express";
import ProductController from "../controllers/productController.js";

const router = express.Router();

router.route("/product/new").post(ProductController.createProduct);
router.route("/products").get(ProductController.getAllProducts);
router
  .route("/products/:id")
  .put(ProductController.updateProduct)
  .delete(ProductController.deleteProduct)
  .get(ProductController.getProductById);

export default router;
