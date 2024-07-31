"use strict";(self.webpackChunkchickensoft_site=self.webpackChunkchickensoft_site||[]).push([[6303],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=l(n),d=o,b=g["".concat(s,".").concat(d)]||g[d]||p[d]||a;return n?i.createElement(b,r(r({ref:t},u),{},{components:n})):i.createElement(b,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var l=2;l<a;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=n(7462),o=(n(7294),n(3905));const a={title:"\ud83d\ude80 Quick Start",image:"./header.jpg"},r=void 0,c={unversionedId:"logic_blocks/quick_start",id:"logic_blocks/quick_start",title:"\ud83d\ude80 Quick Start",description:"\ud83d\udca1 Creating a Logic Block",source:"@site/docs/logic_blocks/03_quick_start.md",sourceDirName:"logic_blocks",slug:"/logic_blocks/quick_start",permalink:"/docs/logic_blocks/quick_start",draft:!1,editUrl:"https://github.com/chickensoft-games/chickensoft_site/tree/main/docs/logic_blocks/03_quick_start.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\ud83d\ude80 Quick Start",image:"./header.jpg"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udce6 Installation",permalink:"/docs/logic_blocks/installation"},next:{title:"\ud83e\uddee Basics",permalink:"/docs/logic_blocks/basics/"}},s={image:n(1266).Z},l=[{value:"\ud83d\udca1 Creating a Logic Block",id:"-creating-a-logic-block",level:2},{value:"\ud83d\udd0c Using a Logic Block",id:"-using-a-logic-block",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"-creating-a-logic-block"},"\ud83d\udca1 Creating a Logic Block"),(0,o.kt)("p",null,"A logic block is simply a class that extends ",(0,o.kt)("inlineCode",{parentName:"p"},"LogicBlock"),". Logic blocks receive inputs, maintain a single state value, and produce outputs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"using Chickensoft.Introspection;\n\n[Meta, LogicBlock(typeof(State), Diagram = true)]\npublic partial class LightSwitch : LogicBlock<LightSwitch.State> {\n  // Define your initial state here.\n  public override Transition GetInitialState() => To<State.PoweredOff>();\n\n  // By convention, inputs are defined in a static nested class called Input.\n  public static class Input {\n    public readonly record struct Toggle;\n  }\n\n  // By convention, outputs are defined in a static nested class called Output.\n  public static class Output {\n    public readonly record struct StatusChanged(bool IsOn);\n  }\n\n  // To reduce unnecessary heap allocations, inputs and outputs should be\n  // readonly record structs.\n\n  // By convention, the base state type is nested inside the logic block. This\n  // helps the logic block diagram generator know where to search for state\n  // types.\n  public abstract record State : StateLogic<State> {\n    // Substates are sometimes nested inside their parent states to help\n    // organize the code.\n\n    // On state.\n    public record PoweredOn : State, IGet<Input.Toggle> {\n      public PoweredOn() {\n        // Announce that we are now on.\n        this.OnEnter(() => Output(new Output.StatusChanged(IsOn: true)));\n      }\n\n      public Transition On(in Input.Toggle input) => To<PoweredOff>();\n    }\n\n    // Off state.\n    public record PoweredOff : State, IGet<Input.Toggle> {\n      public PoweredOff() {\n        // Announce that we are now off.\n        this.OnEnter(() => Output(new Output.StatusChanged(IsOn: false)));\n      }\n\n      public Transition On(in Input.Toggle input) => To<PoweredOn>();\n    }\n  }\n}\n")),(0,o.kt)("p",null,"To make a logic block, you simply extend the ",(0,o.kt)("inlineCode",{parentName:"p"},"LogicBlock<TState>")," class, override the ",(0,o.kt)("inlineCode",{parentName:"p"},"GetInitialState()")," method, and add the ",(0,o.kt)("inlineCode",{parentName:"p"},"[LogicBlock]")," attribute to your class with the type of your state."),(0,o.kt)("h2",{id:"-using-a-logic-block"},"\ud83d\udd0c Using a Logic Block"),(0,o.kt)("p",null,"LogicBlocks includes a simple binding system to enable you to write declarative code, even in imperative environments like a game engine. Bindings allow you to monitor the inputs a state machine receives and the outputs it produces, in addition to its state changes and any exceptions that occur."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Start the logic block to force the initial state to be active.\n//\n// This is optional: you can also start a logic block by just adding an\n// input to it or reading its state.\nlogic.Start();\n\n// Add an input to turn our light switch on.\nlogic.Input(new LightSwitch.Input.Toggle());\n\n// The logic block\'s value represents the current state.\nvar state = logic.Value; // PoweredOn\n\n// Bindings allow you to observe the logic block easily.\nusing var binding = logic.Bind();\n\n// Monitor an output:\nbinding.Handle((in LightSwitch.Output.StatusChanged output) =>\n  Console.WriteLine(\n    $"Status changed to {(output.IsOn ? "on" : "off")}"\n  )\n);\n\n// Can also use bindings to monitor inputs, state changes, and exceptions.\n//\n// In general, prefer monitoring outputs over state changes for more\n// flexible code.\n\n// Monitor an input:\nbinding.Watch((in LightSwitch.Input.Toggle input) =>\n  Console.WriteLine("Toggled!")\n);\n\n// Monitor a specific type of state:\nbinding.When((LightSwitch.State.PoweredOn _) =>\n  Console.WriteLine("Powered on!")\n);\n\n// Monitor all exceptions:\nbinding.Catch((Exception e) => Console.WriteLine(e.Message));\n\n// Monitor specific types of exceptions:\nbinding.Catch((InvalidOperationException e) =>\n  Console.WriteLine(e.Message)\n);\n')))}p.isMDXComponent=!0},1266:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/header-3b16a21d739396967ca870ae00925c8e.jpg"}}]);