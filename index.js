// TODO: Include packages needed for this application
//const path = require("path")
const fs = require("fs");
const inquirer = require("inquirer");
//const generatePage = (README) => {
//  return `


//   `;
//};



// TODO: Create an array of questions for user input

inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'Url',
        message: 'What is the Url to your project?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short descripation about your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license?',
        choices: ["MIT", "APACHE 2", "GPL 3.0", "None"]
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'How can users contribute to this repo ?'
    }
])
    .then(answers => {
        console.log(answers);

        // TODO: Create a function to write README file



        fs.writeFileSync('./output/README.md', `
## 🌟 ${answers.title}

## Table of Context 

* [Description](#description)
* [Contributing](#contributing)
* [License](#license)
* [Installation](#installation)
* [Website](#website)
* [Questions](#questions)

## Description

${answers.description}


##  👨‍💻 Website

${answers.Url}

## License
${answers.license}

## ✍️ Authors

${answers.Contributing}


## Questions

https://github.com/${answers.github}

Please reach out if you have any question via email ${answers.email}



`)
    })
//function writeToFile(fileName, answers) {
    //return fs.writeFile('./index'
    // path.join(process.cwd(), fileName), answers);


//}

// TODO: Create a function to initialize app

