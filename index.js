// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to three characters for logo text.'
    },
    {
        type: 'list',  
        name: 'shape',
        message: 'Please select a shape for your logo:',
        choices: [
            'Circle',
            'Triangle',
            'Square'
        ]
    },
    {
        type: 'input',
        name: 'color',
        message: 'Please enter a color for the shape (color keyword or hexadecimal color).'
    }
];