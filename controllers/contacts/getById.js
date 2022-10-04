const contacts = require("../../models/contacts");

const { RequestError } = require("../../helpers");

const getById = async (req, res, next) => {
  try {
    const { Id } = req.params;
    const result = await contacts.getContactById(Id);
    if (!result) {
      throw RequestError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
