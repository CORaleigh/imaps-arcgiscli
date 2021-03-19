(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[8201,5510],{69759:(e,t,r)=>{"use strict";r.d(t,{V:()=>F});var o=r(56140),s=(r(95830),r(59472)),a=r(36544),i=(r(68055),r(79881)),n=r(30590),l=r(87566),p=r(60538),u=r(32656),c=r(10923),d=r(57002),h=(r(86035),r(39105)),y=r(73032),m=r(52937),f=r(54721),v=r(32797),g=r(80192),w=r(28885),b=r(97849),I=r(19048),S=r(59351),_=r(85510);async function x(e,t,r){if(!t||!t.resources)return;const o=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const s=new Set(t.resources.toKeep.map((e=>e.resource.path))),a=new Set,i=[];s.forEach((t=>{o.delete(t),e.paths.push(t)}));for(const n of t.resources.toUpdate)if(o.delete(n.resource.path),s.has(n.resource.path)||a.has(n.resource.path)){const{resource:t,content:o,finish:s,error:a}=n,l=(0,_.getSiblingOfSameTypeI)(t,(0,d.D)());e.paths.push(l.path),i.push(C({resource:l,content:o,finish:s,error:a},r))}else e.paths.push(n.resource.path),i.push(R(n,r)),a.add(n.resource.path);for(const o of t.resources.toAdd)i.push(C(o,r)),e.paths.push(o.resource.path);if(o.forEach((e=>{const r=t.portalItem.resourceFromPath(e);i.push(r.portalItem.removeResource(r).catch((()=>{})))})),0===i.length)return;const n=await(0,h.eachAlways)(i);(0,h.throwIfAborted)(r);const l=n.filter((e=>"error"in e)).map((e=>e.error));if(l.length>0)throw new u.Z("save:resources","Failed to save one or more resources",{errors:l})}async function C(e,t){const r=await(0,S.q6)(e.resource.portalItem.addResource(e.resource,e.content,t));if(!0!==r.ok)throw e.error&&e.error(r.error),r.error;e.finish&&e.finish(e.resource)}async function R(e,t){const r=await(0,S.q6)(e.resource.update(e.content,t));if(!0!==r.ok)throw e.error(r.error),r.error;e.finish(e.resource)}var U=r(18152);const P=a.Z.getLogger("esri.layers.mixins.SceneService"),F=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this._debouncedSaveOperations=(0,h.debounce)((async(e,t,r)=>{switch(e){case 0:return this._save(t);case 1:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return y.Z.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new y.Z(o):null}}readFullExtent(e,t){const r=t.store,o=this._readSpatialReference(t);return null==o||null==r||null==r.extent||!Array.isArray(r.extent)||r.extent.some((e=>e<T))?null:new m.Z({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:o})}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"",s={major:Number.NaN,minor:Number.NaN,versionString:o},a=o.split(".");return a.length>=2&&(s.major=parseInt(a[0],10),s.minor=parseInt(a[1],10)),s}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return(0,b.a7)(this.url,t.name);let o=t.name;if(!o&&this.url){const e=(0,b.Qc)(this.url);(0,s.pC)(e)&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),(0,b.ld)(o)}set url(e){const t=(0,b.XG)(this,e,P);this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){(0,b.wH)(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=(0,c.mN)(e);return null!=this.layerId&&(0,b.B5)(t.path)&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _verifyRootNodeAndUpdateExtent(e,t){if(e)try{return this._updateExtentFromRootPage(e,await this._fetchRootPage(e,t))}catch(e){}return this._updateExtentFromRootNode(await this._fetchRootNode(t))}async _fetchRootPage(e,t){if(!e)return(0,h.reject)();const r=Math.floor(e.rootIndex/e.nodesPerPage),o=`${this.parsedUrl.path}/nodepages/${r}`;return(await(0,f.default)(o,{responseType:"json",signal:t})).data}_updateExtentFromRootPage(e,t){if(null==t||null==t.nodes)throw new u.Z("sceneservice:invalid-node-page","Inavlid node page.");const r=t.nodes[e.rootIndex%e.nodesPerPage];if(null==r||null==r.obb||null==r.obb.center||null==r.obb.halfSize)throw new u.Z("sceneservice:invalid-node-page","Inavlid node page.");if(r.obb.center[0]<T)return;const o=r.obb.halfSize,s=r.obb.center[2],a=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]);this.fullExtent.zmin=s-a,this.fullExtent.zmax=s+a}_updateExtentFromRootNode(e){if(null==e||null==this.fullExtent||this.fullExtent.hasZ)return;if(!Array.isArray(e.mbs)||4!==e.mbs.length||e.mbs[0]<T)return;const t=e.mbs[2],r=e.mbs[3];this.fullExtent.zmin=t-r,this.fullExtent.zmax=t+r}async _fetchRootNode(e){if(!this.rootNode)return;const t=(0,c.v_)(this.parsedUrl.path,this.rootNode);try{return(await(0,f.default)(t,{query:{f:"json"},responseType:"json",signal:e})).data}catch(e){throw new u.Z("sceneservice:root-node-missing","Root node missing.",{error:e,url:t})}}async _fetchService(e){if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await(0,f.default)(this.url,{query:{f:"json"},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await(0,f.default)(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));const r=t.data;this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const t of o)e.typeKeywords.push(t);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),1===r&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){const r={...j,...t};let o=g.default.from(e);o||(P.error("_saveAs(): requires a portal item parameter"),await(0,h.reject)(new u.Z("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),o.id&&(o=o.clone(),o.id=null);const s=o.portal||v.Z.getDefault();await this._ensureLoadBeforeSave(),o.type=A,o.portal=s;const a={origin:"portal-item",url:null,messages:[],portal:s,portalItem:o,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},i={layers:[this.write(null,a)]};return await(0,h.all)(a.resources.pendingOperations),await this._validateAgainstJSONSchema(i,a,r),o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,r,1),await s._signIn(),await s.user.addItem({item:o,folder:r&&r.folder,data:i}),await x(this.resourceReferences,a,null),this.portalItem=o,(0,w.D)(a),a.portalItem=o,o}async _save(e){const t={...j,...e};this.portalItem||(P.error("_save(): requires the .portalItem property to be set"),await(0,h.reject)(new u.Z("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==A&&(P.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+A),await(0,h.reject)(new u.Z("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${A}"`))),await this._ensureLoadBeforeSave();const r={origin:"portal-item",url:this.portalItem.itemUrl&&(0,c.mN)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||v.Z.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write(null,r)]};return await(0,h.all)(r.resources.pendingOperations),await this._validateAgainstJSONSchema(o,r,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,0),await this.portalItem.update({data:o}),await x(this.resourceReferences,r,null),(0,w.D)(r),this.portalItem}async _validateAgainstJSONSchema(e,t,o){let s=t.messages.filter((e=>"error"===e.type)).map((e=>new u.Z(e.name,e.message,e.details)));if(o&&o.validationOptions.ignoreUnsupported&&(s=s.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name))),o.validationOptions.enabled||N){const t=(await r.e(5324).then(r.bind(r,65324))).validate(e,o.portalItemLayerType);if(t.length>0){const e=`Layer item did not validate:\n${t.join("\n")}`;if(P.error(`_validateAgainstJSONSchema(): ${e}`),"throw"===o.validationOptions.failPolicy){const e=t.map((e=>new u.Z("sceneservice:schema-validation",e))).concat(s);throw new u.Z("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(s.length>0)throw new u.Z("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:s})}};return(0,o._)([(0,i.Cb)({json:{origins:{service:{read:!1},"portal-item":{read:!1}}}})],t.prototype,"id",void 0),(0,o._)([(0,i.Cb)({type:y.Z})],t.prototype,"spatialReference",void 0),(0,o._)([(0,n.r)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),(0,o._)([(0,i.Cb)({type:m.Z})],t.prototype,"fullExtent",void 0),(0,o._)([(0,n.r)("fullExtent",["store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),(0,o._)([(0,i.Cb)({readOnly:!0,type:I.Z})],t.prototype,"heightModelInfo",void 0),(0,o._)([(0,i.Cb)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),(0,o._)([(0,i.Cb)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),(0,o._)([(0,i.Cb)({readOnly:!0})],t.prototype,"version",void 0),(0,o._)([(0,n.r)("version",["store.version"])],t.prototype,"readVersion",null),(0,o._)([(0,i.Cb)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,o._)([(0,i.Cb)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),(0,o._)([(0,i.Cb)({type:String})],t.prototype,"title",void 0),(0,o._)([(0,n.r)("portal-item","title")],t.prototype,"readTitlePortalItem",null),(0,o._)([(0,n.r)("service","title",["name"])],t.prototype,"readTitleService",null),(0,o._)([(0,i.Cb)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),(0,o._)([(0,i.Cb)(U.HQ)],t.prototype,"url",null),(0,o._)([(0,p.c)("url")],t.prototype,"writeUrl",null),(0,o._)([(0,i.Cb)({dependsOn:["layerId"]})],t.prototype,"parsedUrl",null),(0,o._)([(0,i.Cb)({readOnly:!0})],t.prototype,"store",void 0),(0,o._)([(0,i.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=(0,o._)([(0,l.j)("esri.layers.mixins.SceneService")],t),t},T=-1e38,N=!1,A="Scene Service",j={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}}},59930:(e,t,r)=>{"use strict";r.d(t,{W:()=>u});var o=r(59472),s=r(39105),a=r(23838),i=r(54721),n=r(32797),l=r(80192),p=r(76603);class u{constructor(e,t,r){this.parsedUrl=e,this.portalItem=t,this.signal=r,this.rootDocument=null;const o=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);o&&(this.urlParts={root:o[1],layerId:parseInt(o[2],10)})}async fetch(){var e;if(!this.urlParts)return null;const t=null!=(e=this.portalItem)?e:await this.portalItemFromServiceItemId();if((0,o.Wi)(t))return this.loadFromUrl();const r=await this.findAndLoadRelatedPortalItem(t);return(0,o.Wi)(r)?null:this.loadFeatureLayerFromPortalItem(r)}async fetchPortalItem(){var e;if(!this.urlParts)return null;const t=null!=(e=this.portalItem)?e:await this.portalItemFromServiceItemId();return(0,o.Wi)(t)?null:this.findAndLoadRelatedPortalItem(t)}async fetchRootDocument(){if((0,o.pC)(this.rootDocument))return this.rootDocument;if((0,o.Wi)(this.urlParts))return this.rootDocument={},{};const e={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},t=`${this.urlParts.root}/SceneServer`;try{const r=await(0,i.default)(t,e);this.rootDocument=r.data}catch{this.rootDocument={}}return this.rootDocument}async fetchServiceOwningPortalUrl(){var e;const t=null==(e=a.id)?void 0:e.findServerInfo(this.parsedUrl.path);if(null!=t&&t.owningSystemUrl)return t.owningSystemUrl;const r=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const e=(await(0,i.default)(r,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(e)return e}catch(e){(0,s.throwIfAbortError)(e)}return null}async findAndLoadRelatedPortalItem(e){try{return(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find((e=>"Feature Service"===e.type))||null}catch(e){return(0,s.throwIfAbortError)(e),null}}async loadFeatureLayerFromPortalItem(e){await e.load({signal:this.signal});const t=await this.findMatchingAssociatedSublayerUrl(e.url);return new p.default({url:t,portalItem:e}).load({signal:this.signal})}async loadFromUrl(){const e=await this.findMatchingAssociatedSublayerUrl(`${this.urlParts.root}/FeatureServer`);return new p.default({url:e}).load({signal:this.signal})}async findMatchingAssociatedSublayerUrl(e){const t=e.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),r={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},o=this.urlParts.layerId,a=this.fetchRootDocument(),n=(0,i.default)(t,r),[l,p]=await(0,s.all)([n,a]),u=p&&p.layers,c=l.data&&l.data.layers;if(!Array.isArray(c))throw new Error("expected layers array");if(Array.isArray(u)){for(let e=0;e<Math.min(u.length,c.length);e++)if(u[e].id===o)return`${t}/${c[e].id}`}else if(o<c.length)return`${t}/${c[o].id}`;throw new Error("could not find matching associated sublayer")}async portalItemFromServiceItemId(){const e=(await this.fetchRootDocument()).serviceItemId;if(!e)return null;const t=new l.default({id:e}),r=await this.fetchServiceOwningPortalUrl();(0,o.pC)(r)&&(t.portal=new n.Z({url:r}));try{return t.load({signal:this.signal})}catch(e){return(0,s.throwIfAbortError)(e),null}}}},54209:(e,t,r)=>{"use strict";r.d(t,{H3:()=>v,QI:()=>c,U4:()=>l,Yh:()=>h});var o=r(56140),s=(r(95830),r(36544),r(68055),r(79881)),a=r(9870),i=r(87566),n=(r(10923),r(57002),r(86035),r(58385));let l=class extends n.wq{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,o._)([(0,s.Cb)({type:Number})],l.prototype,"nodesPerPage",void 0),(0,o._)([(0,s.Cb)({type:Number})],l.prototype,"rootIndex",void 0),(0,o._)([(0,s.Cb)({type:String})],l.prototype,"lodSelectionMetricType",void 0),l=(0,o._)([(0,i.j)("esri.layer.support.I3SNodePageDefinition")],l);let p=class extends n.wq{constructor(){super(...arguments),this.factor=1}};(0,o._)([(0,s.Cb)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],p.prototype,"id",void 0),(0,o._)([(0,s.Cb)({type:Number})],p.prototype,"factor",void 0),p=(0,o._)([(0,i.j)("esri.layer.support.I3SMaterialTexture")],p);let u=class extends n.wq{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,o._)([(0,s.Cb)({type:[Number]})],u.prototype,"baseColorFactor",void 0),(0,o._)([(0,s.Cb)({type:p})],u.prototype,"baseColorTexture",void 0),(0,o._)([(0,s.Cb)({type:p})],u.prototype,"metallicRoughnessTexture",void 0),(0,o._)([(0,s.Cb)({type:Number})],u.prototype,"metallicFactor",void 0),(0,o._)([(0,s.Cb)({type:Number})],u.prototype,"roughnessFactor",void 0),u=(0,o._)([(0,i.j)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],u);let c=class extends n.wq{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,o._)([(0,a.J)({opaque:"opaque",mask:"mask",blend:"blend"})],c.prototype,"alphaMode",void 0),(0,o._)([(0,s.Cb)({type:Number})],c.prototype,"alphaCutoff",void 0),(0,o._)([(0,s.Cb)({type:Boolean})],c.prototype,"doubleSided",void 0),(0,o._)([(0,a.J)({none:"none",back:"back",front:"front"})],c.prototype,"cullFace",void 0),(0,o._)([(0,s.Cb)({type:p})],c.prototype,"normalTexture",void 0),(0,o._)([(0,s.Cb)({type:p})],c.prototype,"occlusionTexture",void 0),(0,o._)([(0,s.Cb)({type:p})],c.prototype,"emissiveTexture",void 0),(0,o._)([(0,s.Cb)({type:[Number]})],c.prototype,"emissiveFactor",void 0),(0,o._)([(0,s.Cb)({type:u})],c.prototype,"pbrMetallicRoughness",void 0),c=(0,o._)([(0,i.j)("esri.layer.support.I3SMaterialDefinition")],c);let d=class extends n.wq{};(0,o._)([(0,s.Cb)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],d.prototype,"name",void 0),(0,o._)([(0,a.J)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2"})],d.prototype,"format",void 0),d=(0,o._)([(0,i.j)("esri.layer.support.I3STextureFormat")],d);let h=class extends n.wq{constructor(){super(...arguments),this.atlas=!1}};(0,o._)([(0,s.Cb)({type:[d]})],h.prototype,"formats",void 0),(0,o._)([(0,s.Cb)({type:Boolean})],h.prototype,"atlas",void 0),h=(0,o._)([(0,i.j)("esri.layer.support.I3STextureSetDefinition")],h);let y=class extends n.wq{};(0,o._)([(0,a.J)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],y.prototype,"type",void 0),(0,o._)([(0,s.Cb)({type:Number})],y.prototype,"component",void 0),y=(0,o._)([(0,i.j)("esri.layer.support.I3SGeometryAttribute")],y);let m=class extends n.wq{};(0,o._)([(0,a.J)({draco:"draco"})],m.prototype,"encoding",void 0),(0,o._)([(0,s.Cb)({type:[String]})],m.prototype,"attributes",void 0),m=(0,o._)([(0,i.j)("esri.layer.support.I3SGeometryCompressedAttributes")],m);let f=class extends n.wq{constructor(){super(...arguments),this.offset=0}};(0,o._)([(0,s.Cb)({type:Number})],f.prototype,"offset",void 0),(0,o._)([(0,s.Cb)({type:y})],f.prototype,"position",void 0),(0,o._)([(0,s.Cb)({type:y})],f.prototype,"normal",void 0),(0,o._)([(0,s.Cb)({type:y})],f.prototype,"uv0",void 0),(0,o._)([(0,s.Cb)({type:y})],f.prototype,"color",void 0),(0,o._)([(0,s.Cb)({type:y})],f.prototype,"uvRegion",void 0),(0,o._)([(0,s.Cb)({type:y})],f.prototype,"featureId",void 0),(0,o._)([(0,s.Cb)({type:y})],f.prototype,"faceRange",void 0),(0,o._)([(0,s.Cb)({type:m})],f.prototype,"compressedAttributes",void 0),f=(0,o._)([(0,i.j)("esri.layer.support.I3SGeometryBuffer")],f);let v=class extends n.wq{};(0,o._)([(0,a.J)({triangle:"triangle"})],v.prototype,"topology",void 0),(0,o._)([(0,s.Cb)()],v.prototype,"geometryBuffers",void 0),v=(0,o._)([(0,i.j)("esri.layer.support.I3SGeometryDefinition")],v)},81421:(e,t,r)=>{"use strict";r.d(t,{C:()=>o});const o={attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsStatistics:!1,tileMaxRecordCount:0}}},85510:(e,t,r)=>{"use strict";r.r(t),r.d(t,{addOrUpdateResource:()=>l,contentToBlob:()=>h,fetchResources:()=>n,getSiblingOfSameType:()=>y,getSiblingOfSameTypeI:()=>m,removeAllResources:()=>u,removeResource:()=>p,splitPrefixFileNameAndExtension:()=>d});var o=r(59472),s=r(32656),a=r(10923),i=r(54721);async function n(e,t={},r){await e.load(r);const s=(0,a.v_)(e.itemUrl,"resources"),{start:i=1,num:n=10,sortOrder:l="asc",sortField:p="created"}=t,u={query:{start:i,num:n,sortOrder:l,sortField:p},signal:(0,o.U2)(r,"signal")},c=await e.portal._request(s,u);return{total:c.total,nextStart:c.nextStart,resources:c.resources.map((({created:t,size:r,resource:o})=>({created:new Date(t),size:r,resource:e.resourceFromPath(o)})))}}async function l(e,t,r,i){if(!e.hasPath())throw new s.Z(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");await e.portalItem.load(i);const n=(0,a.v_)(e.portalItem.userItemUrl,"add"===t?"addResources":"updateResources"),[l,p]=c(e.path),u=await h(r),d=new FormData;return l&&"."!==l&&d.append("resourcesPrefix",l),d.append("fileName",p),d.append("file",u,p),d.append("f","json"),(0,o.pC)(i)&&i.access&&d.append("access",i.access),await e.portalItem.portal._request(n,{method:"post",body:d,signal:(0,o.U2)(i,"signal")}),e}async function p(e,t,r){if(!t.hasPath())throw new s.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const i=(0,a.v_)(e.userItemUrl,"removeResources");await e.portal._request(i,{method:"post",query:{resource:t.path},signal:(0,o.U2)(r,"signal")}),t.portalItem=null}async function u(e,t){await e.load(t);const r=(0,a.v_)(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:(0,o.U2)(t,"signal")})}function c(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,r]=function(e){const t=(0,a.Ml)(e);return(0,o.Wi)(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[s,i]=c(t);return[s,i,r]}async function h(e){return e instanceof Blob?e:(await(0,i.default)(e.url,{responseType:"blob"})).data}function y(e,t){if(!e.hasPath())return null;const[r,,o]=d(e.path);return e.portalItem.resourceFromPath((0,a.v_)(r,t+o))}function m(e,t){if(!e.hasPath())return null;const[r,,o]=d(e.path);return e.portalItem.resourceFromPath((0,a.v_)(r,t+o))}}}]);
//# sourceMappingURL=8201.js.map