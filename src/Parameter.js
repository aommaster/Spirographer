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
    text:"Phase",
    desc:"Initial rotation of curve",
    max: 360,
  },
  'ppc':{
    text:"Points",
    desc:"Points per curve",
    max: 200,
  },
  'animation':{
    text:"Animation",
    desc:"Length of time the draw animation lasts",
    max: 60,
  },
  'scale':{
    text:"Scale %",
    desc:"Overall scale factor of the curve",
    max: 500,
  },
  'stroke':{
    text:"Stroke",
    desc:"Thickness of the curve",
    max: 100,
  }
}

function Parameter(props) {
  const [stateValue, setValue] = useState(props.value);
  const {text, desc, max} = parameterData[props.type];

  useEffect(() => {
    setValue(props.value);
    if (typeof window.$('[data-toggle="tooltip"]').tooltip === "function"){
      window.$('[data-toggle="tooltip"]').tooltip();
    }
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
    <div className="mb-3 col-3 col-sm-12">
      <div className="row">
        <div className="col-xl-7 col-md-12">
          <label htmlFor={props.type + "Input"} className={'col-form-label ' + (props.disabled===true ? "text-muted": "")}>{text}</label>
          <i className={'p-1 fas fa-info-circle'} data-toggle="tooltip" title={desc}></i>
        </div>
        <div className="col-xl-5 col-md-12">
          <input 
            type="number" 
            id={props.type + "Input"} 
            min="0" 
            max={max} 
            className="form-control" 
            onChange={updateParameter} 
            value={stateValue}
            disabled={props.disabled}/>
        </div>
      </div>
      <div className="row">
          <input type="range" id={props.type + "Range"} min="0" max={max} onChange={updateParameter} value={stateValue} disabled={props.disabled}/>
      </div>
    </div>
  );
}

export default Parameter;
