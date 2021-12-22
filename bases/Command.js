class BaseCommand {
  constructor(name, category, aliases) {
    this.name = name;
    this.category = category;
    this.aliases = aliases;
  }
}
module.exports = BaseCommand;
