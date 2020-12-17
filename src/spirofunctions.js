export function gcd(a, b) {
  if (b === 0)
    return a;
  else
    return gcd(b, (a % b));
}

export function randomParams(){
  let R = Math.floor(Math.random() * 300) +1;//Radius A 500
  let r = Math.floor(Math.random() * 300) +1;//Radius B 500
  let d = Math.floor(Math.random() * 300) +1;//Distance 500
  let u = Math.floor(Math.random() * Math.floor(361)); //Rotation only works when PPC is low
  let p = 100; //Points per circle - Standardized at 100 for simple usage
  let c =  Math.random() < 0.5?"epi":"hypo" //Curve type;
  let s = 1 //Scale;
  let params = 
    {
      r1: R,
      r2: r,
      distance: d,
      rotation: u,
      ppc: p,
      animation: 5,
      animPlaying: false,
      curveType: c,
      scale: 100,
    }
  return params;
}

export function generateSpiroPath(params) {
  let {r1, r2, distance, rotation, ppc, curveType, scale} = params;
  let origin = {
    x: 400,
    y: 300
  }

  scale = scale / 100

  if (r1 ===0 || r2===0){
    return "";
  }

  let SVGPath = [];
  let angleStep = 2 * Math.PI / ppc;
  let numRevolutions = r2/gcd(r1,r2);
  let numPoints = ppc * numRevolutions
  let angle = parseFloat(rotation) * Math.PI / 180;
  let radiusDifference = r1 - r2;
  let radiusSum = r1 + r2;
  let radiusDifferenceRatio = radiusDifference/r2;
  let radiusSumRatio = radiusDifference/r2;

  
  if(curveType==="hypo"){
    let oldPoint ={
      x: origin.x + radiusDifference * Math.cos(angle) + distance * Math.cos(angle* radiusDifferenceRatio),
      y:origin.y + radiusDifference * Math.sin(angle) - distance * Math.sin(angle* radiusDifferenceRatio)
    }
    SVGPath.push(`M${scale * oldPoint.x}`,`${scale * oldPoint.y}`);
    for(let i=0; i<numPoints; i++){
      angle += angleStep;
      let newPoint = {
        x: origin.x + radiusDifference * Math.cos(angle) + distance * Math.cos(angle* radiusDifferenceRatio),
        y: origin.y + radiusDifference * Math.sin(angle) - distance * Math.sin(angle* radiusDifferenceRatio)
      } 
      
      SVGPath.push(`L${scale * newPoint.x}`,`${scale * newPoint.y}`);
      oldPoint = {
        x: newPoint.x,
        y: newPoint.y
      }
    }
  }
  else{
    let oldPoint ={
      x: origin.x + radiusSum * Math.cos(angle) - distance * Math.cos(angle* radiusSumRatio),
      y:origin.y + radiusSum * Math.sin(angle) - distance * Math.sin(angle* radiusSumRatio)
    }
    SVGPath.push(`M${scale * oldPoint.x}`,`${scale * oldPoint.y}`);
    for(let i=0; i<numPoints; i++){
      angle += angleStep;
      let newPoint = {
        x: origin.x + radiusSum * Math.cos(angle) - distance * Math.cos(angle* radiusSumRatio),
        y: origin.y + radiusSum * Math.sin(angle) - distance * Math.sin(angle* radiusSumRatio)
      } 
      
      SVGPath.push(`L${scale * newPoint.x}`,`${scale * newPoint.y}`);
      oldPoint = {
        x: newPoint.x,
        y: newPoint.y
      }
    }
  }
  SVGPath = SVGPath.join(" ");
  return SVGPath;
}