const contacts = require("../../models/contacts");

const { RequestError } = require("../../helpers");

const removeById = async (req, res) => {
  const { Id } = req.params;
  const result = await contacts.removeContact(Id);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json({ message: "Сontact deleted" });
};

module.exports = removeById;
