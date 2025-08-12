const express = require("express");
const { signup, login } = require("../controllers/loginContoller");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");


//Creo que no es necesario (BORRAR UNA VEZ FUNCIONE)

router.post("/signup", signup);
router.post("/login", login);
router.get("/refresh_token", verifyToken);

module.exports = router;