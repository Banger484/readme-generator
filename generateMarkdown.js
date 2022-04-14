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
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ## Table of Contents:
  #### [Description](#description)
  #### [Installation](#installation)
  #### [Usage](#usage)
  #### [Guidelines](#guidelines)
  #### [Tests](#tests)
  #### [License](#license)
  #### [User Info](#user-info)

  # Description
  ${data.description}
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # Contribution Guidelines
  ${data.guidelines}
  # Tests
  ${data.tests}
  # License
  ${data.license}
  # User Info
  GitHub Username: ${data.gitName}\
  Email Address:   ${data.email}

`;
}

module.exports = generateMarkdown;
