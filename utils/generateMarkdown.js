// function to generate markdown for README
function generateMarkdown(data) {
  var badge;
  const licenses = [
    [ 'MIT', '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)' ],
    [ 'GNU General Public License v3.0', '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)' ],
    [ 'Apache License 2.0', '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)' ],
    [ 'ISC', '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)' ],
    [ 'BSD 3-Clause License', '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)']
  ];

  for (const [key,value] of licenses) {
    if (key === data.license) {
      badge = value
    }; 
  }
  
  return `# ${data.title}
  ${badge}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  This application is released under the ${data.license} license. Please refer to the license file for more information.

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  For any questions, please contact the developer via either of the following:
  - [Github](${data.github})
  - Email: [${data.email}](${data.email})
  `;
}

module.exports = generateMarkdown;
