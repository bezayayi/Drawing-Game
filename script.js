const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d", { willReadFrequently: true });
const canvas1 = document.getElementById("canvas1");
const ctx1 = canvas1.getContext("2d", { willReadFrequently: true });
const canvas2 = document.getElementById("canvas");
const ctx2 = canvas2.getContext("2d");
const heading = document.getElementById("heading");
const text = document.getElementById("text");
const button = document.getElementById("button");

function updatePositionsAndSizes() {
    if (window.innerWidth >= 768) {

        canvas1.style.top = "150px";
        canvas1.style.left = "50px";
        canvas1.style.width = "500px";
        canvas1.style.height = "300px";
        canvas1.style.transform = "translate(-20%, 0%)";

        canvas2.style.top = "50px";
        canvas2.style.left = "50px";
        canvas2.style.width = "500px";
        canvas2.style.height = "300px";
        canvas2.style.transform = "translate(80%, 0%)";
        
        heading.style.top = "200px";
        heading.style.left = "50px";
        heading.style.width = "500px";
        heading.style.height = "60px";
        heading.style.transform = "translate(93%, -5%)";
        
        text.style.top = "600px";
        text.style.left = "900px";
        text.style.width = "500px";
        text.style.height = "60px";
        text.style.transform = "translate(91%, 0%)";
        
        button.style.top = "60px";
        button.style.left = "90px";
        button.style.width = "180px";
        button.style.height = "60px";
        button.style.transform = "translate(5%, -80%)";
    } else {
        canvas1.style.top = "200px";
        canvas1.style.left = "300px";
        canvas1.style.width = "500px";
        canvas1.style.height = "300px";
        canvas1.style.transform = "translate(0%, -80%)";
        
        canvas2.style.top = "20px";
        canvas2.style.left = "30px";
        canvas2.style.width = "500px";
        canvas2.style.height = "200px";
        canvas2.style.transform = "translate(0%, 25%)";
        
        heading.style.top = "150px";
        heading.style.left = "60px";
        heading.style.width = "500px";
        heading.style.height = "50px";
        heading.style.transform = "translate(15%, -840%)";
      
        text.style.top = "200px";
        text.style.left = "550px";
        text.style.width = "500px";
        text.style.height = "100px";
        text.style.transform =  "translate(15%, -400%)";
        
        button.style.top = "60px";
        button.style.left = "90px";
        button.style.width = "180px";
        button.style.height = "60px";
        button.style.transform = "translate(10%, -800%)";
    }
  }

  updatePositionsAndSizes();

// Draw grass using DDA line algorithm
function drawGrass(x1, y1, x2, y2,color) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const steps = Math.max(Math.abs(dx), Math.abs(dy));
  const xIncrement = dx / steps;
  const yIncrement = dy / steps;

  let x = x1;
  let y = y1;

  ctx1.beginPath();
  ctx1.moveTo(x, y);
  for (let i = 0; i < steps; i++) {
    x += xIncrement;
    y += yIncrement;
    ctx1.lineTo(Math.round(x), Math.round(y));
    ctx1.fillStyle= color;
    ctx1.fillRect(Math.round(x), Math.round(y),10,10);
  }
  ctx1.strokeStyle = color;
  //ctx.fillRect(x,y,100,100);
  ctx1.fill();
  //ctx.stroke();
}
 drawGrass(0, canvas1.height -10, canvas1.width, canvas1.height -10, "green");


  function drawDogFootstep(x, y) {
    ctx1.fillStyle = "rgba(194, 162, 130, 0.7)";
    //ctx.fillRect(x, y, 40, 20);
    ctx1.beginPath();
    ctx1.arc(x, y, 7, 0, Math.PI * 1.4);
    //ctx.fillStyle = 'black';
    ctx1.fill();
    ctx1.beginPath();
    ctx1.arc(x+2, y+10, 2.3, 0, Math.PI * 2);
    ctx1.fill();
    ctx1.beginPath();
    ctx1.arc(x-10, y+3, 2.3, 0, Math.PI * 2);
    ctx1.fill();
    ctx1.beginPath();
    ctx1.arc(x-6, y+9, 2.6, 0, Math.PI * 2);
    ctx1.fill();
  }

    // Draw the dog footstep
    drawDogFootstep(200, 20);
    drawDogFootstep(30, 20);
    drawDogFootstep(150, 40);
    drawDogFootstep(20, 100);
    drawDogFootstep(80, 140);
    drawDogFootstep(140, 120);
    drawDogFootstep(300, 10);

   // Variables to control the position and direction of the panda
let pandaX = 0;
let pandaY = 100;
let direction = 1; // 1 for forward, -1 for backward

// Function to draw the panda
function drawPanda() {
    // Clear the canvas
    let x=30;
    let y=0;
    ctx2.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the panda
    ctx2.save();
    ctx2.translate(pandaX, pandaY);
    // Draw the body
    ctx2.beginPath();
    ctx2.arc(x, y+5, 30, 0, Math.PI * 2);
    ctx2.fillStyle = 'black';
    ctx2.fill();
    // Draw the head
    ctx2.beginPath();
    ctx2.arc(x, y-35, 25, 0, Math.PI * 2);
    ctx2.fillStyle = 'white';
    ctx2.fill();
    // Draw the left hand
    ctx2.beginPath();
    ctx2.arc(x-30, y-10, 15, 0, Math.PI * 2);
    ctx2.fillStyle = 'black';
    ctx2.fill();
    
    ctx2.beginPath();
    ctx2.arc(x-30, y-10, 6,  Math.PI * 0.75, Math.PI * 1.65,false);
    ctx2.fillStyle = 'white';
    ctx2.fill();
    // Draw the right hand
    ctx2.beginPath();
    ctx2.arc(x+30, y-10, 15, 0, Math.PI * 2);
    ctx2.fillStyle = 'black';
    ctx2.fill();
    ctx2.beginPath();
    ctx2.arc(x+30, y-13, 6,  Math.PI * 0.5, Math.PI * 1.5,true);
    ctx2.fillStyle = 'white';
    ctx2.fill();
    // Draw the left leg
    ctx2.beginPath();
    ctx2.arc(x-22, y+35, 15, 0, Math.PI * 2);
    ctx2.fillStyle = 'black';
    ctx2.fill();
    ctx2.beginPath();
    ctx2.arc(x-24, y+33, 6,  Math.PI * 0.25, Math.PI * 1.25,false);
    ctx2.fillStyle = 'white';
    ctx2.fill();
    // Draw the right leg
    ctx2.beginPath();
    ctx2.arc(x+25, y+35, 15, 0, Math.PI * 2);
    ctx2.fillStyle = 'black';
    ctx2.fill();
    ctx2.beginPath();
    ctx2.arc(x+27, y+33, 6,  Math.PI * 0.75, Math.PI * 1.75,true);
    ctx2.fillStyle = 'white';
    ctx2.fill();

    //draw the eyes
    
    ctx2.beginPath();
    ctx2.arc(x-9, y-40, 4,  0, Math.PI*2,false);
    ctx2.fillStyle = 'black';
    ctx2.fill();
    ctx2.beginPath();
    ctx2.arc(x+10, y-40, 4,  0, Math.PI*2,false);
    ctx2.fillStyle = 'black';
    ctx2.fill();

    //draw the ears
    
    ctx2.beginPath();
    ctx2.arc(x-18, y-55, 10,  Math.PI*0.65, Math.PI*1.85,false);
    ctx2.fillStyle = 'black';
    ctx2.fill();
    ctx2.beginPath();
    ctx2.arc(x+18, y-55, 9,  Math.PI, Math.PI*0.5,false);
    ctx2.fillStyle = 'black';
    ctx2.fill();
    
    //draw the mouth
    
    ctx2.beginPath();
    ctx2.arc(x, y-30, 4,  Math.PI, Math.PI*2,true);
    ctx2.fillStyle = 'black';
    ctx2.fill();

    ctx2.restore();
}
//animate the panda
function animatePanda() {
    // Update the position of the panda
    pandaX += 5 * direction;

    // Check if the panda has reached the edge of the canvas
    if (pandaX >= canvas.width - 50 || pandaX <= 0) {
        // Change the direction of the panda
        direction *= -1;
    }

    // Draw the panda
    drawPanda();

    // Request the next animation frame
    requestAnimationFrame(animatePanda);
}

// Start the animation
animatePanda();


  function playAnimation() {
      window.location.href = "page1.html";
  }

  function drawCloud(x, y, radius, color) {
    ctx1.strokeStyle= "white";
    ctx1.fillStyle = color;
    ctx1.beginPath();
    //ctx.lineWidth = 0;
    ctx1.moveTo(x, y);
   ctx1.bezierCurveTo(x, y, x + 10, y - 15, x + 60, y);
    ctx1.lineTo(x, y);
    ctx1.fill();
    ctx1.stroke();
    ctx1.closePath();
  }
  
 drawCloud(10, 20, 3, 'grey');
//  //drawCloud(550, 325, 400, '#0C0');

function gotoMenuPage() {
    window.location.href = "menu.html";
}

function movePoints() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    points.forEach((points) => {
      points.x += 2; 
    });
    drawPanda(points);

    if (points[1].x >= canvas.width) {
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        points.forEach((point) => {
        point.x -=2;
        // point.y += 2;
        });
        // drawPolygon(points);
      }
  
      setTimeout(movePoints, 16);
  }

  
  movePoints();