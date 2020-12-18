import React from 'react';

const buttonTypes={
  randomize:{
    buttonText:"Randomize Selection",
    styles:"btn btn-primary"
  },
  add:{
    buttonText:"Add Curve",
    styles:"btn btn-primary"
  },
  clear:{
    buttonText:"Clear Canvas",
    styles:"btn btn-danger"
  },
  save:{
    buttonText:"Export to SVG",
    styles:"btn btn-success"
  }
}

function CommandButton(props) {
  const {buttonText, styles} = buttonTypes[props.buttonType];
  return (
    <div className="row">
      <button className={styles + " mb-1"} onClick={props.callback}>{buttonText}</button>
    </div>
  );
}

export default CommandButton;
