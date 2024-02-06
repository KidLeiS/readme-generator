const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// * Create a command-line application that accepts user input.
//   * When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
//     * The title of my project 
//     * Sections entitled:
//       * Description 
//       * Table of Contents 
//       * Installation 
//       * Usage 
//       * License 
//       * Contributing 
//       * Tests 
//       * Questions
//     * When a user enters the project title then it is displayed as the title of the README
//     * When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
//     * When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
//     * When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
//     * When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
//     * When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README


// array of questions for user
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
