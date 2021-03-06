// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT License') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license === "Apache License") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT License') {
    return `[The MIT license](https://opensource.org/licenses/MIT)`
  } else if (license === "Apache License") {
    return `[Apache License](http://www.apache.org/licenses/LICENSE-2.0)`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license.license === 'MIT License') {
    return `
    Copyright 2022 ${license.name}
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  } else if (license.license === "Apache License") {
    return `
    Copyright 2022 ${license.name}

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}<br>
  ## Table of Contents:
  [Description](#description)<br>
  [Installation](#installation)<br>
  [Usage](#usage)<br>
  [Contributing](#contributing)<br>
  [Tests](#tests)<br>
  [License](#license)<br>
  [Questions](#questions)<br>

  # Description
  ${data.description}<br>
  Here is a video walkthrough: [Walkthrough](https://vimeo.com/699658115/b954a14c34)
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # Contributing
  ${data.guidelines}
  # Tests
  ${data.tests}
  # License
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data)}
  # Questions
  ### GitHub Username: [${data.gitName}](https://github.com/${data.gitName})<br>
  ### Email Address:   ${data.email}<br>
  If you have any additional questions, you send an email to the address provided above.
`;
}

module.exports = generateMarkdown;
