// *NOTE*
// This file is an exact copy of index.js. It has the sole purpose of testing the 'async function main()'
// from index.js in the shape.test.js file. The tests are for ensuring that the prompts are checked and 
// validated prior to the SVG logo being generated. 

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

        shapeOptions.textColor = shapeOptions.textColor.toLowerCase();
        shapeOptions.color = shapeOptions.color.toLowerCase();
        shapeOptions.backgroundColor = shapeOptions.backgroundColor.toLowerCase();

        // Check user's answers
        if (shapeOptions.text.length > 3) {
            console.log('Please enter no more than three characters!');
            return;
        }

        if (!isValidColorKeyword(shapeOptions.textColor) && !isValidHexColor(shapeOptions.textColor)) {
            console.log('Please enter a valid text color!');
            return;
        } else {
            if (isValidHexColor(shapeOptions.textColor) && shapeOptions.textColor.length === 6) {
                shapeOptions.textColor = '#' + shapeOptions.textColor;
            }
        }

        if (!isValidColorKeyword(shapeOptions.color) && !isValidHexColor(shapeOptions.color)) {
            console.log('Please enter a valid color!');
            return;
        } else {
            if (isValidHexColor(shapeOptions.color) && shapeOptions.color.length === 6) {
                shapeOptions.color = '#' + shapeOptions.color;
            }
        }

        if (!isValidColorKeyword(shapeOptions.backgroundColor) && !isValidHexColor(shapeOptions.backgroundColor)) {
            console.log('Please enter a valid background color!');
            return;
        } else {
            if (isValidHexColor(shapeOptions.backgroundColor) && shapeOptions.backgroundColor.length === 6) {
                shapeOptions.backgroundColor = '#' + shapeOptions.backgroundColor;
            }
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

const validColorKeywords = [
    'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure',
    'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet',
    'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate',
    'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan',
    'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen',
    'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange',
    'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue',
    'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet',
    'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue',
    'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro',
    'ghostwhite', 'gold', 'goldenrod', 'gray', 'green',
    'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred',
    'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush',
    'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan',
    'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink',
    'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey',
    'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen',
    'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid',
    'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise',
    'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin',
    'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab',
    'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen',
    'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru',
    'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple',
    'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon',
    'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver',
    'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow',
    'springgreen', 'steelblue', 'tan', 'teal', 'thistle',
    'tomato', 'turquoise', 'violet', 'wheat', 'white',
    'whitesmoke', 'yellow', 'yellowgreen'
];

function isValidColorKeyword(color) {
    return validColorKeywords.includes(color);

}

function isValidHexColor(hexColor) {
    if (hexColor.length === 6 && /^[0-9A-F]{6}$/i.test(hexColor)) {
        return true;
    } else if (hexColor.length === 7 && hexColor[0] === '#' && /^[0-9A-F]{6}$/i.test(hexColor.slice(1))) {
        return true;
    }
    return false;
}

module.exports = { main };