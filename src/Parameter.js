import React, {useState, useEffect} from 'react';

const parameterData={
  'r1':{
    text:"Radius 1",
    desc:"Radius of first gear"
  },
  'r2':{
    text:"Radius 2",
    desc:"Radius of second gear"
  },
  'distance':{
    text:"Distance",
    desc:"Distance of drawing point from center of gear"
  },
  'rotation':{
    text:"Rotation",
    desc:"Initial rotation of curve"
  },
  'ppc':{
    text:"Points",
    desc:"Points per curve"
  }
}

function Parameter(props) {
  const [stateValue, setValue] = useState(props.value);
  const {text, desc} = parameterData[props.type];

  useEffect(() => {
    setValue(props.value)
  }, [props.value])

  function updateParameter(e){
    setValue(e.target.value);
    props.callback(props.type, e.target.value);
  }
  return (
    <div className="row">
      <div className="col-3">
        <label htmlFor={props.type} className="col-form-label">{text}</label>
      </div>
      <div className="col-3">
        <input type="text" id={props.type} className="form-control" onChange={updateParameter} value={stateValue}/>
      </div>
    </div>
    
  );
}

export default Parameter;
