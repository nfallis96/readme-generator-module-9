// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'Title',
    message: 'What did you name your project?'
},
{
    type: 'input',
    name: 'Description',
    message: 'Describe your project'
},
{
    type: 'input',
    name: 'Contents',
    message: 'Press Enter for Table of Contents'
},
{
    type: 'input',
    name: 'Installation',
    message: 'What are the installation instructions for your project?'
},
{
    type: 'input',
    name: 'Usage',
    message: 'What are the usage information for your project?'
},
{
    type: 'confirm',
    name: 'License',
    message: 'Did you use a license for your project?'
},
{
    type: 'input',
    name: 'LicenseType',
    message: 'Which license did you choose for your project?'
},
{
    type: 'input',
    name: 'Contributions',
    message: 'Mention who contributed in your project?'
},
{
    type: 'input',
    name: 'Tests',
    message: 'How do you test your application?'
},
{
    type: 'input',
    name: 'Github',
    message: 'What is your GitHub username?'
},
{
    type: 'input',
    name: 'Email',
    message: 'What is your email address?'
}
];


// TODO: Create a function to write README file
const writeFile = (fileName, data) => {
    fs.writeFile(fileName, data, function(err) {
        console.log(data),
            err ? console.log(err) : console.log("README.md file has now been generated!")
    })
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
        .then(function(data) {
            writeFile("README.md", generateMarkdown(data));
            console.log(data)
        })
}

// Function call to initialize app
init();
