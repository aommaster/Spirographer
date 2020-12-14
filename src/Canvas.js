import React from 'react';
import CommandButton from './CommandButton';
import Parameter from './Parameter';
import Spirograph from './Spirograph';
import * as spiroFunctions from './spirofunctions';

class Canvas extends React.Component {
  constructor(props){
    super(props);
    this.updateParameters = this.updateParameters.bind(this);
    this.randomCurve = this.randomCurve.bind(this);
    this.drawSpiro = this.drawSpiro.bind(this);
  }
  state = {
      curveList: [],
      activeCurve: 0
  }
  updateParameters(parameter, value){
    console.log({...this.state.curveList});
    /*let updatedProperty = {...this.state.curveList[this.state.activeCurve].params[parameter]};
    this.setState(()=>(
      {updatedPro: value})
    )*/
  }
  randomCurve(){
    let R = Math.floor(Math.random() * Math.floor(300)) //Radius A 500
    let r = Math.floor(Math.random() * Math.floor(300)) //Radius B 500
    let d = Math.floor(Math.random() * Math.floor(300)) //Distance 500
    let u = Math.floor(Math.random() * Math.floor(360)) //Rotation
    let p = Math.floor(Math.random() * Math.floor(10)) //Points per curve
    let params = 
      {
        r1: R,
        r2: r,
        distance: d,
        rotation: u,
        ppc: p
      }
    return params;
  }
  drawSpiro(drawParams){
    let newSVG = spiroFunctions.drawSpiroSVG(drawParams.r1, drawParams.r2, drawParams.distance, drawParams.rotation, drawParams.ppc);
    this.setState((prevState) => ({
      curveList: [...prevState.curveList, {'params': drawParams, 'path':newSVG}]
    }))
  }
  componentDidMount(){
    let randomParams = this.randomCurve();
    this.drawSpiro(randomParams)
  }
  render() {
    var params = {
      r1: 0,
      r2: 0,
      distance: 0,
      rotation: 0,
      ppc: 0
    };
    var path = "";
    
    if(this.state.curveList[this.state.activeCurve]!== undefined){
    ({params, path} = this.state.curveList[this.state.activeCurve]);
    }
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div id="canvasContainer" className="border">
                {this.state.curveList.map((spiro, index) => <Spirograph key={index} path={spiro.path}/>)}
            </div>
          </div>
          <div className="col-4">
            <div className="parameterPanel">
              <Parameter type='r1' callback={this.updateParameters} value={params.r1}/>
              <Parameter type='r2' callback={this.updateParameters} value={params.r2}/>
              <Parameter type='distance' callback={this.updateParameters} value={params.distance}/>
              <Parameter type='rotation' callback={this.updateParameters} value={params.rotation}/>
              <Parameter type='ppc' callback={this.updateParameters} value={params.ppc}/>
            </div>
            <div className="buttonPanel">
              <CommandButton buttonType='random' callback={this.randomCurve}/>
              <CommandButton buttonType='draw' callback={this.drawSpiro}/>
            </div>
          </div>
        </div>
        
      </div>
      
      
    );
  }
}
 
export default Canvas;