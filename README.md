# Challenge extension API

## Prerequisites

- NodeJS (v8+)
- git
- AWS S3

## Configuration

Configuration for the application is at `config/default.js` and `config/production.js`.
Create a local configuration file at `config/local.js` containing keys

The following parameters can be set in config files or in env variables:

- LOG_LEVEL: the log level, default is 'debug', in production default is 'info'
- PORT: the server port, default is 3000
- API_PREFIX: the API path prefix, default is empty string ''

- AUTH_SECRET: The authorization secret used during token verification.
- VALID_ISSUERS: The valid issuer of tokens.
- AUTH0_URL: AUTH0 URL, used to valid user token
- AUTH0_PROXY_SERVER_URL: AUTH0 proxy server URL, used to valid user token
- AUTH0_AUDIENCE: AUTH0 audience, used to valid user token
- TOKEN_CACHE_TIME: AUTH0 token cache time, used to valid user token
- AUTH0_CLIENT_ID: AUTH0 client id, used to valid user token
- AUTH0_CLIENT_SECRET: AUTH0 client secret, used to valid user token

- M2M_CLIENT_ID: Auth0 M2M Client ID for with all group related scope
- M2M_CLIENT_SECRET: Auth0 M2M Client Secret for client ID

- RESOURCE_API_URL: The Resources API URL
- ADMIN_TOOL_API_URL: The Admin tool API URL

## Local Deployment

- Install dependencies `npm install`
- Start app in dev mode `npm run dev` - it would use [Nodemon](https://nodemon.io/), and restart the app on every code change.
- Or start app in prod mode `npm start`
- App will be running at `http://localhost:3000`

-------------------------------------------
