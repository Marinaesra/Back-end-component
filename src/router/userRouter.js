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

router.get("/:id",verifyToken, getUserController);
router.post("/", loginUserController);
router.post("/register",createUserController);
router.put("/addProduct", verifyToken, addProductUserController);
router.patch("/modify/:id",verifyToken, modifyUserController);
router.delete("/delete/:id", verifyToken, deleteUserController)

module.exports = router;
