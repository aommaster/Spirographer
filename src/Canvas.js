import React from 'react';
import CommandButton from './CommandButton';
import Parameter from './Parameter';
import Spirograph from './Spirograph';
import * as spiroFunctions from './spirofunctions';

class Canvas extends React.Component {
  constructor(props){
    super(props);
    this.updateParameters = this.updateParameters.bind(this);
    this.addCurve = this.addCurve.bind(this);
    this.randomCurve = this.randomCurve.bind(this);
    this.drawSpiro = this.drawSpiro.bind(this);
  }
  state = {
      curveList: [],
      activeCurve: 0
  }
  updateParameters(parameter, value){
    let curveArray = [...this.state.curveList];
    let modifiedCurve = curveArray[this.state.activeCurve];
    modifiedCurve.params[parameter] = value;
    modifiedCurve.path =spiroFunctions.generateSpiroPath(modifiedCurve.params);
    curveArray[this.state.activeCurve] = modifiedCurve;
    this.setState((prevState)=>({
      curveList: curveArray
    }))
  }
  addCurve(){
    let params = spiroFunctions.randomParams();
    this.drawSpiro(params);
    this.setState((prevState)=>({
      activeCurve: prevState.activeCurve+1
    }))
  }
  randomCurve(){
    let randomParams = spiroFunctions.randomParams();
    let curveArray = [...this.state.curveList];
    let modifiedCurve = curveArray[this.state.activeCurve];
    modifiedCurve.params = randomParams;
    modifiedCurve.path =spiroFunctions.generateSpiroPath(randomParams);
    curveArray[this.state.activeCurve] = modifiedCurve;
    this.setState((prevState)=>({
      curveList: curveArray
    }))
  }
  drawSpiro(drawParams){
    let newSVG = spiroFunctions.generateSpiroPath(drawParams);
    this.setState((prevState) => ({
      curveList: [...prevState.curveList, {'params': drawParams, 'path':newSVG}]
    }))
  }
  componentDidMount(){
    let randomParams = spiroFunctions.randomParams();
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
              <CommandButton buttonType='randomize' callback={this.randomCurve}/>
              <CommandButton buttonType='add' callback={this.addCurve}/>
            </div>
          </div>
        </div>
        
      </div>
      
      
    );
  }
}
 
export default Canvas;