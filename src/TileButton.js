import React from 'react';

const buttonTypes={
  play:{
    name:"fa-play",
    command:"play"
  },
  delete:{
    name:"fa-trash-alt",
    command:"delete"
  }
}

function TileButton(props) {
  const {name, command} = buttonTypes[props.type];
  return (
    <div>
      <i className={'p-1 fas rounded-3 ' + name} onClick={()=>{props.callback(props.tileIndex, command)}}></i>
    </div>
  );
}

export default TileButton;
