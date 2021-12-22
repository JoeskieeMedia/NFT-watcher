const Client = require('./bases/Client');
const config = require('./config/client');

const client = new Client(config);
client.registerCommands(config.Paths.commands);
client.registerEvents(config.Paths.events);
client.login(config.Token);
