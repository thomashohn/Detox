"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8201],{69025:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>g});var o=t(87462),i=(t(67294),t(3905)),a=t(2225);const r={},s="Logger",l={unversionedId:"config/logger",id:"version-20.x/config/logger",title:"Logger",description:"The logger section controls how the printed logs are going to look like in your terminal window.",source:"@site/versioned_docs/version-20.x/config/logger.mdx",sourceDirName:"config",slug:"/config/logger",permalink:"/Detox/docs/config/logger",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-20.x/config/logger.mdx",tags:[],version:"20.x",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Behavior",permalink:"/Detox/docs/config/behavior"},next:{title:"Session",permalink:"/Detox/docs/config/session"}},p={},g=[{value:"Location",id:"location",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>logger.level</code> [enum]",id:"loggerlevel-enum",level:2},{value:"<code>logger.overrideConsole</code> [boolean]",id:"loggeroverrideconsole-boolean",level:2},{value:"<code>logger.options</code> BunyanDebugStreamOptions",id:"loggeroptions-bunyandebugstreamoptions",level:2}],d={toc:g},c="wrapper";function u(e){let{components:n,...r}=e;return(0,i.kt)(c,(0,o.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"logger"},"Logger"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"logger")," section controls how the printed logs are going to look like in your terminal window."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(83518).Z,width:"1176",height:"218"})),(0,i.kt)("h2",{id:"location"},"Location"),(0,i.kt)(a.ZP,{sectionName:"logger",mdxType:"Location"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h2",{id:"loggerlevel-enum"},(0,i.kt)("inlineCode",{parentName:"h2"},"logger.level")," ","[","enum","]"),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"info"),"."),(0,i.kt)("p",null,"Possible values in the descending severity order: ",(0,i.kt)("inlineCode",{parentName:"p"},"fatal"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"warn"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"debug"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"trace"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"info")," by default."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"error")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"warn")," when you want to make the output as silent as possible."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"debug")," to control what generally is happening under the hood."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"trace")," when troubleshooting specific issues.")),(0,i.kt)("p",null,"Please note that the log level has no effect on the ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/config/artifacts"},"generated log files")," and their content \u2013 it filters only the messages printed to your terminal."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The verbosity of the logs can be influenced by the ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/config/session#sessiondebugsynchronization-number"},(0,i.kt)("inlineCode",{parentName:"a"},"session.debugSynchronization"))," setting in your Detox configuration. Enabled by default, this setting helps track the reasons preventing your current actions from completing by identifying what the app is still busy with. It produces logs like this:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},'15:13:07.309 detox[17005] i The app is busy with the following tasks:\n\u2022 There are 10 work items pending on the dispatch queue: "Main Queue (<OS_dispatch_queue_main: com.apple.main-thread>)".\n...\n')),(0,i.kt)("p",{parentName:"admonition"},"If you want to disable or decrease how often session logs are saved, change the ",(0,i.kt)("inlineCode",{parentName:"p"},"session.debugSynchronization")," value to ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," (to turn off logs) or increase it to ",(0,i.kt)("inlineCode",{parentName:"p"},"60000")," (to lower the frequency of logs). For a deeper understanding of this setting's purpose, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/articles/how-detox-works#how-detox-automatically-synchronizes-with-your-app"},"How Detox Works")," article.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"loggeroverrideconsole-boolean"},(0,i.kt)("inlineCode",{parentName:"h2"},"logger.overrideConsole")," ","[","boolean","]"),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"When enabled, hijacks all the console methods (console.log, console.warn, etc) so that the messages\nprinted via them are formatted and saved as Detox logs."),(0,i.kt)("h2",{id:"loggeroptions-bunyandebugstreamoptions"},(0,i.kt)("inlineCode",{parentName:"h2"},"logger.options")," ","[BunyanDebugStreamOptions]"),(0,i.kt)("p",null,"Default: varies according to the ",(0,i.kt)("inlineCode",{parentName:"p"},"logger.level"),"."),(0,i.kt)("p",null,"Since Detox is using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jwalton/bunyan-debug-stream"},"bunyan-debug-stream")," for printing logs,\nwe decided just to expose all its options for sake of simplicity of customization:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface BunyanDebugStreamOptions {\n    colors?: { [key: number]: string | string[] } | false | null;\n    forceColor?: boolean;\n    basepath?: string;\n    basepathReplacement?: string;\n    showProcess?: boolean;\n    showDate?: boolean | ((time: Date, entry: any) => string);\n    showPrefixes?: boolean | ((prefixes: string[]) => string);\n    processName?: string;\n    maxExceptionLines?: number | 'auto';\n    stringifiers?: { [key: string]: Stringifier | null };\n    prefixers?: { [key: string]: Stringifier | null };\n    indent?: string;\n    showLoggerName?: boolean;\n    showPid?: boolean;\n    showLevel?: boolean;\n    showMetadata?: boolean;\n}\n")),(0,i.kt)("p",null,"There's one caveat inside ",(0,i.kt)("inlineCode",{parentName:"p"},"logger.options"),", however \u2013 all the custom functions ",(0,i.kt)("strong",{parentName:"p"},"must not")," use closures! That's\nbecause they get ",(0,i.kt)("inlineCode",{parentName:"p"},"eval()"),"-ed every time the test runner spawns a new child worker process. In other words:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const dontDoThis = date => date.toISOString();\n\nmodule.exports = {\n  logger: {\n    level: 'debug',\n    options: {\n      // showDate: (date) => dontDoThis(date),\n// highlight-next-line\n      showDate: (date) => date.toISOString(), /* do this instead */\n    },\n  },\n  // ...\n};\n")))}u.isMDXComponent=!0},2225:(e,n,t)=>{t.d(n,{ZP:()=>l});var o=t(87462),i=(t(67294),t(3905)),a=t(60614);const r={toc:[]},s="wrapper";function l(e){let{components:n,...t}=e;return(0,i.kt)(s,(0,o.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can define the ",(0,i.kt)("code",null,t.sectionName)," config section in two ways: ",(0,i.kt)("i",null,"globally")," and ",(0,i.kt)("i",null,"locally")," (per a configuration):"),(0,i.kt)(a.Z,{title:".detoxrc.js",language:"javascript",mdxType:"CodeBlock"},["/** @type {Detox.DetoxConfig} */","module.exports = {","// highlight-start",`  ${t.sectionName}: {`,"    /* global section */","  },","// highlight-end","  devices: { /* \u2026 */ },","  apps: { /* \u2026 */ },","  configurations: {","    'ios.sim.debug': {","      device: 'iphone',","      app: 'ios.debug',","// highlight-start",`      ${t.sectionName}: {`,"        /* local (per-configuration) section */","      },","// highlight-end","    },","  },","};"].join("\n")))}l.isMDXComponent=!0},83518:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/log-example-07a2afd13f5a9c00f864226c5694c431.png"}}]);