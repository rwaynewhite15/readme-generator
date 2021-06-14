module.exports = [
    {
      type: 'input',
      name: 'name',
      message: 'Enter first and last name.'
    },
    {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give a description of your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Describe how to install dependencies required for this project:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Add screenshot file to the "assets/images" folder and enter file name here:'
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Who are the contributors to this project?'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What testing was ran to help develop this project?',
    },
    {
    type: 'list',
    message: 'Choose a license.',
    name: 'license',
    choices: ['The MIT License', 'Apache 2.0 License', 'Mozilla Public License 2.0', 'IBM Public License Version 1.0', 'No License']
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    },
];