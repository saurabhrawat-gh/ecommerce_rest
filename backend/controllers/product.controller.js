const Product = require("../models/product.model");
const ErrorHandler = require("../utils/error-handler");
const ApiFeatures = require('../utils/apifeatures')

// Create Product - Admin
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

// Update Product - Admin
exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
};

// Delete Product - Admin
exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  await Product.findOneAndRemove(req.params.id);

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
};

// Get product details
exports.getProductDetails = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
};

// Get all products (or search a particular one)
exports.getAllProducts = async (req, res, next) => {
  const products = await new ApiFeatures(Product, req.query.keyword)?.search()

  res.status(200).json({
    success: true,
    products,
  });
};
