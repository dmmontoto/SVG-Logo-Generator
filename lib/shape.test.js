const { Shape, Circle, Square, Triangle } = require('./shape');

describe('Shape', () => {
    it('should create a Shape instance', () => {
        const shape = new Shape('A', 'black', 'red', 'white');
        expect(shape).toBeInstanceOf(Shape);
    });

    it('should have the proper key values', () => {
        const shape = new Shape('TES', '#000000', 'green', '#FFFFFF');
        expect(shape.text).toBe('TES');
        expect(shape.textColor).toBe('#000000');
        expect(shape.color).toBe('green');
        expect(shape.backgroundColor).toBe('#FFFFFF');
    });
});

describe('Circle', () => {
    it('should create a Circle instance', () => {
        const circle = new Circle('A', 'black', 'red', 'white');
        expect(circle).toBeInstanceOf(Circle);
    });

    it('should generate valid SVG for Circle', () => {
        const circle = new Circle('A', 'black', 'red', 'white');
        const svg = circle.generateSVG();
    
        // Validate the presence of <circle> and <text> elements in the SVG
        expect(svg).toContain('<circle');
        expect(svg).toContain('<text');
    
        // Validate attributes of the <circle> element
        expect(svg).toContain('cx="150"');
        expect(svg).toContain('cy="100"');
        expect(svg).toContain('r="80"');
        expect(svg).toContain('fill="red"');
    
        // Validate attributes of the <text> element
        expect(svg).toContain('x="150"');
        expect(svg).toContain('y="125"');
        expect(svg).toContain('font-size="60"');
        expect(svg).toContain('text-anchor="middle"');
        expect(svg).toContain('fill="black"');
    
        // Validate the presence of the provided text ("A")
        expect(svg).toContain('>A</text>');
    
        // Validate background color
        expect(svg).toContain('fill="white"');
    });
});