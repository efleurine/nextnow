/**
 * if there is no cookie this should add and send it back
 *
 */

const micro = require("micro");

module.exports = micro((req, res) => {
  return "Hello from Micro on Now 2.0!";
});
