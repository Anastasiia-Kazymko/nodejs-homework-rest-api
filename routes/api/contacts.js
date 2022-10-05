const { request } = require("express");
const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const schema = require("../../schemas/contacts");

const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:Id", ctrlWrapper(ctrl.getById));

router.post("/", validateBody(schema.addSchema), ctrlWrapper(ctrl.add));

router.delete("/:Id", ctrlWrapper(ctrl.removeById));

router.put(
  "/:Id",
  validateBody(schema.addSchema),
  ctrlWrapper(ctrl.updateById)
);

module.exports = router;
