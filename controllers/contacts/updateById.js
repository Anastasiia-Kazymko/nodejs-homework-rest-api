const contacts = require("../../models/contacts");

const { RequestError } = require("../../helpers");

const updateById = async (req, res) => {
  const { Id } = req.params;
  const result = await contacts.updateContact(Id, req.body);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = updateById;
