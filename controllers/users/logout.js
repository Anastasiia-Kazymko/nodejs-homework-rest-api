const { User } = require("../../models/userSchema");

const logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });

  res.json({
    massage: "Logout success",
  });
};

module.exports = logout;