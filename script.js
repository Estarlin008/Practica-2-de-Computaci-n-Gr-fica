const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

let radius = 50;
let creciendo = true;
const circleX = 500;
const circleY = 100;
let alpha = 0.5;
let visible = true;

function drawScene(){
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

    ctx.strokeStyle = "green";
    ctx.strokeRect(250, 50, 150, 100);

    //parte 2 (círculo)
    ctx.beginPath();
    let radial = ctx.createRadialGradient(circleX, circleY, 10, circleX, circleY, radius);
    radial.addColorStop(0, "#ffffff");
    radial.addColorStop(1, "#0000ff");
    ctx.arc(circleX, circleY, radius, 0, Math.PI * 2);
    ctx.fillStyle = radial;
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


    //parte 4

    ctx.beginPath();
    ctx.arc(500, 300, 80, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, "+alpha+")";
    ctx.fill();
    ctx.stroke();

    // Miter
    drawShape(50, 370, "miter");

    // Round
    drawShape(350, 370, "round");

    // Bevel
    drawShape(650, 370, "bevel");
}

//parte 6
function drawShape(x, y, joinType) {
    ctx.lineWidth = 15;
    ctx.lineJoin = joinType;
    ctx.strokeStyle = "green";

    ctx.beginPath();
    ctx.moveTo(x + 50, y);
    ctx.lineTo(x + 10, y + 140);
    ctx.lineTo(x + 200, y + 20);
    ctx.lineTo(x, y + 40);
    ctx.closePath();
    ctx.stroke();
}

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (creciendo) {
        radius += 1;
        if (radius >= 90) creciendo = false;
    } else {
        radius -= 1;
        if (radius <= 50) creciendo = true;
    }

    drawScene();

    requestAnimationFrame(animate);
}

animate();

function cambiarOpacidad() {
    visible = !visible;
    alpha = visible ? 0.5 : 0.1;
    setTimeout(cambiarOpacidad, 1000);
}

cambiarOpacidad();



