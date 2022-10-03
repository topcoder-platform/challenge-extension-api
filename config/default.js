/**
 * The configuration file.
 */

module.exports = {
  LOG_LEVEL: 'debug',
  PORT: 3000,
  // it is configured to be empty at present, but may add prefix like '/api/v5'
  API_PREFIX: '',
  AUTH_SECRET: 'mysecret',
  VALID_ISSUERS: '["https://api.topcoder-dev.com", "https://api.topcoder.com","https://topcoder-dev.auth0.com/"]',

  M2M_CLIENT_ID: '',
  M2M_CLIENT_SECRET: '',

  // Auth0 config params
  AUTH0_URL: 'https://topcoder-dev.auth0.com/oauth/token',
  AUTH0_PROXY_SERVER_URL: 'https://auth0proxy.topcoder-dev.com/token',
  AUTH0_AUDIENCE: 'https://m2m.topcoder-dev.com/',
  TOKEN_CACHE_TIME: 86400000,

  RESOURCE_API_URL: 'https://api.topcoder-dev.com/v5/resources',
  ADMIN_TOOL_API_URL: 'https://apps.topcoder.com/admintool/openPhaseExtensionAjax',

  MANAGER_ROLE_ID: '0e9c6879-39e4-4eb6-b8df-92407890faf1'
}
