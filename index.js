const inquirer = require("inquirer");

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
        name: 'Url to your project',
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
        message: ' How can users contribute to this repo ?'
    }
])
    .then(answers => console.log(answers));