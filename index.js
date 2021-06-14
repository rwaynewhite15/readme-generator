// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const questions = require("./questions.js");
const licenseIcon = require("./badges.js")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
          return console.log(err);
        }
  
        console.log('Success!');
      });
}

// TODO: Create a function to initialize app
function init() {
    console.log('User input required to generate README.md file.');
  inquirer
  .prompt(questions)
  .then(data => {
    switch(data.license) {
      case 'The MIT License':
        badge = licenseIcon.mit
        break;
      case 'Apache 2.0 License':
        badge = licenseIcon.apache
        break;
      case 'Mozilla Public License 2.0':
        badge = licenseIcon.moz
        break;
      case 'IBM Public License Version 1.0':
        badge = licenseIcon.ibm
        break;
      case 'No License':
        badge = licenseIcon.none
        break;
      
    }
  const output = generateMarkdown(data);
    writeToFile("readme.md", output)
  });
}

// Function call to initialize app
init();
