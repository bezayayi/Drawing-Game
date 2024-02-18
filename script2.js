const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d", { willReadFrequently: true });
const canvas1 = document.getElementById("canvas1");
const ctx1 = canvas1.getContext("2d", { willReadFrequently: true });
const heading = document.getElementById("heading");
const text = document.getElementById("text");
const button = document.getElementById("button");

// Initialize the panda's body and head
const pandaBody = {
    x: 240,
    y: 110
  };
  
  const pandaHead = {
    x: 240,
    y: 80
  };
let direction = 1;
let pandaX = 0;
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
    ctx1.arc(pandaBody.x, pandaBody.y, 35, 0, Math.PI * 2);
    ctx1.fillStyle = 'black';
    ctx1.fill();
    ctx1.closePath();
  
    // Draw head
    ctx1.beginPath();
    ctx1.arc(pandaHead.x, pandaHead.y, 25, 0, Math.PI * 2);
    ctx1.fillStyle = 'white';
    ctx1.fill();
  
    // Draw eyes
    ctx1.beginPath();
    ctx1.arc(pandaHead.x - 10, pandaHead.y, 5, 0, Math.PI * 2);
    ctx1.arc(pandaHead.x + 10, pandaHead.y, 5, 0, Math.PI * 2);
    ctx1.fillStyle = 'black';
    ctx1.fill();
  
    // Draw nose
    ctx1.beginPath();
    ctx1.arc(pandaHead.x, pandaHead.y + 5, 4, 0, Math.PI * 2);
    ctx1.fillStyle = 'black';
    ctx1.fill();
  
    // Draw ears
    ctx1.beginPath();
    ctx1.arc(pandaHead.x - 15, pandaHead.y - 10, 6, 0, Math.PI * 2);
    ctx1.arc(pandaHead.x + 15, pandaHead.y - 10, 6, 0, Math.PI * 2);
    ctx1.fillStyle = 'black';
    ctx1.fill();
  
    // Draw left hand
    ctx1.beginPath();
    ctx1.arc(pandaBody.x - 20, pandaBody.y, 10, 0, Math.PI * 2);
    ctx1.fillStyle = 'black';
    ctx1.fill();
  
    // Draw right hand
    ctx1.beginPath();
    ctx1.arc(pandaBody.x + 20, pandaBody.y, 10, 0, Math.PI * 2);
    ctx1.fillStyle = 'black';
    ctx1.fill();
  
    // Draw brush in the panda's hand
    ctx1.beginPath();
    ctx1.moveTo(pandaBody.x - 30, pandaBody.y); // Starting point of the brush
    ctx1.lineTo(pandaBody.x - 19, pandaBody.y - 5); // Ending point of the brush
    ctx1.lineWidth = 5;
    ctx1.strokeStyle = 'lightgrey';
    ctx1.stroke();
    ctx1.beginPath();
    ctx1.moveTo(pandaBody.x - 28, pandaBody.y + 2); // Starting point of the brush
    ctx1.lineTo(pandaBody.x - 18, pandaBody.y - 3); // Ending point of the brush
    ctx1.lineWidth = 8;
    ctx1.strokeStyle = 'grey';
    ctx1.stroke();
  
// Draw left leg
ctx1.beginPath();
ctx1.moveTo(pandaBody.x, pandaBody.y + 35);
ctx1.lineTo(pandaBody.x, pandaBody.y + 50);
ctx1.lineTo(pandaBody.x - 10, pandaBody.y + 50);
ctx1.closePath();
ctx1.fillStyle = 'black';
ctx1.fill();

// Draw right leg
ctx1.beginPath();
ctx1.moveTo(pandaBody.x, pandaBody.y + 35);
ctx1.lineTo(pandaBody.x, pandaBody.y + 50);
ctx1.lineTo(pandaBody.x + 10, pandaBody.y + 50);
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
  
 drawCloud(10, 20, 3, 'grey');
//  //drawCloud(550, 325, 400, '#0C0');

function gotoMenuPage() {
    window.location.href = "menu.html";
}

function animatePanda() {
  // Update the position of the panda
  pandaX += 5 * direction;

  // Check if the panda has reached the edge of the canvas
  if (pandaX >= canvas1.width - 50 || pandaX <= 0) {
      // Change the direction of the panda
      direction *= -1;
  }

  // Clear the canvas
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);

  // Draw the panda
  drawPanda(pandaX, pandaBody.y);

  // Request the next animation frame
  requestAnimationFrame(animatePanda);
}

// Start the animation
animatePanda();