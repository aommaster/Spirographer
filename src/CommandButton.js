import React from 'react';

const buttonTypes={
  random:{
    buttonText:"Random Curve"
  },
  draw:{
    buttonText:"Draw Curve"
  }
}

function CommandButton(props) {
  const {buttonText} = buttonTypes[props.buttonType];
  return (
    <button onClick={props.callback}>{buttonText}</button>
  );
}

export default CommandButton;
