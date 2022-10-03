/**
 * The basic health
 * @param {Object} req The request
 * @param {Object} res The response
 */
async function basicHealth (req, res) {
  res.send({ "ok":"message received"});
}
  
  module.exports = {
    basicHealth
  }
