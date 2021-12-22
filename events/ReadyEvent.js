const BaseEvent = require('../bases/Event');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }

  async run(client) {
    console.log(`${client.user.tag} has logged in.`);
  }
};
