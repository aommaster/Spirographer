import React from 'react';
import CommandButton from './CommandButton';
import Parameter from './Parameter';
import CurveParameter from './CurveParameter';
import ColorParameter from './ColorParameter';
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
    this.clearCanvas = this.clearCanvas.bind(this);
    this.saveCanvas = this.saveCanvas.bind(this);
  }
  state = {
      curveList: [],
      activeCurve: 0
  }
  handleClick(e,index, command){
    ;
    switch (command){
      case "select":
        if(e.target instanceof HTMLDivElement){
          this.changeCurve(index);
        }
        break;
      case "play":
        this.animateCurve(index);
        break;
      case "stop":
        this.stopAnimation(index);
        break;
      case "delete":
        this.deleteCurve(index);
        break;
      default:
        break;
    }
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
  updateParameters(parameter, value){
    let curveArray = [...this.state.curveList];
    let modifiedCurve = curveArray[this.state.activeCurve];
    if(parameter==="x" || parameter==="y"){
      modifiedCurve.params[parameter] += value;
    }
    else{
      modifiedCurve.params[parameter] = value;
    }
    
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
      activeCurve: prevState.curveList.length-1
    }))
  }
  deleteCurve(index){
    let curveArray = [...this.state.curveList];
    curveArray.splice(index,1);
    this.setState((prevState)=>({
      curveList: curveArray
    }))
    this.changeCurve(null)
  }
  changeCurve(index){
    this.setState((prevState) => ({
      activeCurve:prevState.activeCurve===index?null:index
    }))
  }
  clearCanvas(){
    this.setState((prevState)=>({
      curveList: []
    }))
    this.changeCurve(null)
  }
  saveCanvas(){
    let curveArray = [...this.state.curveList];
    let parent = document.createElement("div");
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("fill", 'none');
    svg.setAttribute("xmlns", 'http://www.w3.org/2000/svg');
    let re = /[a-z](-?[0-9.]*)\s(-?[0-9.]*)/gi;
    let m;
    let bounds ={
      minx:999,
      miny:999,
      maxx:-999,
      maxy:-999
    }
    curveArray.forEach((modifiedCurve, index)=>{
      let pathElement = document.querySelector(`#canvasContainer .spiro:nth-child(${index+1}) svg path`).cloneNode(true);
      svg.appendChild(pathElement);
      do {
        m = re.exec(pathElement.attributes.d.value);
        if (m) {
            let x = parseFloat(m[1]);
            let y = parseFloat(m[2]);
            if(x > bounds.maxx){
              bounds.maxx = x;
            }
            if(x < bounds.minx){
              bounds.minx = x;
            }
            if(y > bounds.maxy){
              bounds.maxy = y;
            }
            if(y < bounds.miny){
              bounds.miny = y;
            }
        }
    } while (m);
    })
    svg.setAttribute("width",`${bounds.maxx-bounds.minx+200}`);
    svg.setAttribute("height",`${bounds.maxy - bounds.miny+200}`); 
    svg.setAttribute('viewBox',`${bounds.minx-100} ${bounds.miny-100} ${bounds.maxx-bounds.minx+200} ${bounds.maxy - bounds.miny+200}`);
    parent.appendChild(svg);
    const blob = new Blob([parent.innerHTML.toString()]);
    const element = document.createElement("a");
    element.download = "Spirograher Canvas.svg";
    element.href = window.URL.createObjectURL(blob);
    element.click();
    element.remove();
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
      curveType:"epi",
      scale:1,
      color:'#010101', //Not exactly black because Windows color picker is bugged and won't trigger onChange events
      stroke: 1,
      x: 0,
      y: 0
    };
    if(this.state.curveList[this.state.activeCurve]!== undefined){
    ({params} = this.state.curveList[this.state.activeCurve]);
    }
    return (
      <div className="container vh-100">
        <div className="row h-100">
          <div className="col-2">
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
                  color={spiro.params.color}
                  stroke={spiro.params.stroke}
                  />)}
            </div>
          </div>
          <div className="col-7">
            <div id="outputContainer" className="d-none">

            </div>
            <div id="canvasContainer" className="border overflow-hidden position-relative h-100">
              
                {this.state.curveList.map((spiro, index) => 
                <Spirograph 
                  key={index} 
                  path={spiro.path} 
                  selected={this.state.activeCurve+1}
                  active={this.state.activeCurve===index?true:false}
                  color={spiro.params.color}
                  stroke={spiro.params.stroke}
                  callback={this.updateParameters}
                />)}
            </div>
          </div>
          <div className="col-3">
            <div id="parameterPanel" className="bg-light">
              <Parameter type='r1' callback={this.updateParameters} value={params.r1} disabled={this.state.activeCurve===null?true:false}/>
              <Parameter type='r2' callback={this.updateParameters} value={params.r2} disabled={this.state.activeCurve===null?true:false}/>
              <Parameter type='distance' callback={this.updateParameters} value={params.distance} disabled={this.state.activeCurve===null?true:false}/>
              <Parameter type='scale' callback={this.updateParameters} value={params.scale} disabled={this.state.activeCurve===null?true:false}/>
              <CurveParameter type='curveType'  callback={this.updateParameters} value={params.curveType} disabled={this.state.activeCurve===null?true:false}/>
              <Parameter type='stroke' callback={this.updateParameters} value={params.stroke} disabled={this.state.activeCurve===null?true:false}/>
              <ColorParameter  type='color' callback={this.updateParameters} value={params.color} disabled={this.state.activeCurve===null?true:false}/>
            </div>
            <div>
              <a href="#advanced" data-bs-toggle="collapse" aria-expanded="false" aria-controls="multiCollapseExample1">Advanced Settings</a>            </div>
            <div id="advanced" className="collapse multi-collapse">
              <Parameter type='rotation' callback={this.updateParameters} value={params.rotation} disabled={this.state.activeCurve===null?true:false}/>
              <Parameter type='ppc' callback={this.updateParameters} value={params.ppc} disabled={this.state.activeCurve===null?true:false}/>
              <Parameter type='animation' callback={this.updateParameters} value={params.animation} disabled={this.state.activeCurve===null?true:false}/>
              <Metric params={params} type="GCD"/>
            </div>
            <div id="buttonPanel" className="mt-3">
              <CommandButton buttonType='randomize' callback={this.randomCurve}/>
              <CommandButton buttonType='add' callback={this.addCurve}/>
              <CommandButton buttonType='clear' callback={this.clearCanvas}/>
              <CommandButton buttonType='save' callback={this.saveCanvas}/>
            </div>
          </div>
        </div>
        
      </div>
      
      
    );
  }
}
 
export default Canvas;