import React, {useState} from 'react';

function Spirograph(props) {
var re = /[a-z](-?[0-9.]*)\s(-?[0-9.]*)/gi;
var m;
let bounds ={
  minx:999999,
  miny:999999,
  maxx:-999999,
  maxy:-999999
}
  do {
      m = re.exec(props.path);
      if (m) {
          let x = parseFloat(m[1]);
          let y = parseFloat(m[2]);
          if(x > bounds.maxx){
            bounds.maxx = x;
          }
          if(x < bounds.minx){
            bounds.minx = x;
          }
          if(y > bounds.maxy){
            bounds.maxy = y;
          }
          if(y < bounds.miny){
            bounds.miny = y;
          }
      }
  } while (m);
  const [dragged, setDrag] = useState(()=>{
    return false;
  })
  const [startClickPos, setStartClickPos] = useState(()=>{
    return {
      x:0,
      y:0
    };
  })
  const [startSpiroPos, setStartSpiroPos] = useState(()=>{
    return {
      x:0,
      y:0
    };
  })
  const [svgPoint, setSVGPoint] = useState(()=>{
    return null;
  })
  const [svgPointReference, setSVGPointReference] = useState(()=>{
    return null;
  })
  const func1 = (e) =>{
    setStartClickPos({
      x:e.clientX,
      y:e.clientY,
    })
    let spiroDiv = document.querySelector(`#canvasContainer .spiro:nth-child(${props.selected})`);
    let spiroSVG = document.querySelector(`#canvasContainer .spiro:nth-child(${props.selected}) svg`);
    setStartSpiroPos({
      x:!spiroDiv.style.left?0:parseInt(spiroDiv.style.left,10),
      y:!spiroDiv.style.top?0:parseInt(spiroDiv.style.top,10),
    })
    const pt = spiroSVG.createSVGPoint();
    setSVGPointReference(pt);
    pt.x = e.clientX;
    pt.y = e.clientY;
    const svgP = pt.matrixTransform( spiroSVG.getScreenCTM().inverse() );
    setSVGPoint(svgP)
    setDrag(true);
  }
  const func2 = (e) =>{
    if(dragged){
      let spiroDiv =document.querySelector(`#canvasContainer .spiro:nth-child(${props.selected})`);
      
      const finalPos = {
        left: `${e.clientX - startClickPos.x + startSpiroPos.x}px`,
        top: `${e.clientY-startClickPos.y + startSpiroPos.y}px`
      }
      Object.assign(spiroDiv.style, finalPos)
    }
  }
  const func3 = (e) =>{
    if(dragged){
      setDrag(false);
      let spiroDiv = document.querySelector(`#canvasContainer .spiro:nth-child(${props.selected})`);
      let spiroSVG = document.querySelector(`#canvasContainer .spiro:nth-child(${props.selected}) svg`);
      const svgP = svgPointReference.matrixTransform( spiroSVG.getScreenCTM().inverse() );
      props.callback("x", svgPoint.x - svgP.x);
      props.callback("y", svgPoint.y - svgP.y);
      spiroDiv.style="";
    }
  }
  return (
    <div className="spiro position-absolute h-100 w-100">
      <svg className="overflow-visible h-100 w-100" preserveAspectRatio="xMidYMid" height="800" width="600" viewBox="-400 -400 800 800" fill="none" onMouseDown={func1} onMouseMove={func2} onMouseUp={func3}>
        <path d={`${props.path}`} stroke={`${props.color}`} strokeWidth={`${props.stroke/10}`}/>
        <rect x={bounds.minx-1} y={bounds.miny-1} width={bounds.maxx - bounds.minx+1} height={bounds.maxy- bounds.miny+1} style={{fill:'none',stroke:'lightblue',strokeWidth:"2px",strokeOpacity:props.active?1:0}} />
      </svg>
    </div>
  );
}

export default Spirograph;
