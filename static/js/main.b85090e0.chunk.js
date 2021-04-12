(this["webpackJsonpgithub-page"]=this["webpackJsonpgithub-page"]||[]).push([[0],{28:function(t,e,i){},29:function(t,e,i){},30:function(t,e,i){},31:function(t,e,i){},34:function(t,e,i){},35:function(t,e,i){},41:function(t,e,i){"use strict";i.r(e);var n=i(3),s=i.n(n),o=i(19),a=i.n(o),r=(i(28),i(29),i(13)),h=(i(30),i(11)),c=(i(31),i(0)),u=i(1),d=i(2),l=i(22),m=function(){function t(e){Object(c.a)(this,t),this.main=void 0,this.monkeyLight=void 0,this.monkeyHelper=void 0,this.main=e}return Object(u.a)(t,[{key:"createMonkeyLight",value:function(){this.monkeyLight=new d.u("white",10,10,Math.PI/10,.4,1),this.monkeyLight.position.set(2.5,2.5,7),this.main.scene.add(this.monkeyLight),this.monkeyHelper=new d.v(this.monkeyLight)}},{key:"init",value:function(){this.createMonkeyLight()}},{key:"updateHelpers",value:function(){this.monkeyHelper.update()}},{key:"changeLightColours",value:function(){this.monkeyLight.color.setHex((this.monkeyLight.color.getHex()+1e3)%1e6)}}]),t}(),y=i(20),f=i(21),p=function(){function t(){Object(c.a)(this,t),this.initialY=void 0,this.initialZ=void 0,this.finalY=void 0,this.finalZ=void 0,this.coords=void 0,this.currentFrame=void 0,this.initialY=-2,this.initialZ=-20,this.finalY=2,this.finalZ=0,this.currentFrame=0}return Object(u.a)(t,[{key:"setCoords",value:function(t){this.coords=t}},{key:"getNextFrame",value:function(){var t={y:this.coords.y[this.currentFrame],z:this.coords.z[this.currentFrame]};return this.currentFrame<this.coords.y.length-1&&this.currentFrame++,t}}]),t}(),v=function(){function t(){Object(c.a)(this,t)}return Object(u.a)(t,null,[{key:"instantiateMonkeyAnimation",value:function(){return this.monkeyAnimation||(this.monkeyAnimation=new p),this.monkeyAnimation.setCoords(this.moveInFromBack(this.monkeyAnimation.initialY,this.monkeyAnimation.initialZ,.2,100)),this.monkeyAnimation}},{key:"moveInFromBack",value:function(t,e,i,n){for(var s=[t],o=[e],a=0;a<n;a++)o[a+1]=o[a]+i,s[a+1]=this.parabolicFunc(o[a+1]+Math.abs(e),t,1.55,.07);return{y:s,z:o}}},{key:"parabolicFunc",value:function(t,e,i,n){return i*t-n*Math.pow(t,2)+e}}]),t}();v.monkeyAnimation=void 0;var g=v,k=function(){function t(e){Object(c.a)(this,t),this.main=void 0,this.monkey=void 0,this.monkeyLoaded=void 0,this.monkeyAnimation=void 0,this.main=e,this.monkeyLoaded=!1}return Object(u.a)(t,[{key:"loadMonkey",value:function(){var t=this;(new y.a).load("three-assets/monkey.mtl",(function(e){e.preload();var i=new f.a;i.setMaterials(e),i.load("three-assets/monkey.obj",(function(e){e.traverse((function(e){e.isMesh&&(t.setMonkey(e),e.material.color.setHex(16777215))})),t.main.scene.add(e)}),(function(t){console.log(t.loaded/t.total*100+"% loaded")}),(function(t){console.log("An error happened")}))}),(function(t){console.log(t.loaded/t.total*100+"% loaded")}),(function(t){console.log("An error happened")}))}},{key:"setMonkey",value:function(t){this.monkey=t,this.monkeyLoaded=!0,this.monkeyConfig()}},{key:"onMouseMove",value:function(t){if(this.monkeyLoaded){var e=t.clientX/this.main.renderer.domElement.clientWidth*2-1,i=-t.clientY/this.main.renderer.domElement.clientHeight*2+1;this.monkey.rotation.x=.7-i,this.monkey.rotation.y=e}}},{key:"monkeyConfig",value:function(){this.monkeyAnimation=g.instantiateMonkeyAnimation(),this.monkey.position.y=this.monkeyAnimation.initialY,this.monkey.position.z=this.monkeyAnimation.initialZ}},{key:"animateMonkey",value:function(){if(this.monkeyLoaded){var t=this.monkeyAnimation.getNextFrame();this.monkey.position.y=t.y,this.monkey.position.z=t.z}}},{key:"init",value:function(){this.loadMonkey(),document.addEventListener("mousemove",this.onMouseMove.bind(this))}}]),t}(),b=function(){function t(e){Object(c.a)(this,t),this.main=void 0,this.leftKnot=void 0,this.rightKnot=void 0,this.material=void 0,this.leftKnotProps=void 0,this.rightKnotProps=void 0,this.lastUpdateTime=void 0,this.radiusCurrValue=void 0,this.main=e,this.leftKnotProps={radius:.3,tube:.1,tubularSegments:20,radialSegments:20,p:10,q:20},this.rightKnotProps={radius:.3,tube:.1,tubularSegments:20,radialSegments:20,p:10,q:20},this.lastUpdateTime=(new Date).getTime(),this.radiusCurrValue=1}return Object(u.a)(t,[{key:"createMaterial",value:function(){this.material=new d.n}},{key:"regenerateKnotGeometries",value:function(){var t=new d.x(this.leftKnotProps.radius,this.leftKnotProps.tube,this.leftKnotProps.tubularSegments,this.leftKnotProps.radialSegments,this.leftKnotProps.p,this.leftKnotProps.q);this.leftKnot.geometry.dispose(),this.leftKnot.geometry=t;var e=new d.x(this.rightKnotProps.radius,this.rightKnotProps.tube,this.rightKnotProps.tubularSegments,this.rightKnotProps.radialSegments,this.rightKnotProps.p,this.rightKnotProps.q);this.rightKnot.geometry.dispose(),this.rightKnot.geometry=e}},{key:"createLeftKnot",value:function(){var t=new d.x(this.leftKnotProps.radius,this.leftKnotProps.tube,this.leftKnotProps.tubularSegments,this.leftKnotProps.radialSegments,this.leftKnotProps.p,this.leftKnotProps.q);this.leftKnot=new d.m(t,this.material),this.leftKnot.position.x=-3,this.leftKnot.position.y=2,this.main.scene.add(this.leftKnot)}},{key:"createRightKnot",value:function(){var t=new d.x(this.rightKnotProps.radius,this.rightKnotProps.tube,this.rightKnotProps.tubularSegments,this.rightKnotProps.radialSegments,this.rightKnotProps.p,this.rightKnotProps.q);this.rightKnot=new d.m(t,this.material),this.rightKnot.position.x=3,this.rightKnot.position.y=2,this.main.scene.add(this.rightKnot)}},{key:"rotateKnots",value:function(){this.leftKnot.rotation.y+=.1}},{key:"waveFunction",value:function(t,e,i){var n=this.radiusCurrValue,s=n%(2*(e-i)),o=n%(e-i);return this.radiusCurrValue=i+this.radiusCurrValue%(2*(e-i)),s===o?s+t:s-2*o+t}},{key:"updateKnots",value:function(){(new Date).getTime()-this.lastUpdateTime>1&&(this.leftKnotProps.p=1+this.leftKnotProps.p%20,this.rightKnotProps.p=1+this.rightKnotProps.p%20,this.regenerateKnotGeometries(),this.lastUpdateTime=(new Date).getTime())}},{key:"init",value:function(){this.createMaterial(),this.createLeftKnot(),this.createRightKnot()}}]),t}(),K=function(){function t(e){Object(c.a)(this,t),this.canvas=void 0,this.renderer=void 0,this.camera=void 0,this.scene=void 0,this.stats=void 0,this.monkeyInstance=void 0,this.lightsInstance=void 0,this.sidersInstance=void 0,this.canvas=e}return Object(u.a)(t,[{key:"createScene",value:function(){this.scene=new d.t,this.scene.background=new d.b("black")}},{key:"createCamera",value:function(){this.camera=new d.p(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=5}},{key:"createRenderer",value:function(){this.renderer=new d.A({canvas:this.canvas}),this.renderer.setSize(window.innerWidth,window.innerHeight)}},{key:"createStats",value:function(){this.stats=Object(l.a)(),document.body.appendChild(this.stats.dom)}},{key:"createMonkeyInstance",value:function(){this.monkeyInstance=new k(this),this.monkeyInstance.init()}},{key:"createLightsInstance",value:function(){this.lightsInstance=new m(this),this.lightsInstance.init()}},{key:"createSidersInstance",value:function(){this.sidersInstance=new b(this),this.sidersInstance.init()}},{key:"onWindowResize",value:function(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.render()}},{key:"animationLoop",value:function(){requestAnimationFrame(this.animationLoop.bind(this)),this.lightsInstance.updateHelpers(),this.sidersInstance.updateKnots(),this.lightsInstance.changeLightColours(),this.monkeyInstance.animateMonkey(),this.renderer.render(this.scene,this.camera),this.stats.update()}},{key:"init",value:function(){this.createRenderer(),this.createCamera(),this.createScene(),this.createStats(),this.createMonkeyInstance(),this.createLightsInstance(),this.createSidersInstance(),window.addEventListener("resize",this.onWindowResize.bind(this),!1),this.animationLoop()}},{key:"render",value:function(){this.renderer.render(this.scene,this.camera)}}]),t}(),w=i(4),j=function(){var t=Object(n.useState)(),e=Object(h.a)(t,2),i=(e[0],e[1]),s=Object(n.createRef)();return Object(n.useEffect)((function(){if(s&&s.current){var t=new K(s.current);i(t),t.init()}}),[]),Object(w.jsx)("canvas",{ref:s,className:"canvas"})},P=(i(34),function(t){var e=t.content;return Object(w.jsx)("span",{className:"primary-heading",children:e})}),O=(i(35),function(t){var e=t.content;return Object(w.jsx)("span",{className:"secondary-heading",children:e})}),x=function(){return Object(w.jsxs)("main",{className:"landing-page-main",children:[Object(w.jsx)("div",{className:"canvas-container-landing-page",children:Object(w.jsx)(j,{})}),Object(w.jsx)("div",{className:"landing-page-title",children:Object(w.jsx)(P,{content:"Welcome to my"})}),Object(w.jsx)("div",{className:"landing-page-subtitle",children:Object(w.jsx)(O,{content:"To my personal space"})})]})};var L=function(){return Object(w.jsx)(r.BrowserRouter,{children:Object(w.jsx)(r.Switch,{children:Object(w.jsx)(r.Route,{path:"/",exact:!0,children:x})})})};a.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(L,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.b85090e0.chunk.js.map