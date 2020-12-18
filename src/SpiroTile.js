import React from 'react';
import TileButton from './TileButton';

function SpiroTile(props) {
let re = /[a-z](-?[0-9.]*)\s(-?[0-9.]*)/gi;
let m;
let bounds ={
  minx:999,
  miny:999,
  maxx:-999,
  maxy:-999
}
  do {
      m = re.exec(props.path);
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
  return (
    <div className={"row border rounded-3 tile " + (props.selection===props.tileIndex && 'selectedTile')} onClick={(e)=>{props.callback(e, props.tileIndex, "select")}}>
      <div className="col-5 d-none d-lg-block">
        <div className="row m-1">
          <svg 
            className="w-100 h-100 p-1 rounded-3" 
            viewBox={`${bounds.minx-10} ${bounds.miny-10} ${bounds.maxx-bounds.minx+20} ${bounds.maxy - bounds.miny+20}`} 
            fill="none">
            <path d={`${props.path}`} stroke={`${props.color}`} strokeWidth={`${props.stroke}`}/>
          </svg>
        </div>
      </div>
      <div className="col-lg-7 col-sm-12 col-xs-12 tileContentContainer">
        <div className="row mt-1 tileTextContainer w-100">
          <div className="col-12">
            <div className="row">
              <p className="text-end">
                <span className="curveName"><span className="curveText">Curve </span><span className="curveNumber">{props.name}</span></span>

              </p>

            </div>
          </div>
        </div>
        <div className="row mt-2 tileButtonsContainer">
          <div className="col-12 col-sm-6">
            <TileButton type={props.playing?"stop": "play"} callback={props.callback} tileIndex = {props.tileIndex}/>
          </div>
          <div className="col-12 col-sm-6">
            <TileButton type="delete" callback={props.callback} tileIndex = {props.tileIndex}/>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default SpiroTile;
