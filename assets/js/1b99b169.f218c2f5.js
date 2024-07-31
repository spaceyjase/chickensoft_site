"use strict";(self.webpackChunkchickensoft_site=self.webpackChunkchickensoft_site||[]).push([[6845],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),g=o,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||i;return t?n.createElement(m,a(a({ref:r},u),{},{components:t})):n.createElement(m,a({ref:r},u))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1451:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const i={title:"\u274c Errors",slug:"errors",image:"../header.jpg"},a=void 0,l={unversionedId:"logic_blocks/basics/errors",id:"logic_blocks/basics/errors",title:"\u274c Errors",description:"Logic blocks are designed to be error-tolerant by default to reduce crashes in production. When an error occurs in an input handler, the logic block catches it internally to avoid halting execution.",source:"@site/docs/logic_blocks/04_basics/04_errors.md",sourceDirName:"logic_blocks/04_basics",slug:"/logic_blocks/basics/errors",permalink:"/docs/logic_blocks/basics/errors",draft:!1,editUrl:"https://github.com/chickensoft-games/chickensoft_site/tree/main/docs/logic_blocks/04_basics/04_errors.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u274c Errors",slug:"errors",image:"../header.jpg"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udce4 Outputs",permalink:"/docs/logic_blocks/basics/outputs"},next:{title:"\ud83e\udea2 Bindings",permalink:"/docs/logic_blocks/basics/bindings"}},c={},s=[{value:"\ud83d\udea8 Customizing Error Handling",id:"-customizing-error-handling",level:2},{value:"\ud83d\udeab Adding Errors",id:"-adding-errors",level:2}],u={toc:s};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Logic blocks are designed to be error-tolerant by default to reduce crashes in production. When an error occurs in an input handler, the logic block catches it internally to avoid halting execution."),(0,o.kt)("p",null,"You can easily override the default error handling behavior."),(0,o.kt)("h2",{id:"-customizing-error-handling"},"\ud83d\udea8 Customizing Error Handling"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"[Meta, LogicBlock(typeof(State))]\npublic partial class MyLogicBlock : LogicBlock<MyLogicBlock.State> {\n  ...\n\n  protected override void HandleError(Exception e) {\n    // Make this logic block crash on error.\n    throw e;\n  }\n}\n")),(0,o.kt)("h2",{id:"-adding-errors"},"\ud83d\udeab Adding Errors"),(0,o.kt)("p",null,"You have two options for engaging the error handling mechanism:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Throw an exception from an input handler. The ",(0,o.kt)("inlineCode",{parentName:"p"},"HandleError")," method will be called, which does nothing by default unless you override it.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Call ",(0,o.kt)("inlineCode",{parentName:"p"},"AddError(Exception e)")," from your state. This method also invokes ",(0,o.kt)("inlineCode",{parentName:"p"},"HandleError")," and works well for non-critical errors if you don't automatically throw in the ",(0,o.kt)("inlineCode",{parentName:"p"},"HandleError")," method."))),(0,o.kt)("p",null,"How you handle errors is up to you."))}d.isMDXComponent=!0}}]);