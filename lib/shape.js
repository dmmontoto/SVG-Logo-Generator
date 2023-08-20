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

module.exports = Shape;
