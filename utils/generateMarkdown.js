// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return '';
  }
  const badges = {
    'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'GPLv3': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'Apache 2.0': '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
    'BSD 3-Clause': '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)',
  };
  return badges[license] || '';
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') {
    return '';
  }
  const links = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
  };
  return links[license] || '';
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '## License\nN/A';
  }
  return `## License
This project is licensed under the ${license} License - see the [LICENSE](${renderLicenseLink(license)}) file for details.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.tests}

${renderLicenseSection(data.license)}

## Questions
If you have any questions about the project, you can contact me at [${data.email}](mailto:${data.email}). You can also find more of my work on my [GitHub](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
