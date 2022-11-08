const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const { User } = require("../../models/userSchema");
const { RequestError, sendEmail } = require("../../helpers");

const { BACE_URL } = process.env;

const signup = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();
  const result = await User.create({
    email,
    password: hashPassword,
    subscription,
    avatarURL,
    verificationToken,
  });

  const mail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BACE_URL}/api/signup/verify/${verificationToken}">Click to verify you email</a>`,
  };

  await sendEmail(mail);

  res.status(201).json({
    email: result.email,
    subscription: result.subscription,
  });
};

module.exports = signup;
