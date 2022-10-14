const inquirer = require('inquirer')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "None") {
    return `[![License](https://img.shields.io/badge/license-${license}-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
}
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "None") {
    return `[License](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `${renderLicenseBadge(license)}`
  }
}


// TODO: Create a function to generate markdown for README //BUILD OUT A README HERE
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ${renderLicenseSection(data.license)}
  
  ## Table of Contents 

  - [License](#license)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Contact](#contact)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installInst}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributing}
  
  ## Tests
  ${data.tests}

  ## Contact

  To view the repo for this app and repos for other projects, you can visit my GitHib profile: ${data.gitHubUsername}

  And if you need to contact me you can do so at: ${data.email}

`;
}

module.exports = generateMarkdown;
