self.webpackChunkRemoteClient([75],{411:function(t,e,r){"use strict";r.r(e);var a=r(18),i=(r(7),r(3),r(4),r(20)),s=r(19),o=r(14),n=(r(24),r(34),r(35),r(2)),l=r(39),c=r(83),p=r(84),u=r(95);let b=class extends(Object(u.a)(Object(p.a)(c.a))){constructor(t){super(t),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(Object(n.c)(((t,e)=>{Object(l.b)((()=>{const t=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let r="Unknown layer type";t&&(r+=" "+t),e(new o.a("layer:unknown-layer-type",r,{layerType:t}))}))})))}read(t,e){super.read({resourceInfo:t},e)}write(){return null}};Object(a.a)([Object(i.b)({readOnly:!0})],b.prototype,"resourceInfo",void 0),Object(a.a)([Object(i.b)({type:["show","hide"]})],b.prototype,"listMode",void 0),Object(a.a)([Object(i.b)({json:{read:!1},readOnly:!0,value:"unknown"})],b.prototype,"type",void 0),b=Object(a.a)([Object(s.a)("esri.layers.UnknownLayer")],b);var h=b;e.default=h},83:function(t,e,r){"use strict";var a=r(18),i=(r(7),r(16)),s=r(3),o=(r(4),r(20)),n=r(19),l=r(14),c=r(24),p=(r(34),r(35),r(56)),u=r(57),b=(r(59),r(88)),h=r(149),d=r(55),O=r(77);let y=0;const j=s.a.getLogger("esri.layers.Layer");let g=class extends(b.a.EventedMixin(Object(h.a)(O.a))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new u.a(-180,-90,180,90,p.a.WGS84),this.id=Date.now().toString(16)+"-layer-"+y++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=p.a.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(t){const e="string"==typeof t?{url:t}:t,a=await r.e(148).then(r.bind(null,207));try{return await a.fromUrl(e)}catch(t){throw j.error("#fromArcGISServerUrl({ url: '"+e.url+"'})","Failed to create layer from arcgis server url",t),t}}static async fromPortalItem(t){const e="portalItem"in t?t:{portalItem:t},a=await r.e(81).then(r.bind(null,189));try{return await a.fromItem(e)}catch(t){const r=e&&e.portalItem,a=r&&r.id||"unset",s=r&&r.portal&&r.portal.url||i.a.portalUrl;throw j.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+s+"', id: '"+a+"')",t),t}}initialize(){this.when().catch((t=>{var e,r;s.a.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${null!=(e=this.title)?e:"no title"}', id: '${null!=(r=this.id)?r:"no id"}')`,{error:t})}))}destroy(){if(this.parent){const t=this,e=this.parent;"layers"in e&&e.layers.includes(t)?e.layers.remove(t):"tables"in e&&e.tables.includes(t)?e.tables.remove(t):"baseLayers"in e&&e.baseLayers.includes(t)?e.baseLayers.remove(t):"baseLayers"in e&&e.referenceLayers.includes(t)&&e.referenceLayers.remove(t)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){const t=this.url;return t?Object(c.I)(t):null}async fetchAttributionData(){const t=this.attributionDataUrl;if(this.hasAttributionData&&t)return(await Object(d.default)(t,{query:{f:"json"},responseType:"json"})).data;throw new l.a("layer:no-attribution-data","Layer does not have attribution data")}};Object(a.a)([Object(o.b)({type:String})],g.prototype,"attributionDataUrl",void 0),Object(a.a)([Object(o.b)({type:u.a})],g.prototype,"fullExtent",void 0),Object(a.a)([Object(o.b)({readOnly:!0,dependsOn:["attributionDataUrl"]})],g.prototype,"hasAttributionData",null),Object(a.a)([Object(o.b)({type:String})],g.prototype,"id",void 0),Object(a.a)([Object(o.b)({type:Boolean,nonNullable:!0})],g.prototype,"legendEnabled",void 0),Object(a.a)([Object(o.b)({type:["show","hide","hide-children"]})],g.prototype,"listMode",void 0),Object(a.a)([Object(o.b)({type:Number,range:{min:0,max:1},nonNullable:!0})],g.prototype,"opacity",void 0),Object(a.a)([Object(o.b)()],g.prototype,"parent",void 0),Object(a.a)([Object(o.b)({readOnly:!0,dependsOn:["url"]})],g.prototype,"parsedUrl",null),Object(a.a)([Object(o.b)({type:Boolean})],g.prototype,"popupEnabled",void 0),Object(a.a)([Object(o.b)({type:Boolean})],g.prototype,"attributionVisible",void 0),Object(a.a)([Object(o.b)({type:p.a})],g.prototype,"spatialReference",void 0),Object(a.a)([Object(o.b)({type:String})],g.prototype,"title",void 0),Object(a.a)([Object(o.b)({type:String,readOnly:!0,json:{read:!1}})],g.prototype,"type",void 0),Object(a.a)([Object(o.b)()],g.prototype,"url",void 0),Object(a.a)([Object(o.b)({type:Boolean,nonNullable:!0})],g.prototype,"visible",void 0),g=Object(a.a)([Object(n.a)("esri.layers.Layer")],g);var f=g;e.a=f},84:function(t,e,r){"use strict";r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return m}));var a=r(18),i=r(6),s=r(19),o=r(26),n=r(25),l=r(86),c=r(1),p=r(121),u=r(5);class b{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(o.a),this._values=new Map}clone(t){const e=new b,r=this._originStores[0];r&&r.forEach(((t,r)=>{e.set(r,Object(u.a)(t),0)}));for(let r=2;r<o.a;r++){const a=this._originStores[r];a&&a.forEach(((a,i)=>{t&&t.has(i)||e.set(i,Object(u.a)(a),r)}))}return e}get(t,e){const r=void 0===e?this._values:this._originStores[e];return r?r.get(t):void 0}keys(t){const e=null==t?this._values:this._originStores[t];return e?[...e.keys()]:[]}set(t,e,r=6){let a=this._originStores[r];if(a||(a=new Map,this._originStores[r]=a),a.set(t,e),!this._values.has(t)||Object(c.c)(this._propertyOriginMap.get(t))<=r){const a=this._values.get(t);return this._values.set(t,e),this._propertyOriginMap.set(t,r),a!==e}return!1}delete(t,e=6){const r=this._originStores[e];if(!r)return;const a=r.get(t);if(r.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===e){this._values.delete(t);for(let r=e-1;r>=0;r--){const e=this._originStores[r];if(e&&e.has(t)){this._values.set(t,e.get(t)),this._propertyOriginMap.set(t,r);break}}}return a}has(t,e){const r=void 0===e?this._values:this._originStores[e];return!!r&&r.has(t)}revert(t,e){for(;e>0&&!this.has(t,e);)--e;const r=this._originStores[e],a=r&&r.get(t),i=this._values.get(t);return this._values.set(t,a),this._propertyOriginMap.set(t,e),i!==a}originOf(t){return this._propertyOriginMap.get(t)||0}forEach(t){this._values.forEach(t)}}var h=b;const d=t=>{let e=class extends t{constructor(...t){super(...t);const e=Object(c.c)(Object(i.a)(this)),r=e.metadatas,a=e.store,s=new h;e.store=s,a.keys().forEach((t=>{s.set(t,a.get(t),0)})),Object.keys(r).forEach((t=>{e.internalGet(t)&&s.set(t,e.internalGet(t),0)}))}read(t,e){Object(p.a)(this,t,e)}getAtOrigin(t,e){const r=O(this),a=Object(o.d)(e);if("string"==typeof t)return r.get(t,a);const i={};return t.forEach((t=>{i[t]=r.get(t,a)})),i}originOf(t){return Object(o.b)(this.originIdOf(t))}originIdOf(t){return O(this).originOf(t)}revert(t,e){const r=O(this),a=Object(o.d)(e),s=Object(i.a)(this);let n;n="string"==typeof t?"*"===t?r.keys(a):[t]:t,n.forEach((t=>{s.propertyInvalidated(t),r.revert(t,a),s.propertyCommitted(t)}))}};return e=Object(a.a)([Object(s.a)("esri.core.ReadOnlyMultiOriginJSONSupport")],e),e};function O(t){return Object(i.a)(t).store}let y=class extends(d(n.a)){};y=Object(a.a)([Object(s.a)("esri.core.ReadOnlyMultiOriginJSONSupport")],y);const j=t=>{let e=class extends t{constructor(...t){super(...t)}clear(t,e="user"){return g(this).delete(t,Object(o.d)(e))}write(t={},e){return Object(l.b)(this,t=t||{},e),t}setAtOrigin(t,e,r){Object(i.a)(this).setAtOrigin(t,e,Object(o.d)(r))}removeOrigin(t){const e=g(this),r=Object(o.d)(t),a=e.keys(r);for(const t of a)e.originOf(t)===r&&e.set(t,e.get(t,r),6)}updateOrigin(t,e){const r=g(this),a=Object(o.d)(e),i=this.get(t);for(let e=a+1;e<o.a;++e)r.delete(t,e);r.set(t,i,a)}toJSON(t){return this.write({},t)}};return e=Object(a.a)([Object(s.a)("esri.core.WriteableMultiOriginJSONSupport")],e),e.prototype.toJSON.isDefaultToJSON=!0,e};function g(t){return Object(i.a)(t).store}const f=t=>{let e=class extends(j(d(t))){constructor(...t){super(...t)}};return e=Object(a.a)([Object(s.a)("esri.core.MultiOriginJSONSupport")],e),e};let m=class extends(f(n.a)){};m=Object(a.a)([Object(s.a)("esri.core.MultiOriginJSONSupport")],m)},95:function(t,e,r){"use strict";r.d(e,"a",(function(){return O}));var a=r(18),i=(r(7),r(3)),s=(r(4),r(20)),o=r(52),n=r(19),l=r(51),c=r(14),p=r(24),u=(r(34),r(35),r(2)),b=r(75),h=r(97);const d=i.a.getLogger("esri.layers.mixins.PortalLayer"),O=t=>{let e=class extends t{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]}}destroy(){var t;null==(t=this.portalItem)||t.destroy(),this.portalItem=null}set portalItem(t){t!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",t))}readPortalItem(t,e,r){if(e.itemId)return new h.default({id:e.itemId,portal:r&&r.portal})}writePortalItem(t,e){t&&t.id&&(e.itemId=t.id)}async loadFromPortal(t,e){if(this.portalItem&&this.portalItem.id)try{const a=await r.e(72).then(r.bind(null,208));return Object(u.u)(e),await a.load({instance:this,supportedTypes:t.supportedTypes,validateItem:t.validateItem,supportsData:t.supportsData},e)}catch(t){throw d.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${t}`),t}}read(t,e){e&&(e.layer=this),super.read(t,e)}write(t,e){const r=e&&e.portal,a=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||b.a.getDefault());return r&&a&&!Object(p.r)(a.restUrl,r.restUrl)?(e.messages&&e.messages.push(new c.a("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer`,{layer:this})),null):super.write(t,{...e,layer:this})}};return Object(a.a)([Object(s.b)({type:h.default})],e.prototype,"portalItem",null),Object(a.a)([Object(o.a)("web-document","portalItem",["itemId"])],e.prototype,"readPortalItem",null),Object(a.a)([Object(l.a)("web-document","portalItem",{itemId:{type:String}})],e.prototype,"writePortalItem",null),Object(a.a)([Object(s.b)()],e.prototype,"resourceReferences",void 0),e=Object(a.a)([Object(n.a)("esri.layers.mixins.PortalLayer")],e),e}}});