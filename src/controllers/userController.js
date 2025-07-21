const { getUserInfo, doLogin, createUserInfo, addProductToCart } = require("../services/userService");

exports.getUserController = async (req, res) => {
  const userId = req.params.id;

  const resUserInfo = await getUserInfo(userId);

  res.status(200).send({ user: resUserInfo });
};

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

exports.createUserController = async (req, res) => {
  const newUser = req.body.newUser;

  const resUserInfo = await createUserInfo(newUser);

  res.status(200).send({ user: resUserInfo });
};

exports.addProductUserController = async (req, res) => {
  const userId = req.body.userId
  const productId = req.body.productId

  const resUserInfo = await addProductToCart(userId, productId)

  res.status(200).send({ user: resUserInfo })
}
