(this["webpackJsonpgithub-page"]=this["webpackJsonpgithub-page"]||[]).push([[0],{36:function(t,e,i){},37:function(t,e,i){},38:function(t,e,i){},39:function(t,e,i){},42:function(t,e,i){},43:function(t,e,i){},44:function(t,e,i){},45:function(t,e,i){},46:function(t,e,i){},47:function(t,e,i){},48:function(t,e,i){},54:function(t,e,i){},55:function(t,e,i){},56:function(t,e,i){"use strict";i.r(e);var n=i(7),s=i.n(n),a=i(27),o=i.n(a),r=(i(36),i(37),i(11)),c=i(12),h=(i(38),i(39),i(0)),l=i(1),d=i(6),u=i(30),m=function(){function t(e){Object(h.a)(this,t),this.main=void 0,this.monkeyLightAtStartOfTheAnimation=void 0,this.monkeyLight=void 0,this.wallLight=void 0,this.monkeyHelper=void 0,this.wallHelper=void 0,this.main=e}return Object(l.a)(t,[{key:"createMonkeyLightAtStartOfTheAnimation",value:function(){this.monkeyLightAtStartOfTheAnimation=new d.z(65280,10,30,Math.PI/10,.4,1),this.monkeyLightAtStartOfTheAnimation.position.set(0,10,0);var t=new d.r;t.position.set(0,0,-20),this.main.scene.add(t),this.monkeyLightAtStartOfTheAnimation.target=t,this.main.scene.add(this.monkeyLightAtStartOfTheAnimation);new d.A(this.monkeyLightAtStartOfTheAnimation)}},{key:"createMonkeyLight",value:function(){this.monkeyLight=new d.z("white",10,12,Math.PI/10,.4,1),this.monkeyLight.position.set(2.5,5.5,7),this.main.scene.add(this.monkeyLight),this.monkeyHelper=new d.A(this.monkeyLight)}},{key:"createWallLight",value:function(){this.wallLight=new d.d("white",.03);var t=new d.r;t.position.set(0,0,-40),this.wallLight.target=t,this.main.scene.add(t),this.wallLight.position.set(0,0,-30),this.main.scene.add(this.wallLight),this.wallHelper=new d.e(this.wallLight)}},{key:"init",value:function(){this.createMonkeyLight(),this.createMonkeyLightAtStartOfTheAnimation(),this.createWallLight()}},{key:"updateHelpers",value:function(){this.monkeyHelper.update()}},{key:"changeLightColours",value:function(){var t=(this.monkeyLight.color.getHex()+1e3)%1e6;this.monkeyLight.color.setHex(t),this.wallLight.color.setHex(t)}}]),t}(),f=i(28),y=i(29),v=function(){function t(){Object(h.a)(this,t),this.initialY=void 0,this.initialZ=void 0,this.finalY=void 0,this.finalZ=void 0,this.coords=void 0,this.currentFrame=void 0,this.animationFinished=void 0,this.initialY=-2,this.initialZ=-20,this.finalY=2,this.finalZ=0,this.currentFrame=0,this.animationFinished=!1}return Object(l.a)(t,[{key:"setCoords",value:function(t){this.coords=t}},{key:"getNextFrame",value:function(){var t={y:this.coords.y[this.currentFrame],z:this.coords.z[this.currentFrame]};return this.currentFrame++,this.currentFrame>this.coords.y.length-1&&(this.animationFinished=!0,this.finalY=this.coords.y[this.currentFrame-1],this.finalZ=this.coords.z[this.currentFrame-1],j.currentAnimation=void 0),t}}]),t}(),p=function(){function t(e,i,n){Object(h.a)(this,t),this.initialX=void 0,this.initialY=void 0,this.initialZ=void 0,this.finalZ=void 0,this.finalY=void 0,this.finalX=void 0,this.currentFrame=void 0,this.coordsArray=void 0,this.animationFinished=void 0,this.initialX=e,this.initialY=i,this.initialZ=n,this.currentFrame=0,this.animationFinished=!1}return Object(l.a)(t,[{key:"setCoords",value:function(t){this.coordsArray=t}},{key:"getNextFrame",value:function(t){var e={y:this.coordsArray.y[this.currentFrame],z:this.coordsArray.z[this.currentFrame]};return this.currentFrame++,this.currentFrame>this.coordsArray.y.length-1&&(this.animationFinished=!0,this.finalY=this.coordsArray.y[this.currentFrame-1],this.finalZ=this.coordsArray.z[this.currentFrame-1],j.currentAnimation=void 0,t()),e}}]),t}(),g=function(){function t(){Object(h.a)(this,t)}return Object(l.a)(t,null,[{key:"instantiateMonkeyAnimation",value:function(){return this.monkeyAnimation||(this.monkeyAnimation=new v),this.monkeyAnimation.setCoords(this.moveInFromBack(this.monkeyAnimation.initialY,this.monkeyAnimation.initialZ,.2,100)),this.currentAnimation=this.monkeyAnimation,this.monkeyAnimation}},{key:"instantiateMonkeyTopRightAnimation",value:function(t,e,i){return this.monkeyTopRightAnimation||(this.monkeyTopRightAnimation=new p(t,e,i)),this.monkeyTopRightAnimation.setCoords(this.goToTopAndBack(i,e,.04,100)),this.currentAnimation=this.monkeyTopRightAnimation,this.monkeyTopRightAnimation}},{key:"moveInFromBack",value:function(t,e,i,n){for(var s=[t],a=[e],o=0;o<n;o++)a[o+1]=a[o]+i,s[o+1]=this.parabolicFunc(a[o+1]+Math.abs(e),t,1.55,.07);return{y:s,z:a}}},{key:"parabolicFunc",value:function(t,e,i,n){return i*t-n*Math.pow(t,2)+e}},{key:"goToTopAndBack",value:function(t,e,i,n){for(var s=[e],a=[t],o=0;o<n;o++)a[o+1]=a[o]+i,s[o+1]=this.flattenFunc(a[o+1],-3,-1)+4;return{y:s,z:a}}},{key:"flattenFunc",value:function(t,e,i){return e*Math.exp(i*t)}}]),t}();g.monkeyAnimation=void 0,g.monkeyTopRightAnimation=void 0,g.currentAnimation=void 0;var j=g,k=function(){function t(e){Object(h.a)(this,t),this.main=void 0,this.monkey=void 0,this.monkeyLoaded=void 0,this.monkeyAnimation=void 0,this.raycaster=void 0,this.intersects=void 0,this.pickableObjects=void 0,this.onClickEventListenerRef=void 0,this.shouldRaycast=void 0,this.main=e,this.monkeyLoaded=!1,this.intersects=new Array,this.shouldRaycast=!0}return Object(l.a)(t,[{key:"createRaycaster",value:function(){this.raycaster=new d.w}},{key:"loadMonkey",value:function(){var t=this;(new f.a).load("three-assets/monkey.mtl",(function(e){e.preload();var i=new y.a;i.setMaterials(e),i.load("three-assets/monkey.obj",(function(e){e.traverse((function(e){e.isMesh&&(t.setMonkey(e),e.material.color.setHex(16777215))})),t.main.scene.add(e)}),(function(t){console.log(t.loaded/t.total*100+"% loaded")}),(function(t){console.log("An error happened")}))}),(function(t){console.log(t.loaded/t.total*100+"% loaded")}),(function(t){console.log("An error happened")}))}},{key:"setMonkey",value:function(t){this.monkey=t,this.monkeyLoaded=!0,this.monkeyConfig()}},{key:"onMouseMove",value:function(t){if(this.monkeyLoaded){var e=t.clientX/this.main.renderer.domElement.clientWidth*2-1,i=-t.clientY/this.main.renderer.domElement.clientHeight*2+1;this.monkey.rotation.x=.7-i<1?.7-i:1,this.monkey.rotation.y=e,this.shouldRaycast&&(this.raycaster.setFromCamera({x:e,y:i},this.main.camera),this.intersects=this.raycaster.intersectObjects(this.pickableObjects,!1),this.intersects.length>0?document.getElementsByTagName("body")[0].style.cursor="pointer":document.getElementsByTagName("body")[0].style.cursor="initial")}}},{key:"onClick",value:function(t){this.intersects.length>0&&!j.currentAnimation&&(j.instantiateMonkeyTopRightAnimation(0,this.monkeyAnimation.finalY,this.monkeyAnimation.finalZ),this.main.sidersInstance.sidersAnimation.shouldAnimate=!0,this.main.monkeyClickedSetter(!0))}},{key:"monkeyConfig",value:function(){this.monkeyAnimation=j.instantiateMonkeyAnimation(),this.monkey.position.y=this.monkeyAnimation.initialY,this.monkey.position.z=this.monkeyAnimation.initialZ,this.pickableObjects=[this.monkey],this.main.lightsInstance.monkeyLight.target=this.monkey}},{key:"removeOnClickListener",value:function(){document.removeEventListener("click",this.onClickEventListenerRef),this.shouldRaycast=!1,document.getElementsByTagName("body")[0].style.cursor="initial"}},{key:"animateMonkey",value:function(){if(this.monkeyLoaded)if(j.currentAnimation instanceof v){var t=j.currentAnimation.getNextFrame();this.monkey.position.y=t.y,this.monkey.position.z=t.z}else if(j.currentAnimation instanceof p){var e=j.currentAnimation.getNextFrame(this.removeOnClickListener.bind(this));this.monkey.position.y=e.y,this.monkey.position.z=-e.z}}},{key:"init",value:function(){this.loadMonkey(),this.createRaycaster(),this.onClickEventListenerRef=this.onClick.bind(this),document.addEventListener("mousemove",this.onMouseMove.bind(this)),document.addEventListener("click",this.onClickEventListenerRef)}}]),t}(),b=i(2),O=i(3),A=function(t){Object(b.a)(i,t);var e=Object(O.a)(i);function i(t,n,s){var a;return Object(h.a)(this,i),(a=e.call(this)).initialX=void 0,a.initialY=void 0,a.initialZ=void 0,a.finalZ=void 0,a.finalY=void 0,a.finalX=void 0,a.coordsArray=void 0,a.currentFrame=void 0,a.animationFinished=void 0,a.shouldAnimate=void 0,a.initialX=t,a.initialY=n,a.initialZ=s,a.currentFrame=0,a.animationFinished=!1,a.shouldAnimate=!1,a.setCoords(),a}return Object(l.a)(i,[{key:"setCoords",value:function(){var t=i.goToBack(this.initialX,this.initialY,this.initialZ,.037,.037825,100);this.coordsArray=t}},{key:"getNextFrame",value:function(){var t={x:this.coordsArray.x[this.currentFrame],y:this.coordsArray.y[this.currentFrame],z:this.coordsArray.z[this.currentFrame]};return this.currentFrame++,this.currentFrame>this.coordsArray.y.length-1&&(this.animationFinished=!0,this.shouldAnimate=!1,this.finalX=this.coordsArray.x[this.currentFrame-1],this.finalY=this.coordsArray.y[this.currentFrame-1],this.finalZ=this.coordsArray.z[this.currentFrame-1]),t}}]),i}(function(){function t(){Object(h.a)(this,t)}return Object(l.a)(t,null,[{key:"goToBack",value:function(t,e,i,n,s,a){for(var o=[t],r=[e],c=[i],h=0;h<a;h++)r[h+1]=r[h]+n,c[h+1]=c[h]+s,o[h+1]=this.flattenFunc(c[h+1],.07,1)-3.075;return{x:o,y:r,z:c}}},{key:"flattenFunc",value:function(t,e,i){return e*Math.exp(i*t)}}]),t}()),x=function(){function t(e){Object(h.a)(this,t),this.main=void 0,this.leftKnot=void 0,this.rightKnot=void 0,this.material=void 0,this.leftKnotProps=void 0,this.rightKnotProps=void 0,this.lastUpdateTime=void 0,this.radiusCurrValue=void 0,this.sidersAnimation=void 0,this.main=e,this.leftKnotProps={radius:.3,tube:.1,tubularSegments:20,radialSegments:20,p:10,q:20},this.rightKnotProps={radius:.3,tube:.1,tubularSegments:20,radialSegments:20,p:10,q:20},this.lastUpdateTime=(new Date).getTime(),this.radiusCurrValue=1}return Object(l.a)(t,[{key:"createMaterial",value:function(){this.material=new d.p}},{key:"regenerateKnotGeometries",value:function(){var t=new d.C(this.leftKnotProps.radius,this.leftKnotProps.tube,this.leftKnotProps.tubularSegments,this.leftKnotProps.radialSegments,this.leftKnotProps.p,this.leftKnotProps.q);this.leftKnot.geometry.dispose(),this.leftKnot.geometry=t;var e=new d.C(this.rightKnotProps.radius,this.rightKnotProps.tube,this.rightKnotProps.tubularSegments,this.rightKnotProps.radialSegments,this.rightKnotProps.p,this.rightKnotProps.q);this.rightKnot.geometry.dispose(),this.rightKnot.geometry=e}},{key:"createLeftKnot",value:function(){var t=new d.C(this.leftKnotProps.radius,this.leftKnotProps.tube,this.leftKnotProps.tubularSegments,this.leftKnotProps.radialSegments,this.leftKnotProps.p,this.leftKnotProps.q);this.leftKnot=new d.o(t,this.material),this.leftKnot.position.x=-3,this.leftKnot.position.y=2,this.main.scene.add(this.leftKnot)}},{key:"createRightKnot",value:function(){var t=new d.C(this.rightKnotProps.radius,this.rightKnotProps.tube,this.rightKnotProps.tubularSegments,this.rightKnotProps.radialSegments,this.rightKnotProps.p,this.rightKnotProps.q);this.rightKnot=new d.o(t,this.material),this.rightKnot.position.x=3,this.rightKnot.position.y=2,this.main.scene.add(this.rightKnot)}},{key:"waveFunction",value:function(t,e,i){var n=this.radiusCurrValue,s=n%(2*(e-i)),a=n%(e-i);return this.radiusCurrValue=i+this.radiusCurrValue%(2*(e-i)),s===a?s+t:s-2*a+t}},{key:"updateKnots",value:function(){(new Date).getTime()-this.lastUpdateTime>1&&(this.leftKnotProps.p=1+this.leftKnotProps.p%20,this.rightKnotProps.p=1+this.rightKnotProps.p%20,this.regenerateKnotGeometries(),this.lastUpdateTime=(new Date).getTime())}},{key:"instantiateMovingBackAnimation",value:function(){this.sidersAnimation=new A(this.leftKnot.position.x,this.leftKnot.position.y,this.leftKnot.position.z)}},{key:"animateKnots",value:function(){if(this.sidersAnimation.shouldAnimate){var t=this.sidersAnimation.getNextFrame();this.leftKnot.position.x=t.x,this.leftKnot.position.y=t.y,this.leftKnot.position.z=-t.z,this.rightKnot.position.x=-t.x,this.rightKnot.position.y=t.y,this.rightKnot.position.z=-t.z}}},{key:"init",value:function(){this.createMaterial(),this.createLeftKnot(),this.createRightKnot(),this.instantiateMovingBackAnimation()}}]),t}(),w=function(){function t(e){Object(h.a)(this,t),this.main=void 0,this.material=void 0,this.wall=void 0,this.main=e}return Object(l.a)(t,[{key:"createMaterial",value:function(){this.material=new d.q}},{key:"createWall",value:function(){var t=new d.t(1e3,1e3);this.wall=new d.o(t,this.material),this.wall.position.z=-40,this.main.scene.add(this.wall)}},{key:"init",value:function(){this.createMaterial(),this.createWall()}}]),t}(),K=function(){function t(e,i){Object(h.a)(this,t),this.canvas=void 0,this.renderer=void 0,this.camera=void 0,this.scene=void 0,this.stats=void 0,this.monkeyInstance=void 0,this.wallInstance=void 0,this.lightsInstance=void 0,this.sidersInstance=void 0,this.monkeyClickedSetter=void 0,this.canvas=e,this.monkeyClickedSetter=i}return Object(l.a)(t,[{key:"createScene",value:function(){this.scene=new d.y,this.scene.background=new d.b("black")}},{key:"createCamera",value:function(){this.camera=new d.s(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=5}},{key:"createRenderer",value:function(){this.renderer=new d.F({canvas:this.canvas}),this.renderer.setSize(window.innerWidth,window.innerHeight)}},{key:"createStats",value:function(){this.stats=Object(u.a)(),document.body.appendChild(this.stats.dom)}},{key:"createMonkeyInstance",value:function(){this.monkeyInstance=new k(this),this.monkeyInstance.init()}},{key:"createLightsInstance",value:function(){this.lightsInstance=new m(this),this.lightsInstance.init()}},{key:"createSidersInstance",value:function(){this.sidersInstance=new x(this),this.sidersInstance.init()}},{key:"createWallInstance",value:function(){this.wallInstance=new w(this),this.wallInstance.init()}},{key:"onWindowResize",value:function(){var t=window.innerHeight<1e3?window.innerHeight:1e3;this.camera.aspect=window.innerWidth/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,t),this.render()}},{key:"animationLoop",value:function(){requestAnimationFrame(this.animationLoop.bind(this)),this.lightsInstance.updateHelpers(),this.sidersInstance.updateKnots(),this.lightsInstance.changeLightColours(),this.monkeyInstance.animateMonkey(),this.sidersInstance.animateKnots(),this.renderer.render(this.scene,this.camera),this.stats.update()}},{key:"init",value:function(){this.createRenderer(),this.createCamera(),this.createScene(),this.createStats(),this.createMonkeyInstance(),this.createLightsInstance(),this.createSidersInstance(),this.createWallInstance(),window.addEventListener("resize",this.onWindowResize.bind(this),!1),this.animationLoop()}},{key:"render",value:function(){this.renderer.render(this.scene,this.camera)}}]),t}(),F=i(4),L=function(t){var e=t.setMonkeyClicked,i=Object(n.useState)(),s=Object(c.a)(i,2),a=(s[0],s[1]),o=Object(n.createRef)();return Object(n.useEffect)((function(){if(o&&o.current){var t=new K(o.current,e);a(t),t.init()}}),[]),Object(F.jsx)("canvas",{ref:o,className:"canvas"})},T=(i(42),function(t){var e=t.content;return Object(F.jsx)("span",{className:"primary-heading",children:e})}),C=(i(43),function(t){var e=t.content;return Object(F.jsx)("span",{className:"secondary-heading",children:e})}),N=(i(44),i(45),i(46),function(t){var e=t.content;return Object(F.jsx)("span",{className:"tertiary-heading",children:e})}),P=function(t){var e=t.title;return Object(F.jsx)("div",{className:"box-title-container",children:Object(F.jsx)(N,{content:e})})},I=function(){return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)("div",{className:"timeline-profile-intro timeline-side-box",children:Object(F.jsx)(P,{title:"Intro"})})})},S={TIMELINE:"/timeline",ABOUT:"/about",EXPERIENCE:"/experience",CONTACT:"/contact",PROJECTS:"/projects"},M=(i(47),function(){return Object(F.jsx)("div",{children:"about"})}),R=(i(48),function(){return Object(F.jsxs)(r.Switch,{children:[Object(F.jsx)(r.Route,{exact:!0,path:"/",children:Object(F.jsx)(r.Redirect,{to:S.TIMELINE})}),Object(F.jsx)(r.Route,{path:S.TIMELINE,children:Object(F.jsx)("section",{className:"profile-timeline-container",children:Object(F.jsx)(I,{})})}),Object(F.jsx)(r.Route,{path:S.ABOUT,children:Object(F.jsx)("section",{className:"profile-about-container",children:Object(F.jsx)(M,{})})}),Object(F.jsx)(r.Route,{path:S.EXPERIENCE,children:Object(F.jsx)("section",{className:"profile-experience-container"})}),Object(F.jsx)(r.Route,{path:S.PROJECTS,children:Object(F.jsx)("section",{className:"profile-projects-container"})}),Object(F.jsx)(r.Route,{path:S.CONTACT,children:Object(F.jsx)("section",{className:"profile-contact-container"})})]})}),E=(i(54),i.p+"static/media/profile.f3dd0666.jpeg"),z=i(19),H=function(){var t=Object(z.useHistory)(),e=Object(n.useState)(""),i=Object(c.a)(e,2)[1],s=["Timeline","About","Experience","Projects","Contact"].map((function(e){var n=t.location.pathname.slice(1)===e.toLowerCase()?"profile-header-item-active":"profile-header-item-inactive";return Object(F.jsx)("li",{className:"profile-header-item ".concat(n),onClick:function(n){return function(e){var n=S[e.toUpperCase()];t.push(n),i(e)}(e)},children:e},e)}));return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("div",{className:"profile-header-profile-img-container",children:Object(F.jsx)("div",{className:"profile-header-profile-img-inner-container",children:Object(F.jsx)("img",{className:"profile-img",src:E})})}),Object(F.jsx)("div",{className:"profile-header-my-name",children:Object(F.jsx)("div",{className:"profile-header-my-name-inner-container",children:Object(F.jsx)("p",{children:"Nikos Theodoropoulos"})})}),Object(F.jsx)("ul",{className:"profile-inner-header-container",children:s})]})},Y=(i(55),function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("div",{className:"profile-transparent-background-container"}),Object(F.jsx)("div",{className:"profile-header-container",children:Object(F.jsx)(H,{})}),Object(F.jsx)("div",{className:"profile-body-container",children:Object(F.jsx)(R,{})})]})}),Z=function(){var t=Object(n.useState)(!1),e=Object(c.a)(t,2),i=e[0],s=e[1],a=Object(n.useState)(!1),o=Object(c.a)(a,2),r=o[0],h=o[1],l=Object(n.useState)("landing-page-main-before-animation"),d=Object(c.a)(l,2),u=d[0],m=d[1];Object(z.useHistory)();Object(n.useEffect)((function(){if(i)var t=setTimeout((function(){h(!0),m("landing-page-main-after-animation"),clearTimeout(t)}),1800)}),[i]);var f={primaryHeading:"",secondaryHeading:""};return i&&(f.primaryHeading="primary-heading-exitting-animation",f.secondaryHeading="secondary-heading-exitting-animation"),Object(F.jsxs)("main",{className:"landing-page-main "+u,children:[Object(F.jsx)("div",{className:"canvas-container-landing-page",children:Object(F.jsx)(L,{setMonkeyClicked:s})}),r?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("div",{className:"gap gap1"}),Object(F.jsx)("section",{className:"profile-section",children:Object(F.jsx)(Y,{})}),Object(F.jsx)("div",{className:"gap gap2"})]}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("div",{className:"landing-page-title "+f.primaryHeading,children:Object(F.jsx)(T,{content:"Welcome to my"})}),Object(F.jsx)("div",{className:"landing-page-subtitle "+f.secondaryHeading,children:Object(F.jsx)(C,{content:"Personal space"})})]})]})},B=i(8),W=i(17),X={},q={},U="TIMELINE";(function(){var t,e,i=Object(B.a)({},"STORE_CURRENT_PAGE",(function(t,e){return{currentPage:e}}));t=i,(e={currentPage:U})&&(X=Object(W.a)(Object(W.a)({},X),e)),q=Object(W.a)(Object(W.a)({},q),t)})();var D=function(){return Object(F.jsx)(r.BrowserRouter,{children:Object(F.jsx)(Z,{})})};(function(){fetch("https://www.cloudflare.com/cdn-cgi/trace").then((function(t){return t.text()})).then((function(t){fetch("https://my-gh-page-default-rtdb.europe-west1.firebasedatabase.app/"+"".concat((new Date).getTime(),".json"),{method:"POST",headers:{Application:"application/json","Content-Type":"application/json"},body:JSON.stringify({visitorData:t,date:new Date})}).then((function(t){return t}))}))})(),o.a.render(Object(F.jsx)(s.a.StrictMode,{children:Object(F.jsx)(D,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.10b4a46c.chunk.js.map