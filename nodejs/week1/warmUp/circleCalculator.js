const PI = Math.PI;

class Circle {
	constructor(radius) {
		this.radius = radius;
	}

	getArea() {
		const area = this.radius * this.radius * PI;
		console.log(area);
	}

	getCircumference() {
		const circumference = this.radius * 2 * PI;
		console.log(circumference);
	}

	getDiameter() {
		const diameter = this.radius * 2;
		console.log(diameter);
	}
}

const circle = new Circle(10);
circle.getArea();
circle.getCircumference();
circle.getDiameter(); // 20
