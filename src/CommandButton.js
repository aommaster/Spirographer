import React from 'react';

const buttonTypes={
  random:{
    buttonText:"Random Curve"
  }
}

function CommandButton(props) {
  const {buttonText} = buttonTypes[props.buttonType];
  return (
    <button onClick={props.callback}>{buttonText}</button>
  );
}

export default CommandButton;
