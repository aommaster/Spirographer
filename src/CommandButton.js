import React from 'react';

const buttonTypes={
  randomize:{
    buttonText:"Random",
    altStyle:"fa-dice",
    styles:"btn btn-primary"
  },
  add:{
    buttonText:"Add Curve",
    altStyle:"fa-plus",
    styles:"btn btn-primary"
  },
  clear:{
    buttonText:"Clear",
    altStyle:"fa-times",
    styles:"btn btn-danger"
  },
  save:{
    buttonText:"Export",
    altStyle:"fa-save",
    styles:"btn btn-success"
  }
}

function CommandButton(props) {
  const {altStyle, buttonText, styles} = buttonTypes[props.buttonType];
  return (
    <div className="col-3 col-sm-12">
      <button className={styles + " w-100 mb-1"} onClick={props.callback}>
          <i className={'buttonIcon fas fas-hover fa-2x ' + altStyle} ></i>
          <div className="buttonText">{buttonText}</div>
        </button>
    </div>
  );
}

export default CommandButton;
