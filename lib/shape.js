class Shape {
    constructor(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }

    generateSVG(shapeSVG) {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeSVG}
            <text x="150" y="100" text-anchor="middle" dy=".3em" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

module.exports = Shape;
