"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[224],{5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),i=n(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),i=n(7294),r=n(6010),o=n(2389),s=n(7392),l=n(7094),m=n(2466);const c="tabList__CuJ",d="tabItem_LNqP";function u(e){var t;const{lazy:n,block:o,defaultValue:u,values:h,groupId:p,className:k}=e,g=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=h??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,s.l)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===u?u:u??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==b&&!v.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:x}=(0,l.U)(),[q,D]=(0,i.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,m.o5)();if(null!=p){const e=y[p];null!=e&&e!==q&&v.some((t=>t.value===e))&&D(e)}const _=e=>{const t=e.currentTarget,n=w.indexOf(t),a=v[n].value;a!==q&&(T(t),D(a),null!=p&&x(p,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":_(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},k)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:q===t?0:-1,"aria-selected":q===t,key:t,ref:e=>w.push(e),onKeyDown:E,onClick:_},o,{className:(0,r.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":q===t})}),n??t)}))),n?(0,i.cloneElement)(g.filter((e=>e.props.value===q))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==q})))))}function h(e){const t=(0,o.Z)();return i.createElement(u,(0,a.Z)({key:String(t)},e))}},9262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(7462),i=(n(7294),n(3905)),r=n(6758),o=n(5488),s=n(5162);const l={},m="Diagram Examples",c={unversionedId:"diagrams",id:"diagrams",title:"Diagram Examples",description:"Sequence Diagram",source:"@site/docs/diagrams.md",sourceDirName:".",slug:"/diagrams",permalink:"/diagrams",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/diagrams.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/tutorial-extras/translate-your-site"}},d={},u=[{value:"Sequence Diagram",id:"sequence-diagram",level:2},{value:"Sequence Diagram (forest theme directive)",id:"sequence-diagram-forest-theme-directive",level:2},{value:"Gantt Chart",id:"gantt-chart",level:2},{value:"Flow Chart",id:"flow-chart",level:2},{value:"Class Diagram",id:"class-diagram",level:2},{value:"State Diagram",id:"state-diagram",level:2},{value:"Entity Relationship Diagram",id:"entity-relationship-diagram",level:2},{value:"User Journey",id:"user-journey",level:2},{value:"Pie Chart",id:"pie-chart",level:2},{value:"Requirement Diagram",id:"requirement-diagram",level:2},{value:"Gitgraph (Git) Diagram",id:"gitgraph-git-diagram",level:2},{value:"Mermaid in tabs",id:"mermaid-in-tabs",level:2}],h={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"diagram-examples"},"Diagram Examples"),(0,i.kt)("h2",{id:"sequence-diagram"},"Sequence Diagram"),(0,i.kt)(r.G,{chart:"sequenceDiagram\n    participant Alice\n    participant Bob\n    Alice->>John: Hello John, how are you?\n    loop Health check\n        John->>John: Fight against hypochondria\n    end\n    Note right of John: Rational thoughts <br/>prevail!\n    John--\x3e>Alice: Great!\n    John->>Bob: How about you?\n    Bob--\x3e>John: Jolly good!",mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"sequence-diagram-forest-theme-directive"},"Sequence Diagram (forest theme directive)"),(0,i.kt)("p",null,"It is possible to override default config locally with Mermaid text directives such as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'%%{init: { "theme": "forest" } }%%\n')),(0,i.kt)(r.G,{chart:'%%{init: { "theme": "forest" } }%%\n\nsequenceDiagram\n    participant Alice\n    participant Bob\n    Alice->>John: Hello John, how are you?\n    loop Health check\n        John->>John: Fight against hypochondria\n    end\n    Note right of John: Rational thoughts <br/>prevail!\n    John--\x3e>Alice: Great!\n    John->>Bob: How about you?\n    Bob--\x3e>John: Jolly good!',mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"gantt-chart"},"Gantt Chart"),(0,i.kt)(r.G,{chart:"gantt\ndateFormat  YYYY-MM-DD\ntitle Adding GANTT diagram to mermaid\nexcludes weekdays 2014-01-10\n\nsection A section\nCompleted task            :done,    des1, 2014-01-06,2014-01-08\nActive task               :active,  des2, 2014-01-09, 3d\nFuture task               :         des3, after des2, 5d\nFuture task2               :         des4, after des3, 5d",mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"flow-chart"},"Flow Chart"),(0,i.kt)(r.G,{chart:"flowchart TD\n    A[Start] --\x3e B{Is it?}\n    B --\x3e|Yes| C[OK]\n    C --\x3e D[Rethink]\n    D --\x3e B\n    B ----\x3e|No| E[End]",mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"class-diagram"},"Class Diagram"),(0,i.kt)(r.G,{chart:" classDiagram\n      Animal <|-- Duck\n      Animal <|-- Fish\n      Animal <|-- Zebra\n      Animal : +int age\n      Animal : +String gender\n      Animal: +isMammal()\n      Animal: +mate()\n      class Duck{\n          +String beakColor\n          +swim()\n          +quack()\n      }\n      class Fish{\n          -int sizeInFeet\n          -canEat()\n      }\n      class Zebra{\n          +bool is_wild\n          +run()\n      }",mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"state-diagram"},"State Diagram"),(0,i.kt)(r.G,{chart:"stateDiagram-v2\n    [*] --\x3e Active\n\n    state Active {\n        [*] --\x3e NumLockOff\n        NumLockOff --\x3e NumLockOn : EvNumLockPressed\n        NumLockOn --\x3e NumLockOff : EvNumLockPressed\n        --\n        [*] --\x3e CapsLockOff\n        CapsLockOff --\x3e CapsLockOn : EvCapsLockPressed\n        CapsLockOn --\x3e CapsLockOff : EvCapsLockPressed\n        --\n        [*] --\x3e ScrollLockOff\n        ScrollLockOff --\x3e ScrollLockOn : EvScrollLockPressed\n        ScrollLockOn --\x3e ScrollLockOff : EvScrollLockPressed\n    }",mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"entity-relationship-diagram"},"Entity Relationship Diagram"),(0,i.kt)(r.G,{chart:"erDiagram\n    CAR ||--o{ NAMED-DRIVER : allows\n    CAR {\n        string registrationNumber\n        string make\n        string model\n    }\n    PERSON ||--o{ NAMED-DRIVER : is\n    PERSON {\n        string firstName\n        string lastName\n        int age\n    }",mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"user-journey"},"User Journey"),(0,i.kt)(r.G,{chart:"journey\n    title My working day\n    section Go to work\n      Make tea: 5: Me\n      Go upstairs: 3: Me\n      Do work: 1: Me, Cat\n    section Go home\n      Go downstairs: 5: Me\n      Sit down: 5: Me",mdxType:"Mermaid"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If there's too much space above it's due to a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mermaid-js/mermaid/issues/3501"},"Mermaid bug"))),(0,i.kt)("h2",{id:"pie-chart"},"Pie Chart"),(0,i.kt)(r.G,{chart:'pie showData\n    title Key elements in Product X\n    "Calcium" : 42.96\n    "Potassium" : 50.05\n    "Magnesium" : 10.01\n    "Iron" :  5',mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"requirement-diagram"},"Requirement Diagram"),(0,i.kt)(r.G,{chart:'    requirementDiagram\n\n    requirement test_req {\n    id: 1\n    text: the test text.\n    risk: high\n    verifymethod: test\n    }\n\n    functionalRequirement test_req2 {\n    id: 1.1\n    text: the second test text.\n    risk: low\n    verifymethod: inspection\n    }\n\n    performanceRequirement test_req3 {\n    id: 1.2\n    text: the third test text.\n    risk: medium\n    verifymethod: demonstration\n    }\n\n    interfaceRequirement test_req4 {\n    id: 1.2.1\n    text: the fourth test text.\n    risk: medium\n    verifymethod: analysis\n    }\n\n    physicalRequirement test_req5 {\n    id: 1.2.2\n    text: the fifth test text.\n    risk: medium\n    verifymethod: analysis\n    }\n\n    designConstraint test_req6 {\n    id: 1.2.3\n    text: the sixth test text.\n    risk: medium\n    verifymethod: analysis\n    }\n\n    element test_entity {\n    type: simulation\n    }\n\n    element test_entity2 {\n    type: word doc\n    docRef: reqs/test_entity\n    }\n\n    element test_entity3 {\n    type: "test suite"\n    docRef: github.com/all_the_tests\n    }\n\n\n    test_entity - satisfies -> test_req2\n    test_req - traces -> test_req2\n    test_req - contains -> test_req3\n    test_req3 - contains -> test_req4\n    test_req4 - derives -> test_req5\n    test_req5 - refines -> test_req6\n    test_entity3 - verifies -> test_req5\n    test_req <- copies - test_entity2',mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"gitgraph-git-diagram"},"Gitgraph (Git) Diagram"),(0,i.kt)(r.G,{chart:"%%{init: { 'logLevel': 'debug', 'theme': 'base' } }%%\n      gitGraph\n        commit\n        branch hotfix\n        checkout hotfix\n        commit\n        branch develop\n        checkout develop\n        commit id:\"ash\" tag:\"abc\"\n        branch featureB\n        checkout featureB\n        commit type:HIGHLIGHT\n        checkout main\n        checkout hotfix\n        commit type:NORMAL\n        checkout develop\n        commit type:REVERSE\n        checkout featureB\n        commit\n        checkout main\n        merge hotfix\n        checkout featureB\n        commit\n        checkout develop\n        branch featureA\n        commit\n        checkout develop\n        merge hotfix\n        checkout featureA\n        commit\n        checkout featureB\n        commit\n        checkout develop\n        merge featureA\n        branch release\n        checkout release\n        commit\n        checkout main\n        commit\n        checkout release\n        merge main\n        checkout develop\n        merge release",mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"mermaid-in-tabs"},"Mermaid in tabs"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"tab-a",mdxType:"TabItem"},(0,i.kt)("p",null,"The following mermaid diagram is shown:"),(0,i.kt)(r.G,{chart:"graph LR\n  a ---\x3e c(10)\n  b ---\x3e c(10)",mdxType:"Mermaid"})),(0,i.kt)(s.Z,{value:"tab-b",mdxType:"TabItem"},(0,i.kt)("p",null,"This mermaid diagram is not displayed:"),(0,i.kt)(r.G,{chart:"graph LR\n  d ---\x3e z(42)\n  e ---\x3e z(42)",mdxType:"Mermaid"}))))}p.isMDXComponent=!0}}]);