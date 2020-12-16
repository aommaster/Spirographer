(this.webpackJsonpspirographer=this.webpackJsonpspirographer||[]).push([[0],{18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),i=a.n(c),s=a(8),r=a.n(s),l=(a(18),a(5)),o=a(9),d=a(10),u=a(2),v=a(12),m=a(11),h={randomize:{buttonText:"Randomize Selection",styles:"btn btn-primary"},add:{buttonText:"Add Curve",styles:"btn btn-success"},clear:{buttonText:"Clear Canvas",styles:"btn btn-danger"}};var b=function(e){var t=h[e.buttonType],a=t.buttonText,c=t.styles;return Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:c+" mb-1",onClick:e.callback,children:a})})},p=a(3),x={r1:{text:"Radius 1",desc:"Radius of first gear",max:300},r2:{text:"Radius 2",desc:"Radius of second gear",max:300},distance:{text:"Distance",desc:"Distance of drawing point from center of gear",max:300},rotation:{text:"Rotation",desc:"Initial rotation of curve",max:360},ppc:{text:"Points",desc:"Points per curve",max:200},animation:{text:"Animation Time",desc:"Length of time the draw animation lasts",max:60}};var j=function(e){var t=Object(c.useState)(e.value),a=Object(p.a)(t,2),i=a[0],s=a[1],r=x[e.type],l=r.text,o=r.desc,d=r.max;function u(t){t.target.value>d&&(t.target.value=d),t.target.value<0&&(t.target.value=0),s(t.target.value),e.callback(e.type,parseInt(t.target.value))}return Object(c.useEffect)((function(){s(e.value),window.$('[data-toggle="tooltip"]').tooltip()}),[e.value]),Object(n.jsxs)("div",{className:"mb-3",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-8",children:[Object(n.jsx)("label",{htmlFor:e.type+"Input",className:"col-form-label "+(!0===e.disabled?"text-muted":""),children:l}),Object(n.jsx)("i",{className:"p-1 fas fa-info-circle","data-toggle":"tooltip",title:o})]}),Object(n.jsx)("div",{className:"col-4",children:Object(n.jsx)("input",{type:"number",id:e.type+"Input",min:"0",max:d,className:"form-control",onChange:u,value:i,disabled:e.disabled})})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("input",{type:"range",id:e.type+"Range",min:"0",max:d,onChange:u,value:i,disabled:e.disabled})})]})};function y(e,t){return 0===t?e:y(t,e%t)}function f(){return{r1:Math.floor(300*Math.random())+1,r2:Math.floor(300*Math.random())+1,distance:Math.floor(300*Math.random())+1,rotation:Math.floor(Math.random()*Math.floor(361)),ppc:100,animation:5,animPlaying:!1}}function O(e){var t=e.r1,a=e.r2,n=e.distance,c=e.rotation,i=e.ppc,s=400,r=300;if(0===t||0===a)return"";var l=[],o=2*Math.PI/i,d=i*(a/y(t,a)),u=parseFloat(c)*Math.PI/180,v=t-a,m=v/a,h={x:s+v*Math.cos(u)+n*Math.cos(u*m),y:r+v*Math.sin(u)-n*Math.sin(u*m)};l.push("M".concat(h.x),"".concat(h.y));for(var b=0;b<d;b++){u+=o;var p={x:s+v*Math.cos(u)+n*Math.cos(u*m),y:r+v*Math.sin(u)-n*Math.sin(u*m)};l.push("L".concat(p.x),"".concat(p.y)),h={x:p.x,y:p.y}}return l=l.join(" ")}var C=function(e){var t=0;switch(e.type){case"GCD":t=y(e.params.r1,e.params.r2)}return Object(n.jsx)("div",{children:"".concat(e.type,": ").concat(t)})};var g=function(e){var t,a=/[a-z](-?[0-9.]*)\s(-?[0-9.]*)/gi,i={minx:999,miny:999,maxx:-999,maxy:-999};do{if(t=a.exec(e.path)){var s=parseFloat(t[1]),r=parseFloat(t[2]);s>i.maxx&&(i.maxx=s),s<i.minx&&(i.minx=s),r>i.maxy&&(i.maxy=r),r<i.miny&&(i.miny=r)}}while(t);var l=Object(c.useState)((function(){return!1})),o=Object(p.a)(l,2),d=o[0],u=o[1],v=Object(c.useState)((function(){return{x:0,y:0}})),m=Object(p.a)(v,2),h=m[0],b=m[1],x=Object(c.useState)((function(){return{x:0,y:0}})),j=Object(p.a)(x,2),y=j[0],f=j[1];return Object(n.jsx)("div",{className:"spiro position-absolute",children:Object(n.jsxs)("svg",{className:"overflow-visible",height:"800",width:"600",viewBox:"0 0 800 800",fill:"none",onMouseDown:function(t){b({x:t.pageX,y:t.pageY});var a=document.querySelector("#canvasContainer .spiro:nth-child(".concat(e.selected,")"));f({x:a.style.left?parseInt(a.style.left,10):0,y:a.style.top?parseInt(a.style.top,10):0}),u(!0)},onMouseMove:function(t){if(d){var a=document.querySelector("#canvasContainer .spiro:nth-child(".concat(e.selected,")")),n={left:"".concat(t.pageX-h.x+y.x,"px"),top:"".concat(t.pageY-h.y+y.y,"px")};Object.assign(a.style,n)}},onMouseUp:function(){d&&u(!1)},children:[Object(n.jsx)("path",{d:"".concat(e.path),stroke:"black",strokeWidth:"1"}),Object(n.jsx)("rect",{x:i.minx-1,y:i.miny-1,width:i.maxx-i.minx+1,height:i.maxy-i.miny+1,style:{fill:"none",stroke:"lightblue",strokeWidth:"2px",strokeOpacity:e.active?1:0}})]})})},k={play:{name:"fa-play text-muted",command:"play"},stop:{name:"fa-stop text-muted",command:"stop"},delete:{name:"fa-trash-alt text-danger",command:"delete"}};var N=function(e){var t=k[e.type],a=t.name,c=t.command;return Object(n.jsx)("div",{children:Object(n.jsx)("i",{className:"p-1 fas fas-hover rounded-3 "+a,onClick:function(t){e.callback(t,e.tileIndex,c)}})})};var w=function(e){var t,a=/[a-z](-?[0-9.]*)\s(-?[0-9.]*)/gi,c={minx:999,miny:999,maxx:-999,maxy:-999};do{if(t=a.exec(e.path)){var i=parseFloat(t[1]),s=parseFloat(t[2]);i>c.maxx&&(c.maxx=i),i<c.minx&&(c.minx=i),s>c.maxy&&(c.maxy=s),s<c.miny&&(c.miny=s)}}while(t);return Object(n.jsxs)("div",{className:"row border rounded-3 tile "+(e.selection===e.tileIndex&&"selectedTile"),onClick:function(t){e.callback(t,e.tileIndex,"select")},children:[Object(n.jsx)("div",{className:"col-4",children:Object(n.jsx)("div",{className:"row m-1",children:Object(n.jsx)("svg",{className:"w-100 h-100 p-1 rounded-3",viewBox:"".concat(c.minx-1," ").concat(c.miny-1," ").concat(c.maxx-c.minx+10," ").concat(c.maxy-c.miny+10),fill:"none",children:Object(n.jsx)("path",{d:"".concat(e.path),stroke:"black",strokeWidth:"1"})})})}),Object(n.jsxs)("div",{className:"col-8",children:[Object(n.jsxs)("div",{className:"row mt-1",children:[Object(n.jsx)("div",{className:"col-8",children:e.name}),Object(n.jsx)("div",{className:"col-4",children:Object(n.jsx)(N,{type:e.playing?"stop":"play",callback:e.callback,tileIndex:e.tileIndex})})]}),Object(n.jsxs)("div",{className:"row mt-2",children:[Object(n.jsx)("div",{className:"col-8"}),Object(n.jsx)("div",{className:"col-4",children:Object(n.jsx)(N,{type:"delete",callback:e.callback,tileIndex:e.tileIndex})})]})]})]})},M=function(e){Object(v.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={curveList:[],activeCurve:0},n.updateParameters=n.updateParameters.bind(Object(u.a)(n)),n.addCurve=n.addCurve.bind(Object(u.a)(n)),n.randomCurve=n.randomCurve.bind(Object(u.a)(n)),n.drawSpiro=n.drawSpiro.bind(Object(u.a)(n)),n.handleClick=n.handleClick.bind(Object(u.a)(n)),n.changeCurve=n.changeCurve.bind(Object(u.a)(n)),n.animateCurve=n.animateCurve.bind(Object(u.a)(n)),n.stopAnimation=n.stopAnimation.bind(Object(u.a)(n)),n.deleteCurve=n.deleteCurve.bind(Object(u.a)(n)),n.clearCanvas=n.clearCanvas.bind(Object(u.a)(n)),n}return Object(d.a)(a,[{key:"handleClick",value:function(e,t,a){switch(a){case"select":e.target instanceof HTMLDivElement&&this.changeCurve(t);break;case"play":this.animateCurve(t);break;case"stop":this.stopAnimation(t);break;case"delete":this.deleteCurve(t)}}},{key:"animateCurve",value:function(e){var t=this;this.updateParameters("animPlaying",!0);var a=this.state.curveList[e].params.animation,n=document.querySelector(".spiro:nth-child(".concat(e+1,") svg path")),c=n.getTotalLength(),i={strokeDasharray:"".concat(c,"px"),strokeDashoffset:"-".concat(c,"px")},s={strokeDashoffset:0,transition:"stroke-dashoffset ".concat(a,"s linear")};Object.assign(n.style,i),setTimeout((function(){Object.assign(n.style,s)}),200),setTimeout((function(){n.removeAttribute("style"),t.updateParameters("animPlaying",!1)}),1e3*a+200)}},{key:"stopAnimation",value:function(e){document.querySelector(".spiro:nth-child(".concat(e+1,") svg path")).removeAttribute("style"),this.updateParameters("animPlaying",!1)}},{key:"updateParameters",value:function(e,t){var a=Object(l.a)(this.state.curveList),n=a[this.state.activeCurve];n.params[e]=t,n.path=O(n.params),a[this.state.activeCurve]=n,this.setState((function(e){return{curveList:a}}))}},{key:"addCurve",value:function(){var e=f();this.drawSpiro(e),this.setState((function(e){return{activeCurve:e.curveList.length-1}}))}},{key:"deleteCurve",value:function(e){var t=Object(l.a)(this.state.curveList);t.splice(e,1),this.setState((function(e){return{curveList:t}})),this.changeCurve(null)}},{key:"changeCurve",value:function(e){this.setState((function(t){return{activeCurve:t.activeCurve===e?null:e}}))}},{key:"clearCanvas",value:function(){this.setState((function(e){return{curveList:[]}})),this.changeCurve(null)}},{key:"randomCurve",value:function(){var e=f(),t=Object(l.a)(this.state.curveList),a=t[this.state.activeCurve];a.params=e,a.path=O(e),t[this.state.activeCurve]=a,this.setState((function(e){return{curveList:t}}))}},{key:"drawSpiro",value:function(e){var t=O(e);this.setState((function(a){return{curveList:[].concat(Object(l.a)(a.curveList),[{params:e,path:t}])}}))}},{key:"componentDidMount",value:function(){var e=f();this.drawSpiro(e)}},{key:"render",value:function(){var e=this,t={r1:0,r2:0,distance:0,rotation:0,ppc:0,animation:5,animPlaying:!1};return void 0!==this.state.curveList[this.state.activeCurve]&&(t=this.state.curveList[this.state.activeCurve].params),Object(n.jsx)("div",{className:"container vh-100",children:Object(n.jsxs)("div",{className:"row h-100",children:[Object(n.jsx)("div",{className:"col-3",children:Object(n.jsx)("div",{id:"tileContainer",children:this.state.curveList.map((function(t,a){return Object(n.jsx)(w,{name:"Curve ".concat(a+1),path:t.path,tileIndex:a,selection:e.state.activeCurve,callback:e.handleClick,playing:t.params.animPlaying},a+1)}))})}),Object(n.jsx)("div",{className:"col-6",children:Object(n.jsx)("div",{id:"canvasContainer",className:"border overflow-hidden position-relative h-100",children:this.state.curveList.map((function(t,a){return Object(n.jsx)(g,{path:t.path,selected:e.state.activeCurve+1,active:e.state.activeCurve===a},a)}))})}),Object(n.jsxs)("div",{className:"col-3",children:[Object(n.jsxs)("div",{id:"parameterPanel",className:"bg-light",children:[Object(n.jsx)(j,{type:"r1",callback:this.updateParameters,value:t.r1,disabled:null===this.state.activeCurve}),Object(n.jsx)(j,{type:"r2",callback:this.updateParameters,value:t.r2,disabled:null===this.state.activeCurve}),Object(n.jsx)(j,{type:"distance",callback:this.updateParameters,value:t.distance,disabled:null===this.state.activeCurve})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("a",{href:"#advanced","data-bs-toggle":"collapse","aria-expanded":"false","aria-controls":"multiCollapseExample1",children:"Advanced Settings"}),"            "]}),Object(n.jsxs)("div",{id:"advanced",className:"collapse multi-collapse",children:[Object(n.jsx)(j,{type:"rotation",callback:this.updateParameters,value:t.rotation,disabled:null===this.state.activeCurve}),Object(n.jsx)(j,{type:"ppc",callback:this.updateParameters,value:t.ppc,disabled:null===this.state.activeCurve}),Object(n.jsx)(j,{type:"animation",callback:this.updateParameters,value:t.animation,disabled:null===this.state.activeCurve}),Object(n.jsx)(C,{params:t,type:"GCD"})]}),Object(n.jsxs)("div",{id:"buttonPanel",className:"mt-3",children:[Object(n.jsx)(b,{buttonType:"randomize",callback:this.randomCurve}),Object(n.jsx)(b,{buttonType:"add",callback:this.addCurve}),Object(n.jsx)(b,{buttonType:"clear",callback:this.clearCanvas})]})]})]})})}}]),a}(i.a.Component),P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(M,{})}),document.getElementById("root")),P()}},[[19,1,2]]]);
//# sourceMappingURL=main.4c573eb7.chunk.js.map