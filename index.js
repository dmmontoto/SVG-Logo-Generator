// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to three characters for logo text.'
    },
    {
        type: 'input',
        name: 'textColor',
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
    },
    {
        type: 'input',
        name: 'backgroundColor',
        message: 'Please enter a color for the background color (color keyword or hexadecimal color).'
    }
];

async function main() {
    try {
        const shapeOptions = await inquirer.prompt(questions);

        // Check user's answers
        if (shapeOptions.text.length === 3) {
            console.log('working');
            return;
        }

        let shape;
        let shapeSVG;

        switch (shapeOptions.shape) {
            case 'Circle':
                // Prompt for circle properties 
                shape = new Circle(shapeOptions.text, shapeOptions.textColor, shapeOptions.color, shapeOptions.backgroundColor); 
                shapeSVG = shape.generateSVG();
                break;
            case 'Square':
                // Prompt for square properties 
                shape = new Square(shapeOptions.text, shapeOptions.textColor, shapeOptions.color, shapeOptions.backgroundColor); 
                shapeSVG = shape.generateSVG();
                break;
            case 'Triangle':
                // Prompt for triangle properties 
                shape = new Triangle(shapeOptions.text, shapeOptions.textColor, shapeOptions.color, shapeOptions.backgroundColor); 
                shapeSVG = shape.generateSVG();
                break;
            default:
                console.log('Invalid shape selection.');
                return;
        }

        // Write SVG to logo.svg
        fs.writeFileSync('logo.svg', shapeSVG);

        console.log('Generated logo.svg');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

main();