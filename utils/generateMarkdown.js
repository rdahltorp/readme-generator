// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "None") {
    return ``
  }
  if(license === "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if(license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if(license === "BSD 2-Clause") {
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  }
  if(license === "BSD 3-Clause") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
  if(license === "Boost Software") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
  if(license === "Creative Commons Zero v1.0") {
    return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
  }
  if(license === "Mozilla Public 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  if(license === "Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }
}
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "None") {
    return `- [License](#license)`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `
  ${renderLicenseBadge(license)}
    
  ## License
  This application is covered by the ${license} license.
    `
  } else {
    return ``
  }
}


// TODO: Create a function to generate markdown for README //BUILD OUT A README HERE
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ${renderLicenseSection(data.license)}
  
  ## Table of Contents 

  ${renderLicenseLink(data.license)}
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#Contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installInst}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}

  ## Questions

  To view the repo for this app and repos for other projects, you can visit my GitHib profile: https://github.com/${data.gitHubUsername}

  And if you need to contact me with any questions you can do so at: ${data.email}

`;
}

module.exports = generateMarkdown;
