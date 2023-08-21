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

    it('should have the proper key values', () => {
        const circle = new Circle('TES', '#000000', 'green', '#FFFFFF');
        expect(circle.text).toBe('TES');
        expect(circle.textColor).toBe('#000000');
        expect(circle.color).toBe('green');
        expect(circle.backgroundColor).toBe('#FFFFFF');
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

describe('Square', () => {
    it('should create a Square instance', () => {
        const square = new Square('A', 'black', 'red', 'white');
        expect(square).toBeInstanceOf(Square);
    });

    it('should have the proper key values', () => {
        const square = new Square('TES', '#000000', 'green', '#FFFFFF');
        expect(square.text).toBe('TES');
        expect(square.textColor).toBe('#000000');
        expect(square.color).toBe('green');
        expect(square.backgroundColor).toBe('#FFFFFF');
    });

    it('should generate valid SVG for Square', () => {
        const square = new Square('A', 'black', 'red', 'white');
        const svg = square.generateSVG();
    
        // Validate the presence of <square> and <text> elements in the SVG
        expect(svg).toContain('<rect');
        expect(svg).toContain('<text');
    
        // Validate attributes of the <square> element
        expect(svg).toContain('x="70"');
        expect(svg).toContain('y="20"');
        expect(svg).toContain('width="160"');
        expect(svg).toContain('height="160"');
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

describe('Triangle', () => {
    it('should create a Triangle instance', () => {
        const triangle = new Triangle('A', 'black', 'red', 'white');
        expect(triangle).toBeInstanceOf(Triangle);
    });

    it('should have the proper key values', () => {
        const triangle = new Triangle('TES', '#000000', 'green', '#FFFFFF');
        expect(triangle.text).toBe('TES');
        expect(triangle.textColor).toBe('#000000');
        expect(triangle.color).toBe('green');
        expect(triangle.backgroundColor).toBe('#FFFFFF');
    });

    it('should generate valid SVG for Triangle', () => {
        const triangle = new Triangle('TST', 'white', '#484848', 'red');
        const svg = triangle.generateSVG();

        // Validate the presence of <polygon> and <text> elements in the SVG
        expect(svg).toContain('<polygon');
        expect(svg).toContain('<text');

        // Validate attributes of the <polygon> element
        expect(svg).toContain('points="150,25 240,180 60,180"');
        expect(svg).toContain('fill="#484848"');

        // Validate attributes of the <text> element
        expect(svg).toContain('x="150"');
        expect(svg).toContain('y="165"');
        expect(svg).toContain('font-size="60"');
        expect(svg).toContain('text-anchor="middle"');
        expect(svg).toContain('fill="white"');

        // Validate the presence of the provided text ("TST")
        expect(svg).toContain('>TST</text>');

        // Validate background color
        expect(svg).toContain('fill="red"');
    });
});