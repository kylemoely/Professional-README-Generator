// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const gm = require("./utils/generateMarkdown");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type:"input",
        message: "Provide a description for your project:",
        name: "description"
    },
    {
        type: "input",
        message: "Provide a brief step-by-step guide describing how to install the project or get it running:",
        name: "installation"
    },
    {
        type:"input",
        message: "Provide a brief guide on how to use the project:",
        name: "usage"
    },
    {
        type: "input",
        message: "Describe any collaborators, third-party assets, or external tutorials that helped you with the project:",
        name: "credits"
    },
    {
        type: "list",
        message: "Select the license used for this project:",
        name: "license",
        choices: ["MIT", "GPLv2", "Apache", "None"]
    },
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "username"
    },
    {
        type: "input",
        message: "Enter your email",
        name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log("README saved!");
    })
} 

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        return gm(response);
    })
    .then((data) => {
        writeToFile('README.md', data);
        // console.log(data);
    })
}

// Function call to initialize app
init();
