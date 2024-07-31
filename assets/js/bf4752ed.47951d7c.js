"use strict";(self.webpackChunkchickensoft_site=self.webpackChunkchickensoft_site||[]).push([[8995],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),k=r,f=u["".concat(l,".").concat(k)]||u[k]||g[k]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={title:"\ud83d\udce6 Installation",image:"./header.jpg"},i=void 0,c={unversionedId:"logic_blocks/installation",id:"logic_blocks/installation",title:"\ud83d\udce6 Installation",description:"\ud83d\udce5 Installing LogicBlocks",source:"@site/docs/logic_blocks/02_installation.md",sourceDirName:"logic_blocks",slug:"/logic_blocks/installation",permalink:"/docs/logic_blocks/installation",draft:!1,editUrl:"https://github.com/chickensoft-games/chickensoft_site/tree/main/docs/logic_blocks/02_installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\ud83d\udce6 Installation",image:"./header.jpg"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd28 Why Logic Blocks?",permalink:"/docs/logic_blocks/why"},next:{title:"\ud83d\ude80 Quick Start",permalink:"/docs/logic_blocks/quick_start"}},l={image:n(1266).Z},s=[{value:"\ud83d\udce5 Installing LogicBlocks",id:"-installing-logicblocks",level:2}],p={toc:s};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"-installing-logicblocks"},"\ud83d\udce5 Installing LogicBlocks"),(0,r.kt)("p",null,"LogicBlocks and its diagram generator are available as C# packages on ",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages?q=logicblocks"},"nuget"),"."),(0,r.kt)("p",null,"You'll also want to install the Chickensoft Introspection generator. While optional, it allows LogicBlocks to identify and preallocate states for you so that you don't have to add each state manually."),(0,r.kt)("p",null,"Find the latest version number of LogicBlocks, its diagram generator, and the introspection generator on nuget: ",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Chickensoft.LogicBlocks"},"Chickensoft.LogicBlocks"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Chickensoft.LogicBlocks.DiagramGenerator#versions-body-tab"},"Chickensoft.LogicBlocks.DiagramGenerator"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Chickensoft.Introspection.Generator"},"Chickensoft.Introspection.Generator"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<PackageReference Include="Chickensoft.LogicBlocks" Version="#.#.#" />\n<PackageReference Include="Chickensoft.LogicBlocks.DiagramGenerator" Version="#.#.#" PrivateAssets="all" OutputItemType="analyzer" />\n<PackageReference Include="Chickensoft.Introspection.Generator" Version="#.#.#" PrivateAssets="all" OutputItemType="analyzer" />\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Don't forget to include the ",(0,r.kt)("inlineCode",{parentName:"p"},'PrivateAssets="all"')," and ",(0,r.kt)("inlineCode",{parentName:"p"},'OutputItemType="analyzer"')," attributes on generator package references.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Always use the same version of the LogicBlocks diagram generator that you use for LogicBlocks, since they are updated together.")))}g.isMDXComponent=!0},1266:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/header-3b16a21d739396967ca870ae00925c8e.jpg"}}]);