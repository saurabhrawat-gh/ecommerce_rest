const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    name: [true, "Please enter product name"],
    trim: true,
  },
  description: {
    type: String,
    name: [true, "Please enter product description"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
    maxLength: [8, "Price cannot exceed 8 figures"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please entr product category"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter product number"],
    maxLength: [8, "There could be a maximum of 8 figure stock"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      ratings: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Product = model("Product", productSchema);

module.exports = Product;
