const express = require("express");

const { validateBody } = require("../../middlewares");

const { ctrlWrapper } = require("../../helpers");

const { schemas } = require("../../models/userSchema");

const ctrl = require("../../controllers/users");

const router = express.Router();

router.post(
  "/signup",
  validateBody(schemas.signupSchema),
  ctrlWrapper(ctrl.signup)
);

router.post(
  "/login",
  validateBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

module.exports = router;
