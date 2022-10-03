const config = require('config')
const Joi = require('joi')
const axios = require('axios')
const logger = require('../common/logger')
const errors = require('../common/errors')
const { validPhases } = require('../../app-constants')
const { hasAdminRole, getChallengeManagers, getM2MToken } = require('../common/utils')

/**
 * Extend a challenge
 * @param {Object} authUser the user
 * @param {String} challengeId the challenge ID
 * @param {String} phaseName the name of the phase to extend
 * @param {Date} extendedDateTime the extended date
 */
async function extendChallenge(authUser, challengeId, phaseName, extendedDateTime) {
  try {
    // isMachine || admin
    if (!authUser.isMachine && !hasAdminRole(authUser)) {
      const challengeManagers = await getChallengeManagers(challengeId)
      if (!_.find(challengeManagers, m => _.toString(m.memberId) === _.toString(authUser.userId))) {
        throw new errors.ForbiddenError('You do not have access to this challenge to perform this operation!')
      }
    }
    const token = await getM2MToken()
  
    const data = `challengeId=${challengeId}&phaseName=${phaseName}&extendedDateTime=${extendedDateTime}`

    const options = {
      method: 'post',
      url: config.ADMIN_TOOL_API_URL,
      headers: {
        Authorization: `Bearer ${token}`
      },
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      data
    }


    const res = await axios(options)
    return res.data
  } catch (e) {
    throw new errors.ServiceUnavailableError(e.message)
  }
}

extendChallenge.schema = {
  challengeId: Joi.string().uuid().required(),
  phaseName: Joi.string().valid([validPhases.REGISTRATION, validPhases.SUBMISSION]).required(),
  extendedDateTime: Joi.date().required()
}


module.exports = {
  extendChallenge
}

logger.buildService(module.exports)
