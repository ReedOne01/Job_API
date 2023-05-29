const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
  fullName: {
    type: "string",
    required: [true, "pplease enter your fullname"],
  },
  email: {
    type: "string",
    required: [true, "please provide a valid email address"],
    unique: true,
  },
  password: {
    type: "string",
    required: [true, "please provide your password"],
  },
});

module.exports = mongoose.model("uth", authSchema);
