const { Command, flags } = require('@oclif/command');
const ComponentCreator = require('../templates/components/component');

class GenerateCmd extends Command {
  async run() {
    const {flags} = this.parse(GenerateCmd)
    if (flags.component) {
      this.generateComponent(flags.component); 
    }
    if (flags.filter) {
      this.generateFilter(flags.filter); 
    }
  }

  generateComponent(name) {
    const comp = new ComponentCreator(name);
    comp.createComponentDir();
    comp.createScriptFile();
    comp.createStyleFile();
    comp.createTemplateFile();
    comp.createVueFile();
  }
  
  generateFilter(name) {
    console.log(`filter ${name}`)
    console.log("Current Directory path", this.currentFolder);
  }
}

GenerateCmd.description = `Bhaag`

GenerateCmd.flags = {
  component: flags.string({char: 'c', description: 'Generate a Component'}),
  // filter: flags.string({char: 'f', description: 'Generate a Filter'}),
}

GenerateCmd.aliases = ['g']

module.exports = GenerateCmd
