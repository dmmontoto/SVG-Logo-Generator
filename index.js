// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shape');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to three characters for logo text.'
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'Please enter a color for the text (color keyword or hexadecimal color).'
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