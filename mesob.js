document.addEventListener("DOMContentLoaded", () => {
    const canvas1 = document.getElementById("canvas1");
    const ctx1 = canvas1.getContext("2d");
    const canvas2 = document.getElementById("canvas2");
    const ctx2 = canvas2.getContext("2d");
    const canvas3 = document.getElementById("canvas3");
    const ctx3 = canvas3.getContext("2d");
    const colorOption = document.getElementById("colorOption");
    const colorSection = document.getElementById("colorSection");
  
    let isDrawing = false;
    let brushType = "pencil"; // Set the initial brush type to "pencil"
    let brushSize = 5; // Set the initial brush size
  
    // Get the color picker input
    const colorPicker = document.getElementById("colorPicker");
    const brush = document.getElementById("brush");
    const eraser = document.getElementById("eraser");
    const clear = document.getElementById("clear");
    const size = document.getElementById("size-slider");
  
    // Set the initial color
    ctx2.strokeStyle = colorPicker.value;
  
    // Set the initial brush size
    size.value = brushSize;
    size.addEventListener("input", () => {
      brushSize = size.value;
    });
  
    // Update positions and sizes based on screen size
    function updatePositionsAndSizes() {
      if (window.innerWidth >= 768) {
        canvas2.style.top = "70px";
        canvas2.style.left = "500px";
        canvas2.style.width = "850px";
        canvas2.style.height = "600px";
        canvas2.style.transform = "translate(-40%, 0%)";
        canvas3.style.top = "70px";
        canvas3.style.left = "850px";
        canvas3.style.width = "300px";
        canvas3.style.height = "600px";
        canvas3.style.transform = "translate(60%, 0%)";
        
        colorOption.style.top = "70px";
        colorOption.style.left = "850px";
        colorOption.style.width = "300px";
        colorOption.style.height = "600px";
        colorOption.style.transform = "translate(60%, 0%)";
        
        colorSection.style.top = "600px";
        colorSection.style.left = "900px";
        colorSection.style.width = "300px";
        colorSection.style.height = "600px";
        colorSection.style.transform = "translate(60%, 0%)";
      } else {
        canvas2.style.top = "100px";
        canvas2.style.left = "50px";
        canvas2.style.width = "450px";
        canvas2.style.height = "500px";
        canvas2.style.transform = "none";

        canvas3.style.top = "100px";
        canvas3.style.left = "520px";
        canvas3.style.width = "230px";
        canvas3.style.height = "500px";
        canvas3.style.transform =  "none";
        
        colorOption.style.top = "100px";
        colorOption.style.left = "530px";
        colorOption.style.width = "230px";
        colorOption.style.height = "500px";
        colorOption.style.transform =  "none";
        
        colorSection.style.top = "530px";
        colorSection.style.left = "550px";
        colorSection.style.width = "230px";
        colorSection.style.height = "500px";
        colorSection.style.transform =  "none";
      }
    }
  
    // Event listeners
    canvas2.addEventListener("mousedown", startDrawing);
    canvas2.addEventListener("mousemove", draw);
    canvas2.addEventListener("mouseup", stopDrawing);
    canvas2.addEventListener("mouseout", stopDrawing);
    window.addEventListener("resize", updatePositionsAndSizes);
  
    // Add a 'change' event listener to the color picker
    colorPicker.addEventListener("change", () => {
      ctx2.strokeStyle = colorPicker.value;
    });
  
    // Add a click event listener to the brush button
    brush.addEventListener("click", () => {
      brushType = "pencil";
      ctx2.strokeStyle = colorPicker.value;
    });
  
    // Add a click event listener to the eraser button
    eraser.addEventListener("click", () => {
      brushType = "eraser";
      ctx2.strokeStyle = "#ffffff";
    });
  
    // Add a click event listener to the clear button
    clear.addEventListener("click", () => {
      clearCanvas();
    });
  
    function startDrawing(e) {
      isDrawing = true;
      draw(e);
    }
  
    function draw(e) {
      if (!isDrawing) return;
  
      ctx2.lineWidth = brushSize;
      ctx2.lineCap = "round";
  
      if (brushType === "eraser") {
        // Use a white stroke style to erase the canvas
        ctx2.strokeStyle = "#ffffff";
      } else {
        ctx2.strokeStyle = colorPicker.value;
      }
  
      const rect = canvas2.getBoundingClientRect();
      const x = e.clientX - rect.left - window.scrollX;
      const y = e.clientY - rect.top - window.scrollY;
  
      ctx2.lineTo(x, y);
      ctx2.stroke();
      ctx2.beginPath();
      ctx2.moveTo(x, y);
    }
  
    function stopDrawing() {
      isDrawing = false;
      ctx2.beginPath();
    }
  
    // Clear the canvas
    function clearCanvas() {
      ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    }
  
    // Initial positions and sizes update
    updatePositionsAndSizes();

    function drawMesob(x,y){
  
        ctx3.beginPath();
        ctx3.moveTo(x,y);
        ctx3.lineTo(x+15,y);
        ctx3.lineTo(x+15,y+15);
        ctx3.lineTo(x,y+15);
        ctx3.lineTo(x,y);
        ctx3.fillStyle = "yellow";
        ctx3.fill();
        ctx3.stroke();
      
        ctx3.beginPath();
        ctx3.moveTo(x,y+15);
        ctx3.lineTo(x-25,y+55);
        ctx3.lineTo(x+45,y+55);
        ctx3.lineTo(x+15,y+15);
        ctx3.fillStyle = "green";
        ctx3.fill();
        ctx3.stroke();
        
        ctx3.beginPath();
        ctx3.moveTo(x-25,y+55);
        ctx3.lineTo(x-25,y+65);
        ctx3.lineTo(x+45,y+65);
        ctx3.lineTo(x+45,y+55);
        ctx3.fillStyle = "yellow";
        ctx3.fill();
        ctx3.stroke();
        
        ctx3.beginPath();
        ctx3.moveTo(x-25,y+65);
        ctx3.lineTo(x-5,y+85);
        ctx3.lineTo(x+25,y+85);
        ctx3.lineTo(x+45,y+65);
        ctx3.fillStyle = "red";
        ctx3.fill();
        ctx3.stroke();
      
        ctx3.beginPath();
        ctx3.moveTo(x-5,y+85);
        ctx3.lineTo(x-40,y+140);
        ctx3.lineTo(x+60,y+140);
        ctx3.lineTo(x+25,y+85);
        ctx3.fillStyle = "yellow";
        ctx3.fill();
        ctx3.stroke();
      }
      
      drawMesob(200,190);
  });