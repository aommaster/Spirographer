import React from 'react';
import CommandButton from './CommandButton';
import Parameter from './Parameter';
import Metric from './Metric';
import Spirograph from './Spirograph';
import SpiroTile from './SpiroTile';
import * as spiroFunctions from './spirofunctions';

class Canvas extends React.Component {
  constructor(props){
    super(props);
    this.updateParameters = this.updateParameters.bind(this);
    this.addCurve = this.addCurve.bind(this);
    this.randomCurve = this.randomCurve.bind(this);
    this.drawSpiro = this.drawSpiro.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.changeCurve = this.changeCurve.bind(this);
    this.animateCurve = this.animateCurve.bind(this);
    this.stopAnimation = this.stopAnimation.bind(this);
    this.deleteCurve = this.deleteCurve.bind(this);
  }
  state = {
      curveList: [],
      activeCurve: 0
  }
  handleClick(index, command){
    switch (command){
      case "select":
        this.changeCurve(index);
        break;
      case "play":
        this.animateCurve(index);
        break;
      case "stop":
        this.stopAnimation(index);
        break;
      case "delete":
        if (window.confirm('Delete curve?')) {
          this.deleteCurve(index);
        }
        break;
      default:
        break;
    }
  }
  changeCurve(index){
    this.setState({
      activeCurve:index
    })
  }
  animateCurve(index){
    this.updateParameters("animPlaying", true);
    const animTime = this.state.curveList[index].params.animation;
    const pathObject = document.querySelector(`.spiro:nth-child(${index+1}) svg path`);
      const length = pathObject.getTotalLength();
      const baseStyle ={
        strokeDasharray: `${length}px`,
        strokeDashoffset: `-${length}px`,
      }
      const animationStyle ={
        strokeDashoffset: 0,
        transition: `stroke-dashoffset ${animTime}s linear`
      }
      Object.assign(pathObject.style, baseStyle);
      setTimeout(function(){ 
        Object.assign(pathObject.style, animationStyle)
      }, 200);
      setTimeout(() =>{
        pathObject.removeAttribute('style');
        this.updateParameters("animPlaying", false);
      },animTime * 1000 + 200)      
  }
  stopAnimation(index){
    const pathObject = document.querySelector(`.spiro:nth-child(${index+1}) svg path`);
    pathObject.removeAttribute('style');
    this.updateParameters("animPlaying", false);
  }
  deleteCurve(index){
    let curveArray = [...this.state.curveList];
    curveArray.splice(index,1);
    this.setState((prevState)=>({
      curveList: curveArray
    }))
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
      ppc: 0,
      animation: 5,
      animPlaying: false,
    };
    
    if(this.state.curveList[this.state.activeCurve]!== undefined){
    ({params} = this.state.curveList[this.state.activeCurve]);
    }
    return (
      <div className="container vh-100">
        <div className="row h-100">
          <div className="col-3">
            <div id="tileContainer">
              {this.state.curveList.map((spiro, index) => 
                <SpiroTile 
                  key={index+1} 
                  name={`Curve ${index+1}`} 
                  path={spiro.path}
                  tileIndex = {index}
                  selection={this.state.activeCurve}
                  callback={this.handleClick}
                  playing={spiro.params.animPlaying}
                  />)}
            </div>
          </div>
          <div className="col-6">
            <div id="canvasContainer" className="border overflow-hidden position-relative h-100">
                {this.state.curveList.map((spiro, index) => <Spirograph key={index} path={spiro.path}/>)}
            </div>
          </div>
          <div className="col-3">
            <div id="parameterPanel" className="bg-light">
              <Parameter type='r1' callback={this.updateParameters} value={params.r1}/>
              <Parameter type='r2' callback={this.updateParameters} value={params.r2}/>
              <Parameter type='distance' callback={this.updateParameters} value={params.distance}/>
            </div>
            <div>
              <a href="#advanced" data-bs-toggle="collapse" aria-expanded="false" aria-controls="multiCollapseExample1">Advanced Settings</a>            </div>
            <div id="advanced" className="collapse multi-collapse">
              <Parameter type='rotation' callback={this.updateParameters} value={params.rotation}/>
              <Parameter type='ppc' callback={this.updateParameters} value={params.ppc}/>
              <Parameter type='animation' callback={this.updateParameters} value={params.animation}/>
              <Metric params={params} type="GCD"/>
            </div>
            <div id="buttonPanel" className="mt-3">
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