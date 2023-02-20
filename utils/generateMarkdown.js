// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (data) => {
  if (data.License === false) {
      return '';
  } else {
      return `![license Badge](https://img.shields.io/badge/license-MIT-pink.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseTOC = (data) => {
  if (data.License === false) {
      return '';
  } else {
      return '* [License](#license)';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (data) => {
  if (data.License === false) {
      return '';
  } else {
      return `# License
The ${data.LicenseType} license. 
${renderLicenseBadge(data)}
      
Copyright (c) 2023 ${data.Contributions}.
      
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO 
THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  }
}


// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.Title}
https://github.com/${data.Github}/${data.Title}
# Description
${data.Description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseTOC(data)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation
The following must be installed to run the application correctly: ${data.Installation}
# Usage
To run this app, ${data.Usage}
${renderLicenseSection(data)}
# Contributions
​Contributors: ${data.Contributions}
# Tests
The following is required to run tests: ${data.Tests}
# Questions
If you have any questions about this project, contact ${data.Contributions} at : ${data.Email}.
`;
}

module.exports = { generateMarkdown };
