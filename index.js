// TODO: Include packages needed for this application
const genMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create a function to write README file
function writeToFile(response) {
  const readMe = response

  fs.writeFile('generatedREADME.md', readMe, (err) =>
  err ? console.log(err) : console.log('Success! You made a new ReadMe file!'))
}

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
      'Apache 2.0', 
      'MIT',
      'BSD 2-Clause',
      'BSD 3-Clause',
      'Boost Software',
      'Creative Commons Zero v1.0',
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
    message: 'What is your GitHub URL?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your contact email?'
  }
  ])
  .then((response => {
    writeToFile(genMarkdown(response))
  }))
}

// Function call to initialize app
init();
