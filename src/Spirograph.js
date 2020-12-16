import React, {useState} from 'react';

function Spirograph(props) {
var re = /[a-z](-?[0-9.]*)\s(-?[0-9.]*)/gi;
var m;
let bounds ={
  minx:999,
  miny:999,
  maxx:-999,
  maxy:-999
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
  const func1 = (e) =>{
    setStartClickPos({
      x:e.pageX,
      y:e.pageY,
    })
    let spiroDiv = document.querySelector(`#canvasContainer .spiro:nth-child(${props.selected})`);
    setStartSpiroPos({
      x:!spiroDiv.style.left?0:parseInt(spiroDiv.style.left,10),
      y:!spiroDiv.style.top?0:parseInt(spiroDiv.style.top,10),
    })
    setDrag(true);
  }
  const func2 = (e) =>{
    if(dragged){
      let spiroDiv =document.querySelector(`#canvasContainer .spiro:nth-child(${props.selected})`);
      
      const finalPos = {
        left: `${e.pageX - startClickPos.x + startSpiroPos.x}px`,
        top: `${e.pageY-startClickPos.y + startSpiroPos.y}px`
      }
      Object.assign(spiroDiv.style, finalPos)
    }
  }
  const func3 = () =>{
    if(dragged){
      setDrag(false);
    }
  }
  return (
    <div className="spiro position-absolute">
      <svg className="overflow-visible" height="800" width="600" viewBox="0 0 800 800" fill="none" onMouseDown={func1} onMouseMove={func2} onMouseUp={func3}>
        <path d={`${props.path}`} stroke="black" strokeWidth={"1"}/>
        <rect x={bounds.minx-1} y={bounds.miny-1} width={bounds.maxx - bounds.minx+1} height={bounds.maxy- bounds.miny+1} style={{fill:'none',stroke:'lightblue',strokeWidth:"2px",strokeOpacity:props.active?1:0}} />
      </svg>
    </div>
  );
}

export default Spirograph;
