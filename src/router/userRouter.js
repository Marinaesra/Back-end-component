const express = require("express");
const {
  getUserController,
  loginUserController,
  createUserController,
  addProductUserController,
  modifyUserController,
} = require("../controllers/userController");

const router = express.Router();

router.get("/:id", getUserController);
router.post("/", loginUserController);
router.post("/register", createUserController);
router.put("/addProduct", addProductUserController);
router.post("/modify/:id", modifyUserController);

module.exports = router;
