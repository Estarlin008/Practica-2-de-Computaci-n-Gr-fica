const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fondo = ctx.createLinearGradient(0, 0, 0, canvas.height);
fondo.addColorStop(0, "#8bb8d7");
fondo.addColorStop(1, "#e80c55")
ctx.fillStyle = fondo;
ctx.fillRect(0, 0, canvas.width, canvas.height);


//parte 1 (rectángulo)
ctx.fillStyle = "blue";
ctx.fillRect(50, 50, 150, 100);

ctx.strokeStyle = "greed";
ctx.strokeRect(250, 50, 150, 100);

//parte 2 (círculo)
ctx.beginPath();
ctx.arc(500, 100, 50, 0, Math.PI * 2);
ctx.fillStyle = "green";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 250);
ctx.lineTo(200, 350);
ctx.lineTo(50, 350);
ctx.closePath();

ctx.fillStyle = "orange";
ctx.fill();
ctx.stroke();

//parte 3
ctx.beginPath();
ctx.moveTo(800, 300);
ctx.quadraticCurveTo(753, 260, 840, 257);
ctx.quadraticCurveTo(880, 200, 940, 250);
ctx.quadraticCurveTo(1000, 250, 950, 300);
ctx.quadraticCurveTo(875, 350, 800, 300);
ctx.closePath();
ctx.fillStyle = "orange";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 600);
ctx.bezierCurveTo(300, 500, 400, 650, 500, 600);
ctx.strokeStyle = 4;
ctx.stroke();
