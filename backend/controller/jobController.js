const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Auth = require("../model/authSchema");
const job = require("../model/jobSchema");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const apply = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    if (!fullName || !email || !password) {
      return res.status(504).json("please input the necessary information");
    }
    const existing_application = await Auth.findOne({ email });
    if (existing_application) {
      return res.status(200).json("existing_applicant");
    }
    const salt = await bcrypt.genSalt(10);
    hashedpassword = await bcrypt.hash(password, salt);

    const new_application = await Auth.create({
      fullName,
      email,
      password: hashedpassword,
    });
    res.status(200).json({
      msg: "application successful",
      email: new_application.email,
      id: new_application._id,
      token: generateToken(new_application._id),
    });
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password)
      throw new Error(`pls input your email and password`);
    const person = await Auth.findOne({ email });
    if (!person) {
      return res.status(403).json({ message: "incorrect information" });
    }
    const comparePassword = await bcrypt.compare(password, person.password);
    if (!comparePassword) throw new Error("incorrect password");
    res.status(200).json({
      msg: `welcome ${person.fullName}`,
      token: generateToken(person._id),
    });
  } catch (error) {
    res.status(502).json({ error: error.message });
  }
};
const all_app = async (req, res) => {
  const user = await Auth.find();
  res.status(200).json({
    data: user,
  });
};
const me = (req, res) => {
  try {
    res.status(200).json({ user: req.user });
    // console.log(req.user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { apply, login, all_app, me };
