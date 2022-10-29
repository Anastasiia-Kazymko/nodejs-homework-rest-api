const bcrypt = require("bcrypt");
const gravatar = require("gravatar");

const { User } = require("../../models/userSchema");
const { RequestError } = require("../../helpers");

const signup = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const result = await User.create({
    email,
    password: hashPassword,
    subscription,
    avatarURL,
  });
  res.status(201).json({
    email: result.email,
    subscription: result.subscription,
  });
};

module.exports = signup;
