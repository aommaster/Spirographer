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
      r1: 100,
      r2: 100,
      distance: 50,
      rotation: 25,
      ppc:10,
      SVGList: [],
  }
  updateParameters(parameter, value){
    this.setState(()=>(
      {[parameter]: value})
    )
  }
  randomCurve(){
    let R = Math.floor(Math.random() * Math.floor(300)) //Radius A 500
    let r = Math.floor(Math.random() * Math.floor(300)) //Radius B 500
    let d = Math.floor(Math.random() * Math.floor(300)) //Distance 500
    let u = Math.floor(Math.random() * Math.floor(360)) //Rotation
    let p = Math.floor(Math.random() * Math.floor(10)) //Points per curve
    this.setState(()=>(
      {
        r1: R,
        r2: r,
        distance: d,
        rotation: u,
        ppc: p
      })
    )
  }
  drawSpiro(){
    let newSVG = spiroFunctions.drawSpiroSVG(this.state.r1, this.state.r2, this.state.distance, this.state.rotation, this.state.ppc);
    this.setState((prevState) => ({
      SVGList: [...prevState.SVGList, newSVG]
    }))
  }
  componentWillMount() {
    this.randomCurve();
  }
  componentDidMount(){
    this.drawSpiro()
  }
  render() { 
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div id="canvasContainer" className="border">
                {this.state.SVGList.map((spiro, index) => <Spirograph key={index} path={spiro}/>)}
            </div>
          </div>
          <div className="col-4">
            <div className="parameterPanel">
              <Parameter type='r1' callback={this.updateParameters} value={this.state.r1}/>
              <Parameter type='r2' callback={this.updateParameters} value={this.state.r2}/>
              <Parameter type='distance' callback={this.updateParameters} value={this.state.distance}/>
              <Parameter type='rotation' callback={this.updateParameters} value={this.state.rotation}/>
              <Parameter type='ppc' callback={this.updateParameters} value={this.state.ppc}/>
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