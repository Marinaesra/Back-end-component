const userModel = require("../models/userModels");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/authToken");

const {
  getUserInfo,
  doLogin,
  createUserInfo,
  addProductToCart,
  modifyUser,
  deleteUser,
} = require("../services/userService");

exports.getUserController = async (req, res) => {
  const userId = req.params.id;

  const resUserInfo = await getUserInfo(userId);

  res.status(200).send({ user: resUserInfo });
};

exports.loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel
      .findOne({ email: email })
      .select("name email password role");

    if (!user) {
      return res.status(404).send("Usuario o contraseña no validos");
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(404).send("Usuario o contraseña no validos");
    }

    const payload = {
      id: user.id,
      name: user.name,
      role: user.role,
    };

    const token = generateToken(payload, false);
    const token_refresh = generateToken(payload, true);

    res
      .status(200)
      .send({ status: "Success", data: user, token, token_refresh });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

exports.createUserController = async (req, res) => {

  try {
    const { name, email, password } = req.body;
    const newUser = {
      name,
      email,
      password: await bcrypt.hash(password, 10),
    };
    console.log(newUser)
    
    await userModel.create(newUser);
    res
      .status(200)
      .send({
        status: "Success",
        message: "El usuario se creo correctamente",
        newUser,
      });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

exports.addProductUserController = async (req, res) => {
  const userId = req.body.userId;
  const productId = req.body.productId;

  const resUserInfo = await addProductToCart(userId, productId);

  res.status(200).send({ user: resUserInfo });
};


exports.modifyUserController = async (req, res) => {

  try {
    const idUser = req.params.id;
    const newUser = req.body;
    const modifyUser = await userModel.findByIdAndUpdate(
      idUser,
      newUser,
      {
        new: true,
        runValidators: true
      });
      
   const payload = {
      id: modifyUser._id,
      name: modifyUser.name,
      role: modifyUser.role,
    };

    const token = generateToken(payload, false);
    const token_refresh = generateToken(payload, true);

    if (!modifyUser) {
      return res.status(200).send("No hay usuario");
    }
    res.status(200).send({ status: "Success", data: modifyUser });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};



exports.deleteUserController = async (req, res) => {
  try {
    const idUser = req.params.id; 
        await userModel.findByIdAndDelete(idUser);

    res
      .status(200)
      .send({ status: "Success", message: "El usuario se elimino correctamente" });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

