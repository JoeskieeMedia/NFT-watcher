/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const { Client } = require('discord.js');
const path = require('path');
const fs = require('fs').promises;
const BaseCommand = require('./Command');
const BaseEvent = require('./Event');

class CustomClient extends Client {
  /**
   * @param {Object} options The options passed to the client
   * @param {Object} options.clientOptions The client options used by the original discord.js client
   * @param {Object} options.config The filepath to the config file
   * @param {Object} options.perms The permission levels file
   */
  constructor(options) {
    // Initialise discord.js client with supplied client options
    super(options.clientOption);
    // Maps for bot commands and events
    this.commands = new Map();
    this.events = new Map();
    // Client variables
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

  async registerCommands(dir = '') {
    const filePath = path.join(__dirname, dir);
    const files = await fs.readdir(filePath);
    for (const file of files) {
      if (file.endsWith('.js')) {
        const Command = require(path.join(filePath, file));
        if (Command.prototype instanceof BaseCommand) {
          const cmd = new Command();
          this.commands.set(cmd.name, cmd);
        }
      }
    }
  }

  async registerEvents(dir = '') {
    const filePath = path.join(__dirname, dir);
    const files = await fs.readdir(filePath);
    for (const file of files) {
      if (file.endsWith('.js')) {
        const Event = require(path.join(filePath, file));
        if (Event.prototype instanceof BaseEvent) {
          const event = new Event();
          this.events.set(event.name, event);
          this.on(event.name, event.run.bind(event, this));
        }
      }
    }
  }
}
module.exports = CustomClient;
