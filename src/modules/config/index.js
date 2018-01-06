// This module should export a default object containing the values that will
// be delivered to the client via the initial document load. This object will be
// stringified and injected into the document markup; then will be hydrated using
// the config loader.

export default {
  DEPLOY_ENV: process.env.DEPLOY_ENV || 'development'
};
