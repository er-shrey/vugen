const chalk = require("chalk");
const file = require('../../library/files');

class ComponentCreator{
    constructor(name) {
        this.name = name;
        this.currentFolder = file.getDirectoryPath();
    }

    name = "";
    currentFolder = "";
 
    createComponentDir() {
        const message = chalk.green.bold("\nComponent directory created: ") + chalk.yellow.bold(`${this.name}Component`);

        /* Creating Component Directory */
        file.createDirectory(`${this.currentFolder}/${this.name}Component`, message);
    }

    createVueFile() {
        const data = `<template src="./${this.name}Component.html"></template>\n<script src="./${this.name}Component.js"></script>\n<style scoped src="./${this.name}Component.css"></style>`;

        const message = chalk.green.bold("Component file created: ") + chalk.yellow.bold(`./${this.name}Component/${this.name}Component.vue`);

        /* Creating Component vue file */
        file.createFile(`${this.currentFolder}/${this.name}Component/${this.name}Component.vue`, data, message);
    }

    createTemplateFile() {
        const data = `<div class="${this.name}Container">\n\n</div>`;

        const message = chalk.green.bold("Template file created: ") + chalk.yellow.bold(`./${this.name}Component/${this.name}Component.html`);

        /* Creating Component template file */
        file.createFile(`${this.currentFolder}/${this.name}Component/${this.name}Component.html`, data, message);
    }

    createStyleFile() {
        const data = `.${this.name}Container {\n\twidth: 100%;\n}`;

        const message = chalk.green.bold("Style file created: ") + chalk.yellow.bold(`./${this.name}Component/${this.name}Component.css`);
        
        /* Creating Component Style file */
        file.createFile(`${this.currentFolder}/${this.name}Component/${this.name}Component.css`, data, message);
    }

    createScriptFile() {
        const data = `export default {\n\tname: "${this.name}Component",\n}`;

        const message = chalk.green.bold("Script file created: ") + chalk.yellow.bold(`./${this.name}Component/${this.name}Component.js`);

        /* Creating Component Script file */
        file.createFile(`${this.currentFolder}/${this.name}Component/${this.name}Component.js`, data, message);
    }
}

module.exports = ComponentCreator;