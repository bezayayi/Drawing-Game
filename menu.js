document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const canvas1 = document.getElementById("canvas1");
  const ctx1 = canvas1.getContext("2d");
  const canvas2 = document.getElementById("canvas2");
  const ctx2 = canvas2.getContext("2d");
  const canvas3 = document.getElementById("canvas3");
  const ctx3 = canvas3.getContext("2d");
  const canvas4 = document.getElementById("canvas4");
  const ctx4 = canvas4.getContext("2d");

    function updatePositionsAndSizes() {
        if (window.innerWidth >= 768) {
        canvas.style.top = "90px";
        canvas.style.left = "30px";
        canvas.style.width = "1470px";
        canvas.style.height = "620px";
        canvas.style.transform = "translate(0%, 0%)";
        
        canvas1.style.top = "120px";
        canvas1.style.left = "200px";
        canvas1.style.width = "500px";
        canvas1.style.height = "250px";
        canvas1.style.transform = "translate(0%, 0%)";
        
        canvas2.style.top = "120px";
        canvas2.style.left = "900px";
        canvas2.style.width = "500px";
        canvas2.style.height = "250px";
        canvas2.style.transform = "translate(0%, 0%)";
        
        canvas3.style.top = "420px";
        canvas3.style.left = "200px";
        canvas3.style.width = "500px";
        canvas3.style.height = "250px";
        canvas3.style.transform = "translate(0%, 0%)";
        
        canvas4.style.top = "420px";
        canvas4.style.left = "900px";
        canvas4.style.width = "500px";
        canvas4.style.height = "250px";
        canvas4.style.transform = "translate(0%, 0%)";
        } else {
        canvas.style.top = "90px";
        canvas.style.left = "10px";
        canvas.style.width = "740px";
        canvas.style.height = "600px";
        canvas.style.transform = "none";

        
        canvas1.style.top = "150px";
        canvas1.style.left = "50px";
        canvas1.style.width = "300px";
        canvas1.style.height = "200px";
        canvas1.style.transform = "none";
                
        canvas2.style.top = "150px";
        canvas2.style.left = "420px";
        canvas2.style.width = "300px";
        canvas2.style.height = "200px";
        canvas2.style.transform = "none";
                
        
        canvas3.style.top = "420px";
        canvas3.style.left = "50px";
        canvas3.style.width = "300px";
        canvas3.style.height = "200px";
        canvas3.style.transform = "none";

        canvas4.style.top = "420px";
        canvas4.style.left = "420px";
        canvas4.style.width = "300px";
        canvas4.style.height = "200px";
        canvas4.style.transform = "none";
        }
    }

  updatePositionsAndSizes();

  canvas1.onclick = function(event) {
    window.location.href = "duck.html";
  };

  canvas2.onclick = function(event) {
    window.location.href = "cat.html";
  };

  canvas3.onclick = function(event) {
    window.location.href = "flower.html";
  };

  canvas4.onclick = function(event) {
    window.location.href = "mesob.html";
  };

  function drawDuck(x,y) {
    let r=50;
    // Draw the body
    ctx1.beginPath();
    ctx1.arc(x, y+80, r, 0, Math.PI * 2, false);
    ctx1.fillStyle = "yellow";
    ctx1.fill();
    ctx1.strokeStyle = "black";
    ctx1.stroke();
  
    // Draw the head
    ctx1.beginPath();
    ctx1.arc(x, y, r, 0, Math.PI * 2, false);
    ctx1.fillStyle = "yellow";
    ctx1.fill();
    ctx1.strokeStyle = "black";
    ctx1.stroke();
  
    // Draw the eyes
    ctx1.beginPath();
    ctx1.arc(x-15, y-15, r/10, 0, Math.PI * 2, false);
    ctx1.fillStyle = "black";
    ctx1.fill();
    ctx1.stroke();
  
    ctx1.beginPath();
    ctx1.arc(x+15, y-15, r/10, 0, Math.PI * 2, false);
    ctx1.fillStyle = "black";
    ctx1.fill();
    ctx1.stroke();
  
    // Draw the beak
    ctx1.beginPath();
    ctx1.moveTo(x-10, y+5);
    ctx1.lineTo(x, y+15);
    ctx1.lineTo(x+10, y+5);
    ctx1.fillStyle = "orange";
    ctx1.fill();
    ctx1.strokeStyle = "black";
    ctx1.stroke();
  
    // Draw the wings
    ctx1.beginPath();
    ctx1.moveTo(x-46, y+65);
    ctx1.lineTo(x-80, y+40);
    ctx1.lineTo(x-70, y+55);
    ctx1.lineTo(x-80, y+55);
    ctx1.lineTo(x-70, y+65);
    ctx1.lineTo(x-80, y+70);
    ctx1.lineTo(x-46, y+80);
    ctx1.fillStyle = "yellow";
    ctx1.fill();
    ctx1.strokeStyle = "black";
    ctx1.stroke();
  
    ctx1.beginPath();
    ctx1.moveTo(x+46, y+65);
    ctx1.lineTo(x+80, y+40);
    ctx1.lineTo(x+70, y+55);
    ctx1.lineTo(x+80, y+55);
    ctx1.lineTo(x+70, y+65);
    ctx1.lineTo(x+80, y+70);
    ctx1.lineTo(x+46, y+80);
    ctx1.fillStyle = "yellow";
    ctx1.fill();
    ctx1.strokeStyle = "black";
    ctx1.stroke();
  
    //drawLegs
    ctx1.beginPath();
    ctx1.moveTo(x-16, y+126);
    ctx1.lineTo(x-20, y+150);
    ctx1.lineTo(x-38, y+157);
    ctx1.lineTo(x-20, y+150);
    ctx1.lineTo(x-10, y+157);
    ctx1.fillStyle = "white";
    ctx1.fill();
    ctx1.strokeStyle = "black";
    ctx1.stroke();
  
    ctx1.beginPath();
    ctx1.moveTo(x+16, y+126);
    ctx1.lineTo(x+20, y+150);
    ctx1.lineTo(x+38, y+157);
    ctx1.lineTo(x+20, y+150);
    ctx1.lineTo(x+10, y+157);
    ctx1.fillStyle = "white";
    ctx1.fill();
    ctx1.strokeStyle = "black";
    ctx1.stroke();
  }
  
  drawDuck(130,60);

  function drawCat(x,y) {
    // Draw the head
    let r=50;
    ctx2.beginPath();
    ctx2.arc(x, y, r, 0, Math.PI * 2, false);
    ctx2.fillStyle = "gray";
    ctx2.fill();
    ctx2.strokeStyle = "gray";
    ctx2.stroke();
  
    // Draw the ears
    ctx2.beginPath();
    ctx2.moveTo(x-45, y-10);
    ctx2.lineTo(x-30, y-80);
    ctx2.lineTo(x, y-10);
    ctx2.fillStyle = "gray";
    ctx2.fill();
    ctx2.stroke();
  
    ctx2.beginPath();
    ctx2.moveTo(x, y-10);
    ctx2.lineTo(x+30, y-80);
    ctx2.lineTo(x+45, y-10);
    ctx2.fillStyle = "gray";
    ctx2.fill();
    ctx2.stroke();
  
    // Draw the eyes
    ctx2.beginPath();
    ctx2.arc(x-15, y-20, r/10, 0, Math.PI * 2, false);
    ctx2.fillStyle = "black";
    ctx2.fill();
    ctx2.stroke();
  
    ctx2.beginPath();
    ctx2.arc(x+15, y-20, r/10, 0, Math.PI * 2, false);
    ctx2.fillStyle = "black";
    ctx2.fill();
    ctx2.stroke();
  
    // Draw the nose
    ctx2.beginPath();
    ctx2.moveTo(x, y);
    ctx2.lineTo(x+10, y+10);
    ctx2.lineTo(x-10, y+10);
    ctx2.fillStyle = "black";
    ctx2.fill();
    ctx2.stroke();
  
    //Draw the thing
    ctx2.beginPath();
    ctx2.moveTo(x-50, y-5);
    ctx2.lineTo(x-80, y-10);
    ctx2.fillStyle = "black";
    ctx2.fill();
    ctx2.stroke();
    ctx2.beginPath();
    ctx2.moveTo(x-50, y+5);
    ctx2.lineTo(x-80, y+5);
    ctx2.fillStyle = "black";
    ctx2.fill();
    ctx2.stroke();
    ctx2.beginPath();
    ctx2.moveTo(x-40, y+15);
    ctx2.lineTo(x-80, y+20);
    ctx2.fillStyle = "black";
    ctx2.fill();
    ctx2.stroke();
  
    ctx2.beginPath();
    ctx2.moveTo(x+50, y-5);
    ctx2.lineTo(x+80, y-10);
    ctx2.fillStyle = "black";
    ctx2.fill();
    ctx2.stroke();
    ctx2.beginPath();
    ctx2.moveTo(x+50, y+5);
    ctx2.lineTo(x+80, y+5);
    ctx2.fillStyle = "black";
    ctx2.fill();
    ctx2.stroke();
    ctx2.beginPath();
    ctx2.moveTo(x+40, y+15);
    ctx2.lineTo(x+80, y+20);
    ctx2.fillStyle = "black";
    ctx2.fill();
    ctx2.stroke();
  
  }
  
   drawCat(150,90);

   function drawFlower(x,y) {
    let r=25;
      // Draw the petals
      ctx3.beginPath();
      ctx3.arc(x, y, r, 0, Math.PI * 2, false);
      ctx3.fillStyle = 'pink';
      ctx3.fill();
      ctx3.strokeStyle = 'black';
      ctx3.stroke();
  
      ctx3.beginPath();
      ctx3.arc(x+50, y, r, 0, Math.PI * 2, false);
      ctx3.fillStyle = 'pink';
      ctx3.fill();
      ctx3.strokeStyle = 'black';
      ctx3.stroke();
  
      ctx3.beginPath();
      ctx3.arc(x+50, y+50, r, 0, Math.PI * 2, false);
      ctx3.fillStyle = 'pink';
      ctx3.fill();
      ctx3.strokeStyle = 'black';
      ctx3.stroke();
  
      ctx3.beginPath();
      ctx3.arc(x, y+50, r, 0, Math.PI * 2, false);
      ctx3.fillStyle = 'pink';
      ctx3.fill();
      ctx3.strokeStyle = 'black';
      ctx3.stroke();
  
      //center
      ctx3.beginPath();
      ctx3.arc(x+25, y+25, r-6, 0, Math.PI * 2, false);
      ctx3.fillStyle = 'yellow';
      ctx3.fill();
      ctx3.strokeStyle = 'black';
      ctx3.stroke();
  
      ctx3.beginPath();
      ctx3.arc(x-160, y+50, r+160, 0, Math.PI *0.1, false);
      ctx3.fillStyle = 'pink';
      ctx3.fill();
      ctx3.strokeStyle = 'black';
      ctx3.stroke();
  }
  
  drawFlower(130,41);
  
  function drawMesob(x,y){
  
    ctx4.beginPath();
    ctx4.moveTo(x,y);
    ctx4.lineTo(x+15,y);
    ctx4.lineTo(x+15,y+15);
    ctx4.lineTo(x,y+15);
    ctx4.lineTo(x,y);
    ctx4.fillStyle = "yellow";
    ctx4.fill();
    ctx4.stroke();
  
    ctx4.beginPath();
    ctx4.moveTo(x,y+15);
    ctx4.lineTo(x-25,y+55);
    ctx4.lineTo(x+45,y+55);
    ctx4.lineTo(x+15,y+15);
    ctx4.fillStyle = "green";
    ctx4.fill();
    ctx4.stroke();
    
    ctx4.beginPath();
    ctx4.moveTo(x-25,y+55);
    ctx4.lineTo(x-25,y+65);
    ctx4.lineTo(x+45,y+65);
    ctx4.lineTo(x+45,y+55);
    ctx4.fillStyle = "yellow";
    ctx4.fill();
    ctx4.stroke();
    
    ctx4.beginPath();
    ctx4.moveTo(x-25,y+65);
    ctx4.lineTo(x-5,y+85);
    ctx4.lineTo(x+25,y+85);
    ctx4.lineTo(x+45,y+65);
    ctx4.fillStyle = "red";
    ctx4.fill();
    ctx4.stroke();
  
    ctx4.beginPath();
    ctx4.moveTo(x-5,y+85);
    ctx4.lineTo(x-40,y+140);
    ctx4.lineTo(x+60,y+140);
    ctx4.lineTo(x+25,y+85);
    ctx4.fillStyle = "yellow";
    ctx4.fill();
    ctx4.stroke();
  }
  
  drawMesob(130,5);  
});