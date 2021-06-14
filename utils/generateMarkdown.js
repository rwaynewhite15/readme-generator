// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## ${data.description}

  <br>

  # Table of Contents:
  * [Title](#Title)
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contribution](#Contribution)
  * [Tests](#Tests)
  * [Usage](#Usage)
  * [License](#License)
  * [Github](#Github)
  * [Email](#Email)
  
  # Owned By:
  ${data.name}

  # Installation
  ${data.installation}

  # Usage
  ![alt text](assets/images/${data.usage})
  
  # Contribution
  ${data.contribution}

  # Tests
  ${data.tests}
  
  # License
  ${badge}
  <br>
  ${data.license}
  
  <br>

  # Please Contact me with any questions

  # Github
  Please visit my [GitHub](https://github.com/${data.github}) to view my work.
  
  # Email
  ## ${data.email}`;
}

module.exports = generateMarkdown;
