const service = require('../services/ExtentChallengeService');

/**
 * Extend a challenge
 * @param {Object} req the request
 * @param {Object} res the response
 */
async function extendChallenge(req, res) {
  const result = await service.extendChallenge(req.authUser, req.body.challengeId, req.body.phaseName, req.body.extendedDateTime)
  res.json(result)
}

module.exports = {
  extendChallenge,
}
