// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please add installation instructions for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please add any usage information.'
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'Please add contribution guidelines.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please add any testing instructions.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license from the options below.',
        choices: ['MIT License', 'Apache License', 'Mozilla Public License']
    },
    {
        type: 'input',
        name: 'gitName',
        message: 'What is your GitHub Username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) {
            console.log('something bad');
        } else {

        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('README.md', answers)
        })
}

// Function call to initialize app
init();
