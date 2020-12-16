import React, {useState} from 'react';

function Spirograph(props) {
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
      </svg>
    </div>
  );
}

export default Spirograph;
