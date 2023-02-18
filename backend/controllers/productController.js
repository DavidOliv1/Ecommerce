import Products from "../models/productModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import ApiFeatures from "../utils/apifeatures.js";

class ProductController {
  static createProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Products.create(req.body);
    res.status(201).json({
      success: true,
      product,
    });
  });
  static getAllProducts = catchAsyncErrors(async (req, res) => {
    const resultPerPage = 5;
    const productCount = await Products.countDocuments();
    const apiFeature = new ApiFeatures(Products.find(), req.query)
      .search()
      .filter()
      .pagination(resultPerPage);
    const products = await apiFeature.query;
    res.status(200).json({
      success: true,
      products,
    });
  });
  static getProductById = catchAsyncErrors(async (req, res, next) => {
    const id = req.params.id;
    const product = await Products.findById(id);
    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }
    res.status(200).json({
      success: true,
      product,
      productCount,
    });
  });
  static updateProduct = catchAsyncErrors(async (req, res, next) => {
    const id = req.params.id;
    let product = await Products.findById(id);
    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }
    product = await Products.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModidy: false,
    });
    res.status(200).json({
      success: true,
      product,
    });
  });
  static deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const id = req.params.id;
    const product = await Products.findById(id);
    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }
    await product.remove();
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  });
}

export default ProductController;
