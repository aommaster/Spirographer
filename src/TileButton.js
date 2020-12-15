import React from 'react';

const buttonTypes={
  play:{
    name:"fa-play text-muted",
    command:"play"
  },
  stop:{
    name:"fa-stop text-muted",
    command:"stop"
  },
  delete:{
    name:"fa-trash-alt text-danger",
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
