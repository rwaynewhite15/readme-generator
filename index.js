// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Give a description of your project.'
      },
      {
        type: 'list',
        message: 'Choose a license.',
        name: 'license',
        choices: ['MIT', 'Apache License 2.0', 'GPL License', 'BSD License']
      },
];

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
    console.log('test');
    inquirer
  .prompt(questions) // Write the user response to a file by chaining the below callback method to the prompt above.
  .then(function(data) {
  const output = generateMarkdown(data);
    writeToFile("readme.md", output)
  });
}

// Function call to initialize app
init();
