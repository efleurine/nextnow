/**
 * if there is no cookie this should add and send it back
 *
 */

const { send } = require("micro");

module.exports = async (req, res) => {
  const statusCode = 200;
  const data = "Micro working just fine";

  send(res, statusCode, data);
};
