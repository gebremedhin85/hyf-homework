const x = Math.PI.toFixed(2);

class Circle {

	constructor(radius) {
		this.radius = radius;
    }
    
    getDiameter(){
        const diameter = this.radius * 2;
        console.log(diameter);
    }

    getCircumference(){
       const circumference = this.radius * 2 * x;
       console.log(circumference);
    }

    getArea(){
         const area = this.radius * this.radius* x;
         console.log(area);
    }
}

const circle = new Circle(10);
circle.getDiameter(); // 20
circle.getCircumference();
circle.getArea();
