"use strict";(self.webpackChunkchickensoft_site=self.webpackChunkchickensoft_site||[]).push([[8024],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,g=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={title:"\u23f0 Beeping",image:"../header.jpg"},a=void 0,l={unversionedId:"logic_blocks/tutorial/beeping",id:"logic_blocks/tutorial/beeping",title:"\u23f0 Beeping",description:"It's finally time to make the last (and best) part of our timer: the beeping state!",source:"@site/docs/logic_blocks/05_tutorial/04_beeping.md",sourceDirName:"logic_blocks/05_tutorial",slug:"/logic_blocks/tutorial/beeping",permalink:"/docs/logic_blocks/tutorial/beeping",draft:!1,editUrl:"https://github.com/chickensoft-games/chickensoft_site/tree/main/docs/logic_blocks/05_tutorial/04_beeping.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u23f0 Beeping",image:"../header.jpg"},sidebar:"tutorialSidebar",previous:{title:"\u23f3 Countdown",permalink:"/docs/logic_blocks/tutorial/coundown"},next:{title:"\ud83e\uddea Testing",permalink:"/docs/logic_blocks/testing/"}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It's finally time to make the last (and best) part of our timer: the beeping state!"),(0,o.kt)("p",null,"Fortunately, this is really simple. We'll pretend that our timer is designed to be owned by something in the view layer of the application that can play sounds for us."),(0,o.kt)("p",null,"We'll simply create ",(0,o.kt)("a",{parentName:"p",href:"../basics/outputs"},"outputs")," when the beeping state is entered and exited that tell anything binding to the logic block to play or stop a sound. We also want to handle the ",(0,o.kt)("inlineCode",{parentName:"p"},"StartStopButtonPressed")," input to go back to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Idle")," state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public static class Output {\n  public readonly record struct PlayBeepingSound;\n  public readonly record struct StopBeepingSound;\n}\n\npublic record Beeping : PoweredOn, IGet<Input.StartStopButtonPressed> {\n  public Beeping() {\n    this.OnEnter(() => Output(new Output.PlayBeepingSound()));\n    this.OnExit(() => Output(new Output.StopBeepingSound()));\n  }\n\n  public Transition On(in Input.StartStopButtonPressed input) =>\n    To<Idle>();\n}\n")),(0,o.kt)("p",null,"Outputs are just objects that are sent to the logic block's bindings. They can be used to communicate with anything that is interested in the logic block without the logic block states' having to know about them directly."),(0,o.kt)("p",null,"We use the state's ",(0,o.kt)("inlineCode",{parentName:"p"},"this.OnEnter")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"this.OnExit")," extension methods to define callbacks that should be invoked whenever the state is entered and exited, respectively. These entrance and exit callbacks are different than attach and detach callbacks since they are only invoked if the relevant portions of the type hierarchy changes. For more on that, see the ",(0,o.kt)("a",{parentName:"p",href:"../why#-correct-hierarchical-state-lifecycles"},'"Correct Hierarchical State Lifecycles"')," section."),(0,o.kt)("p",null,"Finally, we're done!"),(0,o.kt)("p",null,"Now the only thing that remains is to ",(0,o.kt)("a",{parentName:"p",href:"../testing"},"write tests")," (and of course you love writing tests, or else you wouldn't have read several pages on state management with hierarchical state machines \ud83e\udd20)."))}u.isMDXComponent=!0}}]);