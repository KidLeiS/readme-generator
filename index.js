// Required dependencies
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Question list for inquirer prompt to user
const questions = [
    {
        name: "title",
        type: "input",
        message: "What is your project title?",
    }, 
    {
        name: "description",
        type: "input",
        message: "Enter your project description: ",
    },
    {
        name: "install",
        type: "input",
        message: "Enter installation instructions: ",
    },
    {
        name: "usage",
        type: "input",
        message: "Enter usage information: ",
    },
    {
        name: "contribution",
        type: "input",
        message: "Enter contribution guidelines: ",
    },
    {
        name: "tests",
        type: "input",
        message: "Enter test instructions: ",
    },
    {
        name: "license",
        type: "list",
        message: "Please choose your license:",
        choices: ["MIT", "GNU General Public License v3.0", "Apache License 2.0", "ISC", "BSD 3-Clause License"],
    },
    {
        name: "github",
        type: "input",
        message: "Enter your Github link: ",
    },
    {
        name: "email",
        type: "input",
        message: "Enter your email address: ",
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./output/${fileName}`, data, (err) => {
        err ? console.error(err) : console.log("Readme successfully generated");
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(response => writeToFile("README.md",generateMarkdown(response)));
}

// function call to initialize program
init();
