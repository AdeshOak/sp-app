"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[9205],{9205:(e,t,o)=>{o.r(t),o.d(t,{main:()=>P});var r=o(28845),n=o(5586),s=o(64145),a=(o(11555),o(1892)),l=o.n(a),i=o(95760),p=o.n(i),c=o(38311),u=o.n(c),f=o(58192),h=o.n(f),y=o(38060),b=o.n(y),x=o(54865),j=o.n(x),d=o(14364),m={};m.styleTagTransform=j(),m.setAttributes=h(),m.insert=u().bind(null,"head"),m.domAPI=p(),m.insertStyleElement=b(),l()(d.Z,m),d.Z&&d.Z.locals&&d.Z.locals,o(29486),o(65573),o(51442),o(94101),o(94395),o(48808),o(75563),o(18934),o(24017),o(72867),o(91532),o(20603),o(17363),o(9755),o(58169),o(76838),o(53109),o(69226),o(3727),o(24295),o(22090),o(58530),o(26053),o(84221),o(87967),o(79589),o(45637),o(16388),o(37609),o(49733),o(74958),o(87814),o(74316),o(89138),o(975);const g=[o.e(7834).then(o.t.bind(o,27834,23))],w=["@jupyterlab/application-extension:dirty","@jupyterlab/application-extension:info","@jupyterlab/application-extension:layout","@jupyterlab/application-extension:logo","@jupyterlab/application-extension:main","@jupyterlab/application-extension:mode-switch","@jupyterlab/application-extension:notfound","@jupyterlab/application-extension:paths","@jupyterlab/application-extension:property-inspector","@jupyterlab/application-extension:shell","@jupyterlab/application-extension:status","@jupyterlab/application-extension:tree-resolver","@jupyterlab/apputils-extension:announcements","@jupyterlab/apputils-extension:kernel-status","@jupyterlab/apputils-extension:palette-restorer","@jupyterlab/apputils-extension:print","@jupyterlab/apputils-extension:resolver","@jupyterlab/apputils-extension:running-sessions-status","@jupyterlab/apputils-extension:splash","@jupyterlab/apputils-extension:workspaces","@jupyterlab/console-extension:kernel-status","@jupyterlab/docmanager-extension:download","@jupyterlab/docmanager-extension:opener","@jupyterlab/docmanager-extension:path-status","@jupyterlab/docmanager-extension:saving-status","@jupyterlab/documentsearch-extension:labShellWidgetListener","@jupyterlab/filebrowser-extension:browser","@jupyterlab/filebrowser-extension:download","@jupyterlab/filebrowser-extension:file-upload-status","@jupyterlab/filebrowser-extension:open-with","@jupyterlab/filebrowser-extension:share-file","@jupyterlab/filebrowser-extension:widget","@jupyterlab/fileeditor-extension:editor-syntax-status","@jupyterlab/fileeditor-extension:language-server","@jupyterlab/fileeditor-extension:search","@jupyterlab/help-extension:about","@jupyterlab/help-extension:open","@jupyterlab/notebook-extension:execution-indicator","@jupyterlab/notebook-extension:kernel-status","@jupyter-notebook/application-extension:logo","@jupyter-notebook/application-extension:opener","@jupyter-notebook/application-extension:path-opener","@jupyter-notebook/help-extension:about"];async function k(e,t){try{return(await window._JUPYTERLAB[e].get(t))()}catch(o){throw console.warn(`Failed to create module: package: ${e}; module: ${t}`),o}}async function P(){const e=[],t=[],a=[],l=[],i=[],p=[],c=JSON.parse(s.PageConfig.getOption("federated_extensions")),u=new Set;function*f(e){let t;t=e.hasOwnProperty("__esModule")?e.default:e;let o=Array.isArray(t)?t:[t];for(let e of o)s.PageConfig.Extension.isDisabled(e.id)||w.includes(e.id)||w.includes(e.id.split(":")[0])||(yield e)}c.forEach((e=>{e.liteExtension?p.push(k(e.name,e.extension)):(e.extension&&(u.add(e.name),t.push(k(e.name,e.extension))),e.mimeExtension&&(u.add(e.name),a.push(k(e.name,e.mimeExtension))),e.style&&l.push(k(e.name,e.style)))}));const h=[];if(!u.has("@jupyterlab/javascript-extension"))try{let e=o(56357);for(let t of f(e))h.push(t)}catch(e){console.error(e)}if(!u.has("@jupyterlab/json-extension"))try{let e=o(51542);for(let t of f(e))h.push(t)}catch(e){console.error(e)}if(!u.has("@jupyterlab/mermaid-extension"))try{let e=o(21068);for(let t of f(e))h.push(t)}catch(e){console.error(e)}if(!u.has("@jupyterlab/vega5-extension"))try{let e=o(67025);for(let t of f(e))h.push(t)}catch(e){console.error(e)}if(!u.has("@jupyterlite/iframe-extension"))try{let e=o(50071);for(let t of f(e))h.push(t)}catch(e){console.error(e)}if((await Promise.allSettled(a)).forEach((e=>{if("fulfilled"===e.status)for(let t of f(e.value))h.push(t);else console.error(e.reason)})),!u.has("@jupyterlab/application-extension"))try{let t=o(76676);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/apputils-extension"))try{let t=o(26219);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/cell-toolbar-extension"))try{let t=o(15083);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/celltags-extension"))try{let t=o(60026);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/codemirror-extension"))try{let t=o(34900);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/completer-extension"))try{let t=o(44515);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/console-extension"))try{let t=o(12071);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/docmanager-extension"))try{let t=o(60965);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/documentsearch-extension"))try{let t=o(7146);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/filebrowser-extension"))try{let t=o(63327);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/fileeditor-extension"))try{let t=o(46926);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/help-extension"))try{let t=o(22886);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/lsp-extension"))try{let t=o(27862);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/mainmenu-extension"))try{let t=o(80053);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/markedparser-extension"))try{let t=o(73589);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/mathjax-extension"))try{let t=o(77403);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/mermaid-extension"))try{let t=o(3881);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/metadataform-extension"))try{let t=o(63174);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/notebook-extension"))try{let t=o(24126);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/rendermime-extension"))try{let t=o(7290);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/shortcuts-extension"))try{let t=o(7303);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/theme-dark-extension"))try{let t=o(27401);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/theme-dark-high-contrast-extension"))try{let t=o(24196);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/theme-light-extension"))try{let t=o(81223);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/toc-extension"))try{let t=o(15221);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/tooltip-extension"))try{let t=o(23792);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/translation-extension"))try{let t=o(88941);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/ui-components-extension"))try{let t=o(93486);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyter-notebook/application-extension"))try{let t=o(25613);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyter-notebook/console-extension"))try{let t=o(18392);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyter-notebook/docmanager-extension"))try{let t=o(46704);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyter-notebook/help-extension"))try{let t=o(37233);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyter-notebook/notebook-extension"))try{let t=o(12988);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlite/application-extension"))try{let t=o(82430);for(let o of f(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlite/notebook-application-extension"))try{let t=o(81167);for(let o of f(t))e.push(o)}catch(e){console.error(e)}(await Promise.allSettled(t)).forEach((t=>{if("fulfilled"===t.status)for(let o of f(t.value))e.push(o);else console.error(t.reason)})),(await Promise.all(g)).forEach((e=>{for(let t of f(e))i.push(t)})),(await Promise.allSettled(p)).forEach((e=>{if("fulfilled"===e.status)for(let t of f(e.value))i.push(t);else console.error(e.reason)})),(await Promise.allSettled(l)).filter((({status:e})=>"rejected"===e)).forEach((({reason:e})=>{console.error(e)}));const y=new n.JupyterLiteServer({});y.registerPluginModules(i),await y.start();const{serviceManager:b}=y,x=new r.NotebookApp({mimeExtensions:h,serviceManager:b});x.name=s.PageConfig.getOption("appName")||"JupyterLite",x.registerPluginModules(e),"true"===(s.PageConfig.getOption("exposeAppInBrowser")||"").toLowerCase()&&(window.jupyterapp=x),await x.start(),await x.restored}},14364:(e,t,o)=>{o.d(t,{Z:()=>l});var r=o(20559),n=o.n(r),s=o(93476),a=o.n(s)()(n());a.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const l=a}}]);
//# sourceMappingURL=9205.a60cfe4.js.map