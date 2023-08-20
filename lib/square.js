const Shape = require('./shape');

class Square extends Shape {
    constructor(text, textColor, color, backgroundColor) {
        super(text, textColor, color, backgroundColor);
    }

    generateSVG() {        
        const squareSVG = `  <rect x="70" y="20" width="160" height="160" fill="${this.color}" />
        <text x="150" y="125" text-anchor="middle" dy=".3em" fill="${this.textColor}">${this.text}</text>`;
        return super.generateSVG(squareSVG);
    }
}

module.exports = Square;