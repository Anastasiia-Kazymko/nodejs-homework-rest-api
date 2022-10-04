const contacts = require("../../models/contacts");

const { RequestError } = require("../../helpers");
const { addSchema } = require("../../schemas/contacts");

const updateById = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw RequestError(400, error.message);
    }
    console.log(req.params);
    const { Id } = req.params;
    const result = await contacts.updateContact(Id, req.body);
    if (!result) {
      throw RequestError(404, "Not found");
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateById;
