const express = require("express");

const ctrl = require("../../controllers/contacts");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:Id", ctrl.getById);

router.post("/", ctrl.add);

router.delete("/:Id", ctrl.removeById);

router.put("/:Id", ctrl.updateById);

module.exports = router;
