import React from 'react';

function Spirograph(props) {
  return (
    <div className="spiro position-absolute">
      <svg height="800" width="600" viewBox="0 0 800 800" fill="none">
        <path d={`${props.path}`} stroke="black" strokeWidth={"1"}/>
      </svg>
    </div>
  );
}

export default Spirograph;
