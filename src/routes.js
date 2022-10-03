const constants = require('../app-constants');

module.exports = {
  '/challenge-extensions': {
    post: {
      controller: 'ChallengeExtensionController',
      method: 'extendChallenge',
      auth: 'jwt'
    }
  },
  '/health': {
    get: {
      controller: 'HealthController',
      method: 'basicHealth'
    }
  }
}
