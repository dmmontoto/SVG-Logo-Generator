const Shape = require('./shape');

class Circle extends Shape {
    constructor(text, textColor, color, backgroundColor) {
        super(text, textColor, color, backgroundColor);
    }

    generateSVG() {
        const circleSVG = `<circle cx="150" cy="100" r="80" fill="${this.color}" /> 
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        return super.generateSVG(circleSVG);
    }
}

module.exports = Circle;