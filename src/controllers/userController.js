//const userModel = require("../models/userModels");
//const bcrypt = require("bcrypt");
//const generateToken = require("../utils/authToken")
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

/*
exports.getUserController = async (req, res) => {
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
      _id: user._id,
      name: user.name,
      role: user.role,
    };

    const token = generateToken(payload, false);
    const token_refresh = generateToken(payload, true);

    res
      .status(200)
      .send({ status: "Success", data: user, token: token, token_refresh });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};
*/

exports.loginUserController = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const resUserInfo = await doLogin(username, password);
    if (!resUserInfo) throw new Error("No existe el usuario");
    res.status(200).send({ user: resUserInfo });
  } catch (error) {
    res.sendStatus(500);
  }
};
/*
exports.loginUserController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = {
      name,
      email,
      password: await bcrypt.hash(password, 10),
    };
    await userModel.create(newUser);

    const to = email;
    const subject = "Bienvenido a nuestra App";
    const html = `<h3> Hola ${name} gracias por registrarte en nuestra aplicación </h3>
                  <p> Si tienes cualquier duda contacta con nosotros </p>
                  `;

    await sendEmail(to, subject, html);

    res.status(200).send("El usuario se ha creado correctamente");
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};
*/

exports.createUserController = async (req, res) => {
  const newUser = req.body.newUser;

  const resUserInfo = await createUserInfo(newUser);

  res.status(200).send({ user: resUserInfo });
};

/*exports.createUserController = async (req, res) => {
  const isUserUser =
    (await userModel.findById(req.payload._id)).role === "user";
  if (!isAdminUser) {
    throw new Error("El adminitrador no tiene permisos de usuario");
  }
  try {
    const newUser = req.body;
    await userModel.create(newUser);
    res.status(200).send("El usuario se creo correctamente");
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};*/

exports.addProductUserController = async (req, res) => {
  const userId = req.body.userId;
  const productId = req.body.productId;

  const resUserInfo = await addProductToCart(userId, productId);

  res.status(200).send({ user: resUserInfo });
};

exports.modifyUserController = async (req, res) => {
  const editedUser = req.body.user;
  const resUserInfo = await modifyUser(editedUser);
  res.status(200).send({ user: resUserInfo });
};
/*
exports.modifyUserController = async (req, res) => {
  const isUserUser =
    (await userModel.findById(req.payload._id)).role === "user";
  if (!isAdminUser) {
    throw new Error("El administrador no tiene permisos de usuario");
  }
  try {
    const idUser = req.params.idUser;
    const newUser = req.body;
    const modifyUser = await userModel.findByIdAndUpdate(
      idUser,
      newUser,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!modifyUser) {
      return res.status(200).send("No hay usuario");
    }
    res.status(200).send({ status: "Success", data: modifyUser });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};
*/

exports.deleteUserController = async (req, res) => {
  const userDelete = req.params.id;

  const resUserInfo = await deleteUser(userDelete);

  res.status(200).send({ user: resUserInfo });
};
/*
exports.deleteUserController = async (req, res) => {
 const isUserUser =
    (await userModel.findById(req.payload._id)).role === "user";
  if (!isAdminUser) {
    throw new Error("El administrador no tiene permisos de usuario");
  }
  try {
    const idUser = req.params.idUser;
    await userModel.findByIdAndDelete(idUser);
    res
      .status(200)
      .send({ status: "Sucess", data: "El usuario se elimino correctamente" });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};
*/