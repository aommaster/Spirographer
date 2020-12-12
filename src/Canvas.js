import React from 'react';
import CommandButton from './CommandButton';
import * as spiroFunctions from './spirofunctions';

class Canvas extends React.Component {
  state = {  }
  handleClick(){
    console.log("test");
    let canvas = document.getElementById("mainCanvas");
    spiroFunctions.randoSpiro(canvas);
    //spiroFunctions.randoSpiro();
  }
  render() { 
    return (
      <div id="canvasContainer">
        <canvas id="mainCanvas" width={'1000px'} height={'1000px'}></canvas>
        <CommandButton buttonType='start' callback={this.handleClick}/>
      </div>
      
    );
  }
}
 
export default Canvas;