(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[5612],{5612:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>G});var n,i=r(56140),s=(r(95830),r(82550)),a=r(34926),l=r(59472),o=(r(36544),r(68055)),u=r(79881),p=r(56274),d=r(30590),m=r(87566),c=r(60538),y=r(10923),h=(r(57002),r(86035),r(39105)),f=r(65131),g=r(27780),b=r(73032),v=r(52937),x=r(83477),w=r(58484),_=r(54721),E=r(15988),S=r(59691),I=r(78452),C=r(56700),O=r(43072),N=r(97849),F=r(18152),T=r(78910),R=r(57407),U=r(33716),L=r(2194),j=r(10113),A=r(2584),M=r(66002),P=r(48609),Z=r(58807),q=r(60263);let D=0,W=n=class extends O.w{constructor(e){super(e),this._sublayersHandles=new S.Z,this.dimensions=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.legendUrl=null,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.popupEnabled=!1,this.queryable=!1,this.spatialReferences=null}get description(){return this._get("description")}set description(e){this._set("description",e)}get fullExtent(){return this._get("fullExtent")}set fullExtent(e){this._set("fullExtent",e)}readExtent(e,t){return(e=t.extent)?v.Z.fromJSON(e):null}get id(){const e=this._get("id");return null==e?D++:e}set id(e){this._set("id",e)}readLegendUrl(e,t){return t?t.legendUrl||t.legendURL:null}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((t=>t.layer=e))}get name(){return this._get("name")}set name(e){this._set("name",e)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach((e=>{e.layer=null})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this._sublayersHandles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))])),this._set("sublayers",e)}castSublayers(e){return(0,o.se)(x.Z.ofType(n),e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get visible(){return this._get("visible")}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){const e=new n;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents.map((e=>e.clone()))),this.hasOwnProperty("featureInfoFormat")&&(e.featureInfoFormat=this.featureInfoFormat),this.hasOwnProperty("featureInfoUrl")&&(e.featureInfoUrl=this.featureInfoUrl),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map((e=>e.clone()))),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences.map((e=>e))),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};(0,i._)([(0,u.Cb)()],W.prototype,"description",null),(0,i._)([(0,u.Cb)({readOnly:!0})],W.prototype,"dimensions",void 0),(0,i._)([(0,u.Cb)({value:null})],W.prototype,"fullExtent",null),(0,i._)([(0,d.r)("fullExtent",["extent"])],W.prototype,"readExtent",null),(0,i._)([(0,u.Cb)()],W.prototype,"fullExtents",void 0),(0,i._)([(0,u.Cb)()],W.prototype,"featureInfoFormat",void 0),(0,i._)([(0,u.Cb)()],W.prototype,"featureInfoUrl",void 0),(0,i._)([(0,u.Cb)({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],W.prototype,"id",null),(0,i._)([(0,u.Cb)({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],W.prototype,"legendUrl",void 0),(0,i._)([(0,d.r)(["web-document"],"legendUrl")],W.prototype,"readLegendUrl",null),(0,i._)([(0,u.Cb)({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],W.prototype,"legendEnabled",void 0),(0,i._)([(0,u.Cb)({value:null})],W.prototype,"layer",null),(0,i._)([(0,u.Cb)()],W.prototype,"maxScale",void 0),(0,i._)([(0,u.Cb)()],W.prototype,"minScale",void 0),(0,i._)([(0,u.Cb)({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],W.prototype,"name",null),(0,i._)([(0,u.Cb)()],W.prototype,"parent",void 0),(0,i._)([(0,u.Cb)({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],W.prototype,"popupEnabled",void 0),(0,i._)([(0,u.Cb)({type:Boolean,json:{write:{ignoreOrigin:!0}}})],W.prototype,"queryable",void 0),(0,i._)([(0,u.Cb)()],W.prototype,"sublayers",null),(0,i._)([(0,q.p)("sublayers")],W.prototype,"castSublayers",null),(0,i._)([(0,u.Cb)({type:[Number],json:{read:{source:"spatialReferences"}}})],W.prototype,"spatialReferences",void 0),(0,i._)([(0,u.Cb)({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],W.prototype,"title",null),(0,i._)([(0,u.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],W.prototype,"visible",null),W=n=(0,i._)([(0,m.j)("esri.layers.support.WMSSublayer")],W);const H=W,k=new p.Xn({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});let V=class extends((0,R.h)((0,A.n)((0,L.Q)((0,j.M)((0,T.q)((0,U.I)((0,O.R)(C.Z)))))))){constructor(...e){super(...e),this._sublayersHandles=new S.Z,this.allSublayers=new I.Z({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>e.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.url=null,this.version=null,this.watch("sublayers",((e,t)=>{t&&(t.forEach((e=>{e.layer=null})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this})),this._sublayersHandles||(this._sublayersHandles=new S.Z),this._sublayersHandles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))]))}),!0)}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){var e;null==(e=this._exportWMSImageParameters)||e.destroy()}load(e){const t=(0,l.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).then((()=>this._fetchService(t)),(()=>this._fetchService(t)))),(0,h.resolve)(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return new v.Z({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]})}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.indexOf("image/png")>-1?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new b.Z(t.spatialReferences[0])}writeSpatialReferences(e,t){const r=this.spatialReference&&this.spatialReference.wkid;e&&r?(t.spatialReferences=e.filter((e=>e!==r)),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return B(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return B(t.layers,r)}writeSublayers(e,t,r,n){t.layers=[];const i=new Map,s=e.flatten((({sublayers:e})=>e&&e.toArray())).toArray();s.forEach((e=>{"number"==typeof e.parent.id&&(i.has(e.parent.id)?i.get(e.parent.id).push(e.id):i.set(e.parent.id,[e.id]))})),s.forEach((e=>{const r={sublayer:e,...n},s=e.write({parentLayerId:"number"==typeof e.parent.id?e.parent.id:-1},r);if(i.has(e.id)&&(s.sublayerIds=i.get(e.id)),!e.sublayers&&e.name){const n=e.write({},r);delete n.id,t.layers.push(n)}})),t.visibleLayers=s.filter((e=>e.visible&&!e.sublayers)).map((e=>e.name))}createExportImageParameters(e,t,r,n){var i;const s=n&&n.pixelRatio||1,a=(0,M.yZ)({extent:e,width:t})*s;return null==(i=this._exportWMSImageParameters)||i.destroy(),this._exportWMSImageParameters=new Z.Z({layer:this,extent:e,scale:a}),this._exportWMSImageParameters.toJSON()}async fetchImage(e,t,r,n){var i,s;const a=this.mapUrl,l=this.createExportImageParameters(e,t,r,n);if(!l.layers){const e=document.createElement("canvas");return e.width=t,e.height=r,e}const o=null==n||null==(i=n.timeExtent)?void 0:i.start,u=null==n||null==(s=n.timeExtent)?void 0:s.end,p=o&&u?o.getTime()===u.getTime()?(0,P.Y6)(o):`${(0,P.Y6)(o)}/${(0,P.Y6)(u)}`:void 0,d={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...l,time:p}),signal:null==n?void 0:n.signal};return null!=n&&n.timestamp&&(d.query={_ts:n.timestamp,...d.query}),(0,_.default)(a,d).then((e=>e.data))}fetchFeatureInfo(e,t,r,n,i){const s=(0,P.xX)(this._exportWMSImageParameters.visibleSublayers);if(!this.featureInfoUrl||!s)return null;const a="1.3.0"===this.version?{I:n,J:i}:{x:n,y:i},l={query_layers:s,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,...a};let o={...this.createExportImageParameters(e,t,r),...l};return o=this._mixCustomParameters(o),(0,_.default)(this.featureInfoUrl,{query:o,responseType:"text"}).then((e=>{let t=this.featureInfoUrl;t+=-1===t.indexOf("?")?"?":"";for(const e in o)t+="?"===t.substring(t.length-1,t.length)?"":"&",t+=e+"="+o[e];const r=document.createElement("iframe");return r.src=t,r.frameBorder="0",r.marginHeight="0",r.marginWidth="0",r.innerHTML=e.data,r.style.width="100%",new E.Z({sourceLayer:this,popupTemplate:new w.default({title:this.title,content:r})})}))}findSublayerById(e){return this.allSublayers.find((t=>t.id===e))}findSublayerByName(e){return this.allSublayers.find((t=>t.name===e))}supportsSpatialReference(e){return(0,N.G)(this.url)||this.spatialReferences.some((t=>{const r=900913===t?b.Z.WebMercator:new b.Z({wkid:t});return(0,g.fS)(r,e)}))}async _fetchService(e){if(!this.resourceInfo){this.parsedUrl.query&&this.parsedUrl.query.service&&(this.parsedUrl.query.SERVICE=this.parsedUrl.query.service,delete this.parsedUrl.query.service),this.parsedUrl.query&&this.parsedUrl.query.request&&(this.parsedUrl.query.REQUEST=this.parsedUrl.query.request,delete this.parsedUrl.query.request);const t=await(0,_.default)(this.parsedUrl.path,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...this.parsedUrl.query,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=(0,P.V4)(t.data)}if(this.parsedUrl){const e=new y.R9(this.parsedUrl.path);"https"!==e.scheme||e.port&&"443"!==e.port||-1!==a.Z.request.httpsDomains.indexOf(e.host)||a.Z.request.httpsDomains.push(e.host)}this.read(this.resourceInfo,{origin:"service"})}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function B(e,t,r){const n=new Map;e.every((e=>null==e.id))&&(e=(0,s.d9)(e)).forEach(((e,t)=>e.id=t));for(const i of e){const e=new H;e.read(i,t),-1===(null==r?void 0:r.indexOf(e.name))&&(e.visible=!1),n.set(e.id,e)}const i=[];for(const t of e){const e=n.get(t.id);if(null!=t.parentLayerId&&t.parentLayerId>=0){const r=n.get(t.parentLayerId);r.sublayers||(r.sublayers=new x.Z),r.sublayers.unshift(e)}else i.unshift(e)}return i}(0,i._)([(0,u.Cb)({readOnly:!0})],V.prototype,"allSublayers",void 0),(0,i._)([(0,u.Cb)({json:{type:Object,write:!0}})],V.prototype,"customParameters",void 0),(0,i._)([(0,u.Cb)({json:{type:Object,write:!0}})],V.prototype,"customLayerParameters",void 0),(0,i._)([(0,u.Cb)({type:String,json:{write:!0}})],V.prototype,"copyright",void 0),(0,i._)([(0,u.Cb)()],V.prototype,"description",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],V.prototype,"dimensions",void 0),(0,i._)([(0,u.Cb)({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{service:{read:{source:"extent"}}}}})],V.prototype,"fullExtent",void 0),(0,i._)([(0,d.r)(["web-document","portal-item"],"fullExtent",["extent"])],V.prototype,"readFullExtentFromItemOrMap",null),(0,i._)([(0,c.c)(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],V.prototype,"writeFullExtent",null),(0,i._)([(0,u.Cb)()],V.prototype,"fullExtents",void 0),(0,i._)([(0,u.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],V.prototype,"featureInfoFormat",void 0),(0,i._)([(0,u.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],V.prototype,"featureInfoUrl",void 0),(0,i._)([(0,u.Cb)({type:String,json:{origins:{"web-document":{default:"image/png",type:k.jsonValues,read:{reader:k.read,source:"format"},write:{writer:k.write,target:"format"}}}}})],V.prototype,"imageFormat",void 0),(0,i._)([(0,d.r)("imageFormat",["supportedImageFormatTypes"])],V.prototype,"readImageFormat",null),(0,i._)([(0,u.Cb)({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],V.prototype,"imageMaxHeight",void 0),(0,i._)([(0,u.Cb)({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],V.prototype,"imageMaxWidth",void 0),(0,i._)([(0,u.Cb)()],V.prototype,"imageTransparency",void 0),(0,i._)([(0,u.Cb)(F.rn)],V.prototype,"legendEnabled",void 0),(0,i._)([(0,u.Cb)({type:["show","hide","hide-children"]})],V.prototype,"listMode",void 0),(0,i._)([(0,u.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],V.prototype,"mapUrl",void 0),(0,i._)([(0,u.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],V.prototype,"isReference",void 0),(0,i._)([(0,u.Cb)({type:["WMS"]})],V.prototype,"operationalLayerType",void 0),(0,i._)([(0,u.Cb)({type:b.Z,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],V.prototype,"spatialReference",void 0),(0,i._)([(0,d.r)(["web-document","portal-item"],"spatialReference",["spatialReferences"])],V.prototype,"readSpatialReferenceFromItemOrDocument",null),(0,i._)([(0,u.Cb)({type:[o.z8],json:{read:{source:"spatialReferences"},write:{ignoreOrigin:!0}}})],V.prototype,"spatialReferences",void 0),(0,i._)([(0,c.c)(["web-document","portal-item"],"spatialReferences")],V.prototype,"writeSpatialReferences",null),(0,i._)([(0,u.Cb)({type:x.Z.ofType(H),json:{write:{target:"layers",overridePolicy(e,t,r){if(function(e,t){return e.some((e=>{for(const r in e)if((0,f.df)(e,r,null,t))return!0;return!1}))}(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],V.prototype,"sublayers",void 0),(0,i._)([(0,d.r)(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],V.prototype,"readSublayersFromItemOrMap",null),(0,i._)([(0,d.r)("service","sublayers",["layers"])],V.prototype,"readSublayers",null),(0,i._)([(0,c.c)("sublayers",{layers:{type:[H]},visibleLayers:{type:[String]}})],V.prototype,"writeSublayers",null),(0,i._)([(0,u.Cb)({json:{read:!1},readOnly:!0,value:"wms"})],V.prototype,"type",void 0),(0,i._)([(0,u.Cb)(F.HQ)],V.prototype,"url",void 0),(0,i._)([(0,u.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],V.prototype,"version",void 0),V=(0,i._)([(0,m.j)("esri.layers.WMSLayer")],V);const G=V},2584:(e,t,r)=>{"use strict";r.d(t,{n:()=>m});var n=r(56140),i=(r(95830),r(36544),r(68055),r(79881)),s=r(30590),a=r(87566),l=(r(10923),r(57002),r(86035),r(4665)),o=r(98034),u=r(87864),p=r(40522),d=r(56602);const m=e=>{let t=class extends e{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(e,t){const r=t.timeInfo.exportOptions;if(!r)return null;const n=r.timeOffset,i=o.vU.fromJSON(r.timeOffsetUnits);return n&&i?new p.Z({value:n,unit:i}):null}set timeInfo(e){(0,l.UF)(e,this.fields),this._set("timeInfo",e)}};return(0,n._)([(0,i.Cb)({type:u.Z,json:{write:!1}})],t.prototype,"timeExtent",void 0),(0,n._)([(0,i.Cb)({type:p.Z})],t.prototype,"timeOffset",void 0),(0,n._)([(0,s.r)("service","timeOffset",["timeInfo.exportOptions"])],t.prototype,"readOffset",null),(0,n._)([(0,i.Cb)({value:null,type:d.Z,json:{write:!0,origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"timeInfo",null),(0,n._)([(0,i.Cb)({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],t.prototype,"useViewTime",void 0),t=(0,n._)([(0,a.j)("esri.layers.mixins.TemporalLayer")],t),t}},58807:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(56140),i=(r(95830),r(36544),r(68055),r(79881)),s=r(87566),a=(r(10923),r(57002),r(86035),r(82677)),l=r(59691),o=r(18152),u=r(48609);const p={visible:"visibleSublayers"},d=[102100,3857,102113,900913],m=[3395,54004];let c=class extends a.default{constructor(){super(...arguments),this._layerHandles=new l.Z,this.extent=null,this._scale=null,this.view=null}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this._layerHandles&&(this._layerHandles.removeAll(),this._layerHandles=null),e&&(this._layerHandles||(this._layerHandles=new l.Z),this._layerHandles.add([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(p[e.propertyName])))])))}get layers(){const{visibleSublayers:e}=this;return e.filter((e=>e.name)).map((e=>e.name)).join(",")}get scale(){return null!=this._scale?this._scale:this.view&&this.view.scale||0}set scale(e){this.view||(this._scale=e,this.notifyChange("scale"))}get version(){return(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,{sublayers:r}=e,n=[],i=e=>{const{minScale:r,maxScale:s,sublayers:a,visible:l}=e;l&&(0===t||(0===r||t<=r)&&(0===s||t>=s))&&(a?a.forEach(i):n.unshift(e))};return null==r||r.forEach(i),n}get wkid(){const{extent:e,layer:t}=this,r=t.spatialReferences;let n=e.spatialReference&&e.spatialReference.wkid;r&&-1===r.indexOf(n)&&e.spatialReference.latestWkid&&(n=e.spatialReference.latestWkid);const i=d.some((e=>e===n));if(!r)return n;if(i){const e=[];r.forEach((t=>{d.indexOf(t)>-1&&e.push(t)})),e.length||r.forEach((t=>{m.indexOf(t)>-1&&e.push(t)})),n=e.length>0?e[0]:d[0]}return n}toJSON(){const{extent:e,layer:t,layers:r}=this,{imageFormat:n,imageTransparency:i,spatialReferences:s,version:a}=t;let{wkid:l}=this;s&&-1===s.indexOf(l)&&e.spatialReference.latestWkid&&(l=e.spatialReference.latestWkid);const{xmin:o,ymin:p,xmax:d,ymax:m}=e,c={bbox:"1.3.0"===t.version&&(0,u.QZ)(l)?`${p},${o},${m},${d}`:`${o},${p},${d},${m}`,format:n,request:"GetMap",service:"WMS",styles:"",transparent:i,version:a};return isNaN(l)||("1.3.0"===a?c.crs="EPSG:"+l:c.srs="EPSG:"+l),{...c,layers:r}}};(0,n._)([(0,i.Cb)()],c.prototype,"extent",void 0),(0,n._)([(0,i.Cb)()],c.prototype,"layer",null),(0,n._)([(0,i.Cb)({readOnly:!0,dependsOn:["visibleSublayers"]})],c.prototype,"layers",null),(0,n._)([(0,i.Cb)({type:Number,dependsOn:["view.scale"]})],c.prototype,"scale",null),(0,n._)([(0,i.Cb)(o.qG)],c.prototype,"timeExtent",void 0),(0,n._)([(0,i.Cb)({type:Number,dependsOn:["layers","layer.imageTransparency","timeExtent"],readOnly:!0})],c.prototype,"version",null),(0,n._)([(0,i.Cb)()],c.prototype,"view",void 0),(0,n._)([(0,i.Cb)({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],c.prototype,"visibleSublayers",null),(0,n._)([(0,i.Cb)({dependsOn:[],autoTracked:!1})],c.prototype,"wkid",null),c=(0,n._)([(0,s.j)("esri.layers.support.ExportWMSImageParameters")],c);const y=c},56602:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n,i=r(56140),s=(r(95830),r(82550)),a=(r(36544),r(68055),r(79881)),l=r(30590),o=r(87566),u=r(60538),p=(r(10923),r(57002),r(86035),r(58385)),d=r(98034),m=r(87864),c=r(40522);let y=n=class extends p.wq{constructor(e){super(e),this.respectsDaylightSaving=!1,this.timezone=null}readRespectsDaylightSaving(e,t){return void 0!==t.respectsDaylightSaving?t.respectsDaylightSaving:void 0!==t.respectDaylightSaving&&t.respectDaylightSaving}clone(){const{respectsDaylightSaving:e,timezone:t}=this;return new n({respectsDaylightSaving:e,timezone:t})}};(0,i._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],y.prototype,"respectsDaylightSaving",void 0),(0,i._)([(0,l.r)("respectsDaylightSaving",["respectsDaylightSaving","respectDaylightSaving"])],y.prototype,"readRespectsDaylightSaving",null),(0,i._)([(0,a.Cb)({type:String,json:{read:{source:"timeZone"},write:{target:"timeZone"}}})],y.prototype,"timezone",void 0),y=n=(0,i._)([(0,o.j)("esri.layers.support.TimeReference")],y);const h=y;var f;let g=f=class extends p.wq{constructor(e){super(e),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeReference=null,this.trackIdField=null,this.useTime=!0}readFullTimeExtent(e,t){if(!t.timeExtent||!Array.isArray(t.timeExtent)||2!==t.timeExtent.length)return null;const r=new Date(t.timeExtent[0]),n=new Date(t.timeExtent[1]);return new m.Z({start:r,end:n})}writeFullTimeExtent(e,t){e&&e.start&&e.end?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null}readInterval(e,t){return t.timeInterval&&t.timeIntervalUnits?new c.Z({value:t.timeInterval,unit:d.vU.fromJSON(t.timeIntervalUnits)}):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?new c.Z({value:t.defaultTimeInterval,unit:d.vU.fromJSON(t.defaultTimeIntervalUnits)}):null}writeInterval(e,t){if(e){const r=e.toJSON();t.timeInterval=r.value,t.timeIntervalUnits=r.unit}else t.timeInterval=null,t.timeIntervalUnits=null}clone(){const{cumulative:e,endField:t,hasLiveData:r,interval:n,startField:i,timeReference:a,fullTimeExtent:l,trackIdField:o,useTime:u}=this;return new f({cumulative:e,endField:t,hasLiveData:r,interval:n,startField:i,timeReference:(0,s.d9)(a),fullTimeExtent:(0,s.d9)(l),trackIdField:o,useTime:u})}};(0,i._)([(0,a.Cb)({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],g.prototype,"cumulative",void 0),(0,i._)([(0,a.Cb)({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],g.prototype,"endField",void 0),(0,i._)([(0,a.Cb)({type:m.Z,json:{write:{enabled:!0,allowNull:!0}}})],g.prototype,"fullTimeExtent",void 0),(0,i._)([(0,l.r)("fullTimeExtent",["timeExtent"])],g.prototype,"readFullTimeExtent",null),(0,i._)([(0,u.c)("fullTimeExtent")],g.prototype,"writeFullTimeExtent",null),(0,i._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],g.prototype,"hasLiveData",void 0),(0,i._)([(0,a.Cb)({type:c.Z,json:{write:{enabled:!0,allowNull:!0}}})],g.prototype,"interval",void 0),(0,i._)([(0,l.r)("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],g.prototype,"readInterval",null),(0,i._)([(0,u.c)("interval")],g.prototype,"writeInterval",null),(0,i._)([(0,a.Cb)({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],g.prototype,"startField",void 0),(0,i._)([(0,a.Cb)({type:h,json:{write:{enabled:!0,allowNull:!0}}})],g.prototype,"timeReference",void 0),(0,i._)([(0,a.Cb)({type:String,json:{write:{enabled:!0,allowNull:!0}}})],g.prototype,"trackIdField",void 0),(0,i._)([(0,a.Cb)({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],g.prototype,"useTime",void 0),g=f=(0,i._)([(0,o.j)("esri.layers.support.TimeInfo")],g);const b=g},48609:(e,t,r)=>{"use strict";r.d(t,{QZ:()=>p,xX:()=>d,V4:()=>u,Y6:()=>F});var n=r(32656),i=r(10923),s=r(73032),a=r(52937);const l=[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],o={84:4326,83:4269,27:4267};function u(e){if(!e)return null;const t={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));const r=e.documentElement;if("ServiceExceptionReport"===r.nodeName){const e=Array.prototype.slice.call(r.childNodes).map((e=>e.textContent)).join("\r\n");throw new n.Z("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",e)}const i=y("Capability",r),s=y("Service",r),l=y("Request",i);if(!i||!s||!l)return null;const o=y("Layer",i);if(!o)return null;const u="WMS_Capabilities"===r.nodeName||"WMT_MS_Capabilities"===r.nodeName?r.getAttribute("version"):"1.3.0",p=f("Title",s,"")||f("Name",s,""),d=f("AccessConstraints",s,""),c=f("Abstract",s,""),h=parseInt(f("MaxWidth",s,"5000"),10),g=parseInt(f("MaxHeight",s,"5000"),10),x=v(l,"GetMap"),_=b(l,"GetMap"),S=w(o,u,t);let I,C,O,N,F=0;if(Array.prototype.slice.call(i.childNodes).forEach((e=>{"Layer"===e.nodeName&&(0===F?I=e:1===F?(S.name&&(S.name="",S.sublayers.push(w(I,u,t))),S.sublayers.push(w(e,u,t))):S.sublayers.push(w(e,u,t)),F++)})),!S)return null;const T=S.fullExtents;if(C=S.sublayers,C||(C=[]),0===C.length&&C.push(S),O=S.extent,!O){const e=new a.Z(C[0].extent);S.extent=e.toJSON(),O=S.extent}if(N=S.spatialReferences,!N.length&&C.length>0){const e=t=>{let r=[];return t.sublayers.forEach((t=>{!r.length&&t.spatialReferences.length&&(r=t.spatialReferences||e(t))})),r};C.forEach((t=>{N.length||(N=t.spatialReferences||e(t))}))}const R=b(l,"GetFeatureInfo");let U;if(R){const e=v(l,"GetFeatureInfo");e.indexOf("text/html")>-1?U="text/html":e.indexOf("text/plain")>-1&&(U="text/plain")}if(!U){const e=function(t){t&&(t.queryable=!1,t.sublayers&&t.sublayers.forEach((t=>{e(t)})))};e(S)}const L=m(C),j=S.minScale||0,A=S.maxScale||0,M=S.dimensions,P=L.reduce(((e,t)=>e.concat(t.dimensions)),[]),Z=M.concat(P).filter(E);let q=null;if(Z.length>0){let e=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;Z.forEach((r=>{const{extent:n}=r;var i;i=n,Array.isArray(i)&&i.length>0&&i[0]instanceof Date?n.forEach((r=>{e=Math.min(e,r.getTime()),t=Math.max(t,r.getTime())})):n.forEach((r=>{e=Math.min(e,r.min.getTime()),t=Math.max(t,r.max.getTime())}))})),q={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[e,t]}}return{copyright:d,description:c,dimensions:M,extent:O,fullExtents:T,featureInfoFormat:U,featureInfoUrl:R,mapUrl:_,maxWidth:h,maxHeight:g,maxScale:A,minScale:j,layers:L,spatialReferences:N,supportedImageFormatTypes:x,timeInfo:q,title:p,version:u}}function p(e){return l.some((t=>{const r=t[0],n=t[1];return e>=r&&e<=n}))}function d(e){return e.length?e.filter((e=>e.popupEnabled&&e.name&&e.queryable)).map((e=>e.name)).join(","):""}function m(e){let t=[];return e.forEach((e=>{t.push(e),e.sublayers&&e.sublayers.length&&(t=t.concat(m(e.sublayers)),delete e.sublayers)})),t}function c(e,t,r){var n;return null!=(n=t.getAttribute(e))?n:r}function y(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(_(n)&&n.nodeName===e)return n}return null}function h(e,t){const r=[];for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n];_(i)&&i.nodeName===e&&r.push(i)}return r}function f(e,t,r){const n=y(e,t);return n?n.textContent:r}function g(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),i=parseFloat(e.getAttribute("miny")),l=parseFloat(e.getAttribute("maxx")),o=parseFloat(e.getAttribute("maxy"));let u,p,d,m;r?(u=isNaN(i)?-Number.MAX_VALUE:i,p=isNaN(n)?-Number.MAX_VALUE:n,d=isNaN(o)?Number.MAX_VALUE:o,m=isNaN(l)?Number.MAX_VALUE:l):(u=isNaN(n)?-Number.MAX_VALUE:n,p=isNaN(i)?-Number.MAX_VALUE:i,d=isNaN(l)?Number.MAX_VALUE:l,m=isNaN(o)?Number.MAX_VALUE:o);const c=new s.Z({wkid:t});return new a.Z({xmin:u,ymin:p,xmax:d,ymax:m,spatialReference:c})}function b(e,t){const r=y(t,e);if(r){const e=y("DCPType",r);if(e){const t=y("HTTP",e);if(t){const e=y("Get",t);if(e){let t=function(e,t,r,n){const i=y("OnlineResource",r);return i?c("xlink:href",i,null):null}(0,0,e);if(t)return t.indexOf("&")===t.length-1&&(t=t.substring(0,t.length-1)),function(e,t){const r=[],n=(0,i.mN)(e);for(const e in n.query)n.query.hasOwnProperty(e)&&-1===t.indexOf(e.toLowerCase())&&r.push(e+"="+n.query[e]);return n.path+(r.length?"?"+r.join("&"):"")}(t,["service","request"])}}}}return null}function v(e,t){const r=h("Operation",e);if(0===r.length)return h("Format",y(t,e)).map((e=>e.textContent));const n=[];return r.forEach((e=>{e.getAttribute("name")===t&&h("Format",e).forEach((e=>{n.push(e.textContent)}))})),n}function x(e,t,r){const n=y(t,e);if(!n)return r;const{textContent:i}=n;if(null==i||""===i)return r;const s=Number(i);return isNaN(s)?r:s}function w(e,t,r){var n;if(!e)return null;const i={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},l=y("LatLonBoundingBox",e),u=y("EX_GeographicBoundingBox",e);let d=null;l&&(d=g(l,4326)),u&&(d=new a.Z(0,0,0,0,new s.Z({wkid:4326})),d.xmin=parseFloat(f("westBoundLongitude",u,"0")),d.ymin=parseFloat(f("southBoundLatitude",u,"0")),d.xmax=parseFloat(f("eastBoundLongitude",u,"0")),d.ymax=parseFloat(f("northBoundLatitude",u,"0"))),l||u||(d=new a.Z(-180,-90,180,90,new s.Z({wkid:4326}))),i.minScale=x(e,"MaxScaleDenominator",0),i.maxScale=x(e,"MinScaleDenominator",0);const m=["1.0.0","1.1.0","1.1.1"].indexOf(t)>-1?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((e=>{if("Name"===e.nodeName)i.name=e.textContent||"";else if("Title"===e.nodeName)i.title=e.textContent||"";else if("Abstract"===e.nodeName)i.description=e.textContent||"";else if("BoundingBox"===e.nodeName){const r=e.getAttribute(m);if(r&&0===r.indexOf("EPSG:")){const n=parseInt(r.substring(5),10);0===n||isNaN(n)||d||(d="1.3.0"===t?g(e,n,p(n)):g(e,n))}const n=r&&r.indexOf(":");if(n&&n>-1){let s=parseInt(r.substring(n+1,r.length),10);0===s||isNaN(s)||(s=o[s]?o[s]:s);const a="1.3.0"===t?g(e,s,p(s)):g(e,s);i.fullExtents.push(a)}}else if(e.nodeName===m)e.textContent.split(" ").forEach((e=>{0===(e=e.indexOf(":")>-1?parseInt(e.split(":")[1],10):parseInt(e,10))||isNaN(e)||(o[e]&&(e=o[e]),-1===i.spatialReferences.indexOf(e)&&i.spatialReferences.push(e))}));else if("Style"!==e.nodeName||i.legendURL){if("Layer"===e.nodeName){const n=w(e,t,r);n&&(n.parentLayerId=i.id,i.sublayers||(i.sublayers=[]),i.sublayers.push(n))}}else{const t=y("LegendURL",e);if(t){const e=y("OnlineResource",t);e&&(i.legendURL=e.getAttribute("xlink:href"))}}})),i.extent=null==(n=d)?void 0:n.toJSON(),i.dimensions=h("Dimension",e).filter((e=>e.getAttribute("name")&&e.getAttribute("units")&&e.textContent)).map((e=>{const t=e.getAttribute("name"),r=e.getAttribute("units"),n=e.textContent,i=e.getAttribute("unitSymbol"),s=e.getAttribute("default"),a="0"!==c("default",e,"0"),l="0"!==c("nearestValue",e,"0"),o="0"!==c("current",e,"0");return/^time$/i.test(t)&&/^ISO8601$/i.test(r)?{name:"time",units:"ISO8601",extent:C(n),default:C(s),multipleValues:a,nearestValue:l,current:o}:/^elevation$/i.test(t)?{name:"elevation",units:r,extent:S(n),unitSymbol:i,default:S(s),multipleValues:a,nearestValue:l}:{name:t,units:r,extent:I(n),unitSymbol:i,default:I(s),multipleValues:a,nearestValue:l}})),i}function _(e){return e.nodeType===Node.ELEMENT_NODE}function E(e){return"time"===e.name}function S(e){if(!e)return null;const t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter((e=>e)):r.map((e=>parseFloat(e)))}function I(e){if(!e)return null;const t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter((e=>e)):r}function C(e){if(!e)return null;const t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:new Date(t[0]),max:new Date(t[1]),resolution:t.length>=3&&"0"!==t[2]?O(t[2]):void 0}})).filter((e=>e)):r.map((e=>new Date(e)))}function O(e){const t=e.match(/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i);return t?{years:N(t[1]),months:N(t[2]),days:N(t[3]),hours:N(t[4]),minutes:N(t[5]),seconds:N(t[6])}:null}function N(e){if(!e)return 0;const t=e.match(/(?:\d+(?:.|,)\d+|\d+)/);if(!t)return 0;const r=t[0].replace(",",".");return Number(r)}function F(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}}}]);
//# sourceMappingURL=5612.js.map