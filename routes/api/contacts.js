const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const { schemas } = require("../../models/contactsSchema");

const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.add));

router.delete("/:id", ctrlWrapper(ctrl.removeById));

router.patch(
  "/:id/favorite",
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

router.put(
  "/:id",
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateById)
);

module.exports = router;
