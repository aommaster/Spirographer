import React from 'react';


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
    <div className="row border">
      <div className="col-4">
        <svg 
          className="w-100 h-100" 
          viewBox={`${bounds.minx-1} ${bounds.miny-1} ${bounds.maxx-bounds.minx+10} ${bounds.maxy - bounds.miny+10}`} 
          fill="none">
          <path d={`${props.path}`} stroke="black" strokeWidth={"1"}/>
        </svg>
      </div>
      <div className="col-8">
        <div className="row">
          <div>{props.name}</div>
        </div>
        <div className="row">
        </div>
      </div>
    </div>
    
  );
}

export default SpiroTile;
