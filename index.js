const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Desired title:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Give a description:',
      },
      {
        type: 'input',
        name: 'instructions',
        message: 'How to install:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Instructions for application:',
      },
      {
        type: 'input',
        name: 'contributers',
        message: 'contributers and their responsibilities:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for application:',
        choices: [
            'Red',
            'Green',
            'Blue'
          ],
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Examples of how to run tests:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      }
  ]);




  const generateREADME = (answers) =>
  `
# ${answers.title}

${answers.description}
\n* [Installation](#Installation)
\n* [Instructions](#Instructions)
\n* [License](#License)
\n* [Contributors](#Contributors)
\n* [Author](#Author)
\n* [Tests](#Tests)

## Installation
${answers.instructions}

## Instructions
${answers.usage}

## License 
This project is licensed under the ${answers.license} - see the file for details

## Contributors
${answers.contributers}

## Tests
${answers.test}

## Questions
\nEmail: ${answers.email}
\nGitHub: https://github.com/${answers.github}
`;

promptUser()
  .then((answers) => writeFileAsync('README.md', generateREADME(answers)))
  .then(() => console.log('Success! Your README.md file has been generated'))
  .catch((err) => console.error(err));