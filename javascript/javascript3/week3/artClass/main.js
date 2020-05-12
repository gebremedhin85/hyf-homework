
// drawing a circle and filling color 
const canvas = document.getElementById("myCanvas");

const drawCircle = canvas.getContext("2d");

drawCircle.beginPath();

drawCircle.arc(200, 200, 40, 0, 2 * Math.PI);

drawCircle.stroke();

drawCircle.fillStyle = 'rgb(300, 200, 100)';

drawCircle.fill();


//Class creation 
class Circle{

    constructor(x, y, r, startAngle, endAngle, fillColor){

        this.x=x;

        this.y=y;

        this.r=r;

        this.startAngle=startAngle;
        
        this.endAngle=endAngle;
        
        this.fillColor=fillColor;
    }


    draw(){
    
        const canvas = document.getElementById("myCanvas");

        const drawCircle = canvas.getContext("2d");
    
        drawCircle.beginPath();
    
        drawCircle.arc(this.x, this.y, this.r, this.startAngle, this.endAngle, 2 * Math.PI);
    
        drawCircle.stroke();

        drawCircle.fillStyle = this.fillColor;
    
        drawCircle.fill();

    }
}

 


// creating instant new Circle classes every 100ms
 
setInterval(() => {

    //value for x and y random b/n 0 and 400(canvas's max height and max width)
    const valueX=Math.floor(Math.random()*400);
 
    const valueY=Math.floor(Math.random()*400);

    //random value for radius from 0 til 200
    const radius=Math.floor(Math.random()*60);

    // giving a random value to the rgb values
    const red=Math.floor(Math.random()*255);
 
    const green=Math.floor(Math.random()*255);
 
    const blue=Math.floor(Math.random()*255);

    const class1 = new Circle(valueX, valueY, radius, 0, 2 * Math.PI, `rgb(${red}, ${green}, ${blue})`);
 
    class1.draw();
 
}, 100);

 
