import React from 'react';


function CurveParameter(props) {

  function updateParameter(e){
    props.callback(props.type, e.target.id);
  }
  return (
    <div className="col-4 col-sm-12 mt-2">
      <div className="custom-control custom-radio custom-control-inline">
        <input type="radio" id="epi" name="curveType" className="custom-control-input" checked={props.value==="epi"?true:false} disabled={props.disabled} onChange={updateParameter}/>
        <label className="custom-control-label ms-1" htmlFor="epi">Epitrochoid</label>
      </div>
      <div className="custom-control custom-radio custom-control-inline">
        <input type="radio" id="hypo" name="curveType" className="custom-control-input" checked={props.value==="hypo"?true:false} disabled={props.disabled} onChange={updateParameter}/>
        <label className="custom-control-label ms-1" htmlFor="hypo">Hypotrochoid</label>
      </div>
    </div>

  );
}

export default CurveParameter;
