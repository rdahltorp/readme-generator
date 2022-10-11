const inquirer = require('inquirer')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
inquirer
  .prompt([{
    type: 'input',
    name: 'projectTitle',
    message: 'What is the name of your project/app?'
  },
  {
    type: 'input',
    name: 'description',
    message: "Provide a basic descriotion of your project:"
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
    choices: [
      'None', 
      'Apache License 2.0', 
      'GNU General Public Licesnse v3.0', 
      'MIT License',
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "New" or "Revised" License',
      'Boost Software License',
      'Creative Commons Zero v1.0 Universal',
      'Eclipse Public License 2.0',
      'GNU Affero General Public License v3.0',
      'GNU General Public License v2.0',
      'GNU Lesser General Public Licesnse v2.1',
      'Mozilla Public License 2.0',
      'The Unlicense'
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
  .then((response) => console.log(response)) //This to test inputs were recorded.


function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
