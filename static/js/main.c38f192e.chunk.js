(this["webpackJsonpgithub-page"]=this["webpackJsonpgithub-page"]||[]).push([[0],Array(37).concat([function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},,,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},,,,,,function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var n=i(7),a=i.n(n),s=i(28),o=i.n(s),r=(i(37),i(38),i(11)),c=i(12),h=(i(39),i(40),i(0)),l=i(2),d=i(6),u=i(31),m=function(){function t(e){Object(h.a)(this,t),this.main=void 0,this.monkeyLightAtStartOfTheAnimation=void 0,this.monkeyLight=void 0,this.wallLight=void 0,this.monkeyHelper=void 0,this.wallHelper=void 0,this.main=e}return Object(l.a)(t,[{key:"createMonkeyLightAtStartOfTheAnimation",value:function(){this.monkeyLightAtStartOfTheAnimation=new d.z(65280,10,30,Math.PI/10,.4,1),this.monkeyLightAtStartOfTheAnimation.position.set(0,10,0);var t=new d.r;t.position.set(0,0,-20),this.main.scene.add(t),this.monkeyLightAtStartOfTheAnimation.target=t,this.main.scene.add(this.monkeyLightAtStartOfTheAnimation);new d.A(this.monkeyLightAtStartOfTheAnimation)}},{key:"createMonkeyLight",value:function(){this.monkeyLight=new d.z("white",10,12,Math.PI/10,.4,1),this.monkeyLight.position.set(2.5,5.5,7),this.main.scene.add(this.monkeyLight),this.monkeyHelper=new d.A(this.monkeyLight)}},{key:"createWallLight",value:function(){this.wallLight=new d.d("white",.03);var t=new d.r;t.position.set(0,0,-40),this.wallLight.target=t,this.main.scene.add(t),this.wallLight.position.set(0,0,-30),this.main.scene.add(this.wallLight),this.wallHelper=new d.e(this.wallLight)}},{key:"init",value:function(){this.createMonkeyLight(),this.createMonkeyLightAtStartOfTheAnimation(),this.createWallLight()}},{key:"updateHelpers",value:function(){this.monkeyHelper.update()}},{key:"changeLightColours",value:function(){var t=(this.monkeyLight.color.getHex()+1e3)%1e6;this.monkeyLight.color.setHex(t),this.wallLight.color.setHex(t)}}]),t}(),g=i(29),f=i(30),p=function(){function t(){Object(h.a)(this,t),this.initialY=void 0,this.initialZ=void 0,this.finalY=void 0,this.finalZ=void 0,this.coords=void 0,this.currentFrame=void 0,this.animationFinished=void 0,this.initialY=-2,this.initialZ=-20,this.finalY=2,this.finalZ=0,this.currentFrame=0,this.animationFinished=!1}return Object(l.a)(t,[{key:"setCoords",value:function(t){this.coords=t}},{key:"getNextFrame",value:function(){var t={y:this.coords.y[this.currentFrame],z:this.coords.z[this.currentFrame]};return this.currentFrame++,this.currentFrame>this.coords.y.length-1&&(this.animationFinished=!0,this.finalY=this.coords.y[this.currentFrame-1],this.finalZ=this.coords.z[this.currentFrame-1],b.currentAnimation=void 0),t}}]),t}(),y=function(){function t(e,i,n){Object(h.a)(this,t),this.initialX=void 0,this.initialY=void 0,this.initialZ=void 0,this.finalZ=void 0,this.finalY=void 0,this.finalX=void 0,this.currentFrame=void 0,this.coordsArray=void 0,this.animationFinished=void 0,this.initialX=e,this.initialY=i,this.initialZ=n,this.currentFrame=0,this.animationFinished=!1}return Object(l.a)(t,[{key:"setCoords",value:function(t){this.coordsArray=t}},{key:"getNextFrame",value:function(t){var e={y:this.coordsArray.y[this.currentFrame],z:this.coordsArray.z[this.currentFrame]};return this.currentFrame++,this.currentFrame>this.coordsArray.y.length-1&&(this.animationFinished=!0,this.finalY=this.coordsArray.y[this.currentFrame-1],this.finalZ=this.coordsArray.z[this.currentFrame-1],b.currentAnimation=void 0,t()),e}}]),t}(),j=function(){function t(){Object(h.a)(this,t)}return Object(l.a)(t,null,[{key:"instantiateMonkeyAnimation",value:function(){return this.monkeyAnimation||(this.monkeyAnimation=new p),this.monkeyAnimation.setCoords(this.moveInFromBack(this.monkeyAnimation.initialY,this.monkeyAnimation.initialZ,.2,100)),this.currentAnimation=this.monkeyAnimation,this.monkeyAnimation}},{key:"instantiateMonkeyTopRightAnimation",value:function(t,e,i){return this.monkeyTopRightAnimation||(this.monkeyTopRightAnimation=new y(t,e,i)),this.monkeyTopRightAnimation.setCoords(this.goToTopAndBack(i,e,.04,100)),this.currentAnimation=this.monkeyTopRightAnimation,this.monkeyTopRightAnimation}},{key:"moveInFromBack",value:function(t,e,i,n){for(var a=[t],s=[e],o=0;o<n;o++)s[o+1]=s[o]+i,a[o+1]=this.parabolicFunc(s[o+1]+Math.abs(e),t,1.55,.07);return{y:a,z:s}}},{key:"parabolicFunc",value:function(t,e,i,n){return i*t-n*Math.pow(t,2)+e}},{key:"goToTopAndBack",value:function(t,e,i,n){for(var a=[e],s=[t],o=0;o<n;o++)s[o+1]=s[o]+i,a[o+1]=this.flattenFunc(s[o+1],-3,-1)+4;return{y:a,z:s}}},{key:"flattenFunc",value:function(t,e,i){return e*Math.exp(i*t)}}]),t}();j.monkeyAnimation=void 0,j.monkeyTopRightAnimation=void 0,j.currentAnimation=void 0;var b=j,v=function(){function t(e){Object(h.a)(this,t),this.main=void 0,this.monkey=void 0,this.monkeyLoaded=void 0,this.monkeyAnimation=void 0,this.raycaster=void 0,this.intersects=void 0,this.pickableObjects=void 0,this.onClickEventListenerRef=void 0,this.shouldRaycast=void 0,this.main=e,this.monkeyLoaded=!1,this.intersects=new Array,this.shouldRaycast=!0}return Object(l.a)(t,[{key:"createRaycaster",value:function(){this.raycaster=new d.w}},{key:"loadMonkey",value:function(){var t=this;(new g.a).load("three-assets/monkey.mtl",(function(e){e.preload();var i=new f.a;i.setMaterials(e),i.load("three-assets/monkey.obj",(function(e){e.traverse((function(e){e.isMesh&&(t.setMonkey(e),e.material.color.setHex(16777215))})),t.main.scene.add(e)}),(function(t){console.log(t.loaded/t.total*100+"% loaded")}),(function(t){console.log("An error happened")}))}),(function(t){console.log(t.loaded/t.total*100+"% loaded")}),(function(t){console.log("An error happened")}))}},{key:"setMonkey",value:function(t){this.monkey=t,this.monkeyLoaded=!0,this.monkeyConfig()}},{key:"onMouseMove",value:function(t){if(this.monkeyLoaded){var e=t.clientX/this.main.renderer.domElement.clientWidth*2-1,i=-t.clientY/this.main.renderer.domElement.clientHeight*2+1;this.monkey.rotation.x=.7-i<1?.7-i:1,this.monkey.rotation.y=e,this.shouldRaycast&&(this.raycaster.setFromCamera({x:e,y:i},this.main.camera),this.intersects=this.raycaster.intersectObjects(this.pickableObjects,!1),this.intersects.length>0?document.getElementsByTagName("body")[0].style.cursor="pointer":document.getElementsByTagName("body")[0].style.cursor="initial")}}},{key:"onClick",value:function(t){this.intersects.length>0&&!b.currentAnimation&&(b.instantiateMonkeyTopRightAnimation(0,this.monkeyAnimation.finalY,this.monkeyAnimation.finalZ),this.main.sidersInstance.sidersAnimation.shouldAnimate=!0,this.main.monkeyClickedSetter(!0))}},{key:"monkeyConfig",value:function(){this.monkeyAnimation=b.instantiateMonkeyAnimation(),this.monkey.position.y=this.monkeyAnimation.initialY,this.monkey.position.z=this.monkeyAnimation.initialZ,this.pickableObjects=[this.monkey],this.main.lightsInstance.monkeyLight.target=this.monkey}},{key:"removeOnClickListener",value:function(){document.removeEventListener("click",this.onClickEventListenerRef),this.shouldRaycast=!1,document.getElementsByTagName("body")[0].style.cursor="initial"}},{key:"animateMonkey",value:function(){if(this.monkeyLoaded)if(b.currentAnimation instanceof p){var t=b.currentAnimation.getNextFrame();this.monkey.position.y=t.y,this.monkey.position.z=t.z}else if(b.currentAnimation instanceof y){var e=b.currentAnimation.getNextFrame(this.removeOnClickListener.bind(this));this.monkey.position.y=e.y,this.monkey.position.z=-e.z}}},{key:"init",value:function(){this.loadMonkey(),this.createRaycaster(),this.onClickEventListenerRef=this.onClick.bind(this),document.addEventListener("mousemove",this.onMouseMove.bind(this)),document.addEventListener("click",this.onClickEventListenerRef)}}]),t}(),k=i(3),A=i(4),O=function(t){Object(k.a)(i,t);var e=Object(A.a)(i);function i(t,n,a){var s;return Object(h.a)(this,i),(s=e.call(this)).initialX=void 0,s.initialY=void 0,s.initialZ=void 0,s.finalZ=void 0,s.finalY=void 0,s.finalX=void 0,s.coordsArray=void 0,s.currentFrame=void 0,s.animationFinished=void 0,s.shouldAnimate=void 0,s.initialX=t,s.initialY=n,s.initialZ=a,s.currentFrame=0,s.animationFinished=!1,s.shouldAnimate=!1,s.setCoords(),s}return Object(l.a)(i,[{key:"setCoords",value:function(){var t=i.goToBack(this.initialX,this.initialY,this.initialZ,.037,.037825,100);this.coordsArray=t}},{key:"getNextFrame",value:function(){var t={x:this.coordsArray.x[this.currentFrame],y:this.coordsArray.y[this.currentFrame],z:this.coordsArray.z[this.currentFrame]};return this.currentFrame++,this.currentFrame>this.coordsArray.y.length-1&&(this.animationFinished=!0,this.shouldAnimate=!1,this.finalX=this.coordsArray.x[this.currentFrame-1],this.finalY=this.coordsArray.y[this.currentFrame-1],this.finalZ=this.coordsArray.z[this.currentFrame-1]),t}}]),i}(function(){function t(){Object(h.a)(this,t)}return Object(l.a)(t,null,[{key:"goToBack",value:function(t,e,i,n,a,s){for(var o=[t],r=[e],c=[i],h=0;h<s;h++)r[h+1]=r[h]+n,c[h+1]=c[h]+a,o[h+1]=this.flattenFunc(c[h+1],.07,1)-3.075;return{x:o,y:r,z:c}}},{key:"flattenFunc",value:function(t,e,i){return e*Math.exp(i*t)}}]),t}()),x=function(){function t(e){Object(h.a)(this,t),this.main=void 0,this.leftKnot=void 0,this.rightKnot=void 0,this.material=void 0,this.leftKnotProps=void 0,this.rightKnotProps=void 0,this.lastUpdateTime=void 0,this.radiusCurrValue=void 0,this.sidersAnimation=void 0,this.main=e,this.leftKnotProps={radius:.3,tube:.1,tubularSegments:20,radialSegments:20,p:10,q:20},this.rightKnotProps={radius:.3,tube:.1,tubularSegments:20,radialSegments:20,p:10,q:20},this.lastUpdateTime=(new Date).getTime(),this.radiusCurrValue=1}return Object(l.a)(t,[{key:"createMaterial",value:function(){this.material=new d.p}},{key:"regenerateKnotGeometries",value:function(){var t=new d.C(this.leftKnotProps.radius,this.leftKnotProps.tube,this.leftKnotProps.tubularSegments,this.leftKnotProps.radialSegments,this.leftKnotProps.p,this.leftKnotProps.q);this.leftKnot.geometry.dispose(),this.leftKnot.geometry=t;var e=new d.C(this.rightKnotProps.radius,this.rightKnotProps.tube,this.rightKnotProps.tubularSegments,this.rightKnotProps.radialSegments,this.rightKnotProps.p,this.rightKnotProps.q);this.rightKnot.geometry.dispose(),this.rightKnot.geometry=e}},{key:"createLeftKnot",value:function(){var t=new d.C(this.leftKnotProps.radius,this.leftKnotProps.tube,this.leftKnotProps.tubularSegments,this.leftKnotProps.radialSegments,this.leftKnotProps.p,this.leftKnotProps.q);this.leftKnot=new d.o(t,this.material),this.leftKnot.position.x=-3,this.leftKnot.position.y=2,this.main.scene.add(this.leftKnot)}},{key:"createRightKnot",value:function(){var t=new d.C(this.rightKnotProps.radius,this.rightKnotProps.tube,this.rightKnotProps.tubularSegments,this.rightKnotProps.radialSegments,this.rightKnotProps.p,this.rightKnotProps.q);this.rightKnot=new d.o(t,this.material),this.rightKnot.position.x=3,this.rightKnot.position.y=2,this.main.scene.add(this.rightKnot)}},{key:"waveFunction",value:function(t,e,i){var n=this.radiusCurrValue,a=n%(2*(e-i)),s=n%(e-i);return this.radiusCurrValue=i+this.radiusCurrValue%(2*(e-i)),a===s?a+t:a-2*s+t}},{key:"updateKnots",value:function(){(new Date).getTime()-this.lastUpdateTime>1&&(this.leftKnotProps.p=1+this.leftKnotProps.p%20,this.rightKnotProps.p=1+this.rightKnotProps.p%20,this.regenerateKnotGeometries(),this.lastUpdateTime=(new Date).getTime())}},{key:"instantiateMovingBackAnimation",value:function(){this.sidersAnimation=new O(this.leftKnot.position.x,this.leftKnot.position.y,this.leftKnot.position.z)}},{key:"animateKnots",value:function(){if(this.sidersAnimation.shouldAnimate){var t=this.sidersAnimation.getNextFrame();this.leftKnot.position.x=t.x,this.leftKnot.position.y=t.y,this.leftKnot.position.z=-t.z,this.rightKnot.position.x=-t.x,this.rightKnot.position.y=t.y,this.rightKnot.position.z=-t.z}}},{key:"init",value:function(){this.createMaterial(),this.createLeftKnot(),this.createRightKnot(),this.instantiateMovingBackAnimation()}}]),t}(),w=function(){function t(e){Object(h.a)(this,t),this.main=void 0,this.material=void 0,this.wall=void 0,this.main=e}return Object(l.a)(t,[{key:"createMaterial",value:function(){this.material=new d.q}},{key:"createWall",value:function(){var t=new d.t(1e3,1e3);this.wall=new d.o(t,this.material),this.wall.position.z=-40,this.main.scene.add(this.wall)}},{key:"init",value:function(){this.createMaterial(),this.createWall()}}]),t}(),I=function(){function t(){Object(h.a)(this,t)}return Object(l.a)(t,null,[{key:"cameraPositionZ",value:function(t,e){return this.isPhone(t,e)?8:5}},{key:"isPhone",value:function(t,e){return t<400&&e>600}}]),t}(),S=function(){function t(e,i){Object(h.a)(this,t),this.canvas=void 0,this.renderer=void 0,this.camera=void 0,this.scene=void 0,this.stats=void 0,this.monkeyInstance=void 0,this.wallInstance=void 0,this.lightsInstance=void 0,this.sidersInstance=void 0,this.monkeyClickedSetter=void 0,this.fps=void 0,this.fpsInterval=void 0,this.now=void 0,this.then=void 0,this.elapsed=void 0,this.canvas=e,this.monkeyClickedSetter=i,this.fps=60}return Object(l.a)(t,[{key:"createScene",value:function(){this.scene=new d.y,this.scene.background=new d.b("black")}},{key:"createCamera",value:function(){this.camera=new d.s(75,document.documentElement.clientWidth/window.innerHeight,.1,1e3);var t=I.cameraPositionZ(document.documentElement.clientWidth,window.innerHeight);this.camera.position.z=t}},{key:"createRenderer",value:function(){this.renderer=new d.F({canvas:this.canvas}),this.renderer.setSize(document.documentElement.clientWidth,window.innerHeight)}},{key:"createStats",value:function(){this.stats=Object(u.a)(),document.body.appendChild(this.stats.dom)}},{key:"createMonkeyInstance",value:function(){this.monkeyInstance=new v(this),this.monkeyInstance.init()}},{key:"createLightsInstance",value:function(){this.lightsInstance=new m(this),this.lightsInstance.init()}},{key:"createSidersInstance",value:function(){this.sidersInstance=new x(this),this.sidersInstance.init()}},{key:"createWallInstance",value:function(){this.wallInstance=new w(this),this.wallInstance.init()}},{key:"onWindowResize",value:function(){var t=window.innerHeight;this.camera.aspect=document.documentElement.clientWidth/t;var e=I.cameraPositionZ(document.documentElement.clientWidth,window.innerHeight);this.camera.position.z=e,this.camera.updateProjectionMatrix(),this.renderer.setSize(document.documentElement.clientWidth,t),this.render()}},{key:"initTimeDelta",value:function(){this.fpsInterval=1e3/this.fps,this.then=Date.now()}},{key:"animationLoop",value:function(){requestAnimationFrame(this.animationLoop.bind(this)),this.now=Date.now(),this.elapsed=this.now-this.then,this.elapsed>this.fpsInterval&&(this.then=this.now-this.elapsed%this.fpsInterval,this.lightsInstance.updateHelpers(),this.sidersInstance.updateKnots(),this.lightsInstance.changeLightColours(),this.monkeyInstance.animateMonkey(),this.sidersInstance.animateKnots(),this.renderer.render(this.scene,this.camera),this.stats.update())}},{key:"init",value:function(){this.createRenderer(),this.createCamera(),this.createScene(),this.createStats(),this.createMonkeyInstance(),this.createLightsInstance(),this.createSidersInstance(),this.createWallInstance(),window.addEventListener("resize",this.onWindowResize.bind(this),!1),this.initTimeDelta(),this.animationLoop()}},{key:"render",value:function(){this.renderer.render(this.scene,this.camera)}}]),t}(),C=i(1),E=function(t){var e=t.setMonkeyClicked,i=Object(n.useState)(),a=Object(c.a)(i,2),s=(a[0],a[1]),o=Object(n.createRef)();return Object(n.useEffect)((function(){if(o&&o.current){var t=new S(o.current,e);s(t),t.init()}}),[]),Object(C.jsx)("canvas",{ref:o,className:"canvas"})},N=(i(43),function(t){var e=t.content;return Object(C.jsx)("span",{className:"primary-heading",children:e})}),T=(i(44),function(t){var e=t.content;return Object(C.jsx)("span",{className:"secondary-heading",children:e})}),F=(i(45),i(14)),M={visitorToken:""},P=[],K={},R=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=Object(n.useState)(M)[1],i=function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=K[t](M,e);if(M=Object(F.a)(Object(F.a)({},M),n),i)for(var a=0;a<P.length;a++)P[a](M)};return Object(n.useEffect)((function(){return t&&P.push(e),function(){t&&(P=P.filter((function(t){return t!==e})))}}),[e,t]),[M,i]},B=i(21),L="https://my-gh-page-default-rtdb.europe-west1.firebasedatabase.app/",z=function(t,e){fetch(L+"".concat(t,".json"),{method:"POST",headers:{Application:"application/json","Content-Type":"application/json"},body:JSON.stringify({location:e,date:(new Date).toTimeString().slice(0,17)+" "+(new Date).toDateString().slice(0,17)})}).then((function(t){return t}))},J=function(t){var e,i=t.split("\n"),n={},a=Object(B.a)(i);try{for(a.s();!(e=a.n()).done;){var s=e.value.split("="),o=s[0],r=s[1];n[o]=r}}catch(c){a.e(c)}finally{a.f()}return n},Q=i(8),Y="TIMELINE",H="PUBLICATIONS",W="STORE_VISITOR_TOKEN",D=function(){var t,e,i=Object(Q.a)({},W,(function(t,e){return{visitorToken:e}}));t=i,(e={visitorToken:""})&&(M=Object(F.a)(Object(F.a)({},M),e)),K=Object(F.a)(Object(F.a)({},K),t)},Z=(i(46),i(47),function(t){var e=t.content;return Object(C.jsx)("span",{className:"tertiary-heading",children:e})}),G=function(t){var e=t.title;return Object(C.jsx)("div",{className:"box-title-container",children:Object(C.jsx)(Z,{content:e})})},U=(i(48),function(t){var e=t.children,i=t.title,n=t.rowSpan,a=t.columnSpan;return Object(C.jsxs)("div",{className:"profile-generic-box",style:{gridColumn:"span "+a,gridRow:"span "+n},children:[Object(C.jsx)(G,{title:i}),e]})}),q=function t(){Object(h.a)(this,t)};q.intro="I am a neuroscientist with strong analytical skills and background, which gives me transferrable and usefull skills to take into my career. Coding really fires my imagination and I enjoy all aspects of developing, in particular the problem solving aspect of it. I love nothing more than solving a complex issue and seeing my code run!",q.codeClanGraduation="In November 2020 I started on Codeclan's Software Development Course. This is an Industry Led 16 week immersive course which is SQA approved and involved more than 800 hours of coding. It teaches software fundamentals and skills including Python, Javascript, Java, HTML, CSS, Agile methodologies, Restful API's and UX design. With a strong emphasis on the SOLID principles of OOP and Test Driven Development I have used the following technologies and frameworks; GitHub, PostgreSQL, Firebase, MongoDB, Express, Flask, Node.js, Socket.io and more. I graduated from CodeClan in March 2021.",q.showcasePresentation="Undoubtedly, CodeClan armed me with useful skills and helped me build a strong intuition about software engineering techniques, but, equally importantly, in this course I came closer with other people with whom we share common interests. Specifically, four of us formed a coding group and we meet regularly to progress with our projects and/or brainstorm about new ones. So far we have coded a 2D multiplayer checkers game which we recently presented to the Scottish Government, FanDuel, and other tech companies.";var V=q,X=(i(49),function(t){var e=t.children,i=t.extraClasses;return Object(C.jsx)("p",{className:"box-plain-text "+i,children:e})}),_=(i(50),function(t){var e=t.content,i=t.extraClasses;return Object(C.jsx)("span",{className:"four-heading "+i,children:e})}),$=(i(51),function(t){var e=t.content;return Object(C.jsx)("span",{className:"four-sub-heading",children:e})}),tt=(i(52),function(){function t(){Object(h.a)(this,t)}return Object(l.a)(t,null,[{key:"dateToString",value:function(t){var e=t.toISOString().slice(0,10).replace(/-/g,""),i=e.slice(6),n=e.slice(4,6),a=e.slice(0,4);return"".concat(i,"/").concat(n,"/").concat(a)}}]),t}()),et=function(t){var e=t.title,i=t.date,n=t.children,a=t.icon;return Object(C.jsxs)("div",{className:"profile-latest-news-box",children:[Object(C.jsx)("div",{className:"profile-latest-news-box-icon-container",children:Object(C.jsx)("img",{src:a,alt:"latest-news-icon",className:"profile-latest-news-box-icon"})}),Object(C.jsx)("div",{className:"profile-latest-news-box-title-container",children:Object(C.jsx)(_,{content:e})}),Object(C.jsx)("div",{className:"profile-latest-news-box-date-container",children:Object(C.jsx)($,{content:tt.dateToString(i)})}),Object(C.jsx)("div",{className:"profile-latest-news-box-description-container",children:Object(C.jsx)(X,{children:n})})]})},it=i.p+"static/media/codeclan-icon.73a331cd.jpeg",nt=i.p+"static/media/codeclan-graduation.8b338142.jpeg",at=(i(53),function(){return Object(C.jsxs)("div",{className:"rounded-social-buttons",children:[Object(C.jsx)("a",{className:"social-button linkedin",href:"https://www.linkedin.com/in/nikos-theodoropoulos-30/",target:"_blank"}),Object(C.jsx)("a",{className:"social-button github",href:"https://github.com/NikTheGeek1",target:"_blank"}),Object(C.jsx)("a",{className:"social-button facebook",href:"https://www.facebook.com/profile.php?id=100011113323246",target:"_blank"})]})}),st=function(){var t=R(!1)[0].visitorToken;return Object(n.useEffect)((function(){z(t,Y)}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(U,{title:"Intro",rowSpan:1,columnSpan:3,children:Object(C.jsx)(X,{children:V.intro})}),Object(C.jsx)(U,{title:"Other networks",rowSpan:1,columnSpan:1,children:Object(C.jsx)(at,{})}),Object(C.jsxs)(U,{title:"Latest news",rowSpan:2,columnSpan:2,children:[Object(C.jsx)(et,{title:"CodeClan graduation",date:new Date("3/6/2021"),icon:it,children:V.codeClanGraduation}),Object(C.jsx)(et,{title:"Showcase presentation",date:new Date("3/25/2021"),icon:"data:image/png;base64,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",children:V.showcasePresentation})]}),Object(C.jsx)(U,{title:".",rowSpan:1,columnSpan:2,children:Object(C.jsx)("img",{src:nt,alt:"graduation-pic",className:"timeline-cc-graduation-pic"})})]})},ot={TIMELINE:"/timeline",PUBLICATIONS:"/publications",EXPERIENCE:"/experience",CONTACT:"/contact",PROJECTS:"/projects"},rt=(i(54),i(55),function(t){var e=t.title,i=t.authorString,n=t.year,a=t.journal,s=t.tags;return Object(C.jsxs)("div",{className:"publication-container",children:[Object(C.jsx)(X,{extraClasses:"publications-year big-font-size",children:n}),Object(C.jsx)(_,{content:e,extraClasses:"publications-title"}),Object(C.jsx)(_,{content:i,extraClasses:"publications-authors"}),Object(C.jsx)(_,{content:a,extraClasses:"publications-journal"}),Object(C.jsx)("div",{className:"publications-tags",children:s})]})}),ct=(i(56),function(t){var e=t.title,i=t.link;return Object(C.jsx)("div",{className:"tag-bubble-container",children:Object(C.jsx)("a",{className:"tag-bubble",target:"_blank",href:i,children:e})})}),ht=function(){var t=R(!1)[0].visitorToken;return Object(n.useEffect)((function(){z(t,H)}),[]),Object(C.jsxs)(U,{title:"Publications",rowSpan:1,columnSpan:4,children:[Object(C.jsx)(rt,{title:"Algorithms of adaptation in inductive inference.",authorString:"JP. Franken, N. C. Theodoropoulos, N. R. Bramley",year:"2021",journal:"Submited",tags:[Object(C.jsx)(ct,{title:"Experiment 1",link:"https://zendo-cond-3.herokuapp.com/signup"}),Object(C.jsx)(ct,{title:"Repo",link:"https://github.com/NikTheGeek1/zendo-cond-3"})]}),Object(C.jsx)(rt,{title:"Belief revision in a micro-social network: Modelling sensitivity to statistical dependencies in social learning.",authorString:"JP. Franken, N. C. Theodoropoulos, A. B. Moore, N. R. Bramley",year:"2020",journal:"Proceedings of the 42nd Annual Meeting of the Cognitive Science Society 2020",tags:[Object(C.jsx)(ct,{title:"Project",link:"https://cogsci.mindmodeling.org/2020/papers/0240/0240.pdf"}),Object(C.jsx)(ct,{title:"Repo",link:"https://github.com/NikTheGeek1/belief-revision-experiment-2"})]}),Object(C.jsx)(rt,{title:"External coding and salience in the tactile Simon Effect.",authorString:"J. Medina, N. Theodoropoulos, Y. Liu, P.G. Reyesa, E. Gherri",year:"2019",journal:"Acta Psychologica Vol. 198",tags:Object(C.jsx)(ct,{title:"Project",link:"https://doi.org/10.1016/j.actpsy.2019.102874"})})]})},lt=(i(57),function(){return Object(C.jsxs)(r.Switch,{children:[Object(C.jsx)(r.Route,{exact:!0,path:"/",children:Object(C.jsx)(r.Redirect,{to:ot.TIMELINE})}),Object(C.jsx)(r.Route,{path:ot.TIMELINE,children:Object(C.jsx)("section",{className:"profile-timeline-container",children:Object(C.jsx)(st,{})},(new Date).getTime())}),Object(C.jsx)(r.Route,{path:ot.PUBLICATIONS,children:Object(C.jsx)("section",{className:"profile-publications-container",children:Object(C.jsx)(ht,{})})}),Object(C.jsx)(r.Route,{path:ot.EXPERIENCE,children:Object(C.jsx)("section",{className:"profile-experience-container"})}),Object(C.jsx)(r.Route,{path:ot.PROJECTS,children:Object(C.jsx)("section",{className:"profile-projects-container"})}),Object(C.jsx)(r.Route,{path:ot.CONTACT,children:Object(C.jsx)("section",{className:"profile-contact-container"})})]})}),dt=(i(63),i.p+"static/media/profile.f3dd0666.jpeg"),ut=i(19),mt=function(){var t=Object(ut.useHistory)(),e=Object(n.useState)(""),i=Object(c.a)(e,2)[1],a=["Timeline","Publications","Experience","Projects","Contact"].map((function(e){var n=t.location.pathname.slice(1)===e.toLowerCase()?"profile-header-item-active":"profile-header-item-inactive";return Object(C.jsx)("li",{className:"profile-header-item ".concat(n),onClick:function(n){return function(e){var n=ot[e.toUpperCase()];t.push(n),i(e)}(e)},children:e},e)}));return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"profile-header-profile-img-container",children:Object(C.jsx)("div",{className:"profile-header-profile-img-inner-container",children:Object(C.jsx)("img",{className:"profile-img",src:dt})})}),Object(C.jsx)("div",{className:"profile-header-my-name",children:Object(C.jsx)("div",{className:"profile-header-my-name-inner-container",children:Object(C.jsx)("p",{children:"Nikos Theodoropoulos"})})}),Object(C.jsx)("ul",{className:"profile-inner-header-container",children:a})]})},gt=(i(64),function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"profile-transparent-background-container"}),Object(C.jsx)("div",{className:"profile-header-container",children:Object(C.jsx)(mt,{})}),Object(C.jsx)("div",{className:"profile-body-container",children:Object(C.jsx)(lt,{})})]})}),ft=function(){var t=Object(n.useState)(!1),e=Object(c.a)(t,2),i=e[0],a=e[1],s=Object(n.useState)(!1),o=Object(c.a)(s,2),r=o[0],h=o[1],l=Object(n.useState)("landing-page-main-before-animation"),d=Object(c.a)(l,2),u=d[0],m=d[1];Object(ut.useHistory)();Object(n.useEffect)((function(){if(i)var t=setTimeout((function(){h(!0),m("landing-page-main-after-animation"),clearTimeout(t)}),1500)}),[i]);var g={primaryHeading:"",secondaryHeading:""};return i&&(g.primaryHeading="primary-heading-exitting-animation",g.secondaryHeading="secondary-heading-exitting-animation"),Object(C.jsxs)("main",{className:"landing-page-main "+u,children:[Object(C.jsx)("div",{className:"canvas-container-landing-page",children:Object(C.jsx)(E,{setMonkeyClicked:a})}),r?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"gap gap1"}),Object(C.jsx)("section",{className:"profile-section",children:Object(C.jsx)(gt,{})}),Object(C.jsx)("div",{className:"gap gap2"})]}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"landing-page-title "+g.primaryHeading,children:Object(C.jsx)(N,{content:"Welcome to my"})}),Object(C.jsx)("div",{className:"landing-page-subtitle "+g.secondaryHeading,children:Object(C.jsx)(T,{content:"Personal space"})})]})]})},pt="VSC",yt=function(t){for(var e="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=i.length,a=0;a<t;a++)e+=i.charAt(Math.floor(Math.random()*n));return e};D();var jt=function(){var t=R(!1)[1];return Object(n.useEffect)((function(){var e,i;(e=localStorage.getItem(pt))?z(e,"Came back/refreshed"):(e=yt(10),i=e,localStorage.setItem(pt,i),function(t){fetch("https://www.cloudflare.com/cdn-cgi/trace").then((function(t){return t.text()})).then((function(e){var i=J(e);fetch(L+"".concat(t,".json"),{method:"POST",headers:{Application:"application/json","Content-Type":"application/json"},body:JSON.stringify(Object(F.a)(Object(F.a)({},i),{},{date:(new Date).toTimeString().slice(0,17)+" "+(new Date).toDateString().slice(0,17)}))}).then((function(t){return t}))}))}(e)),t(W,e)}),[]),Object(C.jsx)(r.BrowserRouter,{children:Object(C.jsx)(ft,{})})};o.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(jt,{})}),document.getElementById("root"))}]),[[65,1,2]]]);
//# sourceMappingURL=main.c38f192e.chunk.js.map