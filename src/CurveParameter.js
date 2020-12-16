import React, {useState, useEffect} from 'react';


function CurveParameter(props) {
  const [stateValue, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
    window.$('[data-toggle="tooltip"]').tooltip();
  }, [props.value])

  function updateParameter(e){
    props.callback(props.type, e.target.id);
  }
  return (
    <div>
      <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="epi" name="curveType" class="custom-control-input" checked={props.value==="epi"?true:false} disabled={props.disabled} onChange={updateParameter}/>
        <label class="custom-control-label" for="epi">Epitrochoid</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="hypo" name="curveType" class="custom-control-input" checked={props.value==="hypo"?true:false} disabled={props.disabled} onChange={updateParameter}/>
        <label class="custom-control-label" for="hypo">Hypotrochoid</label>
      </div>
    </div>

  );
}

export default CurveParameter;
