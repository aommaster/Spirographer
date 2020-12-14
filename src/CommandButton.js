import React from 'react';

const buttonTypes={
  randomize:{
    buttonText:"Randomize Curve"
  },
  add:{
    buttonText:"Add Curve"
  }
}

function CommandButton(props) {
  const {buttonText} = buttonTypes[props.buttonType];
  return (
    <button onClick={props.callback}>{buttonText}</button>
  );
}

export default CommandButton;
