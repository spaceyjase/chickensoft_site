"use strict";(self.webpackChunkchickensoft_site=self.webpackChunkchickensoft_site||[]).push([[4331],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),g=c(a),b=n,u=g["".concat(s,".").concat(b)]||g[b]||d[b]||o;return a?i.createElement(u,l(l({ref:t},p),{},{components:a})):i.createElement(u,l({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=g;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var c=2;c<o;c++)l[c]=a[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6692:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=a(7462),n=(a(7294),a(3905));const o={title:"\ud83d\udcbe Serialization",image:"./header.jpg"},l=void 0,r={unversionedId:"logic_blocks/serialization",id:"logic_blocks/serialization",title:"\ud83d\udcbe Serialization",description:"LogicBlocks can be serialized by using the Chickensoft [Introspection] and [Serialization] packages together.",source:"@site/docs/logic_blocks/07_serialization.md",sourceDirName:"logic_blocks",slug:"/logic_blocks/serialization",permalink:"/docs/logic_blocks/serialization",draft:!1,editUrl:"https://github.com/chickensoft-games/chickensoft_site/tree/main/docs/logic_blocks/07_serialization.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"\ud83d\udcbe Serialization",image:"./header.jpg"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udea2 Testing Bindings",permalink:"/docs/logic_blocks/testing/testing_bindings"},next:{title:"\ud83d\udd2e SuperNodes",permalink:"/docs/super_nodes/"}},s={image:a(1266).Z},c=[{value:"\ud83d\udcbd Defining a Serializable Logic Block",id:"-defining-a-serializable-logic-block",level:3},{value:"\ud83e\udd10 Serializing a Logic Block",id:"-serializing-a-logic-block",level:3},{value:"\ud83e\uddfd Absorbing a Logic Block",id:"-absorbing-a-logic-block",level:3},{value:"\ud83e\uddd1\u200d\ud83c\udfeb Saving Blackboard Values",id:"-saving-blackboard-values",level:3},{value:"\u23f3 Versioning",id:"-versioning",level:3},{value:"\ud83d\ude36\u200d\ud83c\udf2b\ufe0f Testing Abstract Serializable States",id:"\ufe0f-testing-abstract-serializable-states",level:3}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"LogicBlocks can be serialized by using the Chickensoft ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/Introspection"},"Introspection")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/Serialization"},"Serialization")," packages together."),(0,n.kt)("p",null,"Like LogicBlocks, the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/Serialization"},"Serialization")," package builds off the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/Introspection"},"Introspection")," package to provide a simple way of serializing and deserializing polymorphic objects, as well as support for versioning."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The serialization system is able to be used alongside System.Text.Json, since it uses the metadata generated by the Introspection generator to describe the types and information needed System.Text.Json to serialize an object \u2014 it's essentially an alternative (but compatible) generator for System.Text.Json that can be mixed and matched with other System.Text.Json generated contexts."),(0,n.kt)("p",{parentName:"admonition"},"Using generated metadata allows the serialization system to work for ahead-of-time (AOT) platforms like iOS.")),(0,n.kt)("h3",{id:"-defining-a-serializable-logic-block"},"\ud83d\udcbd Defining a Serializable Logic Block"),(0,n.kt)("p",null,"To make a logic block serializable, it needs to be an introspective ",(0,n.kt)("em",{parentName:"p"},"and")," identifiable type, as well as have a parameterless constructor."),(0,n.kt)("p",null,"We've been using the ",(0,n.kt)("inlineCode",{parentName:"p"},"[Meta]")," attribute throughout the documentation to make our logic blocks introspective. LogicBlocks uses the generated metadata to automatically preallocate states when our logic block is constructed (if it's an introspective type)."),(0,n.kt)("p",null,"Now, we simply need to add the ",(0,n.kt)("inlineCode",{parentName:"p"},"[Id]")," attribute to the logic block itself, as well as make each state introspective. Additionally, non-abstract states need to be given an ",(0,n.kt)("inlineCode",{parentName:"p"},"[Id]"),", too."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Serializable type ",(0,n.kt)("inlineCode",{parentName:"p"},"[Id]"),"'s need to be globally unique across all serializable types used in your project.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'using Chickensoft.Introspection;\n\npublic interface ISerializableLogicBlock : ILogicBlock<SerializableLogicBlock.State>;\n\n[Meta, LogicBlock(typeof(State), Diagram = true)]\npublic partial class SerializableLogicBlock :\nLogicBlock<SerializableLogicBlock.State>, ISerializableLogicBlock {\n  public override Transition GetInitialState() => To<State.PoweredOff>();\n\n  [Meta]\n  public abstract partial record State : StateLogic<State> {\n    [Meta, Id("serializable_logic_state_off")]\n    public partial record PoweredOff : State;\n\n    [Meta, Id("serializable_logic_state_on")]\n    public partial record PoweredOn : State;\n  }\n}\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"[Id]")," attribute is used as the ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/standard/serialization/system-text-json/polymorphism?"},"type discriminator")," when reading and writing json data. By giving it an explicit string, you ensure your serialization system remains stable, even if the class name or location changes."),(0,n.kt)("h3",{id:"-serializing-a-logic-block"},"\ud83e\udd10 Serializing a Logic Block"),(0,n.kt)("p",null,"Once you have a serializable logic block, it's easy to turn it into json (and get it back again)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'    var options = new JsonSerializerOptions {\n      WriteIndented = true,\n      // Use the type resolver and converter from the\n      // Chickensoft.Serialization package. You can combine these with other\n      // type resolvers and converters.\n      TypeInfoResolver = new SerializableTypeResolver(),\n      Converters = { new SerializableTypeConverter() }\n    };\n\n    var logic = new SerializableLogicBlock();\n\n    var json = JsonSerializer.Serialize(logic, options);\n\n    /* Produces\n      """\n      {\n        "$type": "serializable_logic",\n        "$v": 1,\n        "state": {\n          "$type": "serializable_logic_state_off",\n          "$v": 1\n        },\n        "blackboard": {\n          "$type": "blackboard",\n          "$v": 1,\n          "values": {}\n        }\n      }\n      """\n    */\n')),(0,n.kt)("p",null,"Likewise, you can deserialize a logic block from json."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"// using the same serialization options shown above\n\nvar logic = JsonSerializer.Deserialize<SerializableLogicBlock>(\n  json, options\n);\n")),(0,n.kt)("h3",{id:"-absorbing-a-logic-block"},"\ud83e\uddfd Absorbing a Logic Block"),(0,n.kt)("p",null,"When deserializing a logic block, it can be helpful to copy the state and blackboard values from a deserialized logic block into an already existing logic block. Copying the state of a deserialized logic block into an existing logic block allows you to preserve any bindings already established."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"var logic = JsonSerializer.Deserialize<SerializableLogicBlock>(\n  json, options\n);\n\n// Copy the state and blackboard of the deserialized logic block into an\n// existing logic block.\nexistingLogicBlock.RestoreFrom(logic);\n\n// Now our existing logic block is in the same state and has the same blackboard\n// values as the logic block we deserialized, allowing us to continue where we\n// left off.\n")),(0,n.kt)("h3",{id:"-saving-blackboard-values"},"\ud83e\uddd1\u200d\ud83c\udfeb Saving Blackboard Values"),(0,n.kt)("p",null,"Since most blackboard values represent runtime dependencies, blackboard values are not persisted by default when serializing a logic block."),(0,n.kt)("p",null,"You can register blackboard values that ",(0,n.kt)("em",{parentName:"p"},"will")," get serialized. This is done by using the blackboard's ",(0,n.kt)("inlineCode",{parentName:"p"},"Save()")," method. Since every logic block implements the blackboard interface, we can do so easily after creating the logic block."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'[Meta, Id("my_related_data")]\npublic partial record MyRelatedData {\n  public required string Name { get; init; }\n  public string? Description { get; init; }\n}\n\nvar logic = new SerializableLogicBlock();\n\n// Not persisted \u2014 just adding a runtime dependency.\nlogic.Set(new MyRelatedService());\n\n// Will be persisted if we serialize the logic block.\n// Types saved this way must be introspective, identifiable types, too.\nlogic.Save(() => new MyRelatedData());\n')),(0,n.kt)("p",null,"By requiring you to pass in a factory closure, the serialization system ensures the value is only created when needed \u2014 allowing ",(0,n.kt)("inlineCode",{parentName:"p"},"RestoreFrom()")," to provide a value instead if you call it before using an existing logic block."),(0,n.kt)("h3",{id:"-versioning"},"\u23f3 Versioning"),(0,n.kt)("p",null,"Logic blocks supports ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/Serialization?tab=readme-ov-file#-versioning"},"versioning")," states."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'[Meta, Id("serializable_logic_versioned_state")]\npublic abstract partial record VersionedState;\n\n[Meta, Version(1)]\npublic partial record Version1 : VersionedState;\n\n[Meta, Version(2)]\npublic partial record Version2 : VersionedState;\n')),(0,n.kt)("p",null,"This results in the following state hierarchy:"),(0,n.kt)("mermaid",{value:'stateDiagram-v2\nstate "SerializableLogicBlock State" as Chickensoft_LogicBlocks_Tutorial_SerializableLogicBlock_State {\n  state "PoweredOff" as Chickensoft_LogicBlocks_Tutorial_SerializableLogicBlock_State_PoweredOff\n  state "PoweredOn" as Chickensoft_LogicBlocks_Tutorial_SerializableLogicBlock_State_PoweredOn\n  state "VersionedState" as Chickensoft_LogicBlocks_Tutorial_SerializableLogicBlock_State_VersionedState {\n    state "Version1" as Chickensoft_LogicBlocks_Tutorial_SerializableLogicBlock_State_Version1\n    state "Version2" as Chickensoft_LogicBlocks_Tutorial_SerializableLogicBlock_State_Version2\n  }\n}\n[*] --\x3e Chickensoft_LogicBlocks_Tutorial_SerializableLogicBlock_State_PoweredOff'}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"[Id]")," is moved to an abstract base type and the ",(0,n.kt)("inlineCode",{parentName:"p"},"[Version]")," attribute is applied to the derived types."),(0,n.kt)("p",{parentName:"admonition"},"You can shuffle around type hierarchies to match your versioning logic as long as the id's and shape of the types remain stable across versions.")),(0,n.kt)("h3",{id:"\ufe0f-testing-abstract-serializable-states"},"\ud83d\ude36\u200d\ud83c\udf2b\ufe0f Testing Abstract Serializable States"),(0,n.kt)("p",null,"When you give a logic block an ",(0,n.kt)("inlineCode",{parentName:"p"},"[Id]")," to make it serializable, it suddenly requires that every state be an introspective type so it can be pre-allocated and serialized correctly."),(0,n.kt)("p",null,"When testing abstract logic block states, it is common to create a concrete test implementation of the state for testing purposes:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public class MyTest {\n  public class SomeState : SerializableLogicBlock.SomeAbstractState;\n\n  [Fact]\n  public void Initializes() => new TestState().ShouldNotBeNull();\n}\n")),(0,n.kt)("p",null,"Serializable logic blocks, however, require that ",(0,n.kt)("inlineCode",{parentName:"p"},"TestState")," be introspective and identifiable (since it is a concrete type). Otherwise, you'd get an error when creating the logic block."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'[Meta, Id("serializable_logic_test_some_state")]\npublic partial class SomeState : SerializableLogicBlock.SomeAbstractState;\n')),(0,n.kt)("p",null,"You can simply add the ",(0,n.kt)("inlineCode",{parentName:"p"},"[TestState]")," attribute to the state to prevent logic blocks from trying to preallocate it and verify that it is serializable."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'[TestState, Meta, Id("serializable_logic_test_some_state")]\npublic partial class SomeState : SerializableLogicBlock.SomeAbstractState;\n')),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Be sure to read the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/Serialization"},"Serialization")," package's readme for additional tips on making serializable types."))}d.isMDXComponent=!0},1266:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/header-3b16a21d739396967ca870ae00925c8e.jpg"}}]);