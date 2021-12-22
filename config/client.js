require('dotenv').config();

/**
 * @typedef EnvironmentConfiguration
 * @prop {string} DISCORD_TOKEN
 */

/**
 * @type {EnvironmentConfiguration}
 */
const config = {
  clientOption: {
    intents: 32767,
  },
  Token: process.env.DISCORD_TOKEN,
  Paths: {
    commands: '../commands',
    events: '../events',
  },
};
module.exports = config;
