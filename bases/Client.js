const { Client } = require('discord.js');

class CustomClient extends Client {
  /**
   * @param {Object} options The options passed to the client
   * @param {Object} options.clientOptions The client options used by the original discord.js client
   * @param {Object} options.config The filepath to the config file
   * @param {Object} options.perms The permission levels file
   */
  constructor(options) {
    // Initialise discord.js client with supplied client options
    super(options.clientOptions);
    // Maps for bot commands and events
    this.commands = new Map();
    this.events = new Map();
    // Client variables
    /**
     * The bot's configuration - empty if no file was specified
     * @type {Object}
     */
    this.config = options.config;
    /**
     * The bot's permission levels
     * @type {Object}
     */
    this.perms = options.perms;

    // Inform the user that the client has been initialised
    console.log(`Client initialised. You are using node ${process.version}.`);
  }

  /**
   * Logs the client in
   * @param {String} token The token used to log the client in
   */
  login(token) {
    // Log super in with the specified token
    super.login(token);

    // Return this client to allow chaining of function calls
    return this;
  }
}
module.export = CustomClient;
