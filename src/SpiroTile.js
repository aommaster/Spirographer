import React from 'react';
import TileButton from './TileButton';

function SpiroTile(props) {
var re = /[a-z](-?[0-9.]*)\s(-?[0-9.]*)/gi;
var m;
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
      <div className="col-5">
        <div className="row m-1">
          <svg 
            className="w-100 h-100 p-1 rounded-3" 
            viewBox={`${bounds.minx-1} ${bounds.miny-1} ${bounds.maxx-bounds.minx+10} ${bounds.maxy - bounds.miny+10}`} 
            fill="none">
            <path d={`${props.path}`} stroke={`${props.color}`} strokeWidth={`${props.stroke}`}/>
          </svg>
        </div>
      </div>
      <div className="col-7">
        <div className="row mt-1">
          <div className="col-8">{props.name}</div>
        </div>
        <div className="row mt-2">
          <div className="col-8">
            <TileButton type={props.playing?"stop": "play"} callback={props.callback} tileIndex = {props.tileIndex}/>
          </div>
          <div className="col-4">
            <TileButton type="delete" callback={props.callback} tileIndex = {props.tileIndex}/>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default SpiroTile;
