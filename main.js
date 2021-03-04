canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var lastPosition_X;
var lastPosition_Y;
color = "red";
widthOfLine = 1;
var width = screen.width;
new_width = screen.width - 70;
new_height =  screen.height - 300;

if(width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchStart", myTouchStart);

function myTouchStart (e) {
    console.log("myTouchStart");
    lastPosition_X = e.touches[0].clientX - canvas.offsetLeft;
    lastPosition_Y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", myTouchMove);
function myTouchMove (e) {
    console.log("my_TouchMove");
    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;
   
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
          
        console.log("last position of x and y cordinates = ");
        console.log("x = " +lastPosition_X + "y = " + lastPosition_Y);
        
        ctx.moveTo(lastPosition_X, lastPosition_Y);
        console.log("current position of x and y cordinates = ");
        console.log("x = " + currentPositionOfTouchX + "y = " + currentPositionOfTouchY);

        ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
        ctx.stroke();
    

    lastPosition_X = currentPositionOfTouchX;
    lastPosition_Y = currentPositionOfTouchY;
}


