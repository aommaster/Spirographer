(this.webpackJsonpspirographer=this.webpackJsonpspirographer||[]).push([[0],{15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a(1),c=a.n(n),s=a(4),o=a.n(s),i=(a(15),a(5)),l=a(6),d=a(2),u=a(9),h=a(8),p={random:{buttonText:"Random Curve"}};var v=function(t){var e=p[t.buttonType].buttonText;return Object(r.jsx)("button",{onClick:t.callback,children:e})},b=a(7),j={r1:{text:"Radius 1",desc:"Radius of first gear"},r2:{text:"Radius 2",desc:"Radius of second gear"},distance:{text:"Distance",desc:"Distance of drawing point from center of gear"},rotation:{text:"Rotation",desc:"Initial rotation of curve"},ppc:{text:"Points",desc:"Points per curve"}};var m=function(t){var e=Object(n.useState)((function(){return t.value})),a=Object(b.a)(e,2),c=a[0],s=a[1],o=j[t.type],i=o.text;return o.desc,Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-3",children:Object(r.jsx)("label",{htmlFor:t.type,className:"col-form-label",children:i})}),Object(r.jsx)("div",{className:"col-3",children:Object(r.jsx)("input",{type:"text",id:t.type,className:"form-control",onChange:function(e){s(e.target.value),t.callback(t.type,e.target.value)},value:c})})]})};function x(t,e,a,r,n,c){var s=c.getContext("2d"),o={x:c.width/2,y:c.height/2};s.clearRect(0,0,c.width,c.height),s.lineWidth=1,s.strokeStyle="#000";var i=2*Math.PI/n,l=n*(e/f(t,e)),d={x:o.x+t-e+a,y:o.y};s.moveTo(d.x,d.y);var u=parseFloat(r)*Math.PI/180,h=t-e,p=h/e;s.beginPath();for(var v=0;v<=l;v++){u+=i;var b={x:o.x+h*Math.cos(u)+a*Math.cos(u*p),y:o.y+h*Math.sin(u)-a*Math.sin(u*p)};s.lineTo(b.x,b.y),d={x:b.x,y:b.y},s.stroke()}}function f(t,e){return 0===e?t:f(e,t%e)}var y=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(i.a)(this,a),(r=e.call(this,t)).state={r1:100,r2:100,distance:50,rotation:25,ppc:10},r.updateParameters=r.updateParameters.bind(Object(d.a)(r)),r.randomCurve=r.randomCurve.bind(Object(d.a)(r)),r}return Object(l.a)(a,[{key:"updateParameters",value:function(t,e){this.setState((function(){return{parameter:e}}))}},{key:"randomCurve",value:function(){var t=Math.floor(Math.random()*Math.floor(300)),e=Math.floor(Math.random()*Math.floor(300)),a=Math.floor(Math.random()*Math.floor(300)),r=Math.floor(Math.random()*Math.floor(360)),n=Math.floor(Math.random()*Math.floor(10));this.setState((function(){return{r1:t,r2:e,distance:a,rotation:r,ppc:n}}))}},{key:"drawSpiro",value:function(){var t=document.getElementById("mainCanvas");x(this.state.r1,this.state.r2,this.state.distance,this.state.rotation,this.state.ppc,t)}},{key:"componentWillMount",value:function(){console.log("start"),this.randomCurve()}},{key:"componentDidMount",value:function(){this.drawSpiro()}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-8",children:Object(r.jsx)("div",{id:"canvasContainer",children:Object(r.jsx)("canvas",{className:"border",id:"mainCanvas",width:"800px",height:"600px"})})}),Object(r.jsxs)("div",{className:"col-4",children:[Object(r.jsxs)("div",{className:"parameterPanel",children:[Object(r.jsx)(m,{type:"r1",callback:this.updateParameters,value:this.state.r1}),Object(r.jsx)(m,{type:"r2",callback:this.updateParameters,value:this.state.r2}),Object(r.jsx)(m,{type:"distance",callback:this.updateParameters,value:this.state.distance}),Object(r.jsx)(m,{type:"rotation",callback:this.updateParameters,value:this.state.rotation}),Object(r.jsx)(m,{type:"ppc",callback:this.updateParameters,value:this.state.ppc})]}),Object(r.jsx)(v,{buttonType:"random",callback:this.randomCurve})]})]})})}}]),a}(c.a.Component),O=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(e){var a=e.getCLS,r=e.getFID,n=e.getFCP,c=e.getLCP,s=e.getTTFB;a(t),r(t),n(t),c(t),s(t)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.66df3e68.chunk.js.map