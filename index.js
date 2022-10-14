// TODO: Include packages needed for this application
const genMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer')

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([{
    type: 'input',
    name: 'projectTitle',
    message: 'What is the name of your project/app?'
  },
  {
    type: 'input',
    name: 'description',
    message: "Provide a basic description of your project:"
  },
  {
    type: 'input',
    name: 'installInst',
    message: 'How can the viewer install the code?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is this code used?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What licesnse does your project use?',
    //FIX THE CHOICES SO THEY MATCH THE EXACT LOOK OF IN THE GITHUB BADGES URL - https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
    choices: [
      'None', 
      'Apache_2.0', 
      'MIT',
      'BSD 2-Clause "Simplified"',
      'BSD 3-Clause "New" or "Revised"',
      'Boost Software',
      'Creative Commons Zero v1.0 Universal',
      'Eclipse Public 2.0',
      'GNU General Public v2.0',
      'Mozilla Public 2.0',
      'Unlicense'
    ]
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can individuals contribute (if they are able to)?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What tests if any did you run?'
  }, 
  {
    type: 'input',
    name: 'gitHubUsername',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your contact email?'
  }
  ])
  .then((response) => console.log(genMarkdown(response))) //This to test inputs were recorded.
}

// Function call to initialize app
init();
