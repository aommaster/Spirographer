export function randoSpiro(canvas) {
  let R = Math.floor(Math.random() * Math.floor(300)) //Radius A 500
  let r = Math.floor(Math.random() * Math.floor(300)) //Radius B 500
  let d = Math.floor(Math.random() * Math.floor(300)) //Distance 500
  let u = Math.floor(Math.random() * Math.floor(360)) //Rotation
  let p = Math.floor(Math.random() * Math.floor(10)) //Points per curve
  drawSpiro(R, r, d, u, p, canvas);
};
export function drawSpiro(radius1, radius2, distance, rotation, pointsPerCurve, canvas) {
  let ctx = canvas.getContext("2d");
  let origin = {
    x: canvas.width / 2,
    y: canvas.height / 2
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth= 1;
  let angleStep = 2 * Math.PI / pointsPerCurve;
  let numRevolutions = radius2/gcd(radius1,radius2);
  let numPoints = pointsPerCurve * numRevolutions

  let oldPoint ={
    x: origin.x + radius1 - radius2 + distance,
    y:origin.y
  }
  ctx.moveTo(oldPoint.x,oldPoint.y);

  let angle = parseFloat(rotation) * Math.PI / 180;
  let radiusDifference = radius1 - radius2;
  let radiusRatio = radiusDifference/radius2;
  ctx.beginPath();
  for(let i=0; i<=numPoints; i++){
    angle += angleStep;
    let newPoint = {
      x: origin.x + radiusDifference * Math.cos(angle) + distance * Math.cos(angle* radiusRatio),
      y: origin.y + radiusDifference * Math.sin(angle) - distance * Math.sin(angle* radiusRatio)
    } 
    
    ctx.lineTo(newPoint.x, newPoint.y);
    ctx.strokeStyle = "#000";
    ctx.stroke();
    oldPoint = {
      x: newPoint.x,
      y: newPoint.y
    }
  }
}

function gcd(a, b) {
  if (b === 0)
    return a;
  else
    return gcd(b, (a % b));
}