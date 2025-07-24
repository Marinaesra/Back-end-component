let users = [
  {
    id: 1,
    name: "Juan Perez",
    username: "Juanito",
    email: "juan.perez@example.com",
    password: "1234",
    photo: "https://randomuser.me/api/portraits/men/15.jpg",
    role: "user",
  },
  {
    id: 2,
    name: "Maria Lopez",
    username: "Maria",
    email: "maria.lopez@example.com",
    password: "1234",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    role: "user",
  },
  {
    id: 3,
    name: "Carlos Garcia",
    username: "Carlitos",
    email: "carlos.garcia@example.com",
    password: "1234",
    photo: "https://randomuser.me/api/portraits/men/10.jpg",
    role: "admin",
  },
];

exports.getUserInfo = async (userId) => {
  const userAux = users.find((u) => u.id == userId);

  return userAux;
};

exports.doLogin = async (username, password) => {
  const userAux = users.find(
    (u) => u.username == username && u.password == password
  );

  return userAux;
};

exports.createUserInfo = async (newUser) => {
  const userAux = {
    id: Math.random().toFixed(5) * 10000,
    ...newUser,
  };

  users.push({
    ...userAux,
  });

  return userAux;
};

exports.addProductToCart = async (userId, productId) => {
  const userAux = users.find((u) => u.id == userId);

  if (userAux.cart) {
    userAux.cart.push({
      productId,
    });
  } else {
    userAux.cart = [
      {
        productId,
      },
    ];
  }

  const userListAux = users.filter((u) => u.id != userId);
  userListAux.push(userAux);

  users = userListAux;

  return userAux;
};

exports.modifyUser = async (editedUser) => {
  const userAux = users.filter((u) => u.id != editedUser.id);
  userAux.push(editedUser);
  users = userAux;
  console.log(editedUser)
  return editedUser;
};
