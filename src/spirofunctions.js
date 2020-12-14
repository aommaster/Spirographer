function gcd(a, b) {
  if (b === 0)
    return a;
  else
    return gcd(b, (a % b));
}

export function drawSpiroSVG(radius1, radius2, distance, rotation, pointsPerCurve) {
  let origin = {
    x: 400,
    y: 300
  }

  let SVGPath = [];
  let angleStep = 2 * Math.PI / pointsPerCurve;
  let numRevolutions = radius2/gcd(radius1,radius2);
  let numPoints = pointsPerCurve * numRevolutions
  let angle = parseFloat(rotation) * Math.PI / 180;
  let radiusDifference = radius1 - radius2;
  let radiusRatio = radiusDifference/radius2;

  let oldPoint ={
    x: origin.x + radiusDifference * Math.cos(angle) + distance * Math.cos(angle* radiusRatio),
    y:origin.y + radiusDifference * Math.sin(angle) - distance * Math.sin(angle* radiusRatio)
  }
  SVGPath.push(`M${oldPoint.x}`,`${oldPoint.y}`);

  
  for(let i=0; i<numPoints; i++){
    angle += angleStep;
    let newPoint = {
      x: origin.x + radiusDifference * Math.cos(angle) + distance * Math.cos(angle* radiusRatio),
      y: origin.y + radiusDifference * Math.sin(angle) - distance * Math.sin(angle* radiusRatio)
    } 
    
    SVGPath.push(`L${newPoint.x}`,`${newPoint.y}`);
    oldPoint = {
      x: newPoint.x,
      y: newPoint.y
    }
  }
  SVGPath = SVGPath.join(" ");
  return SVGPath;
}