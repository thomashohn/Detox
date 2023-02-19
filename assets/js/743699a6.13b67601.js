"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2392],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7462),r=n(7294),i=n(6010),o=n(2466),l=n(6550),s=n(1980),u=n(7392),p=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=c(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=k({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),h=(()=>{const e=s??d;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var h=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==l&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},o,{className:(0,i.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},r.createElement(N,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function y(e){const t=(0,h.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},2030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),i=n(4866),o=n(5162);const l={id:"jest",slug:"guide/jest",title:"Jest Setup Guide",sidebar_label:"Jest Setup Guide"},s=void 0,u={unversionedId:"jest",id:"version-19.x/jest",title:"Jest Setup Guide",description:"Jest Setup Guide",source:"@site/versioned_docs/version-19.x/Guide.Jest.md",sourceDirName:".",slug:"/guide/jest",permalink:"/Detox/docs/19.x/guide/jest",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-19.x/Guide.Jest.md",tags:[],version:"19.x",frontMatter:{id:"jest",slug:"guide/jest",title:"Jest Setup Guide",sidebar_label:"Jest Setup Guide"},sidebar:"tutorialSidebar",previous:{title:"Migration Guide",permalink:"/Detox/docs/19.x/guide/migration"},next:{title:"Mocha Setup Guide",permalink:"/Detox/docs/19.x/guide/mocha"}},p={},d=[{value:"Jest Setup Guide",id:"jest-setup-guide",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Installation",id:"installation",level:3},{value:"1. Install Jest",id:"1-install-jest",level:4},{value:"2. Set up Test-code Scaffolds",id:"2-set-up-test-code-scaffolds",level:4},{value:"3. Fix / Verify",id:"3-fix--verify",level:4},{value:".detoxrc.json",id:"detoxrcjson",level:5},{value:"<code>e2e/config.json</code>",id:"e2econfigjson",level:5},{value:"<code>e2e/environment.js</code>",id:"e2eenvironmentjs",level:5},{value:"Writing Tests",id:"writing-tests",level:3},{value:"Parallel Test Execution",id:"parallel-test-execution",level:3},{value:"How to Run Unit and E2E Tests in the Same Project",id:"how-to-run-unit-and-e2e-tests-in-the-same-project",level:3}],c={toc:d},m="wrapper";function k(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"jest-setup-guide"},"Jest Setup Guide"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE: This article previously focused on deprecated ",(0,r.kt)("inlineCode",{parentName:"strong"},"jest-jasmine2")," runner setup, and if you nevertheless need to access it, ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/wix/Detox/blob/ef466822129a4befcda71111d02b1a334539889b/docs/Guide.Jest.md"},"follow this Git history link"),"."))),(0,r.kt)("p",null,"This guide describes how to install ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io"},"Jest")," as a test runner to be used by Detox for running the E2E tests."),(0,r.kt)("h3",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"As already mentioned in the ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/19.x/introduction/getting-started#set-up-a-test-runner"},"Getting Started")," guide, Detox itself does not effectively run tests logic, but rather delegates that responsibility onto a test runner. At the moment, Jest is the only recommended choice, for many reasons, including - but not limited to, parallel test suite execution capability, and complete integration with Detox API."),(0,r.kt)("p",null,"By the way, Jest itself \u2014 much like Detox, also does not effectively run any tests. Instead, it is more of a dispatcher and orchestrator of multiple instances of a delegated runner capable of running in parallel. For more info, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/3YDiloj8_d0?t=2127"},"this video")," (source: ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/architecture"},"Jest architecture"),")."),(0,r.kt)("p",null,"For its part, Detox supports only one Jest\u2019s concrete runner, which is ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/jest-circus"},(0,r.kt)("inlineCode",{parentName:"a"},"jest-circus"))," (",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/blog/2021/05/25/jest-27"},"ships by default with Jest since 27.0.0"),"). The former runner, ",(0,r.kt)("inlineCode",{parentName:"p"},"jest-jasmine2"),", is deprecated due to specific bugs in the past, and architectural limitations at present."),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Disclaimer:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Here we focus on installing Detox on ",(0,r.kt)("em",{parentName:"li"},"new projects"),". If you\u2019re migrating a project with an existing Detox installation, please apply some common sense while using this guide."),(0,r.kt)("li",{parentName:"ol"},"These instructions are relevant for ",(0,r.kt)("inlineCode",{parentName:"li"},"jest@^27.0.0")," (and ",(0,r.kt)("inlineCode",{parentName:"li"},"jest@^26.0.1 + jest-circus@^26.0.1"),"). They should likely work for the newer ",(0,r.kt)("inlineCode",{parentName:"li"},"jest")," versions too, but for ",(0,r.kt)("strong",{parentName:"li"},"the older ones")," (25.x, 24.x) \u2014 ",(0,r.kt)("strong",{parentName:"li"},"they will not, due to blocking issues."))),(0,r.kt)("h4",{id:"1-install-jest"},"1. Install Jest"),(0,r.kt)("p",null,"Before starting with Jest setup, be sure to complete the preliminary sections of the ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/19.x/introduction/getting-started"},"Getting Started")," guide."),(0,r.kt)("p",null,"Afterward, install the respective npm package:"),(0,r.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm install -D "jest@>=27.2.5"\n'))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'yarn add -D "jest@>=27.2.5"\n')))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," The command will install the ",(0,r.kt)("em",{parentName:"p"},"latest Jest version"),". However, ",(0,r.kt)("inlineCode",{parentName:"p"},"@>=27.2.5")," addendum is recommended just to be on the safe side in a common scenario, when a ",(0,r.kt)("inlineCode",{parentName:"p"},"package-lock.json"),"\ngenerated by an official React Native project template limits Jest version to a very old ",(0,r.kt)("inlineCode",{parentName:"p"},"26.x"),", maybe due to some optimization mechanism.\nGenerally we recommend not to stay on outdated Jest versions for too long, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"jest@27.2.5")," will be the minimal version supported by Detox 20."),(0,r.kt)("h4",{id:"2-set-up-test-code-scaffolds"},"2. Set up Test-code Scaffolds"),(0,r.kt)("p",null,"Run the automated init script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"detox init -r jest\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," errors occurring in the process may appear in red.")),(0,r.kt)("p",null,"If things go well, the following will be created:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},"e2e/")," folder in your project root"),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},"e2e/config.json")," file; ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wix/Detox/tree/master/examples/demo-react-native-jest/e2e/config.json"},"example")),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},"e2e/environment.js")," file; ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wix/Detox/tree/master/examples/demo-react-native-jest/e2e/environment.js"},"example")),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},"e2e/firstTest.e2e.js")," file with content similar to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wix/Detox/tree/master/examples/demo-react-native-jest/e2e/app-hello.e2e.ts"},"this"),".")),(0,r.kt)("h4",{id:"3-fix--verify"},"3. Fix / Verify"),(0,r.kt)("p",null,"Even if ",(0,r.kt)("inlineCode",{parentName:"p"},"detox init")," passes well, and everything is green, we still recommend going over the checklist below. You can also use our example project, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/tree/master/examples/demo-react-native-jest"},(0,r.kt)("inlineCode",{parentName:"a"},"demo-react-native-jest")),", as a reference in case of ambiguities."),(0,r.kt)("h5",{id:"detoxrcjson"},".detoxrc.json"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"testRunner")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"jest"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Required.")," Should be ",(0,r.kt)("inlineCode",{parentName:"td"},'"jest"')," for the proper ",(0,r.kt)("inlineCode",{parentName:"td"},"detox test")," CLI functioning.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"runnerConfig")),(0,r.kt)("td",{parentName:"tr",align:null},"(optional path to Jest config file)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Optional.")," This field tells ",(0,r.kt)("inlineCode",{parentName:"td"},"detox test")," CLI where to look for Jest\u2019s config file. If omitted, the default value is ",(0,r.kt)("inlineCode",{parentName:"td"},"e2e/config.json"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"skipLegacyWorkersInjection")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Optional.")," This field tells ",(0,r.kt)("inlineCode",{parentName:"td"},"detox test")," to stop appending ",(0,r.kt)("inlineCode",{parentName:"td"},"--maxWorkers 1")," argument to ",(0,r.kt)("inlineCode",{parentName:"td"},"jest ...")," command by default. Since ",(0,r.kt)("inlineCode",{parentName:"td"},"detox@18.19.0"),", the control over ",(0,r.kt)("inlineCode",{parentName:"td"},"maxWorkers")," count has been transfered to Jest config files, and that allows you to set any other value as a default ",(0,r.kt)("inlineCode",{parentName:"td"},"maxWorkers")," count.")))),(0,r.kt)("p",null,"A typical Detox configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},".detoxrc.json")," file looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "testRunner": "jest",\n  "runnerConfig": "e2e/config.json",\n  "skipLegacyWorkersInjection": true,\n  "devices": {\n    "simulator": {\n      "type": "ios.simulator",\n      "device": {\n        "type": "iPhone 12 Pro Max"\n      }\n    }\n  },\n  "apps": {\n    "ios.release": {\n      "type": "ios.app",\n      "binaryPath": "ios/build/Build/Products/Release-iphonesimulator/example.app",\n      "build": "<...xcodebuild command...>",\n    }\n  },\n  "configurations": {\n    "ios.sim.release": {\n      "device": "simulator",\n      "app": "ios.release"\n    }\n  }\n}\n')),(0,r.kt)("h5",{id:"e2econfigjson"},(0,r.kt)("inlineCode",{parentName:"h5"},"e2e/config.json")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"maxWorkers")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Recommended.")," When being used with ",(0,r.kt)("inlineCode",{parentName:"td"},"skipLegacyWorkersInjection: true")," in Detox config, it prevents overallocation of mobile devices in the light of Jest\u2019s default logic (",(0,r.kt)("inlineCode",{parentName:"td"},"= cpusCount \u2014 1"),"), when you do not pass any specific worker count. To override it, ",(0,r.kt)("a",{parentName:"td",href:"/Detox/docs/19.x/api/detox-cli#test"},"use CLI arguments"),", or see ",(0,r.kt)("a",{parentName:"td",href:"https://jestjs.io/docs/configuration#maxworkers-number--string"},"Jest documentation")," if you plan to change the default value in the config.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"testEnvironment")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"./environment"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Required.")," Needed for the proper functioning of Jest and Detox. See ",(0,r.kt)("a",{parentName:"td",href:"https://jestjs.io/docs/en/configuration#testenvironment-string"},"Jest documentation")," for more details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"testRunner")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"jest-circus/runner"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Required.")," Needed for the proper functioning of Jest and Detox. See ",(0,r.kt)("a",{parentName:"td",href:"https://jestjs.io/docs/en/configuration#testrunner-string"},"Jest documentation")," for more details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"testTimeout")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"120000")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Required"),". Overrides the default timeout (5 seconds), which is usually too short to complete a single end-to-end test.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reporters")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'["detox/runners/jest/streamlineReporter"]')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Recommended.")," Sets up our streamline replacement for ",(0,r.kt)("a",{parentName:"td",href:"https://jestjs.io/docs/en/configuration#reporters-array-modulename-modulename-options"},"Jest\u2019s default reporter"),", which removes Jest\u2019s default buffering of ",(0,r.kt)("inlineCode",{parentName:"td"},"console.log()")," output. That is helpful for end-to-end tests since log messages appear on the screen without any artificial delays. For more context, ",(0,r.kt)("a",{parentName:"td",href:"/Detox/docs/19.x/guide/migration#migrating-to-1270-from-older-nonbreaking"},"read Detox 12.7.0 migration guide"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"verbose")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Conditional.")," Must be ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if above you have replaced Jest\u2019s default reporter with Detox\u2019s ",(0,r.kt)("inlineCode",{parentName:"td"},"streamlineReporter"),". Optional otherwise.")))),(0,r.kt)("p",null,"A typical ",(0,r.kt)("inlineCode",{parentName:"p"},"jest-circus")," configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"e2e/config.json")," file would look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "testRunner": "jest-circus/runner",\n  "testEnvironment": "./environment",\n  "testTimeout": 120000,\n  "reporters": ["detox/runners/jest/streamlineReporter"],\n  "verbose": true\n}\n')),(0,r.kt)("h5",{id:"e2eenvironmentjs"},(0,r.kt)("inlineCode",{parentName:"h5"},"e2e/environment.js")),(0,r.kt)("p",null,"If you are not familiar with Environment concept in Jest, you could check ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/configuration#testenvironment-string"},"their documentation"),"."),(0,r.kt)("p",null,"For Detox, having a ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomDetoxEnvironment")," class derived from ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeEnvironment")," enables implementing cross-cutting concerns such as taking screenshots the exact moment a test function (it/test) or a hook (e.g., beforeEach) fails, skip adding tests if they have ",(0,r.kt)("inlineCode",{parentName:"p"},":ios:")," or ",(0,r.kt)("inlineCode",{parentName:"p"},":android:")," within their title, starting device log recordings before test starts and so on."),(0,r.kt)("p",null,"API of ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomDetoxEnvironment")," is not entirely public in a sense that there\u2019s no guide on how to write custom ",(0,r.kt)("inlineCode",{parentName:"p"},"DetoxCircusListeners")," and override ",(0,r.kt)("inlineCode",{parentName:"p"},"initDetox()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cleanupDetox()")," protected methods, since this is not likely to be needed for typical projects, but this is under consideration if there appears specific demand. You may want to check out this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/pull/2009#issuecomment-648971528"},"simple example")," of overriding ",(0,r.kt)("inlineCode",{parentName:"p"},"initDetox()"),", or some ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/pull/2009#issuecomment-649342823"},"alternative approaches")," to overriding ",(0,r.kt)("inlineCode",{parentName:"p"},"initDetox()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const {\n  DetoxCircusEnvironment,\n  SpecReporter,\n  WorkerAssignReporter,\n} = require('detox/runners/jest-circus');\n\nclass CustomDetoxEnvironment extends DetoxCircusEnvironment {\n  constructor(config, context) {\n    super(config, context);\n\n    // Can be safely removed, if you are content with the default value (=300000ms)\n    this.initTimeout = 300000;\n\n    // This takes care of generating status logs on a per-spec basis. By default, Jest only reports at file-level.\n    // This is strictly optional.\n    this.registerListeners({\n      SpecReporter,\n      WorkerAssignReporter,\n    });\n  }\n}\n\nmodule.exports = CustomDetoxEnvironment;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The custom ",(0,r.kt)("inlineCode",{parentName:"li"},"SpecReporter")," is recommended to be registered as a listener. It takes care of logging on a per-spec basis (i.e. when ",(0,r.kt)("inlineCode",{parentName:"li"},"it('...')")," functions start and end) \u2014 which Jest does not do by default."),(0,r.kt)("li",{parentName:"ul"},"The custom ",(0,r.kt)("inlineCode",{parentName:"li"},"WorkerAssignReporter")," prints for every next test suite which device is assigned to its execution.")),(0,r.kt)("p",null,"This is how a typical Jest log output looks when ",(0,r.kt)("inlineCode",{parentName:"p"},"SpecReporter")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"WorkerAssignReporter")," are enabled in ",(0,r.kt)("inlineCode",{parentName:"p"},"streamline-reporter")," is set up in ",(0,r.kt)("inlineCode",{parentName:"p"},"config.json")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"SpecReporter")," added in ",(0,r.kt)("inlineCode",{parentName:"p"},"e2e/environment.js"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Streamlined output",src:n(7207).Z,width:"1396",height:"546"})),(0,r.kt)("h3",{id:"writing-tests"},"Writing Tests"),(0,r.kt)("p",null,"There are some things you should notice:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Don\u2019t worry about mocks being used, Detox works on the compiled version of your app."),(0,r.kt)("li",{parentName:"ul"},"Detox exposes its primitives (",(0,r.kt)("inlineCode",{parentName:"li"},"expect"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"device"),", ...) globally, it will override Jest\u2019s global ",(0,r.kt)("inlineCode",{parentName:"li"},"expect")," object.")),(0,r.kt)("h3",{id:"parallel-test-execution"},"Parallel Test Execution"),(0,r.kt)("p",null,"Through Detox' CLI, Jest can be started with ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/19.x/guide/parallel-test-execution"},"multiple workers")," that run tests simultaneously, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"detox test --configuration <yourConfigurationName> --workers 2\n")),(0,r.kt)("p",null,"In this mode, Jest effectively assigns one worker per each test file.\nPer-spec logging offered by the ",(0,r.kt)("inlineCode",{parentName:"p"},"SpecReporter")," mentioned earlier, does not necessarily make sense, as the workers' outputs get mixed up."),(0,r.kt)("p",null,"By default, we disable ",(0,r.kt)("inlineCode",{parentName:"p"},"SpecReporter")," in a multi-workers environment.\nIf you wish to force-enable it nonetheless, the ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/19.x/api/detox-cli#test"},(0,r.kt)("inlineCode",{parentName:"a"},"--jest-report-specs"))," CLI option can be used with ",(0,r.kt)("inlineCode",{parentName:"p"},"detox test"),", e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"detox test --configuration <yourConfigurationName> --workers 2 --jest-report-specs\n")),(0,r.kt)("h3",{id:"how-to-run-unit-and-e2e-tests-in-the-same-project"},"How to Run Unit and E2E Tests in the Same Project"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create different Jest configs for unit and E2E tests, e.g. in ",(0,r.kt)("inlineCode",{parentName:"li"},"e2e/config.json")," (for Detox) and ",(0,r.kt)("inlineCode",{parentName:"li"},"jest.config.js"),"\n(for unit tests). For example, in Jest\u2019s E2E config you can set ",(0,r.kt)("inlineCode",{parentName:"li"},"testRegex")," to look for ",(0,r.kt)("inlineCode",{parentName:"li"},"\\.e2e.js$")," regexp,\nand this way avoid accidental triggering of unit tests with ",(0,r.kt)("inlineCode",{parentName:"li"},".test.js")," extension."),(0,r.kt)("li",{parentName:"ul"},"To run your E2E tests, use ",(0,r.kt)("inlineCode",{parentName:"li"},"detox test")," command (or ",(0,r.kt)("inlineCode",{parentName:"li"},"npx detox test"),", if you haven\u2019t installed ",(0,r.kt)("inlineCode",{parentName:"li"},"detox-cli"),").")))}k.isMDXComponent=!0},7207:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/streamlined_logging-4ad2e1c374cd34a97dfc9a9f090ddcb6.png"}}]);