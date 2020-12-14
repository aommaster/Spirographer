function gcd(a, b) {
  if (b === 0)
    return a;
  else
    return gcd(b, (a % b));
}

export function randomParams(){
  let R = Math.floor(Math.random() * 300) +1//Radius A 500
  let r = Math.floor(Math.random() * 300) +1//Radius B 500
  let d = Math.floor(Math.random() * 300) +1//Distance 500
  let u = Math.floor(Math.random() * Math.floor(361)) //Rotation
  let p = 100 //Points per circle - Standardized at 500 for simple usage
  let params = 
    {
      r1: R,
      r2: r,
      distance: d,
      rotation: u,
      ppc: p
    }
  return params;
}

export function generateSpiroPath(params) {
  let {r1, r2, distance, rotation, ppc} = params;
  let origin = {
    x: 400,
    y: 300
  }

  if (r1 ===0 || r2===0){
    return "";
  }

  let SVGPath = [];
  let angleStep = 2 * Math.PI / ppc;
  let numRevolutions = r2/gcd(r1,r2);
  let numPoints = ppc * numRevolutions
  let angle = parseFloat(rotation) * Math.PI / 180;
  let radiusDifference = r1 - r2;
  let radiusRatio = radiusDifference/r2;

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