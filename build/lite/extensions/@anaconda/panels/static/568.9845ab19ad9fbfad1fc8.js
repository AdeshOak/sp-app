"use strict";(self.webpackChunk_anaconda_panels=self.webpackChunk_anaconda_panels||[]).push([[568],{1568:(e,a,n)=>{n.r(a),n.d(a,{default:()=>s});var t=n(1464),o=n(6947),r=n(2110),c=n(9369);const l=new(n(6016).PanelPlugin),s={id:"@anaconda/panels:plugin",description:"A JupyterLab extension.",autoStart:!0,requires:[c.tokens.CoreToken,r.ILauncher,o.INotebookTracker,t.ICommandPalette,t.IThemeManager,t.IToolbarWidgetRegistry],activate:(e,a,n,t,o,r,c)=>{console.log("@anaconda/panels:plugin extension is activated");const{corePlugin:s}=a,i={themeManager:r,corePlugin:s,notebookTracker:t,palette:o,toolbarRegistry:c,launcher:n};l.activate(e,i)}}}}]);