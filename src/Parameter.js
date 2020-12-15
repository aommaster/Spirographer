import React, {useState, useEffect} from 'react';

const parameterData={
  'r1':{
    text:"Radius 1",
    desc:"Radius of first gear",
    max: 300
  },
  'r2':{
    text:"Radius 2",
    desc:"Radius of second gear",
    max: 300,
  },
  'distance':{
    text:"Distance",
    desc:"Distance of drawing point from center of gear",
    max: 300,
  },
  'rotation':{
    text:"Rotation",
    desc:"Initial rotation of curve",
    max: 360,
  },
  'ppc':{
    text:"Points",
    desc:"Points per curve",
    max: 200,
  },
  'animation':{
    text:"Animation Time",
    desc:"Length of time the draw animation lasts",
    max: 60,
  }
}

function Parameter(props) {
  const [stateValue, setValue] = useState(props.value);
  const {text, desc, max} = parameterData[props.type];

  useEffect(() => {
    setValue(props.value)
  }, [props.value])

  function updateParameter(e){
    if(e.target.value > max){
      e.target.value = max;
    }
    if(e.target.value < 0){
      e.target.value = 0;
    }
    setValue(e.target.value);
    props.callback(props.type, parseInt(e.target.value));
  }
  return (
    <div className="mb-3">
      <div className="row">
        <div className="col-8">
          <label htmlFor={props.type + "Input"} className="col-form-label">{text}</label>
        </div>
        <div className="col-4">
          <input type="number" id={props.type + "Input"} min="0" max={max} className="form-control" onChange={updateParameter} value={stateValue}/>
        </div>
      </div>
      <div className="row">
          <input type="range" id={props.type + "Range"} min="0" max={max} onChange={updateParameter} value={stateValue}/>
      </div>
    </div>
  );
}

export default Parameter;
