const Shape = require('./shape');

class Triangle extends Shape {
    constructor(text, textColor, color, backgroundColor) {
        super(text, textColor, color, backgroundColor);
    }

    generateSVG() {        
        const triangleSVG = `<polygon points="150,50 230,200 70,200" fill="${this.color}" />
        <text x="150" y="165" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        return super.generateSVG(triangleSVG);
    }
}

module.exports = Triangle;