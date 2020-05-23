// drawing a circle and filling color
const canvas = document.getElementById("myCanvas");

const drawCircle = canvas.getContext("2d");

drawCircle.beginPath();

drawCircle.arc(200, 200, 40, 0, 2 * Math.PI);

drawCircle.stroke();

drawCircle.fillStyle = "rgb(300, 200, 100)";

drawCircle.fill();

//Class creation
class Circle {
	constructor(x, y, r, startAngle, endAngle, fillColor) {
		this.x = x;

		this.y = y;

		this.r = r;

		this.startAngle = startAngle;

		this.endAngle = endAngle;

		this.fillColor = fillColor;
	}

	draw() {
		const canvas = document.getElementById("myCanvas");

		const drawCircle = canvas.getContext("2d");

		drawCircle.beginPath();

		drawCircle.arc(
			this.x,
			this.y,
			this.r,
			this.startAngle,
			this.endAngle,
			2 * Math.PI
		);

		drawCircle.stroke();

		drawCircle.fillStyle = this.fillColor;

		drawCircle.fill();
	}
}

//getting random values for X, Y, radius and colours using function

function getRandomValue(maxValue) {
	//maxValue stands for maximum value for radius, X, Y and colour rgb values.
	const randomNumber = Math.floor(Math.random() * maxValue);

	return randomNumber;
}

// creating instant new Circle classes every 100ms
setInterval(() => {
	const x = getRandomValue(600);
	const y = getRandomValue(400);
	const r = getRandomValue(60);
	const red = getRandomValue(255);
	const green = getRandomValue(255);
	const blue = getRandomValue(255);

	const class1 = new Circle(
		x,
		y,
		r,

		0,
		2 * Math.PI,
		`rgb(${red}, ${green}, ${blue})`
	);

	class1.draw();
}, 100);
