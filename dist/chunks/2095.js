(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[2095],{35326:(t,e,r)=>{"use strict";r.d(e,{I:()=>n});var i=r(56140),s=r(87566);let o=0;const n=t=>{let e=class extends t{constructor(...t){super(...t),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+o++})}};return e=(0,i._)([(0,s.j)("esri.core.Identifiable")],e),e};let a=class extends(n(class{})){};a=(0,i._)([(0,s.j)("esri.core.Identifiable")],a)},43072:(t,e,r)=>{"use strict";r.d(e,{R:()=>_,w:()=>O});var i=r(56140),s=r(65575),o=r(87566),n=r(9678),a=r(82677),l=r(65131),p=r(59472),u=r(17771),c=r(82550);class h{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(n.kk),this._values=new Map}clone(t){const e=new h,r=this._originStores[0];r&&r.forEach(((t,r)=>{e.set(r,(0,c.d9)(t),0)}));for(let r=2;r<n.kk;r++){const i=this._originStores[r];i&&i.forEach(((i,s)=>{t&&t.has(s)||e.set(s,(0,c.d9)(i),r)}))}return e}get(t,e){const r=void 0===e?this._values:this._originStores[e];return r?r.get(t):void 0}keys(t){const e=null==t?this._values:this._originStores[t];return e?[...e.keys()]:[]}set(t,e,r=6){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(t,e),!this._values.has(t)||(0,p.j0)(this._propertyOriginMap.get(t))<=r){const i=this._values.get(t);return this._values.set(t,e),this._propertyOriginMap.set(t,r),i!==e}return!1}delete(t,e=6){const r=this._originStores[e];if(!r)return;const i=r.get(t);if(r.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===e){this._values.delete(t);for(let r=e-1;r>=0;r--){const e=this._originStores[r];if(e&&e.has(t)){this._values.set(t,e.get(t)),this._propertyOriginMap.set(t,r);break}}}return i}has(t,e){const r=void 0===e?this._values:this._originStores[e];return!!r&&r.has(t)}revert(t,e){for(;e>0&&!this.has(t,e);)--e;const r=this._originStores[e],i=r&&r.get(t),s=this._values.get(t);return this._values.set(t,i),this._propertyOriginMap.set(t,e),s!==i}originOf(t){return this._propertyOriginMap.get(t)||0}forEach(t){this._values.forEach(t)}}const d=h,y=t=>{let e=class extends t{constructor(...t){super(...t);const e=(0,p.j0)((0,s.vw)(this)),r=e.metadatas,i=e.store,o=new d;e.store=o,i.keys().forEach((t=>{o.set(t,i.get(t),0)})),Object.keys(r).forEach((t=>{e.internalGet(t)&&o.set(t,e.internalGet(t),0)}))}read(t,e){(0,u.ij)(this,t,e)}getAtOrigin(t,e){const r=g(this),i=(0,n.M9)(e);if("string"==typeof t)return r.get(t,i);const s={};return t.forEach((t=>{s[t]=r.get(t,i)})),s}originOf(t){return(0,n.x3)(this.originIdOf(t))}originIdOf(t){return g(this).originOf(t)}revert(t,e){const r=g(this),i=(0,n.M9)(e),o=(0,s.vw)(this);let a;a="string"==typeof t?"*"===t?r.keys(i):[t]:t,a.forEach((t=>{o.propertyInvalidated(t),r.revert(t,i),o.propertyCommitted(t)}))}};return e=(0,i._)([(0,o.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],e),e};function g(t){return(0,s.vw)(t).store}let f=class extends(y(a.default)){};f=(0,i._)([(0,o.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],f);const b=t=>{let e=class extends t{constructor(...t){super(...t)}clear(t,e="user"){return v(this).delete(t,(0,n.M9)(e))}write(t={},e){return(0,l.cW)(this,t=t||{},e),t}setAtOrigin(t,e,r){(0,s.vw)(this).setAtOrigin(t,e,(0,n.M9)(r))}removeOrigin(t){const e=v(this),r=(0,n.M9)(t),i=e.keys(r);for(const t of i)e.originOf(t)===r&&e.set(t,e.get(t,r),6)}updateOrigin(t,e){const r=v(this),i=(0,n.M9)(e),s=this.get(t);for(let e=i+1;e<n.kk;++e)r.delete(t,e);r.set(t,s,i)}toJSON(t){return this.write({},t)}};return e=(0,i._)([(0,o.j)("esri.core.WriteableMultiOriginJSONSupport")],e),e.prototype.toJSON.isDefaultToJSON=!0,e};function v(t){return(0,s.vw)(t).store}const _=t=>{let e=class extends(b(y(t))){constructor(...t){super(...t)}};return e=(0,i._)([(0,o.j)("esri.core.MultiOriginJSONSupport")],e),e};let O=class extends(_(a.default)){};O=(0,i._)([(0,o.j)("esri.core.MultiOriginJSONSupport")],O)},56700:(t,e,r)=>{"use strict";r.d(e,{Z:()=>_});var i=r(56140),s=(r(95830),r(34926)),o=r(36544),n=(r(68055),r(79881)),a=r(87566),l=r(32656),p=r(10923),u=(r(57002),r(86035),r(73032)),c=r(52937),h=(r(36348),r(35470)),d=r(35326),y=r(54721),g=r(809);let f=0;const b=o.Z.getLogger("esri.layers.Layer");let v=class extends(h.Z.EventedMixin((0,d.I)(g.Z))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new c.Z(-180,-90,180,90,u.Z.WGS84),this.id=Date.now().toString(16)+"-layer-"+f++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=u.Z.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(t){const e="string"==typeof t?{url:t}:t,i=await r.e(956).then(r.bind(r,50956));try{return await i.fromUrl(e)}catch(t){throw b.error("#fromArcGISServerUrl({ url: '"+e.url+"'})","Failed to create layer from arcgis server url",t),t}}static async fromPortalItem(t){const e="portalItem"in t?t:{portalItem:t},i=await r.e(1204).then(r.bind(r,1204));try{return await i.fromItem(e)}catch(t){const r=e&&e.portalItem,i=r&&r.id||"unset",o=r&&r.portal&&r.portal.url||s.Z.portalUrl;throw b.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+o+"', id: '"+i+"')",t),t}}initialize(){this.when().catch((t=>{var e,r;o.Z.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${null!=(e=this.title)?e:"no title"}', id: '${null!=(r=this.id)?r:"no id"}')`,{error:t})}))}destroy(){if(this.parent){const t=this,e=this.parent;"layers"in e&&e.layers.includes(t)?e.layers.remove(t):"tables"in e&&e.tables.includes(t)?e.tables.remove(t):"baseLayers"in e&&e.baseLayers.includes(t)?e.baseLayers.remove(t):"baseLayers"in e&&e.referenceLayers.includes(t)&&e.referenceLayers.remove(t)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){const t=this.url;return t?(0,p.mN)(t):null}async fetchAttributionData(){const t=this.attributionDataUrl;if(this.hasAttributionData&&t)return(await(0,y.default)(t,{query:{f:"json"},responseType:"json"})).data;throw new l.Z("layer:no-attribution-data","Layer does not have attribution data")}};(0,i._)([(0,n.Cb)({type:String})],v.prototype,"attributionDataUrl",void 0),(0,i._)([(0,n.Cb)({type:c.Z})],v.prototype,"fullExtent",void 0),(0,i._)([(0,n.Cb)({readOnly:!0,dependsOn:["attributionDataUrl"]})],v.prototype,"hasAttributionData",null),(0,i._)([(0,n.Cb)({type:String})],v.prototype,"id",void 0),(0,i._)([(0,n.Cb)({type:Boolean,nonNullable:!0})],v.prototype,"legendEnabled",void 0),(0,i._)([(0,n.Cb)({type:["show","hide","hide-children"]})],v.prototype,"listMode",void 0),(0,i._)([(0,n.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0})],v.prototype,"opacity",void 0),(0,i._)([(0,n.Cb)()],v.prototype,"parent",void 0),(0,i._)([(0,n.Cb)({readOnly:!0,dependsOn:["url"]})],v.prototype,"parsedUrl",null),(0,i._)([(0,n.Cb)({type:Boolean})],v.prototype,"popupEnabled",void 0),(0,i._)([(0,n.Cb)({type:Boolean})],v.prototype,"attributionVisible",void 0),(0,i._)([(0,n.Cb)({type:u.Z})],v.prototype,"spatialReference",void 0),(0,i._)([(0,n.Cb)({type:String})],v.prototype,"title",void 0),(0,i._)([(0,n.Cb)({type:String,readOnly:!0,json:{read:!1}})],v.prototype,"type",void 0),(0,i._)([(0,n.Cb)()],v.prototype,"url",void 0),(0,i._)([(0,n.Cb)({type:Boolean,nonNullable:!0})],v.prototype,"visible",void 0),v=(0,i._)([(0,a.j)("esri.layers.Layer")],v);const _=v},32095:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>d});var i=r(56140),s=(r(95830),r(36544),r(68055),r(79881)),o=r(87566),n=r(32656),a=(r(10923),r(57002),r(86035),r(39105)),l=r(74386),p=r(56700),u=r(43072),c=r(33716);let h=class extends((0,c.I)((0,u.R)(p.Z))){constructor(t){super(t),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise((0,a.create)(((t,e)=>{(0,l.Os)((()=>{const t=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let r="Unknown layer type";t&&(r+=" "+t),e(new n.Z("layer:unknown-layer-type",r,{layerType:t}))}))})))}read(t,e){super.read({resourceInfo:t},e)}write(){return null}};(0,i._)([(0,s.Cb)({readOnly:!0})],h.prototype,"resourceInfo",void 0),(0,i._)([(0,s.Cb)({type:["show","hide"]})],h.prototype,"listMode",void 0),(0,i._)([(0,s.Cb)({json:{read:!1},readOnly:!0,value:"unknown"})],h.prototype,"type",void 0),h=(0,i._)([(0,o.j)("esri.layers.UnknownLayer")],h);const d=h}}]);
//# sourceMappingURL=2095.js.map