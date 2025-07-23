const express = require("express");
const {
  getAllProductsController,
  getProductDetailsController,
} = require("../controllers/productController");

const router = express.Router();

router.get("/products", getAllProductsController);
router.get("/details/:id", getProductDetailsController);

module.exports = router;
