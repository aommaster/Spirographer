import React from 'react';
import * as spiroFunctions from './spirofunctions';


function Metric(props) {
  let result = 0;
  switch(props.type){
    case "GCD":
      result = spiroFunctions.gcd(props.params.r1, props.params.r2)
      break;
    default:
      break;
  }
  return (
  <div>{`${props.type}: ${result}`}</div>
  );
}

export default Metric;
