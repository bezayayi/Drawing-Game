document.addEventListener("DOMContentLoaded", () => {
    const canvas2 = document.getElementById("canvas");
    const ctx2 = canvas2.getContext("2d");

    // Variables to control the position and direction of the panda
let pandaX = 0;
let pandaY = 100;
let direction = 1; // 1 for forward, -1 for backward

// Function to draw the panda
function drawPanda() {
    // Clear the canvas
    let x=100;
    let y=70;
    ctx2.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the panda
    ctx2.save();
    ctx2.translate(pandaX, pandaY);
    // Draw the body
    ctx2.beginPath();
    ctx2.arc(x, y, 50, 0, Math.PI * 2);
    ctx2.fillStyle = 'black';
    ctx2.fill();
    // Draw the head
    ctx2.beginPath();
    ctx2.arc(x, y-70, 30, 0, Math.PI * 2);
    ctx2.fillStyle = 'black';
    ctx2.fill();
    // Draw the left hand
    ctx2.beginPath();
    ctx2.arc(x-40, y-20, 20, 0, Math.PI * 2);
    ctx2.fillStyle = 'black';
    ctx2.fill();
    
    ctx2.beginPath();
    ctx2.arc(x-45, y-25, 10,  Math.PI * 0.75, Math.PI * 1.65,false);
    ctx2.fillStyle = 'white';
    ctx2.fill();
    // Draw the right hand
    ctx2.beginPath();
    ctx2.arc(x+40, y-20, 20, 0, Math.PI * 2);
    ctx2.fillStyle = 'black';
    ctx2.fill();
    ctx2.beginPath();
    ctx2.arc(x+45, y-22, 10,  Math.PI * 0.5, Math.PI * 1.5,true);
    ctx2.fillStyle = 'white';
    ctx2.fill();
    // Draw the brush in the panda's hand
    ctx2.beginPath();
    ctx2.moveTo(x-47, y-25); // Starting point of the brush
    ctx2.lineTo(x-75, y-45); // Ending point of the brush
    ctx2.lineWidth = 10;
    ctx2.strokeStyle = 'lightgrey';
    ctx2.stroke();
    ctx2.beginPath();
    ctx2.moveTo(x-60, y-35); // Starting point of the brush
    ctx2.lineTo(x-80, y-50); // Ending point of the brush
    ctx2.lineWidth = 20;
    ctx2.strokeStyle = 'grey';
    ctx2.stroke();
    ctx2.beginPath();
    ctx2.moveTo(x-70, y-42); // Starting point of the brush
    ctx2.lineTo(x-80, y-50); // Ending point of the brush
    ctx2.lineWidth = 20;
    ctx2.strokeStyle = 'lightgrey';
    ctx2.stroke();
    // Draw the left leg
    ctx2.beginPath();
    ctx2.arc(x-30, y+45, 20, 0, Math.PI * 2);
    ctx2.fillStyle = 'black';
    ctx2.fill();
    ctx2.beginPath();
    ctx2.arc(x-30, y+45, 10,  Math.PI * 0.25, Math.PI * 1.25,false);
    ctx2.fillStyle = 'white';
    ctx2.fill();
    // Draw the right leg
    ctx2.beginPath();
    ctx2.arc(x+30, y+45, 20, 0, Math.PI * 2);
    ctx2.fillStyle = 'black';
    ctx2.fill();
    ctx2.beginPath();
    ctx2.arc(x+30, y+45, 10,  Math.PI * 0.75, Math.PI * 1.75,true);
    ctx2.fillStyle = 'white';
    ctx2.fill();

    //draw the eyes
    
    ctx2.beginPath();
    ctx2.arc(x-10, y-75, 7,  0, Math.PI*2,false);
    ctx2.fillStyle = 'white';
    ctx2.fill();
    ctx2.beginPath();
    ctx2.arc(x+10, y-75, 7,  0, Math.PI*2,false);
    ctx2.fillStyle = 'white';
    ctx2.fill();

    //draw the ears
    
    ctx2.beginPath();
    ctx2.arc(x-20, y-95, 9,  Math.PI*0.65, Math.PI*1.85,false);
    ctx2.fillStyle = 'white';
    ctx2.fill();
    ctx2.beginPath();
    ctx2.arc(x+25, y-95, 9,  Math.PI, Math.PI*0.5,false);
    ctx2.fillStyle = 'white';
    ctx2.fill();
    
    //draw the mouth
    
    ctx2.beginPath();
    ctx2.arc(x, y-62, 9,  Math.PI, Math.PI*2,true);
    ctx2.fillStyle = 'white';
    ctx2.fill();

    ctx2.restore();
}
// Function to animate the panda
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
});