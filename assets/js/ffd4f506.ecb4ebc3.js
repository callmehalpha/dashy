"use strict";(self.webpackChunkdashy=self.webpackChunkdashy||[]).push([[107],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2006:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={},s="Alternate Views & Opening Methods",p={unversionedId:"alternate-views",id:"alternate-views",isDocsHomePage:!1,title:"Alternate Views & Opening Methods",description:"Views",source:"@site/docs/alternate-views.md",sourceDirName:".",slug:"/alternate-views",permalink:"/docs/alternate-views",editUrl:"https://github.com/Lissy93/dashy/edit/gh-pages/docs/docs/alternate-views.md",version:"current",frontMatter:{},sidebar:"dashySidebar",previous:{title:"Keyboard Shortcuts",permalink:"/docs/searching"},next:{title:"Internationalization",permalink:"/docs/multi-language-support"}},c=[{value:"Views",id:"views",children:[{value:"Default",id:"default",children:[]},{value:"Workspace",id:"workspace",children:[]},{value:"Minimal View",id:"minimal-view",children:[]}]},{value:"Opening Methods",id:"opening-methods",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"alternate-views--opening-methods"},"Alternate Views & Opening Methods"),(0,o.kt)("h2",{id:"views"},"Views"),(0,o.kt)("p",null,"Dashy has three different views:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default View - This is the main homepage with sections in a grid layout"),(0,o.kt)("li",{parentName:"ul"},"Workspace View - Items displayed on the side, and are launched within Dashy"),(0,o.kt)("li",{parentName:"ul"},"Minimal View - A clean + simple tabbed view")),(0,o.kt)("p",null,"You can switch between views using the dropdown in the top-right corner. Set your chosen Starting View with ",(0,o.kt)("inlineCode",{parentName:"p"},"appConfig.startingView"),". Click the page title at any time to go back to your selected starting view."),(0,o.kt)("h3",{id:"default"},"Default"),(0,o.kt)("p",null,"This is the main page that you will land on when you first launch the application. Here all of your sections (with items + widgets) are visible in a grid layout."),(0,o.kt)("p",{align:"center"},(0,o.kt)("b",null,"Example of Default View"),(0,o.kt)("br",null),(0,o.kt)("img",{width:"800",src:"https://i.ibb.co/L8YbNNc/dashy-demo2.gif",alt:"Demo"})),(0,o.kt)("h3",{id:"workspace"},"Workspace"),(0,o.kt)("p",null,"The workspace view displays your links in a sidebar on the left-hand side, and apps are launched inside an iframe without having to leave Dashy. This enables you to use all of your self-hosted apps from one place, and makes multi-tasking easy."),(0,o.kt)("p",null,"You can specify a default app to be opened when you land on the workspace, by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"appConfig.workspaceLandingUrl: https://app-to-open/"),". If this app exists within your sections.items, then the corresponding section will also be expanded."),(0,o.kt)("p",null,"You can also opt to keep previously opened websites/ apps open in the background, by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"appConfig.enableMultiTasking: true"),". This comes at the cost of performance, but does mean that your session with each app is preserved, enabling you to quickly switch between them."),(0,o.kt)("p",{align:"center"},(0,o.kt)("b",null,"Example of Workspace View"),(0,o.kt)("br",null),(0,o.kt)("img",{alt:"Workspace view demo",src:"https://raw.githubusercontent.com/Lissy93/dashy/master/docs/assets/workspace-demo.gif",width:"800"})),(0,o.kt)("h3",{id:"minimal-view"},"Minimal View"),(0,o.kt)("p",null,"The minimal view aims to be super fast and simple, and can be used as a browser startpage. Items are grouped into a tab view, and the last opened tab will be remembered. Similar to the main view, you can search and launch items just by typing, and right-clicking will show more options (like open in modal, workspace or new tab)."),(0,o.kt)("p",{align:"center"},(0,o.kt)("b",null,"Example of Minimal View"),(0,o.kt)("br",null),(0,o.kt)("img",{alt:"Workspace view demo",src:"https://raw.githubusercontent.com/Lissy93/dashy/master/docs/assets/minimal-view-demo.gif",width:"800"})),(0,o.kt)("h2",{id:"opening-methods"},"Opening Methods"),(0,o.kt)("p",null,"Dashy supports several different ways to launch your apps. The primary opening method for each app can be specified using the ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," attribute, with a value of one of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sametab")," - The app will be launched in the current tab"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"newtab")," - The app will be launched in a new tab"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"top")," - Opens in the top-most browsing context, useful if your accessing Dashy through an iframe"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"modal")," - Launch app in a resizable/ movable popup modal on the current page"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"workspace")," - Changes to Workspace view, and launches app")),(0,o.kt)("p",null,"You can also set a default opening method, which will be applied to all items that don't have a specified target, using ",(0,o.kt)("inlineCode",{parentName:"p"},"appConfig.defaultOpeningMethod"),", to one of the above values."),(0,o.kt)("p",null,"Even if the target is not set (or is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"sametab"),"), you can still launch any given app in an alternative method. Either right-click to see all options, or use one of the keyboard shortcuts: Alt + Click will open the modal, and Ctrl + Click will open in a new tab. "),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{width:"500",src:"https://i.ibb.co/vmZdSRt/dashy-context-menu-2.png"})),(0,o.kt)("p",null,"If you don't like the custom context menu, it can be disabled by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"appConfig.disableContextMenu: true"),"."),(0,o.kt)("p",null,"If you get a 'Refused to Connect' error in the modal or workspace views, then the target app has it's X-Frame-Options HTTP set to block requests from embedded content. You can easily fix this by setting this header to ALLOW, for instructions on how to do so, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/troubleshooting#refused-to-connect-in-modal-or-workspace-view"},"Troubleshooting Docs"),"."))}d.isMDXComponent=!0}}]);