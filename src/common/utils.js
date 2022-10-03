const _ = require('lodash');
const config = require('config')
const axios = require('axios')

const tcCoreLibAuth = require('tc-core-library-js').auth;
const m2m = tcCoreLibAuth.m2m(config);

/**
 * Common method to generate M2M token for all services.
 */
async function getM2MToken() {
  return m2m.getMachineToken(config.M2M_CLIENT_ID, config.M2M_CLIENT_SECRET);
}

/**
 * Check if the user has admin role
 * @param {Object} authUser the user
 */
function hasAdminRole(authUser) {
  if (authUser && authUser.roles) {
    for (let i = 0; i < authUser.roles.length; i++) {
      if (authUser.roles[i].toLowerCase() === constants.UserRoles.Admin.toLowerCase()) {
        return true
      }
    }
  }
  return false
}

/**
 * Get challenge managers
 * @param {String} challengeId the challenge ID
 */
async function getChallengeManagers (challengeId) {
  const token = await getM2MToken()

  const res = await axios.get(`${config.RESOURCE_API_URL}?challengeId=${challengeId}&roleId=${config.MANAGER_ROLE_ID}`, { headers: { authorization: `Bearer ${token}` } })
  return res.data
}

module.exports = {
  getM2MToken,
  hasAdminRole,
  getChallengeManagers
}
