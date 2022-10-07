const contacts = require("../../models/contacts");

const { RequestError } = require("../../helpers");

const getById = async (req, res) => {
  const { Id } = req.params;
  console.log(req.params);
  const result = await contacts.getContactById(Id);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json(result);
};

module.exports = getById;
