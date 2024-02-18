const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d", { willReadFrequently: true });
const canvas1 = document.getElementById("canvas1");
const ctx1 = canvas1.getContext("2d", { willReadFrequently: true });
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
        
        heading.style.top = "200px";
        heading.style.left = "50px";
        heading.style.width = "500px";
        heading.style.height = "60px";
        heading.style.transform = "translate(100%, -5%)";
        
        text.style.top = "600px";
        text.style.left = "900px";
        text.style.width = "500px";
        text.style.height = "60px";
        text.style.transform = "translate(100%, 0%)";
        
        button.style.top = "60px";
        button.style.left = "90px";
        button.style.width = "180px";
        button.style.height = "60px";
        button.style.transform = "translate(40%, -80%)";
    } else {
        canvas1.style.top = "200px";
        canvas1.style.left = "300px";
        canvas1.style.width = "500px";
        canvas1.style.height = "300px";
        canvas1.style.transform = "translate(0%, -50%)";
        
        heading.style.top = "150px";
        heading.style.left = "60px";
        heading.style.width = "500px";
        heading.style.height = "50px";
        heading.style.transform = "translate(15%, -355%)";
      
        text.style.top = "200px";
        text.style.left = "550px";
        text.style.width = "500px";
        text.style.height = "100px";
        text.style.transform =  "translate(15%, -155%)";
        
        button.style.top = "60px";
        button.style.left = "90px";
        button.style.width = "180px";
        button.style.height = "60px";
        button.style.transform = "translate(10%, -390%)";
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

function drawPanda() {
    // Draw body
    ctx1.beginPath();
    ctx1.arc(240, 110, 35, 0, Math.PI * 2);
    ctx1.fillStyle = 'black';
    ctx1.fill();
    ctx1.closePath();
    
    // Draw head
    ctx1.beginPath();
    ctx1.arc(240, 80, 25, 0, Math.PI * 2);
    //ctx.arc(20,10,0, Math.PI*2,true);
    ctx1.fillStyle = 'white';
    ctx1.fill();
    // ctx.strokeStyle= "white";
    // ctx.stroke();
    
    // Draw eyes
    ctx1.beginPath();
    ctx1.arc(230, 75, 5, 0, Math.PI * 2);
    ctx1.arc(250, 75, 5, 0, Math.PI * 2);
    ctx1.fillStyle = 'black';
    ctx1.fill();
    
    // Draw nose
    ctx1.beginPath();
    ctx1.arc(240, 85, 4, 0, Math.PI * 2);
    ctx1.fillStyle = 'black';
    ctx1.fill();
    
    // Draw ears
    ctx1.beginPath();
    ctx1.arc(220, 60, 6, 0, Math.PI * 2);
    ctx1.arc(260, 60, 6, 0, Math.PI * 2);
    ctx1.fillStyle = 'black';
    ctx1.fill();

    // Draw left hand
  ctx1.beginPath();
  ctx1.arc(201, 103, 10, 0, Math.PI * 2);
  ctx1.fillStyle = 'black';
  ctx1.fill();

  // Draw right hand
  ctx1.beginPath();
  ctx1.arc(275, 103, 10, 0, Math.PI * 2);
  ctx1.fillStyle = 'black';
  ctx1.fill();

    // Draw brush in the panda's hand
    ctx1.beginPath();
  ctx1.moveTo(180, 85); // Starting point of the brush
  ctx1.lineTo(199, 75); // Ending point of the brush
  ctx1.lineWidth = 5;
  ctx1.strokeStyle = 'lightgrey';
  ctx1.stroke();
  ctx1.beginPath();
  ctx1.moveTo(182, 90); // Starting point of the brush
  ctx1.lineTo(202, 80); // Ending point of the brush
  ctx1.lineWidth = 8;
  ctx1.strokeStyle = 'grey';
  ctx1.stroke();



  ctx1.beginPath();
  ctx1.moveTo(199, 98); // Starting point of the brush
  ctx1.lineTo(192, 85); // Ending point of the brush
  ctx1.lineWidth = 4;
  ctx1.strokeStyle = 'grey';
  ctx1.stroke();

// Draw left leg
ctx1.beginPath();
ctx1.moveTo(225, 125);
ctx1.lineTo(235, 150);
ctx1.lineTo(215, 150);
ctx1.closePath();
ctx1.fillStyle = 'black';
ctx1.fill();

// Draw right leg
ctx1.beginPath();
ctx1.moveTo(255, 125);
ctx1.lineTo(265, 150);
ctx1.lineTo(245, 150);
ctx1.closePath();
ctx1.fillStyle = 'black';
ctx1.fill();

    
  }

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
  
  drawPanda();




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

const duckBody = {
  x: 240,
  y: 150
};

const duckHead = {
  x: 240,
  y: 120
};
function drawDuck() {
    // Draw body
    ctx.beginPath();
    ctx.arc(duckBody.x, duckBody.y, 35, 0, Math.PI * 2);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.closePath();
  
    // Draw head
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
  
    // Draw the eyes
    ctx.beginPath();
    ctx.arc(x-15, y-15, r/10, 0, Math.PI * 2, false);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
  
    ctx.beginPath();
    ctx.arc(x+15, y-15, r/10, 0, Math.PI * 2, false);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
  
    // Draw the beak
    ctx.beginPath();
    ctx.moveTo(x-10, y+5);
    ctx.lineTo(x, y+15);
    ctx.lineTo(x+10, y+5);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
  
    // Draw the wings
    ctx.beginPath();
    ctx.moveTo(x-46, y+65);
    ctx.lineTo(x-80, y+40);
    ctx.lineTo(x-70, y+55);
    ctx.lineTo(x-80, y+55);
    ctx.lineTo(x-70, y+65);
    ctx.lineTo(x-80, y+70);
    ctx.lineTo(x-46, y+80);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
  
    ctx.beginPath();
    ctx.moveTo(x+46, y+65);
    ctx.lineTo(x+80, y+40);
    ctx.lineTo(x+70, y+55);
    ctx.lineTo(x+80, y+55);
    ctx.lineTo(x+70, y+65);
    ctx.lineTo(x+80, y+70);
    ctx.lineTo(x+46, y+80);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
  
    //drawLegs
    ctx.beginPath();
    ctx.moveTo(x-16, y+126);
    ctx.lineTo(x-20, y+150);
    ctx.lineTo(x-38, y+157);
    ctx.lineTo(x-20, y+150);
    ctx.lineTo(x-10, y+157);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
  
    ctx.beginPath();
    ctx.moveTo(x+16, y+126);
    ctx.lineTo(x+20, y+150);
    ctx.lineTo(x+38, y+157);
    ctx.lineTo(x+20, y+150);
    ctx.lineTo(x+10, y+157);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
  }
  drawDuck(150,1000); 




  let deltaX = 1;
  const duckSpeed = 0.1;
  
  function move() {
    // Update the duck's body and head positions
    duckBody.x += deltaX;
    duckHead.x += deltaX;
  
    // Adjust the duck's speed based on its direction
    if (duckBody.x > 0 && duckBody.x < canvas3.width) {
      if (deltaX > 0) {
        deltaX += duckSpeed;
      } else {
        deltaX -= duckSpeed;
      }
    } else {
      deltaX *= -1;
    }
  
    // Clear the canvas
    ctx.clearRect(0, 0, canvas3.width, canvas3.height);
  
    // Redraw the duck at the new position
    drawDuck(duckBody.x, duckHead.y);
  }
  
  setInterval(() => {
    move();
  }, 16);