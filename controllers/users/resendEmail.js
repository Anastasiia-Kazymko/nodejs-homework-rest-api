const { User } = require("../../models/userSchema");
const { RequestError, sendEmail } = require("../../helpers");

const { BACE_URL } = process.env;

const resendEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.verify) {
    throw RequestError(404);
  }
  const mail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BACE_URL}/api/signup/verify/${user.verificationToken}">Click to verify you email</a>`,
  };
  await sendEmail(mail);

  res.json({
    message: "Email send success",
  });
};

module.exports = resendEmail;
