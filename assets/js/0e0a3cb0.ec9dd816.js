(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{522:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},523:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},524:function(e,t,a){"use strict";var n=a(0),r=a(525);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},525:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},526:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(524),o=a(523),c=a(59),l=a.n(c);var s=37,p=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,b=e.values,u=e.groupId,d=e.className,m=Object(i.a)(),v=m.tabGroupChoices,h=m.setTabGroupChoices,g=Object(n.useState)(c),f=g[0],j=g[1],O=n.Children.toArray(e.children),y=[];if(null!=u){var N=v[u];null!=N&&N!==f&&b.some((function(e){return e.value===N}))&&j(N)}var w=function(e){var t=e.target,a=y.indexOf(t),n=O[a].props.value;j(n),null!=u&&(h(u,n),setTimeout((function(){var e,a,n,r,i,o,c,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,o=window,c=o.innerHeight,s=o.innerWidth,a>=0&&i<=s&&r<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((function(){return t.classList.remove(l.a.tabItemActive)}),2e3))}),150))},x=function(e){var t,a;switch(e.keyCode){case p:var n=y.indexOf(e.target)+1;a=y[n]||y[0];break;case s:var r=y.indexOf(e.target)-1;a=y[r]||y[y.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},d)},b.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:x,onFocus:w,onClick:w},a)}))),t?Object(n.cloneElement)(O.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},527:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},95:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(8),i=(a(0),a(522)),o=a(526),c=a(527),l={id:"getting-started",title:"Getting started",sidebar_label:"Getting started"},s={unversionedId:"getting-started",id:"version-4.x/getting-started",isDocsHomePage:!1,title:"Getting started",description:"React Navigation is born from the React Native community's need for an extensible yet easy-to-use navigation solution written entirely in JavaScript (so you can read and understand all of the source), on top of powerful native primitives.",source:"@site/versioned_docs/version-4.x/getting-started.md",slug:"/getting-started",permalink:"/docs/4.x/getting-started",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/getting-started.md",version:"4.x",sidebar_label:"Getting started",sidebar:"version-4.x-docs",next:{title:"Hello React Navigation",permalink:"/docs/4.x/hello-react-navigation"}},p=[{value:"What to expect",id:"what-to-expect",children:[]},{value:"Start from a template",id:"start-from-a-template",children:[]},{value:"Install into an existing project",id:"install-into-an-existing-project",children:[]}],b={toc:p};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"React Navigation is born from the React Native community's need for an extensible yet easy-to-use navigation solution written entirely in JavaScript (so you can read and understand all of the source), on top of powerful native primitives."),Object(i.b)("p",null,"Before you commit to using React Navigation for your project, you might want to read the ",Object(i.b)("a",{parentName:"p",href:"/docs/4.x/pitch"},"anti-pitch")," ","\u2014"," it will help you to understand the tradeoffs that we have chosen along with the areas where we consider the library to be deficient currently."),Object(i.b)("h2",{id:"what-to-expect"},"What to expect"),Object(i.b)("p",null,"If you're already familiar with React Native then you'll be able to get moving with React Navigation quickly! If not, you may want to read sections 1 to 4 (inclusive) of ",Object(i.b)("a",{parentName:"p",href:"http://reactnativeexpress.com/"},"React Native Express")," first, then come back here when you're done."),Object(i.b)("p",null,"What follows within the ",Object(i.b)("em",{parentName:"p"},"Fundamentals")," section of this documentation is a tour of the most important aspects of React Navigation. It should cover enough for you to know how to build your typical small mobile application, and give you the background that you need to dive deeper into the more advanced parts of React Navigation."),Object(i.b)("h2",{id:"start-from-a-template"},"Start from a template"),Object(i.b)("p",null,"The easiest way to get running with ",Object(i.b)("inlineCode",{parentName:"p"},"react-navigation")," is to initialize a project using ",Object(i.b)("inlineCode",{parentName:"p"},"expo-cli"),". You can install this with ",Object(i.b)("inlineCode",{parentName:"p"},"npm i -g expo-cli"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If you'd like to create a ",Object(i.b)("a",{parentName:"li",href:"https://docs.expo.io/versions/latest/introduction/managed-vs-bare"},"managed React Native project")," then choose the ",Object(i.b)("inlineCode",{parentName:"li"},"blank")," template under the Managed workflow heading."),Object(i.b)("li",{parentName:"ul"},"If you'd like a ",Object(i.b)("a",{parentName:"li",href:"https://docs.expo.io/versions/latest/introduction/managed-vs-bare/#bare-workflow"},"bare React Native project"),", then choose ",Object(i.b)("inlineCode",{parentName:"li"},"minimal")," under the Bare workflow heading."),Object(i.b)("li",{parentName:"ul"},"In both cases you can pick the TypeScript version of the template if you prefer ","\u2014"," React Navigation ships with TypeScript types.")),Object(i.b)("p",null,"Once the project is initialized, in the project directory run ",Object(i.b)("inlineCode",{parentName:"p"},"expo install react-navigation react-native-gesture-handler react-native-reanimated react-native-screens"),", and you're ready to go! You can now continue to ",Object(i.b)("a",{parentName:"p",href:"/docs/4.x/hello-react-navigation"},'"Hello React Navigation"')," to start writing some code."),Object(i.b)("h2",{id:"install-into-an-existing-project"},"Install into an existing project"),Object(i.b)("p",null,"Install the ",Object(i.b)("inlineCode",{parentName:"p"},"react-navigation")," package in your React Native project."),Object(i.b)(o.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install react-navigation\n"))),Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"yarn add react-navigation\n")))),Object(i.b)("p",null,"React Navigation is made up of some core utilities and those are then used by navigators to create the navigation structure in your app. Don't worry too much about this for now, it'll become clear soon enough! To frontload the installation work, let's also install and configure dependencies used by most navigators, then we can move forward with starting to write some code."),Object(i.b)("p",null,"The libraries we will install now are ",Object(i.b)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler"},Object(i.b)("inlineCode",{parentName:"a"},"react-native-gesture-handler")),", ",Object(i.b)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},Object(i.b)("inlineCode",{parentName:"a"},"react-native-reanimated")),", ",Object(i.b)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-screens"},Object(i.b)("inlineCode",{parentName:"a"},"react-native-screens"))," and ",Object(i.b)("a",{parentName:"p",href:"https://github.com/th3rdwave/react-native-safe-area-context"},Object(i.b)("inlineCode",{parentName:"a"},"react-native-safe-area-context")),". If you already have these libraries installed and at the latest version, you are done here! Otherwise, read on."),Object(i.b)("h4",{id:"installing-dependencies-into-an-expo-managed-project"},"Installing dependencies into an Expo managed project"),Object(i.b)("p",null,"In your project directory, run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view\n")),Object(i.b)("p",null,"This will install versions of these libraries that are compatible."),Object(i.b)("p",null,"You can now continue to ",Object(i.b)("a",{parentName:"p",href:"/docs/4.x/hello-react-navigation"},'"Hello React Navigation"')," to start writing some code."),Object(i.b)("h4",{id:"installing-dependencies-into-a-bare-react-native-project"},"Installing dependencies into a bare React Native project"),Object(i.b)("p",null,"In your project directory, run:"),Object(i.b)(o.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view\n"))),Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view\n")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: You might get warnings related to peer dependencies after installation. They are usually caused my incorrect version ranges specified in some packages. You can safely ignore most warnings as long as your app builds.")),Object(i.b)("p",null,"Next, we need to link these libraries. The steps depends on your React Native version:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"React Native 0.60 and higher")),Object(i.b)("p",{parentName:"li"},"On newer versions of React Native, ",Object(i.b)("a",{parentName:"p",href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"},"linking is automatic"),"."),Object(i.b)("p",{parentName:"li"},"If you're on a Mac and developing for iOS, you need to install pods to complete the linking. Make sure you have ",Object(i.b)("a",{parentName:"p",href:"https://cocoapods.org/"},"Cocoapods")," installed. Then run:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},"cd ios; pod install; cd ..\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"React Native 0.59 and lower")),Object(i.b)("p",{parentName:"li"},"If you're on an older React Native version, you need to manually link the dependencies. To do that, run:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},"react-native link react-native-reanimated\nreact-native link react-native-gesture-handler\nreact-native link react-native-screens\nreact-native link react-native-safe-area-context\n")),Object(i.b)("p",{parentName:"li"},"You also need to configure ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikehardy/jetifier"},"jetifier")," to support dependencies using ",Object(i.b)("inlineCode",{parentName:"p"},"androidx"),":"),Object(i.b)(o.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev jetifier\n"))),Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"yarn add --save-dev jetifier\n")))),Object(i.b)("p",{parentName:"li"},"Then add it to the ",Object(i.b)("inlineCode",{parentName:"p"},"postinstall")," script in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "postinstall": "jetifier -r"\n}\n')),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"Note: Remember to remove this when you upgrade to React Native 0.60 and higher.")),Object(i.b)("p",{parentName:"li"},"Now, run the ",Object(i.b)("inlineCode",{parentName:"p"},"postinstall")," script manually:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},"npm run postinstall\n")))),Object(i.b)("p",null,"To finalize installation of ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," for Android, make the following modifications to ",Object(i.b)("inlineCode",{parentName:"p"},"MainActivity.java"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-diff"},'package com.reactnavigation.example;\n\nimport com.facebook.react.ReactActivity;\n+ import com.facebook.react.ReactActivityDelegate;\n+ import com.facebook.react.ReactRootView;\n+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;\n\npublic class MainActivity extends ReactActivity {\n\n  @Override\n  protected String getMainComponentName() {\n    return "Example";\n  }\n\n+  @Override\n+  protected ReactActivityDelegate createReactActivityDelegate() {\n+    return new ReactActivityDelegate(this, getMainComponentName()) {\n+      @Override\n+      protected ReactRootView createRootView() {\n+        return new RNGestureHandlerEnabledRootView(MainActivity.this);\n+      }\n+    };\n+  }\n}\n')),Object(i.b)("p",null,"Then add the following at the top of your entry file, such as ",Object(i.b)("inlineCode",{parentName:"p"},"index.js")," or ",Object(i.b)("inlineCode",{parentName:"p"},"App.js"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import 'react-native-gesture-handler';\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: When you use a navigator (such as stack navigator), you'll need to follow the installation instructions of that navigator for any additional dependencies. If you're getting an error \"Unable to resolve module\", you need to install that module in your project.")),Object(i.b)("p",null,"Now you are ready to build and run your app on the device/simulator."),Object(i.b)("p",null,"Continue to ",Object(i.b)("a",{parentName:"p",href:"/docs/4.x/hello-react-navigation"},'"Hello React Navigation"')," to start writing some code."))}u.isMDXComponent=!0}}]);