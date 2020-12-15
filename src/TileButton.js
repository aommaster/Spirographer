import React from 'react';

const buttonTypes={
  play:{
    name:"fa-play",
  },
  delete:{
    name:"fa-trash-alt",
  }
}

function TileButton(props) {
  return (
    <div>
      <i className={'p-1 fas ' + buttonTypes[props.type].name} onClick={()=>{props.callback(props.tileIndex, "play")}}></i>
    </div>
  );
}

export default TileButton;
