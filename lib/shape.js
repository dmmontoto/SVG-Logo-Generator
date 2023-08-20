class Shape {
    constructor(text, textColor, color, backgroundColor) {
        this.text = text;
        this.textColor = textColor;
        this.color = color;
        this.backgroundColor = backgroundColor;
    }

    generateSVG(shapeSVG) {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="${this.backgroundColor}" />
            ${shapeSVG}
        </svg>`;
    }
}

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

class Square extends Shape {
    constructor(text, textColor, color, backgroundColor) {
        super(text, textColor, color, backgroundColor);
    }

    generateSVG() {        
        const squareSVG = `  <rect x="70" y="20" width="160" height="160" fill="${this.color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        return super.generateSVG(squareSVG);
    }
}

class Triangle extends Shape {
    constructor(text, textColor, color, backgroundColor) {
        super(text, textColor, color, backgroundColor);
    }

    generateSVG() {        
        const triangleSVG = `<polygon points="150,25 240,180 60,180" fill="${this.color}" />
        <text x="150" y="165" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        return super.generateSVG(triangleSVG);
    }
}

module.exports = {
    Shape,
    Circle,
    Square,
    Triangle
};
