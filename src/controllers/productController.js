const { getAllProduct } = require("../services/productService")


exports.getAllProductsController = async (req, res) => {
    const resProduct = await getAllProduct()

    res.status (200).send({ products: resProduct})
}