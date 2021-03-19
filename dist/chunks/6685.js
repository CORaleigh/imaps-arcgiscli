(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[6685],{76685:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>B});var r=i(56140),s=(i(95830),i(36544)),a=(i(68055),i(79881)),n=i(87566),l=(i(10923),i(57002),i(86035),i(39105)),o=i(80621),p=i(12421),h=i(48164),u=i(59472),d=i(32656),c=i(61106),y=i(18152),g=i(31518),m=i(21707);const w=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(e,t){const{layer:i}=this;if(!e)return(0,l.reject)(new d.Z("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));const{popupEnabled:r}=i,s=(0,m.V)(i,t);if(!r||!(0,u.pC)(s))throw new d.Z("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:r,popupTemplate:s});const a=await s.getRequiredFields(),n=new g.Z;n.geometry=e,n.outFields=a,n.outSpatialReference=e.spatialReference;const o=this.view.resolution,p="2d"===this.view.type?new c.Z(o,o,this.view.spatialReference):new c.Z(.5*o,.5*o,this.view.spatialReference),{returnTopmostRaster:h,showNoDataRecords:y}=s.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},w={returnDomainValues:!0,returnTopmostRaster:h,pixelSize:p,showNoDataRecords:y};return i.queryVisibleRasters(n,w).then((e=>e))}canResume(){var e;return!(!super.canResume()||null!=(e=this.timeExtent)&&e.isEmpty)}};return(0,r._)([(0,a.Cb)()],t.prototype,"layer",void 0),(0,r._)([(0,a.Cb)({dependsOn:["timeExtent"]})],t.prototype,"suspended",void 0),(0,r._)([(0,a.Cb)(y.qG)],t.prototype,"timeExtent",void 0),(0,r._)([(0,a.Cb)()],t.prototype,"view",void 0),t=(0,r._)([(0,n.j)("esri.views.layers.ImageryLayerView")],t),t};var v=i(81558),x=i(9870),b=i(52937),_=i(96071),f=i(15988),C=i(99322),V=i(17149),E=i(79334);const I=s.Z.getLogger("esri.views.2d.layers.imagery.ImageryGraphicsView2D");let R=class extends((0,v.y)(h.Z)){constructor(){super(...arguments),this.container=new V.W,this._graphicsView=null,this.type="Graphics",this._graphics=new C.ZP,this._updateGraphics=(0,l.debounce)((async(e,t)=>{if(!e.stationary)return;const i=e.state,r=new b.Z({xmin:i.extent.xmin,ymin:i.extent.ymin,xmax:i.extent.xmax,ymax:i.extent.ymax,spatialReference:i.spatialReference}),s=e.state.size[0],a=e.state.size[1],n={};n.timeExtent=this.timeExtent,n.requestAsImageElement=!1,n.signal=t;const o=this._getVectorFieldExportParams({extent:r,width:s,height:a}),p=await this.layer.fetchImage(o.extent,o.width,o.height,n),h=this.layer.renderer;if("vector-field"===h.type){this._pixelData={extent:o.extent,pixelBlock:p.pixelData.pixelBlock};const t=await h.getGraphicsFromPixelData(p.pixelData,"vector-uv"===this.layer.rasterInfo.dataType);this._graphicsView.update(e),await(0,l.after)(0).then((()=>{this._graphics.set("items",t)}))}}))}get updating(){var e;return null==(e=this._graphicsView)?void 0:e.updating}update(e){this._updateGraphics(e).catch((e=>{(0,l.isAbortError)(e)||I.error(e)}))}hitTest(e,t){if(this.suspended)return(0,l.resolve)(null);const i=this.view.toMap((0,_.vW)(e,t));return(0,l.resolve)(new f.Z({attributes:{},geometry:i,layer:this.layer}))}attach(){this._graphicsView=new E.Z({view:this.view,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate()})}detach(){this._graphics.destroy(),this._graphicsView.destroy(),this.container.removeChild(this._graphicsView.container),this._graphicsView=null}moveStart(){}viewChange(){}moveEnd(){}install(e){this.container.addChild(this._graphicsView.container),e.addChild(this.container)}uninstall(e){this.container.removeChild(this._graphicsView.container),e.removeChild(this.container)}isUpdating(){return this._graphicsView.updating||this.updateRequested}getPixelData(){return this.updating?null:this._pixelData}redraw(){}_getVectorFieldExportParams(e){var t,i;let{extent:r,width:s,height:a}=e;const n=this.layer,l=null==(t=n.fullExtent)?void 0:t.xmin,o=null==(i=n.fullExtent)?void 0:i.ymax;let p;"vector-field"===n.renderer.type&&(p=n.renderer.symbolTileSize),p=Math.max(p||0,30),s=Math.ceil(s*(1/p)),a=Math.ceil(a*(1/p));const h=(r.xmax-r.xmin)/s,u=(r.ymax-r.ymin)/a;return r.xmin=l+Math.floor((r.xmin-l)/h)*h,r.xmax=l+Math.ceil((r.xmax-l)/h)*h,r.ymin=o+Math.floor((r.ymin-o)/u)*u,r.ymax=o+Math.ceil((r.ymax-o)/u)*u,{extent:r,width:s,height:a}}};(0,r._)([(0,a.Cb)()],R.prototype,"container",void 0),(0,r._)([(0,a.Cb)()],R.prototype,"layer",void 0),(0,r._)([(0,a.Cb)()],R.prototype,"timeExtent",void 0),(0,r._)([(0,a.Cb)({dependsOn:["_graphicsView.updating"]})],R.prototype,"updating",null),(0,r._)([(0,a.Cb)()],R.prototype,"_graphicsView",void 0),(0,r._)([(0,x.J)({graphics:"Graphics"})],R.prototype,"type",void 0),R=(0,r._)([(0,n.j)("esri.views.2d.layers.imagery.ImageryGraphicsView2D")],R);const D=R;var T=i(44464),k=i(64796),q=i(28511),Z=i(81186);const P=s.Z.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let F=class extends((0,v.y)(h.Z)){constructor(){super(...arguments),this.container=new V.W,this.type="Imagery",this._bitmapView=null}get updating(){var e;return null==(e=this.strategy)?void 0:e.updating}update(e){this.strategy.update(e).catch((e=>{(0,l.isAbortError)(e)||P.error(e)}))}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren()}hitTest(e,t){if(this.suspended)return(0,l.resolve)(null);const i=this.view.toMap((0,_.vW)(e,t));return(0,l.resolve)(new f.Z({attributes:{},geometry:i,layer:this.layer}))}attach(){const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this._bitmapView=new q.c,this.strategy=new Z.Z({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}moveStart(){}viewChange(){}moveEnd(){}install(e){this.container.addChild(this._bitmapView),e.addChild(this.container)}uninstall(e){this.container.removeChild(this._bitmapView),e.removeChild(this.container)}redraw(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const i=e.source;i.pixelBlock=t.pixelBlock,i.filter=e=>this.layer.applyFilter(e),this.container.requestRender()}))}))}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.container.children;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),r=(0,T.Kh)(i,t);return r?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}_fetchImage(e,t,i,r){return(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,this.layer.fetchImage(e,t,i,r).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:r.signal}).then((t=>{const i=new k.Z(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return i.filter=e=>this.layer.applyFilter(e),i}))))}};(0,r._)([(0,a.Cb)()],F.prototype,"container",void 0),(0,r._)([(0,a.Cb)()],F.prototype,"layer",void 0),(0,r._)([(0,a.Cb)()],F.prototype,"strategy",void 0),(0,r._)([(0,a.Cb)()],F.prototype,"timeExtent",void 0),(0,r._)([(0,a.Cb)({dependsOn:["strategy.updating"]})],F.prototype,"updating",null),(0,r._)([(0,x.J)({imagery:"Imagery"})],F.prototype,"type",void 0),F=(0,r._)([(0,n.j)("esri.views.2d.layers.imagery.ImageryView2D")],F);const M=F;let U=class extends(w((0,p.y)((0,v.y)(h.Z)))){constructor(){super(...arguments),this._exportImageVersion=-1}get pixelData(){return this.updating?null:this.subview.getPixelData()}get updating(){return!(this.subview&&!this.subview.updating)}hitTest(e,t){return this.suspended||!this.subview?(0,l.resolve)(null):this.subview.hitTest(e,t)}update(e){var t;null==(t=this.subview)||t.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.handles.add([(0,o.init)(this,"layer.exportImageServiceParameters.version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())})),this.watch("timeExtent",(()=>{this.subview.timeExtent=this.timeExtent,this.requestUpdate()})),this.layer.on("redraw",(()=>this.subview.redraw())),(0,o.watch)(this.layer,"renderer",(()=>this._setSubView()))],"imagerylayerview-update")}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.subview.destroy(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||this.subview.isUpdating()}_setSubView(){var e;let t="Imagery";var i,r;"vector-field"===(null==(e=this.layer.renderer)?void 0:e.type)&&"lerc"===this.layer.format&&(t="Graphics"),this.subview&&this.subview.type===t||(null==(i=this.subview)||i.uninstall(this.container),null==(r=this.subview)||r.destroy(),this.subview="Imagery"===t?new M({layer:this.layer,view:this.view}):new D({layer:this.layer,view:this.view}),this.subview.attach(),this.subview.install(this.container)),this.requestUpdate()}};(0,r._)([(0,a.Cb)({dependsOn:["updating"]})],U.prototype,"pixelData",null),(0,r._)([(0,a.Cb)({readOnly:!0,dependsOn:["subview.updating"]})],U.prototype,"updating",null),(0,r._)([(0,a.Cb)()],U.prototype,"subview",void 0),U=(0,r._)([(0,n.j)("esri.views.2d.layers.ImageryLayerView2D")],U);const B=U},21707:(e,t,i)=>{"use strict";i.d(t,{V:()=>n,e:()=>a});var r=i(59472),s=i(4665);async function a(e,t=e.popupTemplate){if(!(0,r.pC)(t))return[];const i=await t.getRequiredFields(e.fields),{lastEditInfoEnabled:a}=t,{objectIdField:n,typeIdField:l,globalIdField:o,relationships:p}=e;if(i.includes("*"))return["*"];const h=a?await(0,s.CH)(e):[],u=(0,s.Q0)(e.fields,[...i,...h]);return l&&u.push(l),u&&n&&(0,s.cT)(e.fields,n)&&-1===u.indexOf(n)&&u.push(n),u&&o&&(0,s.cT)(e.fields,o)&&-1===u.indexOf(o)&&u.push(o),p&&p.forEach((t=>{const{keyField:i}=t;u&&i&&(0,s.cT)(e.fields,i)&&-1===u.indexOf(i)&&u.push(i)})),u}function n(e,t){return e.popupTemplate?e.popupTemplate:(0,r.pC)(t)&&t.defaultPopupTemplateEnabled&&(0,r.pC)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}}}]);
//# sourceMappingURL=6685.js.map