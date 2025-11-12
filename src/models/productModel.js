const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    minlength: [2, "El nombre debe de tener al menos 2 caracteres"],
    maxlength: 30,
  },
  descrption: {
    type: String,
    required: [false, "La descripcion es obligatoria"],
  },

  price: {
    type: String,
    required: [true, "El precio es obligatorio"],
  },

  image_url: {
    type: String,
  },
});

const productModel = mongoose.model("Product", productSchema, "product");

module.exports = productModel;
