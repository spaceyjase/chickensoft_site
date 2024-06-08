"use strict";(self.webpackChunkchickensoft_site=self.webpackChunkchickensoft_site||[]).push([[4442],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),g=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=g(e.components);return i.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=g(t),d=o,k=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return t?i.createElement(k,r(r({ref:n},s),{},{components:t})):i.createElement(k,r({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var g=2;g<a;g++)r[g]=t[g];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9113:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>g});var i=t(7462),o=(t(7294),t(3905));const a={title:"\ud83e\udea2 Testing Bindings",image:"../header.jpg"},r=void 0,c={unversionedId:"logic_blocks/testing/testing_bindings",id:"logic_blocks/testing/testing_bindings",title:"\ud83e\udea2 Testing Bindings",description:"LogicBlocks allows you to create a fake binding for testing purposes.",source:"@site/docs/logic_blocks/06_testing/03_testing_bindings.md",sourceDirName:"logic_blocks/06_testing",slug:"/logic_blocks/testing/testing_bindings",permalink:"/docs/logic_blocks/testing/testing_bindings",draft:!1,editUrl:"https://github.com/chickensoft-games/chickensoft_site/tree/main/docs/logic_blocks/06_testing/03_testing_bindings.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\ud83e\udea2 Testing Bindings",image:"../header.jpg"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd04 Testing States",permalink:"/docs/logic_blocks/testing/testing_states"},next:{title:"\ud83d\udcbe Serialization",permalink:"/docs/logic_blocks/serialization"}},l={},g=[{value:"\ud83e\udd78 Creating Fake Bindings",id:"-creating-fake-bindings",level:2},{value:"\ud83d\udce5 Input Simulation",id:"-input-simulation",level:3},{value:"\ud83d\udce4 Output Simulation",id:"-output-simulation",level:3},{value:"\ud83d\udea8 Error Simulation",id:"-error-simulation",level:3},{value:"\ud83d\udd04 State Change Simulation",id:"-state-change-simulation",level:3}],s={toc:g};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"LogicBlocks allows you to create a fake binding for testing purposes."),(0,o.kt)("p",null,"Make sure to create an interface for each logic block you want to test so that your logic block can be mocked."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public interface IMyLogicBlock : ILogicBlock<MyLogicBlock.State> { }\n\n[Meta, LogicBlock(typeof(State))]\npublic partial class MyLogicBlock : LogicBlock<MyLogicBlock.State>, IMyLogicBlock {\n  public record State : StateLogic<State> { ... }\n}\n")),(0,o.kt)("h2",{id:"-creating-fake-bindings"},"\ud83e\udd78 Creating Fake Bindings"),(0,o.kt)("p",null,"Fake bindings allow you to simulate adding inputs, producing outputs, adding errors, and making state changes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"var logic = new Mock<MyLogicBlock>();\n\n// CreateFakeBinding() is actually a static method on the logic block.\nvar binding = MyLogicBlock.CreateFakeBinding();\n\n// Make our mock logic block return the fake binding.\nlogic.Setup(logic => logic.Bind()).Returns(binding);\n")),(0,o.kt)("p",null,"Then, you can use the binding to simulate the logic block's behavior."),(0,o.kt)("h3",{id:"-input-simulation"},"\ud83d\udce5 Input Simulation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"var logic = new Mock<IMyLogicBlock>();\n\nvar binding = MyLogicBlock.CreateFakeBinding();\n\nlogic.Setup(logic => logic.Bind()).Returns(binding);\n\n// Simulate an input with our fake binding.\nbinding.Input(new MyLogicBlock.Input.SomeInput());\n")),(0,o.kt)("h3",{id:"-output-simulation"},"\ud83d\udce4 Output Simulation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"var logic = new Mock<IMyLogicBlock>();\n\nvar binding = MyLogicBlock.CreateFakeBinding();\n\nlogic.Setup(logic => logic.Bind()).Returns(binding);\n\n// Simulate an input with our fake binding.\nbinding.Output(new MyLogicBlock.Output.SomeOutput());\n")),(0,o.kt)("h3",{id:"-error-simulation"},"\ud83d\udea8 Error Simulation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"var logic = new Mock<IMyLogicBlock>();\n\nvar binding = MyLogicBlock.CreateFakeBinding();\n\nlogic.Setup(logic => logic.Bind()).Returns(binding);\n\n// Simulate an error with our fake binding.\nbinding.AddError(new InvalidOperationException());\n")),(0,o.kt)("h3",{id:"-state-change-simulation"},"\ud83d\udd04 State Change Simulation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"var logic = new Mock<IMyLogicBlock>();\n\nvar binding = MyLogicBlock.CreateFakeBinding();\n\nlogic.Setup(logic => logic.Bind()).Returns(binding);\n\n// Simulate a state change with our fake binding.\nbinding.SetState(new MyLogicBlock.State.SomeOtherState());\n")))}u.isMDXComponent=!0}}]);