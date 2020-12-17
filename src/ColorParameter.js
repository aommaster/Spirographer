import React from 'react';


function ColorParameter(props) {

  function updateParameter(e){
    props.callback(props.type, e.target.value);
  }
  return (
    <div>
      <input type="color" id="curveColor" name="curveColor" className="custom-control-input" disabled={props.disabled} value={props.value} onChange={updateParameter}/>
    </div>

  );
}

export default ColorParameter;
