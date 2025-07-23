const {
  getAllProduct,
  getProductDetails,
} = require("../services/productService");

exports.getAllProductsController = async (req, res) => {
  const resProduct = await getAllProduct();
  res.status(200).send({ products: resProduct });
};

exports.getProductDetailsController = async (req, res) => {
  const productId = req.params.id;

  const resProductsDetails = await getProductDetails(productId);

  res.status(200).send({ product: resProductsDetails });
};
