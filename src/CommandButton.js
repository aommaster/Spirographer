import React from 'react';

const buttonTypes={
  start:{
    buttonText:"Click Me!"
  }
}

function CommandButton(props) {
  const {buttonText} = buttonTypes[props.buttonType];
  return (
    <div id="commandPanel">
      <button onClick={props.callback}>{buttonText}</button>
    </div>
    
  );
}

export default CommandButton;
