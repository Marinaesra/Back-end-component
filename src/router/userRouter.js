const express = require("express");
const {
  getUserController,
  loginUserController,
  createUserController,
  addProductUserController,
  modifyUserController,
  deleteUserController,
} = require("../controllers/userController");
const { verifyToken, verifyAdmin } = require("../middlewares/auth");

const router = express.Router();

router.get("/:id", getUserController);
router.post("/", loginUserController, verifyToken, verifyAdmin);
router.post("/register", createUserController, verifyToken, verifyAdmin);
router.put("/addProduct", addProductUserController, verifyToken, verifyToken);
router.post("/modify/:id", modifyUserController,verifyToken);
router.delete("delete/:id", deleteUserController, verifyToken)

module.exports = router;
