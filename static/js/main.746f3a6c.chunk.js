(this.webpackJsonpspirographer=this.webpackJsonpspirographer||[]).push([[0],{18:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var c=a(0),r=a(1),n=a.n(r),s=a(7),i=a.n(s),o=(a(18),a(5)),l=a(8),u=a(9),d=a(2),v=a(12),h=a(10),b={randomize:{buttonText:"Randomize Selection",styles:"btn btn-primary"},add:{buttonText:"Add Curve",styles:"btn btn-success"}};var j=function(t){var e=b[t.buttonType],a=e.buttonText,r=e.styles;return Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("button",{className:r+" mb-1",onClick:t.callback,children:a})})},m=a(11),p={r1:{text:"Radius 1",desc:"Radius of first gear",max:300},r2:{text:"Radius 2",desc:"Radius of second gear",max:300},distance:{text:"Distance",desc:"Distance of drawing point from center of gear",max:300},rotation:{text:"Rotation",desc:"Initial rotation of curve",max:360},ppc:{text:"Points",desc:"Points per curve",max:200}};var x=function(t){var e=Object(r.useState)(t.value),a=Object(m.a)(e,2),n=a[0],s=a[1],i=p[t.type],o=i.text,l=(i.desc,i.max);function u(e){e.target.value>l&&(e.target.value=l),e.target.value<0&&(e.target.value=0),s(e.target.value),t.callback(t.type,parseInt(e.target.value))}return Object(r.useEffect)((function(){s(t.value)}),[t.value]),Object(c.jsxs)("div",{className:"mb-3",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-8",children:Object(c.jsx)("label",{htmlFor:t.type+"Input",className:"col-form-label",children:o})}),Object(c.jsx)("div",{className:"col-4",children:Object(c.jsx)("input",{type:"number",id:t.type+"Input",min:"0",max:l,className:"form-control",onChange:u,value:n})})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("input",{type:"range",id:t.type+"Range",min:"0",max:l,onChange:u,value:n})})]})};var O=function(t){return Object(c.jsx)("div",{className:"spiro position-absolute",children:Object(c.jsx)("svg",{height:"800",width:"600",viewBox:"0 0 800 800",fill:"none",children:Object(c.jsx)("path",{d:"".concat(t.path),stroke:"black",strokeWidth:"1"})})})};var f=function(t){var e,a=/[a-z](-?[0-9.]*)\s(-?[0-9.]*)/gi,r={minx:999,miny:999,maxx:-999,maxy:-999};do{if(e=a.exec(t.path)){var n=parseFloat(e[1]),s=parseFloat(e[2]);n>r.maxx&&(r.maxx=n),n<r.minx&&(r.minx=n),s>r.maxy&&(r.maxy=s),s<r.miny&&(r.miny=s)}}while(e);return Object(c.jsxs)("div",{className:"row border rounded-3 tile "+(t.selection===t.tileIndex&&"bg-info"),onClick:function(){t.callback(t.tileIndex)},children:[Object(c.jsx)("div",{className:"col-4",children:Object(c.jsx)("div",{className:"row m-1",children:Object(c.jsx)("svg",{className:"w-100 h-100 bg-light p-1 rounded-3",viewBox:"".concat(r.minx-1," ").concat(r.miny-1," ").concat(r.maxx-r.minx+10," ").concat(r.maxy-r.miny+10),fill:"none",children:Object(c.jsx)("path",{d:"".concat(t.path),stroke:"black",strokeWidth:"1"})})})}),Object(c.jsxs)("div",{className:"col-8",children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{children:t.name})}),Object(c.jsx)("div",{className:"row"})]})]})};function y(t,e){return 0===e?t:y(e,t%e)}function g(){return{r1:Math.floor(300*Math.random())+1,r2:Math.floor(300*Math.random())+1,distance:Math.floor(300*Math.random())+1,rotation:Math.floor(Math.random()*Math.floor(361)),ppc:100}}function C(t){var e=t.r1,a=t.r2,c=t.distance,r=t.rotation,n=t.ppc,s=400,i=300;if(0===e||0===a)return"";var o=[],l=2*Math.PI/n,u=n*(a/y(e,a)),d=parseFloat(r)*Math.PI/180,v=e-a,h=v/a,b={x:s+v*Math.cos(d)+c*Math.cos(d*h),y:i+v*Math.sin(d)-c*Math.sin(d*h)};o.push("M".concat(b.x),"".concat(b.y));for(var j=0;j<u;j++){d+=l;var m={x:s+v*Math.cos(d)+c*Math.cos(d*h),y:i+v*Math.sin(d)-c*Math.sin(d*h)};o.push("L".concat(m.x),"".concat(m.y)),b={x:m.x,y:m.y}}return o=o.join(" ")}var k=function(t){Object(v.a)(a,t);var e=Object(h.a)(a);function a(t){var c;return Object(l.a)(this,a),(c=e.call(this,t)).state={curveList:[],activeCurve:0},c.updateParameters=c.updateParameters.bind(Object(d.a)(c)),c.addCurve=c.addCurve.bind(Object(d.a)(c)),c.randomCurve=c.randomCurve.bind(Object(d.a)(c)),c.drawSpiro=c.drawSpiro.bind(Object(d.a)(c)),c.changeCurve=c.changeCurve.bind(Object(d.a)(c)),c}return Object(u.a)(a,[{key:"changeCurve",value:function(t){this.setState({activeCurve:t})}},{key:"updateParameters",value:function(t,e){var a=Object(o.a)(this.state.curveList),c=a[this.state.activeCurve];c.params[t]=e,c.path=C(c.params),a[this.state.activeCurve]=c,this.setState((function(t){return{curveList:a}}))}},{key:"addCurve",value:function(){var t=g();this.drawSpiro(t),this.setState((function(t){return{activeCurve:t.activeCurve+1}}))}},{key:"randomCurve",value:function(){var t=g(),e=Object(o.a)(this.state.curveList),a=e[this.state.activeCurve];a.params=t,a.path=C(t),e[this.state.activeCurve]=a,this.setState((function(t){return{curveList:e}}))}},{key:"drawSpiro",value:function(t){var e=C(t);this.setState((function(a){return{curveList:[].concat(Object(o.a)(a.curveList),[{params:t,path:e}])}}))}},{key:"componentDidMount",value:function(){var t=g();this.drawSpiro(t)}},{key:"render",value:function(){var t=this,e={r1:0,r2:0,distance:0,rotation:0,ppc:0};return void 0!==this.state.curveList[this.state.activeCurve]&&(e=this.state.curveList[this.state.activeCurve].params),Object(c.jsx)("div",{className:"container vh-100",children:Object(c.jsxs)("div",{className:"row h-100",children:[Object(c.jsx)("div",{className:"col-3",children:Object(c.jsx)("div",{id:"tileContainer",children:this.state.curveList.map((function(e,a){return Object(c.jsx)(f,{name:"Curve ".concat(a+1),path:e.path,tileIndex:a,selection:t.state.activeCurve,callback:t.changeCurve},a+1)}))})}),Object(c.jsx)("div",{className:"col-6",children:Object(c.jsx)("div",{id:"canvasContainer",className:"border overflow-hidden position-relative h-100",children:this.state.curveList.map((function(t,e){return Object(c.jsx)(O,{path:t.path},e)}))})}),Object(c.jsxs)("div",{className:"col-3",children:[Object(c.jsxs)("div",{className:"parameterPanel bg-light",children:[Object(c.jsx)(x,{type:"r1",callback:this.updateParameters,value:e.r1}),Object(c.jsx)(x,{type:"r2",callback:this.updateParameters,value:e.r2}),Object(c.jsx)(x,{type:"distance",callback:this.updateParameters,value:e.distance}),Object(c.jsx)(x,{type:"rotation",callback:this.updateParameters,value:e.rotation}),Object(c.jsx)(x,{type:"ppc",callback:this.updateParameters,value:e.ppc})]}),Object(c.jsxs)("div",{className:"buttonPanel",children:[Object(c.jsx)(j,{buttonType:"randomize",callback:this.randomCurve}),Object(c.jsx)(j,{buttonType:"add",callback:this.addCurve})]})]})]})})}}]),a}(n.a.Component),N=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(e){var a=e.getCLS,c=e.getFID,r=e.getFCP,n=e.getLCP,s=e.getTTFB;a(t),c(t),r(t),n(t),s(t)}))};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),N()}},[[19,1,2]]]);
//# sourceMappingURL=main.746f3a6c.chunk.js.map