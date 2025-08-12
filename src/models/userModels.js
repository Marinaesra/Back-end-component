const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    minlength: [5, "El nombre debe de tener al menos 5 caracteres"],
    maxxlength: 30
  },
  userName: {
    type: String,
    required: [false, "El nombre de usuario no es obligatorio"],
  },
  email: {
    type: String,
    required: [true, "El email es obligatorio"],
    unique: [true, "El correo ya existe"],
    trim: true
  },
  password: {
    type: String,
    required: [true, "El password es obligatorio"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  photo: {
    type: String,
  },

});


const userModel = mongoose.model("User", userSchema, "user");
 
module.exports = userModel;