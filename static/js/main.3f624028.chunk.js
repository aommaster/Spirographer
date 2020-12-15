(this.webpackJsonpspirographer=this.webpackJsonpspirographer||[]).push([[0],{18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),n=a.n(s),r=a(7),i=a.n(r),l=(a(18),a(4)),o=a(8),d=a(9),u=a(2),v=a(12),h=a(10),j={randomize:{buttonText:"Randomize Selection",styles:"btn btn-primary"},add:{buttonText:"Add Curve",styles:"btn btn-success"}};var b=function(e){var t=j[e.buttonType],a=t.buttonText,s=t.styles;return Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("button",{className:s+" mb-1",onClick:e.callback,children:a})})},m=a(11),p={r1:{text:"Radius 1",desc:"Radius of first gear",max:300},r2:{text:"Radius 2",desc:"Radius of second gear",max:300},distance:{text:"Distance",desc:"Distance of drawing point from center of gear",max:300},rotation:{text:"Rotation",desc:"Initial rotation of curve",max:360},ppc:{text:"Points",desc:"Points per curve",max:200}};var x=function(e){var t=Object(s.useState)(e.value),a=Object(m.a)(t,2),n=a[0],r=a[1],i=p[e.type],l=i.text,o=(i.desc,i.max);function d(t){t.target.value>o&&(t.target.value=o),t.target.value<0&&(t.target.value=0),r(t.target.value),e.callback(e.type,parseInt(t.target.value))}return Object(s.useEffect)((function(){r(e.value)}),[e.value]),Object(c.jsxs)("div",{className:"mb-3",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-8",children:Object(c.jsx)("label",{htmlFor:e.type+"Input",className:"col-form-label",children:l})}),Object(c.jsx)("div",{className:"col-4",children:Object(c.jsx)("input",{type:"number",id:e.type+"Input",min:"0",max:o,className:"form-control",onChange:d,value:n})})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("input",{type:"range",id:e.type+"Range",min:"0",max:o,onChange:d,value:n})})]})};function O(e,t){return 0===t?e:O(t,e%t)}function f(){return{r1:Math.floor(300*Math.random())+1,r2:Math.floor(300*Math.random())+1,distance:Math.floor(300*Math.random())+1,rotation:Math.floor(Math.random()*Math.floor(361)),ppc:100}}function y(e){var t=e.r1,a=e.r2,c=e.distance,s=e.rotation,n=e.ppc,r=400,i=300;if(0===t||0===a)return"";var l=[],o=2*Math.PI/n,d=n*(a/O(t,a)),u=parseFloat(s)*Math.PI/180,v=t-a,h=v/a,j={x:r+v*Math.cos(u)+c*Math.cos(u*h),y:i+v*Math.sin(u)-c*Math.sin(u*h)};l.push("M".concat(j.x),"".concat(j.y));for(var b=0;b<d;b++){u+=o;var m={x:r+v*Math.cos(u)+c*Math.cos(u*h),y:i+v*Math.sin(u)-c*Math.sin(u*h)};l.push("L".concat(m.x),"".concat(m.y)),j={x:m.x,y:m.y}}return l=l.join(" ")}var C=function(e){var t=0;switch(e.type){case"GCD":t=O(e.params.r1,e.params.r2)}return Object(c.jsx)("div",{children:"".concat(e.type,": ").concat(t)})};var k=function(e){return Object(c.jsx)("div",{className:"spiro position-absolute",children:Object(c.jsx)("svg",{height:"800",width:"600",viewBox:"0 0 800 800",fill:"none",children:Object(c.jsx)("path",{d:"".concat(e.path),stroke:"black",strokeWidth:"1"})})})},g={play:{name:"fa-play text-muted",command:"play"},delete:{name:"fa-trash-alt text-danger",command:"delete"}};var N=function(e){var t=g[e.type],a=t.name,s=t.command;return Object(c.jsx)("div",{children:Object(c.jsx)("i",{className:"p-1 fas rounded-3 "+a,onClick:function(){e.callback(e.tileIndex,s)}})})};var w=function(e){var t,a=/[a-z](-?[0-9.]*)\s(-?[0-9.]*)/gi,s={minx:999,miny:999,maxx:-999,maxy:-999};do{if(t=a.exec(e.path)){var n=parseFloat(t[1]),r=parseFloat(t[2]);n>s.maxx&&(s.maxx=n),n<s.minx&&(s.minx=n),r>s.maxy&&(s.maxy=r),r<s.miny&&(s.miny=r)}}while(t);return Object(c.jsxs)("div",{className:"row border rounded-3 tile "+(e.selection===e.tileIndex&&"selectedTile"),onClick:function(){e.callback(e.tileIndex,"select")},children:[Object(c.jsx)("div",{className:"col-4",children:Object(c.jsx)("div",{className:"row m-1",children:Object(c.jsx)("svg",{className:"w-100 h-100 p-1 rounded-3",viewBox:"".concat(s.minx-1," ").concat(s.miny-1," ").concat(s.maxx-s.minx+10," ").concat(s.maxy-s.miny+10),fill:"none",children:Object(c.jsx)("path",{d:"".concat(e.path),stroke:"black",strokeWidth:"1"})})})}),Object(c.jsxs)("div",{className:"col-8",children:[Object(c.jsxs)("div",{className:"row mt-1",children:[Object(c.jsx)("div",{className:"col-8",children:e.name}),Object(c.jsx)("div",{className:"col-4",children:Object(c.jsx)(N,{type:"play",callback:e.callback,tileIndex:e.tileIndex})})]}),Object(c.jsxs)("div",{className:"row mt-2",children:[Object(c.jsx)("div",{className:"col-8"}),Object(c.jsx)("div",{className:"col-4",children:Object(c.jsx)(N,{type:"delete",callback:e.callback,tileIndex:e.tileIndex})})]})]})]})},M=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var c;return Object(o.a)(this,a),(c=t.call(this,e)).state={curveList:[],activeCurve:0},c.updateParameters=c.updateParameters.bind(Object(u.a)(c)),c.addCurve=c.addCurve.bind(Object(u.a)(c)),c.randomCurve=c.randomCurve.bind(Object(u.a)(c)),c.drawSpiro=c.drawSpiro.bind(Object(u.a)(c)),c.handleClick=c.handleClick.bind(Object(u.a)(c)),c.changeCurve=c.changeCurve.bind(Object(u.a)(c)),c.deleteCurve=c.deleteCurve.bind(Object(u.a)(c)),c}return Object(d.a)(a,[{key:"handleClick",value:function(e,t){switch(t){case"select":this.changeCurve(e);break;case"play":this.animateCurve(e);break;case"delete":window.confirm("Delete curve?")&&this.deleteCurve(e)}}},{key:"changeCurve",value:function(e){this.setState({activeCurve:e})}},{key:"animateCurve",value:function(e){var t=document.querySelector(".spiro:nth-child(".concat(e+1,") svg path")),a=t.getTotalLength(),c={strokeDasharray:"".concat(a,"px"),strokeDashoffset:"-".concat(a,"px")},s={strokeDashoffset:0,transition:"stroke-dashoffset 5s linear"};Object.assign(t.style,c),setTimeout((function(){Object.assign(t.style,s)}),200),setTimeout((function(){t.removeAttribute("style")}),5200)}},{key:"deleteCurve",value:function(e){var t=Object(l.a)(this.state.curveList);t.splice(e,1),this.setState((function(e){return{curveList:t}}))}},{key:"updateParameters",value:function(e,t){var a=Object(l.a)(this.state.curveList),c=a[this.state.activeCurve];c.params[e]=t,c.path=y(c.params),a[this.state.activeCurve]=c,this.setState((function(e){return{curveList:a}}))}},{key:"addCurve",value:function(){var e=f();this.drawSpiro(e),this.setState((function(e){return{activeCurve:e.activeCurve+1}}))}},{key:"randomCurve",value:function(){var e=f(),t=Object(l.a)(this.state.curveList),a=t[this.state.activeCurve];a.params=e,a.path=y(e),t[this.state.activeCurve]=a,this.setState((function(e){return{curveList:t}}))}},{key:"drawSpiro",value:function(e){var t=y(e);this.setState((function(a){return{curveList:[].concat(Object(l.a)(a.curveList),[{params:e,path:t}])}}))}},{key:"componentDidMount",value:function(){var e=f();this.drawSpiro(e)}},{key:"render",value:function(){var e=this,t={r1:0,r2:0,distance:0,rotation:0,ppc:0};return void 0!==this.state.curveList[this.state.activeCurve]&&(t=this.state.curveList[this.state.activeCurve].params),Object(c.jsx)("div",{className:"container vh-100",children:Object(c.jsxs)("div",{className:"row h-100",children:[Object(c.jsx)("div",{className:"col-3",children:Object(c.jsx)("div",{id:"tileContainer",children:this.state.curveList.map((function(t,a){return Object(c.jsx)(w,{name:"Curve ".concat(a+1),path:t.path,tileIndex:a,selection:e.state.activeCurve,callback:e.handleClick},a+1)}))})}),Object(c.jsx)("div",{className:"col-6",children:Object(c.jsx)("div",{id:"canvasContainer",className:"border overflow-hidden position-relative h-100",children:this.state.curveList.map((function(e,t){return Object(c.jsx)(k,{path:e.path},t)}))})}),Object(c.jsxs)("div",{className:"col-3",children:[Object(c.jsxs)("div",{id:"parameterPanel",className:"bg-light",children:[Object(c.jsx)(x,{type:"r1",callback:this.updateParameters,value:t.r1}),Object(c.jsx)(x,{type:"r2",callback:this.updateParameters,value:t.r2}),Object(c.jsx)(x,{type:"distance",callback:this.updateParameters,value:t.distance})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("a",{href:"#advanced","data-bs-toggle":"collapse","aria-expanded":"false","aria-controls":"multiCollapseExample1",children:"Advanced Settings"}),"            "]}),Object(c.jsxs)("div",{id:"advanced",className:"collapse multi-collapse",children:[Object(c.jsx)(x,{type:"rotation",callback:this.updateParameters,value:t.rotation}),Object(c.jsx)(x,{type:"ppc",callback:this.updateParameters,value:t.ppc}),Object(c.jsx)(C,{params:t,type:"GCD"})]}),Object(c.jsxs)("div",{id:"buttonPanel",className:"mt-3",children:[Object(c.jsx)(b,{buttonType:"randomize",callback:this.randomCurve}),Object(c.jsx)(b,{buttonType:"add",callback:this.addCurve})]})]})]})})}}]),a}(n.a.Component),L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(M,{})}),document.getElementById("root")),L()}},[[19,1,2]]]);
//# sourceMappingURL=main.3f624028.chunk.js.map