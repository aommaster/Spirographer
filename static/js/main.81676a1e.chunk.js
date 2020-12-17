(this.webpackJsonpspirographer=this.webpackJsonpspirographer||[]).push([[0],{18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),n=a.n(s),i=a(8),r=a.n(i),l=(a(18),a(5)),o=a(9),u=a(10),d=a(2),v=a(12),h=a(11),m={randomize:{buttonText:"Randomize Selection",styles:"btn btn-primary"},add:{buttonText:"Add Curve",styles:"btn btn-success"},clear:{buttonText:"Clear Canvas",styles:"btn btn-danger"}};var p=function(e){var t=m[e.buttonType],a=t.buttonText,s=t.styles;return Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("button",{className:s+" mb-1",onClick:e.callback,children:a})})},b=a(3),j={r1:{text:"Radius 1",desc:"Radius of first gear",max:300},r2:{text:"Radius 2",desc:"Radius of second gear",max:300},distance:{text:"Distance",desc:"Distance of drawing point from center of gear",max:300},rotation:{text:"Phase",desc:"Initial rotation of curve",max:360},ppc:{text:"Points",desc:"Points per curve",max:200},animation:{text:"Animation Time",desc:"Length of time the draw animation lasts",max:60},scale:{text:"Scale %",desc:"Overall scale factor of the curve",max:500},stroke:{text:"Stroke",desc:"Thickness of the curve",max:100}};var x=function(e){var t=Object(s.useState)(e.value),a=Object(b.a)(t,2),n=a[0],i=a[1],r=j[e.type],l=r.text,o=r.desc,u=r.max;function d(t){t.target.value>u&&(t.target.value=u),t.target.value<0&&(t.target.value=0),i(t.target.value),e.callback(e.type,parseInt(t.target.value))}return Object(s.useEffect)((function(){i(e.value),"function"===typeof window.$('[data-toggle="tooltip"]').tooltip&&window.$('[data-toggle="tooltip"]').tooltip()}),[e.value]),Object(c.jsxs)("div",{className:"mb-3",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-8",children:[Object(c.jsx)("label",{htmlFor:e.type+"Input",className:"col-form-label "+(!0===e.disabled?"text-muted":""),children:l}),Object(c.jsx)("i",{className:"p-1 fas fa-info-circle","data-toggle":"tooltip",title:o})]}),Object(c.jsx)("div",{className:"col-4",children:Object(c.jsx)("input",{type:"number",id:e.type+"Input",min:"0",max:u,className:"form-control",onChange:d,value:n,disabled:e.disabled})})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("input",{type:"range",id:e.type+"Range",min:"0",max:u,onChange:d,value:n,disabled:e.disabled})})]})};var y=function(e){function t(t){e.callback(e.type,t.target.id)}return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"custom-control custom-radio custom-control-inline",children:[Object(c.jsx)("input",{type:"radio",id:"epi",name:"curveType",className:"custom-control-input",checked:"epi"===e.value,disabled:e.disabled,onChange:t}),Object(c.jsx)("label",{className:"custom-control-label ms-1",htmlFor:"epi",children:"Epitrochoid"})]}),Object(c.jsxs)("div",{className:"custom-control custom-radio custom-control-inline",children:[Object(c.jsx)("input",{type:"radio",id:"hypo",name:"curveType",className:"custom-control-input",checked:"hypo"===e.value,disabled:e.disabled,onChange:t}),Object(c.jsx)("label",{className:"custom-control-label ms-1",htmlFor:"hypo",children:"Hypotrochoid"})]})]})};var f=function(e){return Object(c.jsx)("div",{children:Object(c.jsx)("input",{type:"color",id:"curveColor",name:"curveColor",className:"custom-control-input",disabled:e.disabled,value:e.value,onChange:function(t){e.callback(e.type,t.target.value)}})})};function O(e,t){return 0===t?e:O(t,e%t)}function C(){return{r1:Math.floor(300*Math.random())+1,r2:Math.floor(300*Math.random())+1,distance:Math.floor(300*Math.random())+1,rotation:Math.floor(Math.random()*Math.floor(361)),ppc:100,animation:5,animPlaying:!1,curveType:Math.random()<.5?"epi":"hypo",scale:100,color:"#010101",stroke:10}}function g(e){var t=e.r1,a=e.r2,c=e.distance,s=e.rotation,n=e.ppc,i=e.curveType,r=e.scale,l=400,o=300;if(r/=100,0===t||0===a)return"";var u=[],d=2*Math.PI/n,v=n*(a/O(t,a)),h=parseFloat(s)*Math.PI/180,m=t-a,p=t+a,b=m/a,j=m/a;if("hypo"===i){var x={x:l+m*Math.cos(h)+c*Math.cos(h*b),y:o+m*Math.sin(h)-c*Math.sin(h*b)};u.push("M".concat(r*x.x),"".concat(r*x.y));for(var y=0;y<v;y++){h+=d;var f={x:l+m*Math.cos(h)+c*Math.cos(h*b),y:o+m*Math.sin(h)-c*Math.sin(h*b)};u.push("L".concat(r*f.x),"".concat(r*f.y)),x={x:f.x,y:f.y}}}else{var C={x:l+p*Math.cos(h)-c*Math.cos(h*j),y:o+p*Math.sin(h)-c*Math.sin(h*j)};u.push("M".concat(r*C.x),"".concat(r*C.y));for(var g=0;g<v;g++){h+=d;var k={x:l+p*Math.cos(h)-c*Math.cos(h*j),y:o+p*Math.sin(h)-c*Math.sin(h*j)};u.push("L".concat(r*k.x),"".concat(r*k.y)),C={x:k.x,y:k.y}}}return u=u.join(" ")}var k=function(e){var t=0;switch(e.type){case"GCD":t=O(e.params.r1,e.params.r2)}return Object(c.jsx)("div",{children:"".concat(e.type,": ").concat(t)})};var N=function(e){var t,a=/[a-z](-?[0-9.]*)\s(-?[0-9.]*)/gi,n={minx:999,miny:999,maxx:-999,maxy:-999};do{if(t=a.exec(e.path)){var i=parseFloat(t[1]),r=parseFloat(t[2]);i>n.maxx&&(n.maxx=i),i<n.minx&&(n.minx=i),r>n.maxy&&(n.maxy=r),r<n.miny&&(n.miny=r)}}while(t);var l=Object(s.useState)((function(){return!1})),o=Object(b.a)(l,2),u=o[0],d=o[1],v=Object(s.useState)((function(){return{x:0,y:0}})),h=Object(b.a)(v,2),m=h[0],p=h[1],j=Object(s.useState)((function(){return{x:0,y:0}})),x=Object(b.a)(j,2),y=x[0],f=x[1];return Object(c.jsx)("div",{className:"spiro position-absolute",children:Object(c.jsxs)("svg",{className:"overflow-visible",height:"800",width:"600",viewBox:"0 0 800 800",fill:"none",onMouseDown:function(t){p({x:t.pageX,y:t.pageY});var a=document.querySelector("#canvasContainer .spiro:nth-child(".concat(e.selected,")"));f({x:a.style.left?parseInt(a.style.left,10):0,y:a.style.top?parseInt(a.style.top,10):0}),d(!0)},onMouseMove:function(t){if(u){var a=document.querySelector("#canvasContainer .spiro:nth-child(".concat(e.selected,")")),c={left:"".concat(t.pageX-m.x+y.x,"px"),top:"".concat(t.pageY-m.y+y.y,"px")};Object.assign(a.style,c)}},onMouseUp:function(){u&&d(!1)},children:[Object(c.jsx)("path",{d:"".concat(e.path),stroke:"".concat(e.color),strokeWidth:"".concat(e.stroke/10)}),Object(c.jsx)("rect",{x:n.minx-1,y:n.miny-1,width:n.maxx-n.minx+1,height:n.maxy-n.miny+1,style:{fill:"none",stroke:"lightblue",strokeWidth:"2px",strokeOpacity:e.active?1:0}})]})})},M={play:{name:"fa-play text-muted",command:"play"},stop:{name:"fa-stop text-muted",command:"stop"},delete:{name:"fa-trash-alt text-danger",command:"delete"}};var w=function(e){var t=M[e.type],a=t.name,s=t.command;return Object(c.jsx)("div",{children:Object(c.jsx)("i",{className:"p-1 fas fas-hover rounded-3 "+a,onClick:function(t){e.callback(t,e.tileIndex,s)}})})};var P=function(e){var t,a=/[a-z](-?[0-9.]*)\s(-?[0-9.]*)/gi,s={minx:999,miny:999,maxx:-999,maxy:-999};do{if(t=a.exec(e.path)){var n=parseFloat(t[1]),i=parseFloat(t[2]);n>s.maxx&&(s.maxx=n),n<s.minx&&(s.minx=n),i>s.maxy&&(s.maxy=i),i<s.miny&&(s.miny=i)}}while(t);return Object(c.jsxs)("div",{className:"row border rounded-3 tile "+(e.selection===e.tileIndex&&"selectedTile"),onClick:function(t){e.callback(t,e.tileIndex,"select")},children:[Object(c.jsx)("div",{className:"col-5",children:Object(c.jsx)("div",{className:"row m-1",children:Object(c.jsx)("svg",{className:"w-100 h-100 p-1 rounded-3",viewBox:"".concat(s.minx-1," ").concat(s.miny-1," ").concat(s.maxx-s.minx+10," ").concat(s.maxy-s.miny+10),fill:"none",children:Object(c.jsx)("path",{d:"".concat(e.path),stroke:"".concat(e.color),strokeWidth:"".concat(e.stroke)})})})}),Object(c.jsxs)("div",{className:"col-7",children:[Object(c.jsx)("div",{className:"row mt-1",children:Object(c.jsx)("div",{className:"col-8",children:e.name})}),Object(c.jsxs)("div",{className:"row mt-2",children:[Object(c.jsx)("div",{className:"col-8",children:Object(c.jsx)(w,{type:e.playing?"stop":"play",callback:e.callback,tileIndex:e.tileIndex})}),Object(c.jsx)("div",{className:"col-4",children:Object(c.jsx)(w,{type:"delete",callback:e.callback,tileIndex:e.tileIndex})})]})]})]})},S=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var c;return Object(o.a)(this,a),(c=t.call(this,e)).state={curveList:[],activeCurve:0},c.updateParameters=c.updateParameters.bind(Object(d.a)(c)),c.addCurve=c.addCurve.bind(Object(d.a)(c)),c.randomCurve=c.randomCurve.bind(Object(d.a)(c)),c.drawSpiro=c.drawSpiro.bind(Object(d.a)(c)),c.handleClick=c.handleClick.bind(Object(d.a)(c)),c.changeCurve=c.changeCurve.bind(Object(d.a)(c)),c.animateCurve=c.animateCurve.bind(Object(d.a)(c)),c.stopAnimation=c.stopAnimation.bind(Object(d.a)(c)),c.deleteCurve=c.deleteCurve.bind(Object(d.a)(c)),c.clearCanvas=c.clearCanvas.bind(Object(d.a)(c)),c}return Object(u.a)(a,[{key:"handleClick",value:function(e,t,a){switch(a){case"select":e.target instanceof HTMLDivElement&&this.changeCurve(t);break;case"play":this.animateCurve(t);break;case"stop":this.stopAnimation(t);break;case"delete":this.deleteCurve(t)}}},{key:"animateCurve",value:function(e){var t=this;this.updateParameters("animPlaying",!0);var a=this.state.curveList[e].params.animation,c=document.querySelector(".spiro:nth-child(".concat(e+1,") svg path")),s=c.getTotalLength(),n={strokeDasharray:"".concat(s,"px"),strokeDashoffset:"-".concat(s,"px")},i={strokeDashoffset:0,transition:"stroke-dashoffset ".concat(a,"s linear")};Object.assign(c.style,n),setTimeout((function(){Object.assign(c.style,i)}),200),setTimeout((function(){c.removeAttribute("style"),t.updateParameters("animPlaying",!1)}),1e3*a+200)}},{key:"stopAnimation",value:function(e){document.querySelector(".spiro:nth-child(".concat(e+1,") svg path")).removeAttribute("style"),this.updateParameters("animPlaying",!1)}},{key:"updateParameters",value:function(e,t){var a=Object(l.a)(this.state.curveList),c=a[this.state.activeCurve];c.params[e]=t,c.path=g(c.params),a[this.state.activeCurve]=c,this.setState((function(e){return{curveList:a}}))}},{key:"addCurve",value:function(){var e=C();this.drawSpiro(e),this.setState((function(e){return{activeCurve:e.curveList.length-1}}))}},{key:"deleteCurve",value:function(e){var t=Object(l.a)(this.state.curveList);t.splice(e,1),this.setState((function(e){return{curveList:t}})),this.changeCurve(null)}},{key:"changeCurve",value:function(e){this.setState((function(t){return{activeCurve:t.activeCurve===e?null:e}}))}},{key:"clearCanvas",value:function(){this.setState((function(e){return{curveList:[]}})),this.changeCurve(null)}},{key:"randomCurve",value:function(){var e=C(),t=Object(l.a)(this.state.curveList),a=t[this.state.activeCurve];a.params=e,a.path=g(e),t[this.state.activeCurve]=a,this.setState((function(e){return{curveList:t}}))}},{key:"drawSpiro",value:function(e){var t=g(e);this.setState((function(a){return{curveList:[].concat(Object(l.a)(a.curveList),[{params:e,path:t}])}}))}},{key:"componentDidMount",value:function(){var e=C();this.drawSpiro(e)}},{key:"render",value:function(){var e=this,t={r1:0,r2:0,distance:0,rotation:0,ppc:0,animation:5,animPlaying:!1,curveType:"epi",scale:1,color:"#010101",stroke:1};return void 0!==this.state.curveList[this.state.activeCurve]&&(t=this.state.curveList[this.state.activeCurve].params),Object(c.jsx)("div",{className:"container vh-100",children:Object(c.jsxs)("div",{className:"row h-100",children:[Object(c.jsx)("div",{className:"col-2",children:Object(c.jsx)("div",{id:"tileContainer",children:this.state.curveList.map((function(t,a){return Object(c.jsx)(P,{name:"Curve ".concat(a+1),path:t.path,tileIndex:a,selection:e.state.activeCurve,callback:e.handleClick,playing:t.params.animPlaying,color:t.params.color,stroke:t.params.stroke},a+1)}))})}),Object(c.jsx)("div",{className:"col-7",children:Object(c.jsx)("div",{id:"canvasContainer",className:"border overflow-hidden position-relative h-100",children:this.state.curveList.map((function(t,a){return Object(c.jsx)(N,{path:t.path,selected:e.state.activeCurve+1,active:e.state.activeCurve===a,color:t.params.color,stroke:t.params.stroke},a)}))})}),Object(c.jsxs)("div",{className:"col-3",children:[Object(c.jsxs)("div",{id:"parameterPanel",className:"bg-light",children:[Object(c.jsx)(x,{type:"r1",callback:this.updateParameters,value:t.r1,disabled:null===this.state.activeCurve}),Object(c.jsx)(x,{type:"r2",callback:this.updateParameters,value:t.r2,disabled:null===this.state.activeCurve}),Object(c.jsx)(x,{type:"distance",callback:this.updateParameters,value:t.distance,disabled:null===this.state.activeCurve}),Object(c.jsx)(x,{type:"scale",callback:this.updateParameters,value:t.scale,disabled:null===this.state.activeCurve}),Object(c.jsx)(y,{type:"curveType",callback:this.updateParameters,value:t.curveType,disabled:null===this.state.activeCurve}),Object(c.jsx)(x,{type:"stroke",callback:this.updateParameters,value:t.stroke,disabled:null===this.state.activeCurve}),Object(c.jsx)(f,{type:"color",callback:this.updateParameters,value:t.color,disabled:null===this.state.activeCurve})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("a",{href:"#advanced","data-bs-toggle":"collapse","aria-expanded":"false","aria-controls":"multiCollapseExample1",children:"Advanced Settings"}),"            "]}),Object(c.jsxs)("div",{id:"advanced",className:"collapse multi-collapse",children:[Object(c.jsx)(x,{type:"rotation",callback:this.updateParameters,value:t.rotation,disabled:null===this.state.activeCurve}),Object(c.jsx)(x,{type:"ppc",callback:this.updateParameters,value:t.ppc,disabled:null===this.state.activeCurve}),Object(c.jsx)(x,{type:"animation",callback:this.updateParameters,value:t.animation,disabled:null===this.state.activeCurve}),Object(c.jsx)(k,{params:t,type:"GCD"})]}),Object(c.jsxs)("div",{id:"buttonPanel",className:"mt-3",children:[Object(c.jsx)(p,{buttonType:"randomize",callback:this.randomCurve}),Object(c.jsx)(p,{buttonType:"add",callback:this.addCurve}),Object(c.jsx)(p,{buttonType:"clear",callback:this.clearCanvas})]})]})]})})}}]),a}(n.a.Component),T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(S,{})}),document.getElementById("root")),T()}},[[19,1,2]]]);
//# sourceMappingURL=main.81676a1e.chunk.js.map